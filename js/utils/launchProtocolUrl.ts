import { addListener, sendMessage } from '@tix-factory/extension-messaging';
import { isServiceWorker } from '@tix-factory/extension-utils';

const messageDestination = 'launchProtocolUrl';

// The type for the message being passed to the background.
type BackgroundMessage = {
  protocolUrl: string;
};

// Keep track of the tabs, so we can put the user back where they were.b
let previousTab: chrome.tabs.Tab | undefined = undefined;
let protocolLauncherTab: chrome.tabs.Tab | undefined = undefined;

// Attempt to launch the protocol URL in the current tab.
const tryDirectLaunch = (protocolUrl: string): boolean => {
  if (!isServiceWorker && location) {
    location.href = protocolUrl;
    return true;
  }

  return false;
};

// Launch the protocol URL from a service worker.
const launchProtocolUrl = async (protocolUrl: string): Promise<void> => {
  if (tryDirectLaunch(protocolUrl)) {
    // We were able to directly launch the protocol URL.
    // Nothing more to do.
    return;
  }

  const currentTab = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  previousTab = currentTab[0];

  if (previousTab) {
    // Try to open the protocol launcher tab right next to the current tab, so that when it
    // closes, it will put the user back on the tab they are on now.
    protocolLauncherTab = await chrome.tabs.create({
      url: protocolUrl,
      index: previousTab.index + 1,
      windowId: previousTab.windowId,
    });
  } else {
    await chrome.tabs.create({ url: protocolUrl });

    // If we don't know where they were before, then don't try to keep track of anything.
    previousTab = undefined;
    protocolLauncherTab = undefined;
  }
};

if (isServiceWorker) {
  chrome.tabs.onRemoved.addListener((tabId) => {
    // Return the user to the tab they were on before, when we're done launching the protocol URL.
    // chrome self-closes the protocol URL tab when opened.
    if (tabId === protocolLauncherTab?.id && previousTab?.id) {
      chrome.tabs.update(previousTab.id, {
        active: true,
      });
    }

    previousTab = undefined;
    protocolLauncherTab = undefined;
  });
}

addListener(messageDestination, (message: BackgroundMessage) =>
  launchProtocolUrl(message.protocolUrl)
);

// Launches a protocol URL, using the most user-friendly method.
export default async (protocolUrl: string) => {
  if (tryDirectLaunch(protocolUrl)) {
    // If we can directly launch the protocol URL, there's nothing left to do.
    return;
  }

  // Otherwise, we have to send a message out and try some nonsense.
  await sendMessage(messageDestination, { protocolUrl });
};
