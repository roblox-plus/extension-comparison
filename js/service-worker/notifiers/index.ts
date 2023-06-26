import CatalogNotifier from './catalog';
import FriendPresenceNotifier from './friend-presence';
import GroupShoutNotifier from './group-shout';
import './startup';
import TradeNotifier from './trades';

// Registry of all the notifiers
const notifiers: { [name: string]: (state: any) => Promise<any> } = {};
notifiers['notifiers/catalog'] = CatalogNotifier;
notifiers['notifiers/group-shouts'] = GroupShoutNotifier;
notifiers['notifiers/friend-presence'] = FriendPresenceNotifier;
notifiers['notifiers/trade'] = TradeNotifier;

// TODO: Update to use chrome.storage.session for manifest V3
const notifierStates: { [name: string]: any } = {};

// Execute a notifier by name.
const executeNotifier = async (name: string) => {
  const notifier = notifiers[name];
  if (!notifier) {
    return;
  }

  try {
    // Fetch the state from the last time the notifier ran.
    // ...

    // Run the notifier.
    const newState = await notifier(notifierStates[name]);

    // Save the state for the next time the notifier runs.
    if (newState) {
      notifierStates[name] = newState;
    } else {
      delete notifierStates[name];
    }
  } catch (err) {
    console.error(name, 'failed to run', err);
  }
};

// Listener for the chrome.alarms API, to process the notification checks
chrome.alarms.onAlarm.addListener(async ({ name }) => {
  await executeNotifier(name);
});

for (let name in notifiers) {
  chrome.alarms.create(name, {
    periodInMinutes: 1,
  });
}

// Attach it to the global context, so we can access it for testing.
declare global {
  var notifiers: any;
  var notifierStates: any;
  var executeNotifier: any;
}

globalThis.notifiers = notifiers;
globalThis.notifierStates = notifierStates;
globalThis.executeNotifier = executeNotifier;

export { executeNotifier };
export default notifiers;
