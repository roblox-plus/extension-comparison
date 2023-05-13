/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/constants/index.ts":
/*!***********************************!*\
  !*** ./src/js/constants/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBackgroundPage": () => (/* binding */ isBackgroundPage),
/* harmony export */   "manifest": () => (/* binding */ manifest)
/* harmony export */ });
const manifest = chrome.runtime.getManifest();
const isBackgroundPage = chrome.runtime.getURL(manifest.background?.page || '') === location.href;



/***/ }),

/***/ "./src/js/enums/presenceType.ts":
/*!**************************************!*\
  !*** ./src/js/enums/presenceType.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The types of user presence.
var PresenceType;
(function (PresenceType) {
    // The user is offline.
    PresenceType["Offline"] = "Offline";
    // The user is online.
    PresenceType["Online"] = "Online";
    // The user is currently in an experience.
    PresenceType["Experience"] = "Experience";
    // The user is currently in Roblox Studio.
    PresenceType["Studio"] = "Studio";
})(PresenceType || (PresenceType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresenceType);


/***/ }),

/***/ "./src/js/enums/thumbnailState.ts":
/*!****************************************!*\
  !*** ./src/js/enums/thumbnailState.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Possible states for a thumbnail to be in.
var ThumbnailState;
(function (ThumbnailState) {
    // The thumbnail had an unexpected error trying to load.
    ThumbnailState["Error"] = "Error";
    // The thumbnailed loaded successfully.
    ThumbnailState["Completed"] = "Completed";
    // The thumbnail is currently in review.
    ThumbnailState["InReview"] = "InReview";
    // The thumbnail is pending, and should be retried.
    ThumbnailState["Pending"] = "Pending";
    // The thumbnail is blocked.
    ThumbnailState["Blocked"] = "Blocked";
    // The thumbnail is temporarily unavailable.
    ThumbnailState["TemporarilyUnavailable"] = "TemporarilyUnavailable";
})(ThumbnailState || (ThumbnailState = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailState);


/***/ }),

/***/ "./src/js/enums/thumbnailType.ts":
/*!***************************************!*\
  !*** ./src/js/enums/thumbnailType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The types of thumbnails that can be requested.
var ThumbnailType;
(function (ThumbnailType) {
    // An avatar head shot thumbnail.
    ThumbnailType["AvatarHeadShot"] = "AvatarHeadShot";
    // The thumbnail for an asset.
    ThumbnailType["Asset"] = "Asset";
})(ThumbnailType || (ThumbnailType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailType);


/***/ }),

/***/ "./src/js/service-worker/notifiers/friend-presence/index.ts":
/*!******************************************************************!*\
  !*** ./src/js/service-worker/notifiers/friend-presence/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/presenceType */ "./src/js/enums/presenceType.ts");
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/friends */ "./src/js/services/friends/index.ts");
/* harmony import */ var _services_game_launch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/game-launch */ "./src/js/services/game-launch/index.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/localization */ "./src/js/services/localization/index.ts");
/* harmony import */ var _services_presence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/presence */ "./src/js/services/presence/index.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/thumbnails */ "./src/js/services/thumbnails/index.ts");
/* harmony import */ var _services_followings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/followings */ "./src/js/services/followings/index.ts");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/users */ "./src/js/services/users/index.ts");
/* harmony import */ var _utils_fetchDataUri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/fetchDataUri */ "./src/js/utils/fetchDataUri.ts");
/* harmony import */ var _utils_linkify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/linkify */ "./src/js/utils/linkify.ts");











// The prefix for the ID of the notification to display.
const notificationIdPrefix = 'friend-notifier-';
// A method to check if two presences match.
const presenceMatches = (a, b) => {
    if (a.type !== b.type) {
        // Not the same presence type, definitely not a match.
        return false;
    }
    if (a.location?.universeId !== b.location?.universeId) {
        // Not the same experience, definitely not a match.
        return false;
    }
    // The type, and location are the same. Must be the same presence.
    return true;
};
const isEnabled = async () => {
    const setting = await (0,_services_settings__WEBPACK_IMPORTED_MODULE_5__.getSettingValue)('friendNotifier');
    return setting?.on === true;
};
const isPresenceTypeEnabled = async (presenceType) => {
    const setting = await (0,_services_settings__WEBPACK_IMPORTED_MODULE_5__.getSettingValue)('friendNotifier');
    switch (presenceType) {
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Online:
            return setting?.online || false;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Offline:
            return setting?.offline || false;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Experience:
            // If the setting is somehow null, assume we want to know about this one by default.
            if (setting?.game === false) {
                return false;
            }
            return true;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Studio:
        default:
            // We don't care about these presence types.
            return false;
    }
};
// Gets the icon URL to display on the notification.
const getNotificationIconUrl = async (userId) => {
    const thumbnail = await (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_6__.getAvatarHeadshotThumbnail)(userId);
    if (!thumbnail.imageUrl) {
        return '';
    }
    try {
        return await (0,_utils_fetchDataUri__WEBPACK_IMPORTED_MODULE_9__["default"])(new URL(thumbnail.imageUrl));
    }
    catch (err) {
        console.error('Failed to fetch icon URL from thumbnail', userId, thumbnail, err);
        return '';
    }
};
// Fetches the title for the notification to display to the user, based on current and previous known presence.
const getNotificationTitle = (user, presence, previousState) => {
    switch (presence.type) {
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Offline:
            return `${user.displayName} went offline`;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Online:
            if (previousState.type !== _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Offline) {
                // If they were already online, don't notify them of this again.
                return '';
            }
            return `${user.displayName} is now online`;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Experience:
            if (!presence.location?.name) {
                // They joined an experience, but we don't know what they're playing.
                // Don't tell the human what we don't know.
                return '';
            }
            return `${user.displayName} is now playing`;
        case _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Studio:
            if (!presence.location?.name) {
                // They launched Roblox studio, but we don't know what they're creating.
                // Don't tell the human what we don't know.
                return '';
            }
            if (previousState.type !== _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Online) {
                // If they went from in-experience -> in-studio, it's possible they just had Roblox studio open
                // while playing a game, and then closed it.
                // Occassionally I have also observed offline <-> Studio swapping back and forth..
                // This creates noise, and we don't like noise.
                return '';
            }
            return `${user.displayName} is now creating`;
    }
};
// Gets the buttons that should be displayed on a notification, based on the presence.
const getNotificationButtons = async (presence) => {
    if (presence.type === _enums_presenceType__WEBPACK_IMPORTED_MODULE_0__["default"].Experience && presence.location?.placeId) {
        const joinText = await (0,_services_localization__WEBPACK_IMPORTED_MODULE_3__.getTranslationResource)('Feature.PeopleList', 'Action.Join');
        return [
            {
                title: joinText,
            },
        ];
    }
    return [];
};
// Handle what happens when a notification is clicked.
chrome.notifications.onClicked.addListener((notificationId) => {
    if (!notificationId.startsWith(notificationIdPrefix)) {
        return;
    }
    chrome.tabs.create({
        url: (0,_utils_linkify__WEBPACK_IMPORTED_MODULE_10__.getUserProfileLink)(Number(notificationId.substring(notificationIdPrefix.length))).href,
        active: true,
    });
});
chrome.notifications.onButtonClicked.addListener(async (notificationId) => {
    if (!notificationId.startsWith(notificationIdPrefix)) {
        return;
    }
    const userId = Number(notificationId.substring(notificationIdPrefix.length));
    try {
        await (0,_services_game_launch__WEBPACK_IMPORTED_MODULE_2__.followUser)(userId);
    }
    catch (err) {
        console.error('Failed to launch the experience', err);
    }
});
// Processes the presences, and send the notifications, when appropriate.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (previousStates) => {
    // Check if the notifier is enabled.
    const enabled = await isEnabled();
    if (!enabled) {
        // The feature is not enabled, clear the state, and do nothing.
        return null;
    }
    // Check who is logged in right now.
    const authenticatedUser = await (0,_services_users__WEBPACK_IMPORTED_MODULE_8__.getAuthenticatedUser)();
    if (!authenticatedUser) {
        // User is not logged in, no state to return.
        return null;
    }
    // Fetch the friends
    const friends = await (0,_services_friends__WEBPACK_IMPORTED_MODULE_1__.getUserFriends)(authenticatedUser.id);
    // Check the presence for each of the friends
    const currentState = {};
    await Promise.all(friends.map(async (friend) => {
        const presence = (currentState[friend.id] = await (0,_services_presence__WEBPACK_IMPORTED_MODULE_4__.getUserPresence)(friend.id));
        const previousState = previousStates && previousStates[friend.id];
        if (previousState && !presenceMatches(previousState, presence)) {
            // The presence for this friend changed, do something!
            const notificationId = notificationIdPrefix + friend.id;
            const buttons = await getNotificationButtons(presence);
            const title = getNotificationTitle(friend, presence, previousState);
            if (!title) {
                // We don't have a title for the notification, so don't show one.
                chrome.notifications.clear(notificationId);
                return;
            }
            const isEnabled = await isPresenceTypeEnabled(presence.type);
            if (!isEnabled) {
                // The authenticated user does not want to know about these types of presence changes.
                chrome.notifications.clear(notificationId);
                return;
            }
            const isFollowing = await (0,_services_followings__WEBPACK_IMPORTED_MODULE_7__.isAuthenticatedUserFollowing)(friend.id);
            if (!isFollowing) {
                // We're not following this friend, don't show notifications about them.
                chrome.notifications.clear(notificationId);
                return;
            }
            const iconUrl = await getNotificationIconUrl(friend.id);
            if (!iconUrl) {
                // We don't have an icon we can use, so we can't display a notification.
                chrome.notifications.clear(notificationId);
                return;
            }
            chrome.notifications.create(notificationId, {
                type: 'basic',
                iconUrl,
                title,
                message: presence.location?.name ?? '',
                contextMessage: 'Roblox+ Friend Notifier',
                isClickable: true,
                buttons,
            });
        }
    }));
    return currentState;
});


/***/ }),

/***/ "./src/js/service-worker/notifiers/index.ts":
/*!**************************************************!*\
  !*** ./src/js/service-worker/notifiers/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "executeNotifier": () => (/* binding */ executeNotifier)
/* harmony export */ });
/* harmony import */ var _friend_presence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-presence */ "./src/js/service-worker/notifiers/friend-presence/index.ts");

// Registry of all the notifiers
const notifiers = {};
notifiers['notifiers/friend-presence'] = _friend_presence__WEBPACK_IMPORTED_MODULE_0__["default"];
// TODO: Update to use chrome.storage.session for manifest V3
const notifierStates = {};
// Execute a notifier by name.
const executeNotifier = async (name) => {
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
        }
        else {
            delete notifierStates[name];
        }
    }
    catch (err) {
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
globalThis.notifiers = notifiers;
globalThis.executeNotifier = executeNotifier;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notifiers);


/***/ }),

/***/ "./src/js/services/assets/get-asset-contents-url.ts":
/*!**********************************************************!*\
  !*** ./src/js/services/assets/get-asset-contents-url.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");





const messageDestination = 'assetsService.getAssetContentsUrl';
class AssetContentsBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const requestHeaders = new Headers();
        requestHeaders.append('Roblox-Place-Id', '258257446');
        requestHeaders.append('Roblox-Browser-Asset-Request', _constants__WEBPACK_IMPORTED_MODULE_3__.manifest.name);
        const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__["default"])(new URL(`https://assetdelivery.roblox.com/v2/assets/batch`), {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(items.map((batchItem) => {
                return {
                    assetId: batchItem.value,
                    requestId: batchItem.key,
                };
            })),
        });
        if (!response.ok) {
            throw new Error('Failed to load asset contents URL');
        }
        const result = await response.json();
        items.forEach((item) => {
            const asset = result.data.find((a) => a.RequestId === item.key);
            const location = asset?.Locations[0];
            if (location?.location) {
                item.resolve(location.location);
            }
            else {
                item.resolve('');
            }
        });
    }
    getKey(item) {
        return item.toString();
    }
}
const assetContentsProcessor = new AssetContentsBatchProcessor();
const assetContentsCache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](messageDestination, 10 * 60 * 1000);
// Fetches the date when a badge was awarded to the specified user.
const getAssetContentsUrl = (assetId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_4__.sendMessage)(messageDestination, {
        assetId,
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_4__.addListener)(messageDestination, (message) => {
    // Check the cache
    return assetContentsCache.getOrAdd(assetContentsProcessor.getKey(message.assetId), () => {
        // Queue up the fetch request, when not in the cache
        return assetContentsProcessor.enqueue(message.assetId);
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAssetContentsUrl);


/***/ }),

/***/ "./src/js/services/assets/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/assets/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAssetContentsUrl": () => (/* reexport safe */ _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-asset-contents-url */ "./src/js/services/assets/get-asset-contents-url.ts");

globalThis.assetsService = { getAssetContentsUrl: _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/badges/batchProcessor.ts":
/*!**************************************************!*\
  !*** ./src/js/services/badges/batchProcessor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");

class BadgeAwardBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1 * 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await fetch(`https://badges.roblox.com/v1/users/${items[0].value.userId}/badges/awarded-dates?badgeIds=${items
            .map((i) => i.value.badgeId)
            .join(',')}`);
        if (!response.ok) {
            throw new Error('Failed to load badge award statuses');
        }
        const result = await response.json();
        items.forEach((item) => {
            const badgeAward = result.data.find((b) => b.badgeId === item.value.badgeId);
            if (badgeAward?.awardedDate) {
                item.resolve(new Date(badgeAward.awardedDate));
            }
            else {
                item.resolve(undefined);
            }
        });
    }
    getBatch() {
        const now = performance.now();
        const batch = [];
        for (let i = 0; i < this.queueArray.length; i++) {
            const batchItem = this.queueArray[i];
            if (batchItem.retryAfter > now) {
                // retryAfter is set at Infinity while the item is being processed
                // so we should always check it, even if we're not retrying items
                continue;
            }
            if (batch.length < 1 ||
                batch[0].value.userId === batchItem.value.userId) {
                // We group all the requests for badge award dates together by user ID.
                batch.push(batchItem);
            }
            if (batch.length >= this.config.maxSize) {
                // We have all the items we need, break.
                break;
            }
        }
        return batch;
    }
    getKey(item) {
        return `${item.userId}:${item.badgeId}`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeAwardBatchProcessor);


/***/ }),

/***/ "./src/js/services/badges/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/badges/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeAwardDate": () => (/* binding */ getBadgeAwardDate)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _batchProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batchProcessor */ "./src/js/services/badges/batchProcessor.ts");



const messageDestination = 'badgesService.getBadgeAwardDate';
const badgeAwardProcessor = new _batchProcessor__WEBPACK_IMPORTED_MODULE_2__["default"]();
const badgeAwardCache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]('badgesService', 60 * 1000);
// Fetches the date when a badge was awarded to the specified user.
const getBadgeAwardDate = async (userId, badgeId) => {
    const date = await (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        userId,
        badgeId,
    });
    return date ? new Date(date) : undefined;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return badgeAwardCache.getOrAdd(badgeAwardProcessor.getKey(message), async () => {
        // Queue up the fetch request, when not in the cache
        const date = await badgeAwardProcessor.enqueue(message);
        return date?.getTime();
    });
});
globalThis.badgesService = { getBadgeAwardDate };



/***/ }),

/***/ "./src/js/services/currency/getRobuxBalance.ts":
/*!*****************************************************!*\
  !*** ./src/js/services/currency/getRobuxBalance.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");



const messageDestination = 'currencyService.getRobuxBalance';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
const failureDelay = 5 * 1000;
// Fetches the Robux balance of the currently authenticated user.
const getRobuxBalance = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination, { userId });
};
// Loads the Robux balance of the currently authenticated user.
const loadRobuxBalance = async (userId) => {
    const response = await fetch(`https://economy.roblox.com/v1/users/${userId}/currency`);
    // If we fail to send the request, delay the response to ensure we don't spam the API.
    if (response.status === 401) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'User is unauthenticated';
    }
    else if (!response.ok) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'Failed to load Robux balance';
    }
    const result = await response.json();
    try {
        // HACK: Continue recording Robux history to not impact current functionality.
        window.RPlus.robuxHistory?.recordUserRobux(userId, result.robux);
    }
    catch (err) {
        console.warn('Failed to record robuxHistory');
    }
    return result.robux;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadRobuxBalance(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRobuxBalance);


/***/ }),

/***/ "./src/js/services/currency/index.ts":
/*!*******************************************!*\
  !*** ./src/js/services/currency/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRobuxBalance": () => (/* reexport safe */ _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRobuxBalance */ "./src/js/services/currency/getRobuxBalance.ts");

globalThis.currencyService = { getRobuxBalance: _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/followings/authenticatedUserFollowingProcessor.ts":
/*!***************************************************************************!*\
  !*** ./src/js/services/followings/authenticatedUserFollowingProcessor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");


class AuthenticatedUserFollowingProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1 * 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(new URL('https://friends.roblox.com/v1/user/following-exists'), {
            method: 'POST',
            body: JSON.stringify({
                targetUserIds: items.map((i) => i.value),
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to load authenticated user following statuses');
        }
        const result = await response.json();
        items.forEach((item) => {
            const following = result.followings.find((f) => f.userId === item.value);
            item.resolve(following?.isFollowing === true);
        });
    }
    getKey(userId) {
        return `${userId}`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticatedUserFollowingProcessor);


/***/ }),

/***/ "./src/js/services/followings/index.ts":
/*!*********************************************!*\
  !*** ./src/js/services/followings/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAuthenticatedUserFollowing": () => (/* reexport safe */ _isAuthenticatedUserFollowing__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isAuthenticatedUserFollowing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isAuthenticatedUserFollowing */ "./src/js/services/followings/isAuthenticatedUserFollowing.ts");

globalThis.followingsService = { isAuthenticatedUserFollowing: _isAuthenticatedUserFollowing__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/followings/isAuthenticatedUserFollowing.ts":
/*!********************************************************************!*\
  !*** ./src/js/services/followings/isAuthenticatedUserFollowing.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _authenticatedUserFollowingProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticatedUserFollowingProcessor */ "./src/js/services/followings/authenticatedUserFollowingProcessor.ts");



const messageDestination = 'followingsService.isAuthenticatedUserFollowing';
const batchProcessor = new _authenticatedUserFollowingProcessor__WEBPACK_IMPORTED_MODULE_2__["default"]();
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 60 * 1000);
// Checks if the authenticated user is following another user.
const isAuthenticatedUserFollowing = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        userId,
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    batchProcessor.enqueue(message.userId));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAuthenticatedUserFollowing);


/***/ }),

/***/ "./src/js/services/friends/getFriendRequestCount.ts":
/*!**********************************************************!*\
  !*** ./src/js/services/friends/getFriendRequestCount.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");



const messageDestination = 'friendsService.getFriendRequestCount';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
const failureDelay = 5 * 1000;
// Fetches the inbound friend request count for the currently authenticated user.
const getFriendRequestCount = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination, { userId });
};
// Loads the inbound friend request count for the currently authenticated user.
const loadFriendRequestCount = async (userId) => {
    // User ID is used as a cache buster.
    const response = await fetch(`https://friends.roblox.com/v1/user/friend-requests/count`);
    // If we fail to send the request, delay the response to ensure we don't spam the API.
    if (response.status === 401) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'User is unauthenticated';
    }
    else if (!response.ok) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'Failed to load friend request count';
    }
    const result = await response.json();
    return result.count;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadFriendRequestCount(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFriendRequestCount);


/***/ }),

/***/ "./src/js/services/friends/getUserFriends.ts":
/*!***************************************************!*\
  !*** ./src/js/services/friends/getUserFriends.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'friendsService.getUserFriends';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 60 * 1000);
// Fetches the list of friends for the user.
const getUserFriends = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        userId,
    });
};
// Loads the actual friend list for the user.
const loadUserFriends = async (userId) => {
    const response = await fetch(`https://friends.roblox.com/v1/users/${userId}/friends`);
    if (!response.ok) {
        throw new Error(`Failed to load friends for user (${userId})`);
    }
    const result = await response.json();
    return result.data.map((r) => {
        return {
            id: r.id,
            name: r.name,
            displayName: r.displayName,
        };
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadUserFriends(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserFriends);


/***/ }),

/***/ "./src/js/services/friends/index.ts":
/*!******************************************!*\
  !*** ./src/js/services/friends/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendRequestCount": () => (/* reexport safe */ _getFriendRequestCount__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "getUserFriends": () => (/* reexport safe */ _getUserFriends__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getUserFriends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUserFriends */ "./src/js/services/friends/getUserFriends.ts");
/* harmony import */ var _getFriendRequestCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFriendRequestCount */ "./src/js/services/friends/getFriendRequestCount.ts");


globalThis.friendsService = { getUserFriends: _getUserFriends__WEBPACK_IMPORTED_MODULE_0__["default"], getFriendRequestCount: _getFriendRequestCount__WEBPACK_IMPORTED_MODULE_1__["default"] };



/***/ }),

/***/ "./src/js/services/game-launch/buildProtocolUrl.ts":
/*!*********************************************************!*\
  !*** ./src/js/services/game-launch/buildProtocolUrl.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");


// The generated authentication ticket URL, to prevent other extensions from getting the special headers included.
const authTicketUrl = new URL(`https://auth.roblox.com/v1/authentication-ticket?roblox-plus-security-token=${crypto.randomUUID()}`);
// Fetches the authentication ticket, to launch the experience with.
const getAuthenticationTicket = async () => {
    const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(authTicketUrl, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch authentication ticket for game launch`);
    }
    return response.headers.get('rbx-authentication-ticket');
};
// Builds the place launcher URL, used to craft the protocol launcher URL.
const buildPlaceLauncherUrl = (info) => {
    const prefix = `https://assetgame.roblox.com/game/PlaceLauncher.ashx?request=`;
    if (info.followUserId) {
        return `${prefix}RequestFollowUser&userId=${info.followUserId}`;
    }
    throw new Error('Unable to determine place launcher URL');
};
// Builds the protocol launcher URL, to launch the experience with.
const buildProtocolUrl = async (info) => {
    const authenticationTicket = await getAuthenticationTicket();
    const placeLauncherUrl = encodeURIComponent(buildPlaceLauncherUrl(info));
    const currentTime = +new Date();
    return `roblox-player:1+launchmode:play+launchTime:${currentTime}+placelauncherurl:${placeLauncherUrl}+gameinfo:${authenticationTicket}`;
};
if (_constants__WEBPACK_IMPORTED_MODULE_0__.isBackgroundPage) {
    // Set the Referer header, so that we can access the authentication ticket, for the protocol launcher URL.
    chrome.declarativeNetRequest.updateSessionRules({
        removeRuleIds: [1],
        addRules: [
            {
                id: 1,
                condition: {
                    urlFilter: authTicketUrl.href,
                    requestMethods: [chrome.declarativeNetRequest.RequestMethod.POST],
                    resourceTypes: [
                        chrome.declarativeNetRequest.ResourceType.XMLHTTPREQUEST,
                    ],
                },
                action: {
                    type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
                    requestHeaders: [
                        {
                            header: 'Referer',
                            operation: chrome.declarativeNetRequest.HeaderOperation.SET,
                            value: 'https://www.roblox.com/groups/2518656/Roblox-Plus?extension-game-launch=true',
                        },
                    ],
                },
            },
        ],
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildProtocolUrl);


/***/ }),

/***/ "./src/js/services/game-launch/index.ts":
/*!**********************************************!*\
  !*** ./src/js/services/game-launch/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": () => (/* binding */ followUser)
/* harmony export */ });
/* harmony import */ var _utils_launchProtocolUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/launchProtocolUrl */ "./src/js/utils/launchProtocolUrl.ts");
/* harmony import */ var _buildProtocolUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildProtocolUrl */ "./src/js/services/game-launch/buildProtocolUrl.ts");


// Launches into the experience that the specified user is playing.
const followUser = async (userId) => {
    const url = await (0,_buildProtocolUrl__WEBPACK_IMPORTED_MODULE_1__["default"])({
        followUserId: userId,
    });
    await (0,_utils_launchProtocolUrl__WEBPACK_IMPORTED_MODULE_0__["default"])(url);
};
globalThis.gameLaunchService = { followUser };



/***/ }),

/***/ "./src/js/services/inventory/index.ts":
/*!********************************************!*\
  !*** ./src/js/services/inventory/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteAsset": () => (/* binding */ deleteAsset),
/* harmony export */   "getLimitedInventory": () => (/* reexport safe */ _limitedInventory__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _limitedInventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limitedInventory */ "./src/js/services/inventory/limitedInventory.ts");


// Removes an asset from the authenticated user's inventory.
const deleteAsset = async (assetId) => {
    const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(new URL(`https://assetgame.roblox.com/asset/delete-from-inventory`), {
        method: 'POST',
        body: JSON.stringify({
            assetId: assetId,
        }),
    });
    if (!response.ok) {
        throw new Error(`Failed to remove asset (${assetId})`);
    }
};
globalThis.inventoryService = { deleteAsset, getLimitedInventory: _limitedInventory__WEBPACK_IMPORTED_MODULE_1__["default"] };



/***/ }),

/***/ "./src/js/services/inventory/limitedInventory.ts":
/*!*******************************************************!*\
  !*** ./src/js/services/inventory/limitedInventory.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");



const messageDestination = 'inventoryService.getLimitedInventory';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 5 * 60 * 1000);
// Fetches the limited inventory for the specified user.
const getLimitedInventory = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination, {
        userId,
    });
};
// Actually loads the inventory.
const loadLimitedInventory = async (userId) => {
    const foundUserAssetIds = new Set();
    const limitedAssets = [];
    let nextPageCursor = '';
    do {
        const response = await fetch(`https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?limit=100&cursor=${nextPageCursor}`);
        if (response.status === 429) {
            // Throttled. Wait a few seconds, and try again.
            await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(5000);
            continue;
        }
        else if (response.status === 403) {
            throw new Error('Inventory hidden');
        }
        else if (!response.ok) {
            throw new Error('Inventory failed to load');
        }
        const result = await response.json();
        nextPageCursor = result.nextPageCursor;
        result.data.forEach((item) => {
            const userAssetId = Number(item.userAssetId);
            if (foundUserAssetIds.has(userAssetId)) {
                return;
            }
            foundUserAssetIds.add(userAssetId);
            limitedAssets.push({
                userAssetId,
                id: item.assetId,
                name: item.name,
                recentAveragePrice: item.recentAveragePrice
                    ? Number(item.recentAveragePrice)
                    : NaN,
                serialNumber: item.serialNumber ? Number(item.serialNumber) : NaN,
                stock: item.assetStock === 0 ? 0 : item.assetStock || undefined,
            });
        });
    } while (nextPageCursor);
    return limitedAssets;
};
// Listen for background messages
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadLimitedInventory(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLimitedInventory);


/***/ }),

/***/ "./src/js/services/localization/index.ts":
/*!***********************************************!*\
  !*** ./src/js/services/localization/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTranslationResource": () => (/* binding */ getTranslationResource)
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");

const englishLocale = 'en_us';
const messageDestination = 'localizationService.getTranslationResources';
let translationResourceCache = [];
let localeCache = '';
// Gets the locale for the authenticated user.
const getAuthenticatedUserLocale = async () => {
    if (localeCache) {
        return localeCache;
    }
    try {
        const response = await fetch(`https://locale.roblox.com/v1/locales/user-locale`);
        if (!response.ok) {
            console.warn('Failed to fetch user locale - defaulting to English.', response.status);
            return (localeCache = englishLocale);
        }
        const result = await response.json();
        return (localeCache = result.supportedLocale.locale);
    }
    catch (e) {
        console.warn('Unhandled error loading user locale - defaulting to English.', e);
        return (localeCache = englishLocale);
    }
};
// Fetches all the translation resources for the authenticated user.
const getTranslationResources = async () => {
    if (translationResourceCache.length > 0) {
        return translationResourceCache;
    }
    return (translationResourceCache = await (0,_message__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {}));
};
// Fetches an individual translation resource.
const getTranslationResource = async (namespace, key) => {
    const translationResources = await getTranslationResources();
    const resource = translationResources.find((r) => r.namespace === namespace && r.key === key);
    if (!resource) {
        console.warn(`No translation resource available.\n\tNamespace: ${namespace}\n\tKey: ${key}`);
    }
    return resource?.value || '';
};
// Listener to ensure these always happen in the background, for strongest caching potential.
(0,_message__WEBPACK_IMPORTED_MODULE_0__.addListener)(messageDestination, async () => {
    if (translationResourceCache.length > 0) {
        return translationResourceCache;
    }
    const locale = await getAuthenticatedUserLocale();
    const response = await fetch(`https://translations.roblox.com/v1/translations?consumerType=Web`);
    if (!response.ok) {
        throw new Error(`Failed to load translation resources (${response.status})`);
    }
    const result = await response.json();
    const resourcesUrl = result.data.find((r) => r.locale === locale) ||
        result.data.find((r) => r.locale === englishLocale);
    if (!resourcesUrl) {
        throw new Error(`Failed to find translation resources for locale (${locale})`);
    }
    const resources = await fetch(resourcesUrl.url);
    const resourcesJson = await resources.json();
    return (translationResourceCache = resourcesJson.contents.map((r) => {
        return {
            namespace: r.namespace,
            key: r.key,
            value: r.translation || r.english,
        };
    }));
}, {
    // Ensure that multiple requests for this information can't be processed at once.
    levelOfParallelism: 1,
});
globalThis.localizationService = { getTranslationResource };



/***/ }),

/***/ "./src/js/services/message/index.ts":
/*!******************************************!*\
  !*** ./src/js/services/message/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "getWorkerTab": () => (/* binding */ getWorkerTab),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "sendMessageToTab": () => (/* binding */ sendMessageToTab)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");

// All the listeners, set in the background page.
const listeners = {};
// All the tabs actively connected to the message service.
const tabs = {};
// An identifier that tells us which version of the messaging service we're using,
// to ensure we don't try to process a message not intended for us.
const version = 2.5;
// Send a message to a destination, and get back the result.
const sendMessage = async (destination, message) => {
    return new Promise(async (resolve, reject) => {
        const serializedMessage = JSON.stringify(message);
        if (_constants__WEBPACK_IMPORTED_MODULE_0__.isBackgroundPage) {
            // Message is from the background page, to the background page.
            try {
                if (listeners[destination]) {
                    const message = JSON.parse(serializedMessage);
                    const result = await listeners[destination](message);
                    console.debug(`Local listener response for '${destination}':`, result, message);
                    const data = result.data === undefined ? undefined : JSON.parse(result.data);
                    if (result.success) {
                        resolve(data);
                    }
                    else {
                        reject(data);
                    }
                }
                else {
                    reject(`No message listener: ${destination}`);
                }
            }
            catch (e) {
                reject(e);
            }
        }
        else {
            const outboundMessage = JSON.stringify({
                version,
                destination,
                message: serializedMessage,
            });
            console.debug(`Sending message to '${destination}'`, serializedMessage);
            chrome.runtime.sendMessage(outboundMessage, (result) => {
                if (result === undefined) {
                    reject(`Unexpected message result (undefined), suggests no listener in background page.\n\tDestination: ${destination}`);
                    return;
                }
                const data = result.data === undefined ? undefined : JSON.parse(result.data);
                if (result.success) {
                    resolve(data);
                }
                else {
                    reject(data);
                }
            });
        }
    });
};
// Fetches a tab that we can send a message to, for work processing.
const getWorkerTab = () => {
    const keys = Object.keys(tabs);
    return keys.length > 0 ? tabs[keys[0]] : undefined;
};
// Sends a message to a tab.
const sendMessageToTab = async (destination, message, tab) => {
    const serializedMessage = JSON.stringify(message);
    const outboundMessage = JSON.stringify({
        version,
        destination,
        message: serializedMessage,
    });
    console.debug(`Sending message to '${destination}' in tab`, serializedMessage, tab);
    tab.postMessage(outboundMessage);
};
// Listen for messages at a specific destination.
const addListener = (destination, listener, options = {
    levelOfParallelism: -1,
}) => {
    if (listeners[destination]) {
        throw new Error(`${destination} already has message listener attached`);
    }
    const processMessage = async (message) => {
        try {
            console.debug(`Processing message for '${destination}'`, message);
            const result = await listener(message);
            const response = {
                success: true,
                data: JSON.stringify(result),
            };
            console.debug(`Successful message result from '${destination}':`, response, message);
            return response;
        }
        catch (err) {
            const response = {
                success: false,
                data: JSON.stringify(err),
            };
            console.debug(`Failed message result from '${destination}':`, response, message, err);
            return response;
        }
    };
    listeners[destination] = (message) => {
        if (options.levelOfParallelism !== 1) {
            return processMessage(message);
        }
        return new Promise((resolve, reject) => {
            // https://stackoverflow.com/a/73482349/1663648
            navigator.locks
                .request(`messageService:${destination}`, async () => {
                try {
                    const result = await processMessage(message);
                    resolve(result);
                }
                catch (e) {
                    reject(e);
                }
            })
                .catch(reject);
        });
    };
};
// If we're currently in the background page, listen for messages.
if (_constants__WEBPACK_IMPORTED_MODULE_0__.isBackgroundPage) {
    chrome.runtime.onMessage.addListener((rawMessage, sender, sendResponse) => {
        if (typeof rawMessage !== 'string') {
            // Not for us.
            return;
        }
        const fullMessage = JSON.parse(rawMessage);
        if (fullMessage.version !== version ||
            !fullMessage.destination ||
            !fullMessage.message) {
            // Not for us.
            return;
        }
        const listener = listeners[fullMessage.destination];
        if (!listener) {
            sendResponse({
                success: false,
                data: JSON.stringify(`Could not route message to destination: ${fullMessage.destination}`),
            });
            return;
        }
        const message = JSON.parse(fullMessage.message);
        listener(message)
            .then(sendResponse)
            .catch((err) => {
            console.error('Listener is never expected to throw.', err, rawMessage, fullMessage);
            sendResponse({
                success: false,
                data: JSON.stringify('Listener threw unhandled exception (see background page for error).'),
            });
        });
        // Required for asynchronous callbacks
        // https://stackoverflow.com/a/20077854/1663648
        return true;
    });
    chrome.runtime.onConnect.addListener((port) => {
        const id = crypto.randomUUID();
        console.debug('Tab connected', id, port);
        tabs[id] = port;
        port.onDisconnect.addListener(() => {
            console.debug('Disconnecting tab', id, port);
            delete tabs[id];
        });
    });
}
else {
    console.debug(`Not attaching listener for messages, because we're not in the background.`);
    if (!window.messageServiceConnection) {
        const port = (window.messageServiceConnection = chrome.runtime.connect(chrome.runtime.id, {
            name: 'messageService',
        }));
        port.onMessage.addListener((rawMessage) => {
            if (typeof rawMessage !== 'string') {
                // Not for us.
                return;
            }
            const fullMessage = JSON.parse(rawMessage);
            if (fullMessage.version !== version ||
                !fullMessage.destination ||
                !fullMessage.message) {
                // Not for us.
                return;
            }
            const listener = listeners[fullMessage.destination];
            if (!listener) {
                // No listener in this tab for this message.
                return;
            }
            // We don't really have a way to communicate the response back to the service worker.
            // So we just... do nothing with it.
            const message = JSON.parse(fullMessage.message);
            listener(message).catch((err) => {
                console.error('Unhandled error processing message in tab', fullMessage, err);
            });
        });
    }
}
globalThis.messageService = { sendMessage, addListener, getWorkerTab, sendMessageToTab };



/***/ }),

/***/ "./src/js/services/premium-payouts/getPremiumPayoutsSummary.ts":
/*!*********************************************************************!*\
  !*** ./src/js/services/premium-payouts/getPremiumPayoutsSummary.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'premiumPayoutsService.getPremiumPayoutsSummary';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 60 * 1000);
const serializeDate = (date) => {
    return `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(2, '0')}-${`${date.getDate()}`.padStart(2, '0')}`;
};
// Fetches the Robux balance of the currently authenticated user.
const getPremiumPayoutsSummary = (universeId, startDate, endDate) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        universeId,
        startDate: serializeDate(startDate),
        endDate: serializeDate(endDate),
    });
};
// Loads the Robux balance of the currently authenticated user.
const loadPremiumPayoutsSummary = async (universeId, startDate, endDate) => {
    const response = await fetch(`https://engagementpayouts.roblox.com/v1/universe-payout-history?universeId=${universeId}&startDate=${startDate}&endDate=${endDate}`);
    if (!response.ok) {
        throw 'Failed to load premium payouts';
    }
    const result = await response.json();
    const payouts = [];
    for (let date in result) {
        const payout = result[date];
        if (payout.eligibilityType !== 'Eligible') {
            continue;
        }
        payouts.push({
            date,
            engagementScore: payout.engagementScore,
            payoutInRobux: payout.payoutInRobux,
            payoutType: payout.payoutType,
        });
    }
    return payouts;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.universeId}_${message.startDate}_${message.endDate}`, () => 
    // Queue up the fetch request, when not in the cache
    loadPremiumPayoutsSummary(message.universeId, message.startDate, message.endDate));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPremiumPayoutsSummary);


/***/ }),

/***/ "./src/js/services/premium-payouts/index.ts":
/*!**************************************************!*\
  !*** ./src/js/services/premium-payouts/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPremiumPayoutsSummary": () => (/* reexport safe */ _getPremiumPayoutsSummary__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getPremiumPayoutsSummary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPremiumPayoutsSummary */ "./src/js/services/premium-payouts/getPremiumPayoutsSummary.ts");

globalThis.premiumPayoutsService = { getPremiumPayoutsSummary: _getPremiumPayoutsSummary__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/premium/getPremiumExpirationDate.ts":
/*!*************************************************************!*\
  !*** ./src/js/services/premium/getPremiumExpirationDate.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'premiumService.getPremiumExpirationDate';
const definitelyPremium = {};
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 60 * 1000);
// Check whether or not a user has a Roblox+ Premium subscription.
const getPremiumExpirationDate = async (userId) => {
    const expiration = await (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        userId,
    });
    if (!expiration) {
        return expiration;
    }
    return new Date(expiration);
};
const getPrivateServerExpiration = async (id) => {
    const response = await fetch(`https://games.roblox.com/v1/vip-servers/${id}`);
    if (!response.ok) {
        console.warn('Failed to load private server details', id, response);
        return null;
    }
    const result = await response.json();
    if (result.subscription?.expired === false) {
        // If it's not expired, return the expiration date.
        return result.subscription.expirationDate;
    }
    return null;
};
// Check if the user has a private server with the Roblox+ hub.
const checkPrivateServerExpirations = async (userId) => {
    try {
        const response = await fetch(`https://games.roblox.com/v1/games/258257446/private-servers`);
        if (!response.ok) {
            console.warn('Failed to load private servers', userId, response);
            return null;
        }
        const result = await response.json();
        for (let i = 0; i < result.data.length; i++) {
            const privateServer = result.data[i];
            if (privateServer.owner?.id !== userId) {
                continue;
            }
            try {
                const expirationDate = await getPrivateServerExpiration(privateServer.vipServerId);
                if (expirationDate) {
                    // We found a private server we paid for, we're done!
                    return expirationDate;
                }
            }
            catch (err) {
                console.warn('Failed to check if private server was active', privateServer, err);
            }
        }
        return null;
    }
    catch (err) {
        console.warn('Failed to check private servers', userId, err);
        return null;
    }
};
// Fetch whether or not a user has a Roblox+ Premium subscription.
const loadPremiumMembership = async (userId) => {
    if (definitelyPremium[userId]) {
        return definitelyPremium[userId];
    }
    const expirationDate = await checkPrivateServerExpirations(userId);
    if (expirationDate) {
        return (definitelyPremium[userId] = expirationDate);
    }
    const response = await fetch(`https://api.roblox.plus/v1/rpluspremium/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to check premium membership for user (${userId})`);
    }
    const result = await response.json();
    if (result.data) {
        return (definitelyPremium[userId] = result.data.expiration);
    }
    return '';
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadPremiumMembership(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPremiumExpirationDate);


/***/ }),

/***/ "./src/js/services/premium/index.ts":
/*!******************************************!*\
  !*** ./src/js/services/premium/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPremiumExpirationDate": () => (/* reexport safe */ _getPremiumExpirationDate__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "isPremiumUser": () => (/* binding */ isPremiumUser)
/* harmony export */ });
/* harmony import */ var _getPremiumExpirationDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPremiumExpirationDate */ "./src/js/services/premium/getPremiumExpirationDate.ts");

const isPremiumUser = async (userId) => {
    const expiration = await (0,_getPremiumExpirationDate__WEBPACK_IMPORTED_MODULE_0__["default"])(userId);
    if (expiration || expiration === null) {
        // We have an expiration date, or it's a lifetime subscription.
        // They are definitely premium.
        return true;
    }
    // No expiration date, no premium.
    return false;
};
globalThis.premiumService = { isPremiumUser, getPremiumExpirationDate: _getPremiumExpirationDate__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/presence/batchProcessor.ts":
/*!****************************************************!*\
  !*** ./src/js/services/presence/batchProcessor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/presenceType */ "./src/js/enums/presenceType.ts");


const getPresenceType = (presenceType) => {
    switch (presenceType) {
        case 1:
            return _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Online;
        case 2:
            return _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Experience;
        case 3:
            return _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Studio;
        default:
            return _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Offline;
    }
};
const getLocationName = (presenceType, name) => {
    if (!name) {
        return '';
    }
    if (presenceType === _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Studio) {
        return name.replace(/^Studio\s+-\s*/, '');
    }
    return name;
};
class PresenceBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 3 * 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await fetch('https://presence.roblox.com/v1/presence/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userIds: items.map((i) => i.value),
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to load user presence');
        }
        const result = await response.json();
        items.forEach((item) => {
            const presence = result.userPresences.find((p) => p.userId === item.value);
            if (presence) {
                const presenceType = getPresenceType(presence.userPresenceType);
                if (presence.placeId &&
                    (presenceType === _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Experience ||
                        presenceType === _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Studio)) {
                    item.resolve({
                        type: presenceType,
                        location: {
                            placeId: presence.placeId || undefined,
                            universeId: presence.universeId || undefined,
                            name: getLocationName(presenceType, presence.lastLocation),
                            serverId: presence.gameId,
                        },
                    });
                }
                else {
                    item.resolve({
                        type: presenceType,
                    });
                }
            }
            else {
                item.resolve({
                    type: _enums_presenceType__WEBPACK_IMPORTED_MODULE_1__["default"].Offline,
                });
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresenceBatchProcessor);


/***/ }),

/***/ "./src/js/services/presence/index.ts":
/*!*******************************************!*\
  !*** ./src/js/services/presence/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserPresence": () => (/* binding */ getUserPresence)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _batchProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batchProcessor */ "./src/js/services/presence/batchProcessor.ts");



const messageDestination = 'presenceService.getUserPresence';
const presenceProcessor = new _batchProcessor__WEBPACK_IMPORTED_MODULE_2__["default"]();
const presenceCache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]('presenceService', 15 * 1000);
// Fetches the presence for a user.
const getUserPresence = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { userId });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return presenceCache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    presenceProcessor.enqueue(message.userId));
});
globalThis.presenceService = { getUserPresence };



/***/ }),

/***/ "./src/js/services/private-messages/getUnreadMessageCount.ts":
/*!*******************************************************************!*\
  !*** ./src/js/services/private-messages/getUnreadMessageCount.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");



const messageDestination = 'privateMessagesService.getUnreadMessageCount';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
const failureDelay = 5 * 1000;
// Fetches the unread private message count for the currently authenticated user.
const getUnreadMessageCount = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination, { userId });
};
// Loads the unread private message count for the authenticated user.
const loadUnreadMessageCount = async (userId) => {
    // User ID is used as a cache buster.
    const response = await fetch(`https://privatemessages.roblox.com/v1/messages/unread/count`);
    // If we fail to send the request, delay the response to ensure we don't spam the API.
    if (response.status === 401) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'User is unauthenticated';
    }
    else if (!response.ok) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'Failed to load unread private message count';
    }
    const result = await response.json();
    return result.count;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadUnreadMessageCount(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUnreadMessageCount);


/***/ }),

/***/ "./src/js/services/private-messages/index.ts":
/*!***************************************************!*\
  !*** ./src/js/services/private-messages/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUnreadMessageCount": () => (/* reexport safe */ _getUnreadMessageCount__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getUnreadMessageCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUnreadMessageCount */ "./src/js/services/private-messages/getUnreadMessageCount.ts");

globalThis.privateMessagesService = { getUnreadMessageCount: _getUnreadMessageCount__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/settings/index.ts":
/*!*******************************************!*\
  !*** ./src/js/services/settings/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingValue": () => (/* binding */ getSettingValue),
/* harmony export */   "getToggleSettingValue": () => (/* binding */ getToggleSettingValue),
/* harmony export */   "setSettingValue": () => (/* binding */ setSettingValue)
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");

// Destination to be used with messaging.
const messageDestinationPrefix = 'settingsService';
// Fetches a locally stored setting value by its key.
const getSettingValue = (key) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(`${messageDestinationPrefix}.getSettingValue`, {
        key,
    });
};
// Gets a boolean setting value, toggled to false by default.
const getToggleSettingValue = async (key) => {
    const value = await getSettingValue(key);
    return !!value;
};
// Locally stores a setting value.
const setSettingValue = (key, value) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(`${messageDestinationPrefix}.setSettingValue`, {
        key,
        value,
    });
};
const getValueFromLocalStorage = (key) => {
    if (!localStorage.hasOwnProperty(key)) {
        return undefined;
    }
    try {
        const valueArray = JSON.parse(localStorage[key]);
        if (Array.isArray(valueArray) && valueArray.length > 0) {
            return valueArray[0];
        }
        console.warn(`Setting value in localStorage invalid: ${localStorage[key]} - removing it.`);
        localStorage.removeItem(key);
        return undefined;
    }
    catch (err) {
        console.warn(`Failed to parse '${key}' value from localStorage - removing it.`, err);
        localStorage.removeItem(key);
        return undefined;
    }
};
(0,_message__WEBPACK_IMPORTED_MODULE_0__.addListener)(`${messageDestinationPrefix}.getSettingValue`, ({ key }) => {
    return new Promise((resolve, reject) => {
        // chrome.storage APIs are callback-based until manifest V3.
        // Currently in migration phase, to migrate settings from localStorage -> chrome.storage.local
        const value = getValueFromLocalStorage(key);
        if (value !== undefined) {
            chrome.storage.local.set({
                [key]: value,
            }, () => {
                localStorage.removeItem(key);
                resolve(value);
            });
        }
        else {
            chrome.storage.local.get(key, (values) => {
                resolve(values[key]);
            });
        }
    });
});
(0,_message__WEBPACK_IMPORTED_MODULE_0__.addListener)(`${messageDestinationPrefix}.setSettingValue`, ({ key, value }) => {
    return new Promise((resolve, reject) => {
        // chrome.storage APIs are callback-based until manifest V3.
        // Currently in migration phase, to migrate settings from localStorage -> chrome.storage.local
        if (value === undefined) {
            chrome.storage.local.remove(key, () => {
                localStorage.removeItem(key);
                resolve(undefined);
            });
        }
        else {
            chrome.storage.local.set({
                [key]: value,
            }, () => {
                localStorage.removeItem(key);
                resolve(undefined);
            });
        }
    });
});
globalThis.settingsService = { getSettingValue, getToggleSettingValue, setSettingValue };



/***/ }),

/***/ "./src/js/services/thumbnails/batchProcessor.ts":
/*!******************************************************!*\
  !*** ./src/js/services/thumbnails/batchProcessor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/thumbnailState */ "./src/js/enums/thumbnailState.ts");


class ThumbnailBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1 * 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await fetch('https://thumbnails.roblox.com/v1/batch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(items.map(({ value }) => {
                return {
                    requestId: `${value.type}_${value.targetId}_${value.size}`,
                    type: value.type,
                    targetId: value.targetId,
                    size: value.size,
                };
            })),
        });
        if (!response.ok) {
            throw new Error('Failed to load thumbnails');
        }
        const result = await response.json();
        items.forEach((item) => {
            const thumbnail = result.data.find((t) => t.requestId ===
                `${item.value.type}_${item.value.targetId}_${item.value.size}`);
            if (thumbnail) {
                const thumbnailState = thumbnail.state;
                item.resolve({
                    state: thumbnailState,
                    imageUrl: thumbnailState === _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_1__["default"].Completed
                        ? thumbnail.imageUrl
                        : '',
                });
            }
            else {
                item.resolve({
                    state: _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_1__["default"].Error,
                    imageUrl: '',
                });
            }
        });
    }
}
const thumbnailBatchProcessor = new ThumbnailBatchProcessor();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thumbnailBatchProcessor);


/***/ }),

/***/ "./src/js/services/thumbnails/getAvatarHeadshotThumbnail.ts":
/*!******************************************************************!*\
  !*** ./src/js/services/thumbnails/getAvatarHeadshotThumbnail.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/thumbnailState */ "./src/js/enums/thumbnailState.ts");
/* harmony import */ var _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/thumbnailType */ "./src/js/enums/thumbnailType.ts");
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _batchProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./batchProcessor */ "./src/js/services/thumbnails/batchProcessor.ts");





const messageDestination = 'thumbnailsService.getAvatarHeadshotThumbnail';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_2__["default"](messageDestination, 5 * 60 * 1000);
// Fetches the list of friends for the user.
const getAvatarHeadshotThumbnail = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        userId,
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_3__.addListener)(messageDestination, async (message) => {
    // Check the cache
    const thumbnail = await cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    _batchProcessor__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue({
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].AvatarHeadShot,
        targetId: message.userId,
        size: '420x420',
    }));
    if (thumbnail.state !== _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__["default"].Completed) {
        setTimeout(() => {
            // If the thumbnail isn't complete, evict it from the cache early.
            cache.evict(`${message.userId}`);
        }, 30 * 1000);
    }
    return thumbnail;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAvatarHeadshotThumbnail);


/***/ }),

/***/ "./src/js/services/thumbnails/index.ts":
/*!*********************************************!*\
  !*** ./src/js/services/thumbnails/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvatarHeadshotThumbnail": () => (/* reexport safe */ _getAvatarHeadshotThumbnail__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getAvatarHeadshotThumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAvatarHeadshotThumbnail */ "./src/js/services/thumbnails/getAvatarHeadshotThumbnail.ts");

globalThis.thumbnailsService = { getAvatarHeadshotThumbnail: _getAvatarHeadshotThumbnail__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/trades/getTradeCount.ts":
/*!*************************************************!*\
  !*** ./src/js/services/trades/getTradeCount.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");



const messageDestination = 'tradesService.getTradeCount';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
const failureDelay = 5 * 1000;
// Fetches the unread private message count for the currently authenticated user.
const getTradeCount = (tradeStatusType) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination, {
        tradeStatusType,
    });
};
// Loads the unread private message count for the authenticated user.
const loadTradeCount = async (tradeStatusType) => {
    // User ID is used as a cache buster.
    const response = await fetch(`https://trades.roblox.com/v1/trades/${tradeStatusType}/count`);
    // If we fail to send the request, delay the response to ensure we don't spam the API.
    if (response.status === 401) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw 'User is unauthenticated';
    }
    else if (!response.ok) {
        await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_1__["default"])(failureDelay);
        throw `Failed to load ${tradeStatusType} trade count`;
    }
    const result = await response.json();
    return result.count;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.tradeStatusType}`, () => 
    // Queue up the fetch request, when not in the cache
    loadTradeCount(message.tradeStatusType));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTradeCount);


/***/ }),

/***/ "./src/js/services/trades/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/trades/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTradeCount": () => (/* reexport safe */ _getTradeCount__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getTradeCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTradeCount */ "./src/js/services/trades/getTradeCount.ts");

globalThis.tradesService = { getTradeCount: _getTradeCount__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/services/users/getAuthenticatedUser.ts":
/*!*******************************************************!*\
  !*** ./src/js/services/users/getAuthenticatedUser.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");

const messageDestination = 'usersService.getAuthenticatedUser';
const cacheDuration = 60 * 1000;
let authenticatedUser = undefined;
// Fetches the currently authenticated user.
const getAuthenticatedUser = () => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {});
};
// Loads the currently authenticated user.
const loadAuthenticatedUser = async () => {
    if (authenticatedUser !== undefined) {
        return authenticatedUser;
    }
    try {
        const response = await fetch('https://users.roblox.com/v1/users/authenticated');
        if (response.status === 401) {
            return (authenticatedUser = null);
        }
        else if (!response.ok) {
            throw new Error('Failed to load authenticated user');
        }
        const result = await response.json();
        return (authenticatedUser = {
            id: result.id,
            name: result.name,
            displayName: result.displayName,
        });
    }
    finally {
        setTimeout(() => {
            authenticatedUser = undefined;
        }, cacheDuration);
    }
};
(0,_message__WEBPACK_IMPORTED_MODULE_0__.addListener)(messageDestination, () => loadAuthenticatedUser(), {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAuthenticatedUser);


/***/ }),

/***/ "./src/js/services/users/index.ts":
/*!****************************************!*\
  !*** ./src/js/services/users/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAuthenticatedUser": () => (/* reexport safe */ _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAuthenticatedUser */ "./src/js/services/users/getAuthenticatedUser.ts");

globalThis.usersService = { getAuthenticatedUser: _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/utils/expireableDictionary.ts":
/*!**********************************************!*\
  !*** ./src/js/utils/expireableDictionary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This class can be used to concurrently cache items, or fetch their values.
class ExpirableDictionary {
    lockKey;
    expirationInMilliseconds;
    // The items that are in the dictionary.
    items = {};
    constructor(
    // A name for the dictionary, used for locking.
    name, 
    // How long the item will remain in the dictionary, in milliseconds.
    expirationInMilliseconds) {
        this.lockKey = `ExpirableDictionary:${name}`;
        this.expirationInMilliseconds = expirationInMilliseconds;
    }
    // Tries to fetch an item by its key from the dictionary, or it will call the value factory to add it in.
    getOrAdd(key, valueFactory) {
        const item = this.items[key];
        if (item !== undefined) {
            return Promise.resolve(item);
        }
        return new Promise((resolve, reject) => {
            navigator.locks
                .request(`${this.lockKey}:${key}`, async () => {
                // It's possible the item was added since we requested the lock, check again.
                const item = this.items[key];
                if (item !== undefined) {
                    resolve(item);
                    return;
                }
                try {
                    const value = (this.items[key] = await valueFactory());
                    setTimeout(() => this.evict(key), this.expirationInMilliseconds);
                    resolve(value);
                }
                catch (e) {
                    reject(e);
                }
            })
                .catch(reject);
        });
    }
    evict(key) {
        delete this.items[key];
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExpirableDictionary);


/***/ }),

/***/ "./src/js/utils/fetchDataUri.ts":
/*!**************************************!*\
  !*** ./src/js/utils/fetchDataUri.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expireableDictionary */ "./src/js/utils/expireableDictionary.ts");

const cache = new _expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"]('fetchDataUri', 5 * 60 * 1000);
// Converts a URL to a data URI of its loaded contents.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((url) => {
    return cache.getOrAdd(url.href, () => {
        return new Promise((resolve, reject) => {
            fetch(url.href)
                .then((result) => {
                const reader = new FileReader();
                reader.onerror = (err) => {
                    reject(err);
                };
                reader.onloadend = () => {
                    if (typeof reader.result === 'string') {
                        resolve(reader.result);
                    }
                    else {
                        reject(new Error(`fetchDataUri: Unexpected result type (${typeof reader.result})`));
                    }
                };
                result
                    .blob()
                    .then((blob) => {
                    reader.readAsDataURL(blob);
                })
                    .catch(reject);
            })
                .catch(reject);
        });
    });
});


/***/ }),

/***/ "./src/js/utils/launchProtocolUrl.ts":
/*!*******************************************!*\
  !*** ./src/js/utils/launchProtocolUrl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _services_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message */ "./src/js/services/message/index.ts");


const messageDestination = 'launchProtocolUrl';
// Keep track of the tabs, so we can put the user back where they were.b
let previousTab = undefined;
let protocolLauncherTab = undefined;
// Attempt to launch the protocol URL in the current tab.
const tryDirectLaunch = (protocolUrl) => {
    if (!_constants__WEBPACK_IMPORTED_MODULE_0__.isBackgroundPage && location) {
        location.href = protocolUrl;
        return true;
    }
    return false;
};
// Launch the protocol URL from a service worker.
const launchProtocolUrl = (protocolUrl) => {
    if (tryDirectLaunch(protocolUrl)) {
        // We were able to directly launch the protocol URL.
        // Nothing more to do.
        return Promise.resolve();
    }
    const workerTab = (0,_services_message__WEBPACK_IMPORTED_MODULE_1__.getWorkerTab)();
    if (workerTab) {
        // If we're in the background, and we have a tab that can process the protocol URL, use that instead.
        // This will ensure that when we use the protocol launcher to launch Roblox, that they have the highest
        // likihood of already having accepted the protocol launcher permission.
        (0,_services_message__WEBPACK_IMPORTED_MODULE_1__.sendMessageToTab)(messageDestination, {
            protocolUrl,
        }, workerTab);
        return Promise.resolve();
    }
    // TODO: Convert to promise signatures when moving to manifest V3.
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, (currentTab) => {
        previousTab = currentTab[0];
        if (previousTab) {
            // Try to open the protocol launcher tab right next to the current tab, so that when it
            // closes, it will put the user back on the tab they are on now.
            chrome.tabs.create({
                url: protocolUrl,
                index: previousTab.index + 1,
                windowId: previousTab.windowId,
            }, (tab) => {
                protocolLauncherTab = tab;
            });
        }
        else {
            chrome.tabs.create({ url: protocolUrl });
            // If we don't know where they were before, then don't try to keep track of anything.
            previousTab = undefined;
            protocolLauncherTab = undefined;
        }
    });
    return Promise.resolve();
};
if (_constants__WEBPACK_IMPORTED_MODULE_0__.isBackgroundPage) {
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
(0,_services_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => launchProtocolUrl(message.protocolUrl));
// Launches a protocol URL, using the most user-friendly method.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (protocolUrl) => {
    if (tryDirectLaunch(protocolUrl)) {
        // If we can directly launch the protocol URL, there's nothing left to do.
        return;
    }
    // Otherwise, we have to send a message out and try some nonsense.
    await (0,_services_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { protocolUrl });
});


/***/ }),

/***/ "./src/js/utils/linkify.ts":
/*!*********************************!*\
  !*** ./src/js/utils/linkify.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCatalogLink": () => (/* binding */ getCatalogLink),
/* harmony export */   "getIdFromUrl": () => (/* binding */ getIdFromUrl),
/* harmony export */   "getLibraryLink": () => (/* binding */ getLibraryLink),
/* harmony export */   "getPlaceLink": () => (/* binding */ getPlaceLink),
/* harmony export */   "getUserProfileLink": () => (/* binding */ getUserProfileLink)
/* harmony export */ });
const getSEOLink = (id, name, path) => {
    if (!name) {
        name = 'redirect';
    }
    else {
        name =
            name
                .replace(/'/g, '')
                .replace(/\W+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '') || 'redirect';
    }
    return new URL(`https://www.roblox.com/${path}/${id}/${name}`);
};
const getCatalogLink = (assetId, assetName) => {
    return getSEOLink(assetId, assetName, 'catalog');
};
const getLibraryLink = (assetId, assetName) => {
    return getSEOLink(assetId, assetName, 'library');
};
const getPlaceLink = (placeId, placeName) => {
    return getSEOLink(placeId, placeName, 'games');
};
const getUserProfileLink = (userId) => {
    return getSEOLink(userId, 'profile', 'users');
};
const getIdFromUrl = (url) => {
    const match = url.pathname.match(/^\/(badges|games|game-pass|groups|catalog|library|users)\/(\d+)\//i) || [];
    // Returns NaN if the URL doesn't match.
    return Number(match[2]);
};



/***/ }),

/***/ "./src/js/utils/wait.ts":
/*!******************************!*\
  !*** ./src/js/utils/wait.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
});


/***/ }),

/***/ "./src/js/utils/xsrfFetch.ts":
/*!***********************************!*\
  !*** ./src/js/utils/xsrfFetch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerName = 'X-CSRF-Token';
let xsrfToken = '';
// A fetch request which will attach an X-CSRF-Token in all outbound requests.
const xsrfFetch = async (url, requestDetails) => {
    if (url.hostname.endsWith('.roblox.com')) {
        if (!requestDetails) {
            requestDetails = {};
        }
        requestDetails.credentials = 'include';
        if (!requestDetails.headers) {
            requestDetails.headers = new Headers();
        }
        if (requestDetails.headers instanceof Headers) {
            if (xsrfToken) {
                requestDetails.headers.set(headerName, xsrfToken);
            }
            if (requestDetails.body && !requestDetails.headers.has('Content-Type')) {
                requestDetails.headers.set('Content-Type', 'application/json');
            }
        }
    }
    const response = await fetch(url, requestDetails);
    const token = response.headers.get(headerName);
    if (response.ok || !token) {
        return response;
    }
    xsrfToken = token;
    return xsrfFetch(url, requestDetails);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (xsrfFetch);


/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/batch/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/batch/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _promise_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../promise-queue */ "./node_modules/@tix-factory/batch/dist/promise-queue/index.js");
/* harmony import */ var _events_errorEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/errorEvent */ "./node_modules/@tix-factory/batch/dist/events/errorEvent.js");
/* harmony import */ var _events_itemErrorEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events/itemErrorEvent */ "./node_modules/@tix-factory/batch/dist/events/itemErrorEvent.js");



// A class for batching and processing multiple single items into a single call.
class Batch extends EventTarget {
    queueMap = {};
    promiseMap = {};
    limiter;
    concurrencyHandler;
    // All the batch items waiting to be processed.
    queueArray = [];
    // The configuration for this batch processor.
    config;
    constructor(configuration) {
        super();
        this.config = configuration;
        this.limiter = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({
            levelOfParallelism: 1,
            delayInMilliseconds: configuration.minimumDelay || 0,
        });
        this.concurrencyHandler = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({
            levelOfParallelism: configuration.levelOfParallelism || Infinity,
        });
    }
    // Enqueues an item into a batch, to be processed.
    enqueue(item) {
        return new Promise((resolve, reject) => {
            const key = this.getKey(item);
            const promiseMap = this.promiseMap;
            const queueArray = this.queueArray;
            const queueMap = this.queueMap;
            const retryCount = this.config.retryCount || 0;
            const getRetryDelay = this.getRetryDelay.bind(this);
            const dispatchEvent = this.dispatchEvent.bind(this);
            const check = this.check.bind(this);
            // Step 1: Ensure we have a way to resolve/reject the promise for this item.
            const mergedPromise = promiseMap[key] || [];
            if (mergedPromise.length < 0) {
                this.promiseMap[key] = mergedPromise;
            }
            mergedPromise.push({ resolve, reject });
            // Step 2: Check if we have the batched item created.
            if (!queueMap[key]) {
                const remove = (item) => {
                    // Mark the item as completed, so we know we either resolved or rejected it.
                    item.completed = true;
                    for (let i = 0; i < queueArray.length; i++) {
                        if (queueArray[i].key === key) {
                            queueArray.splice(i, 1);
                            break;
                        }
                    }
                    delete promiseMap[key];
                    delete queueMap[key];
                };
                const batchItem = {
                    key,
                    value: item,
                    attempt: 0,
                    retryAfter: 0,
                    completed: false,
                    resolve(result) {
                        // We're not accepting any new items for this resolution.
                        remove(this);
                        // Defer the resolution until after the thread resolves.
                        setTimeout(() => {
                            // Process anyone who applied.
                            while (mergedPromise.length > 0) {
                                const promise = mergedPromise.shift();
                                promise?.resolve(result);
                            }
                        }, 0);
                    },
                    reject(error) {
                        // Defer the resolution until after the thread resolves.
                        const retryDelay = this.attempt <= retryCount ? getRetryDelay(this) : undefined;
                        const retryAfter = retryDelay !== undefined
                            ? performance.now() + retryDelay
                            : undefined;
                        // Emit an event to notify that the item failed to process.
                        dispatchEvent(new _events_itemErrorEvent__WEBPACK_IMPORTED_MODULE_2__["default"](error, this, retryAfter));
                        if (retryAfter !== undefined) {
                            // The item can be retried, we haven't hit the maximum number of attempts yet.
                            this.retryAfter = retryAfter;
                            // Ensure the check runs after the retry delay.
                            setTimeout(check, retryDelay);
                        }
                        else {
                            // Remove the item, and reject anyone waiting on it.
                            remove(this);
                            // Defer the resolution until after the thread resolves.
                            setTimeout(() => {
                                // Process anyone who applied.
                                while (mergedPromise.length > 0) {
                                    const promise = mergedPromise.shift();
                                    promise?.reject(error);
                                }
                            }, 0);
                        }
                    },
                };
                queueMap[key] = batchItem;
                queueArray.push(batchItem);
            }
            // Attempt to process the queue on the next event loop.
            setTimeout(check, this.config.enqueueDeferDelay);
        });
    }
    // Batches together queued items, calls the process method.
    // Will do nothing if the config requirements aren't met.
    check() {
        if (this.limiter.size > 0) {
            // Already being checked.
            return;
        }
        // We're using p-limit to ensure that multiple process calls can't be called at once.
        this.limiter.enqueue(this._check.bind(this)).catch((err) => {
            // This should be "impossible".. right?
            this.dispatchEvent(new _events_errorEvent__WEBPACK_IMPORTED_MODULE_1__["default"](err));
        });
    }
    // The actual implementation of the check method.
    _check() {
        const retry = this.check.bind(this);
        // Get a batch of items to process.
        const batch = this.getBatch();
        // Nothing in the queue ready to be processed.
        if (batch.length < 1) {
            return Promise.resolve();
        }
        // Update the items that we're about to process, so they don't get double processed.
        batch.forEach((item) => {
            item.attempt += 1;
            item.retryAfter = Infinity;
        });
        setTimeout(async () => {
            try {
                await this.concurrencyHandler.enqueue(this.process.bind(this, batch));
            }
            catch (err) {
                this.dispatchEvent(new _events_errorEvent__WEBPACK_IMPORTED_MODULE_1__["default"](err));
            }
            finally {
                batch.forEach((item) => {
                    if (item.completed) {
                        // Item completed its processing, nothing more to do.
                        return;
                    }
                    else if (item.retryAfter > 0 && item.retryAfter !== Infinity) {
                        // The item failed to process, but it is going to be retried.
                        return;
                    }
                    else {
                        // Item neither rejected, or completed its processing status.
                        // This is a requirement, so we reject the item.
                        item.reject(new Error('Item was not marked as resolved or rejected after batch processing completed.'));
                    }
                });
                // Now that we've finished processing the batch, run the process again, just in case there's anything left.
                setTimeout(retry, 0);
            }
        }, 0);
        if (batch.length >= this.config.maxSize) {
            // We have the maximum number of items in the batch, let's make sure we kick off the process call again.
            setTimeout(retry, this.config.minimumDelay);
        }
        return Promise.resolve();
    }
    getBatch() {
        const now = performance.now();
        const batch = [];
        for (let i = 0; i < this.queueArray.length; i++) {
            const batchItem = this.queueArray[i];
            if (batchItem.retryAfter > now) {
                // Item is not ready to be retried, or it is currently being processed.
                continue;
            }
            batch.push(batchItem);
            if (batch.length >= this.config.maxSize) {
                break;
            }
        }
        return batch;
    }
    // Obtains a unique key to identify the item.
    // This is used to deduplicate the batched items.
    getKey(item) {
        return item === undefined ? 'undefined' : JSON.stringify(item);
    }
    // Returns how long to wait before retrying the item.
    getRetryDelay(item) {
        return 0;
    }
    // Called when it is time to process a batch of items.
    process(items) {
        return Promise.reject(new Error('Inherit this class, and implement the processBatch method.'));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Batch);


/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/events/errorEvent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/events/errorEvent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// An event class which can be used to emit an error.
class ErrorEvent extends Event {
    // The error associated with the event.
    error;
    // Constructs the event from the error.
    constructor(error) {
        super('error');
        this.error = error;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorEvent);


/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/events/itemErrorEvent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/events/itemErrorEvent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errorEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorEvent */ "./node_modules/@tix-factory/batch/dist/events/errorEvent.js");

// An event class which can be used to emit an error event for an item that failed to process.
class ItemErrorEvent extends _errorEvent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    // The item that failed to process.
    batchItem;
    // The amount of time when the item will be retried.
    retryAfter;
    // Constructs the event from the error.
    constructor(error, batchItem, retryAfter) {
        super(error);
        this.batchItem = batchItem;
        this.retryAfter = retryAfter;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemErrorEvent);


/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Batch": () => (/* reexport safe */ _batch__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ErrorEvent": () => (/* reexport safe */ _events_errorEvent__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ItemErrorEvent": () => (/* reexport safe */ _events_itemErrorEvent__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "PromiseQueue": () => (/* reexport safe */ _promise_queue__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/@tix-factory/batch/dist/batch/index.js");
/* harmony import */ var _events_errorEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/errorEvent */ "./node_modules/@tix-factory/batch/dist/events/errorEvent.js");
/* harmony import */ var _events_itemErrorEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/itemErrorEvent */ "./node_modules/@tix-factory/batch/dist/events/itemErrorEvent.js");
/* harmony import */ var _promise_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promise-queue */ "./node_modules/@tix-factory/batch/dist/promise-queue/index.js");
// Export all the things from this module.






/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/promise-queue/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/promise-queue/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// A limiter for running promises in parallel.
// Queue ensures order is maintained.
class PromiseQueue {
    // All the promises that have been enqueued, and are waiting to be processed.
    queue = [];
    // The PromiseQueue configuration.
    config;
    // How many promises are actively being processed.
    activeCount = 0;
    // The next time a promise can be processed.
    nextProcessTime = 0;
    // Constructs a promise queue, defining the number of promises that may run in parallel.
    constructor(config) {
        this.config = config;
    }
    // The number of promises waiting to be processed.
    get size() {
        return this.queue.length;
    }
    // Puts a function that will create the promise to run on the queue, and returns a promise
    // that will return the result of the enqueued promise.
    enqueue(createPromise) {
        return new Promise(async (resolve, reject) => {
            this.queue.push({
                deferredPromise: { resolve, reject },
                createPromise,
            });
            await this.process();
        });
    }
    async process() {
        if (this.activeCount >= this.config.levelOfParallelism) {
            // Already running max number of promises in parallel.
            return;
        }
        const reprocess = this.process.bind(this);
        const delayInMilliseconds = this.config.delayInMilliseconds;
        if (delayInMilliseconds !== undefined && delayInMilliseconds > 0) {
            const now = performance.now();
            const remainingTime = this.nextProcessTime - now;
            if (remainingTime > 0) {
                // We're not allowed to process the next promise yet.
                setTimeout(reprocess, remainingTime);
                return;
            }
            this.nextProcessTime = now + delayInMilliseconds;
        }
        const promise = this.queue.shift();
        if (!promise) {
            // No promise to process.
            return;
        }
        this.activeCount++;
        try {
            const result = await promise.createPromise();
            promise.deferredPromise.resolve(result);
        }
        catch (err) {
            promise.deferredPromise.reject(err);
        }
        finally {
            // Ensure we subtract from how many promises are active
            this.activeCount--;
            // And then run the process function again, in case there are any promises left to run.
            setTimeout(reprocess, 0);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromiseQueue);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/js/service-worker/index.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* reexport module object */ _services_assets__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "badges": () => (/* reexport module object */ _services_badges__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "currency": () => (/* reexport module object */ _services_currency__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "executeNotifier": () => (/* reexport safe */ _notifiers__WEBPACK_IMPORTED_MODULE_17__.executeNotifier),
/* harmony export */   "followings": () => (/* reexport module object */ _services_followings__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "friends": () => (/* reexport module object */ _services_friends__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "gameLaunch": () => (/* reexport module object */ _services_game_launch__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "inventory": () => (/* reexport module object */ _services_inventory__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "localization": () => (/* reexport module object */ _services_localization__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   "message": () => (/* reexport module object */ _services_message__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   "premium": () => (/* reexport module object */ _services_premium__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   "premiumPayouts": () => (/* reexport module object */ _services_premium_payouts__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   "presence": () => (/* reexport module object */ _services_presence__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   "privateMessages": () => (/* reexport module object */ _services_private_messages__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   "settings": () => (/* reexport module object */ _services_settings__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   "thumbnails": () => (/* reexport module object */ _services_thumbnails__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   "trades": () => (/* reexport module object */ _services_trades__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   "users": () => (/* reexport module object */ _services_users__WEBPACK_IMPORTED_MODULE_16__)
/* harmony export */ });
/* harmony import */ var _services_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/assets */ "./src/js/services/assets/index.ts");
/* harmony import */ var _services_badges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/badges */ "./src/js/services/badges/index.ts");
/* harmony import */ var _services_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/currency */ "./src/js/services/currency/index.ts");
/* harmony import */ var _services_followings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/followings */ "./src/js/services/followings/index.ts");
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/friends */ "./src/js/services/friends/index.ts");
/* harmony import */ var _services_game_launch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/game-launch */ "./src/js/services/game-launch/index.ts");
/* harmony import */ var _services_inventory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/inventory */ "./src/js/services/inventory/index.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/localization */ "./src/js/services/localization/index.ts");
/* harmony import */ var _services_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/message */ "./src/js/services/message/index.ts");
/* harmony import */ var _services_premium__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/premium */ "./src/js/services/premium/index.ts");
/* harmony import */ var _services_premium_payouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/premium-payouts */ "./src/js/services/premium-payouts/index.ts");
/* harmony import */ var _services_presence__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/presence */ "./src/js/services/presence/index.ts");
/* harmony import */ var _services_private_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/private-messages */ "./src/js/services/private-messages/index.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/thumbnails */ "./src/js/services/thumbnails/index.ts");
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/trades */ "./src/js/services/trades/index.ts");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/users */ "./src/js/services/users/index.ts");
/* harmony import */ var _notifiers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notifiers */ "./src/js/service-worker/notifiers/index.ts");



















})();

/******/ })()
;
//# sourceMappingURL=service-worker.js.map