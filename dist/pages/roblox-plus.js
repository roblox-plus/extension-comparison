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

/***/ "./src/js/enums/assetType.ts":
/*!***********************************!*\
  !*** ./src/js/enums/assetType.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var AssetType;
(function (AssetType) {
    AssetType[AssetType["Image"] = 1] = "Image";
    AssetType[AssetType["TShirt"] = 2] = "TShirt";
    AssetType[AssetType["Audio"] = 3] = "Audio";
    AssetType[AssetType["Mesh"] = 4] = "Mesh";
    AssetType[AssetType["Lua"] = 5] = "Lua";
    AssetType[AssetType["Html"] = 6] = "Html";
    AssetType[AssetType["Text"] = 7] = "Text";
    AssetType[AssetType["Hat"] = 8] = "Hat";
    AssetType[AssetType["Place"] = 9] = "Place";
    AssetType[AssetType["Model"] = 10] = "Model";
    AssetType[AssetType["Shirt"] = 11] = "Shirt";
    AssetType[AssetType["Pants"] = 12] = "Pants";
    AssetType[AssetType["Decal"] = 13] = "Decal";
    AssetType[AssetType["Avatar"] = 16] = "Avatar";
    AssetType[AssetType["Head"] = 17] = "Head";
    AssetType[AssetType["Face"] = 18] = "Face";
    AssetType[AssetType["Gear"] = 19] = "Gear";
    AssetType[AssetType["Badge"] = 21] = "Badge";
    AssetType[AssetType["GroupEmblem"] = 22] = "GroupEmblem";
    AssetType[AssetType["Animation"] = 24] = "Animation";
    AssetType[AssetType["Arms"] = 25] = "Arms";
    AssetType[AssetType["Legs"] = 26] = "Legs";
    AssetType[AssetType["Torso"] = 27] = "Torso";
    AssetType[AssetType["RightArm"] = 28] = "RightArm";
    AssetType[AssetType["LeftArm"] = 29] = "LeftArm";
    AssetType[AssetType["LeftLeg"] = 30] = "LeftLeg";
    AssetType[AssetType["RightLeg"] = 31] = "RightLeg";
    AssetType[AssetType["Package"] = 32] = "Package";
    AssetType[AssetType["YouTubeVideo"] = 33] = "YouTubeVideo";
    AssetType[AssetType["GamePass"] = 34] = "GamePass";
    AssetType[AssetType["App"] = 35] = "App";
    AssetType[AssetType["Code"] = 37] = "Code";
    AssetType[AssetType["Plugin"] = 38] = "Plugin";
    AssetType[AssetType["SolidModel"] = 39] = "SolidModel";
    AssetType[AssetType["MeshPart"] = 40] = "MeshPart";
    AssetType[AssetType["HairAccessory"] = 41] = "HairAccessory";
    AssetType[AssetType["FaceAccessory"] = 42] = "FaceAccessory";
    AssetType[AssetType["NeckAccessory"] = 43] = "NeckAccessory";
    AssetType[AssetType["ShoulderAccessory"] = 44] = "ShoulderAccessory";
    AssetType[AssetType["FrontAccessory"] = 45] = "FrontAccessory";
    AssetType[AssetType["BackAccessory"] = 46] = "BackAccessory";
    AssetType[AssetType["WaistAccessory"] = 47] = "WaistAccessory";
    AssetType[AssetType["ClimbAnimation"] = 48] = "ClimbAnimation";
    AssetType[AssetType["DeathAnimation"] = 49] = "DeathAnimation";
    AssetType[AssetType["FallAnimation"] = 50] = "FallAnimation";
    AssetType[AssetType["IdleAnimation"] = 51] = "IdleAnimation";
    AssetType[AssetType["JumpAnimation"] = 52] = "JumpAnimation";
    AssetType[AssetType["RunAnimation"] = 53] = "RunAnimation";
    AssetType[AssetType["SwimAnimation"] = 54] = "SwimAnimation";
    AssetType[AssetType["WalkAnimation"] = 55] = "WalkAnimation";
    AssetType[AssetType["PoseAnimation"] = 56] = "PoseAnimation";
    AssetType[AssetType["EarAccessory"] = 57] = "EarAccessory";
    AssetType[AssetType["EyeAccessory"] = 58] = "EyeAccessory";
    AssetType[AssetType["LocalizationTableManifest"] = 59] = "LocalizationTableManifest";
    AssetType[AssetType["LocalizationTableTranslation"] = 60] = "LocalizationTableTranslation";
    AssetType[AssetType["Emote"] = 61] = "Emote";
    AssetType[AssetType["Video"] = 62] = "Video";
    AssetType[AssetType["TexturePack"] = 63] = "TexturePack";
    AssetType[AssetType["TShirtAccessory"] = 64] = "TShirtAccessory";
    AssetType[AssetType["ShirtAccessory"] = 65] = "ShirtAccessory";
    AssetType[AssetType["PantsAccessory"] = 66] = "PantsAccessory";
    AssetType[AssetType["JacketAccessory"] = 67] = "JacketAccessory";
    AssetType[AssetType["SweaterAccessory"] = 68] = "SweaterAccessory";
    AssetType[AssetType["ShortsAccessory"] = 69] = "ShortsAccessory";
    AssetType[AssetType["LeftShoeAccessory"] = 70] = "LeftShoeAccessory";
    AssetType[AssetType["RightShoeAccessory"] = 71] = "RightShoeAccessory";
    AssetType[AssetType["DressSkirtAccessory"] = 72] = "DressSkirtAccessory";
    AssetType[AssetType["FontFamily"] = 73] = "FontFamily";
    AssetType[AssetType["FontFace"] = 74] = "FontFace";
    AssetType[AssetType["MeshHiddenSurfaceRemoval"] = 75] = "MeshHiddenSurfaceRemoval";
    AssetType[AssetType["EyebrowAccessory"] = 76] = "EyebrowAccessory";
    AssetType[AssetType["EyelashAccessory"] = 77] = "EyelashAccessory";
    AssetType[AssetType["MoodAnimation"] = 78] = "MoodAnimation";
    AssetType[AssetType["DynamicHead"] = 79] = "DynamicHead";
})(AssetType || (AssetType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetType);


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
    // The icon for a group.
    ThumbnailType["GroupIcon"] = "GroupIcon";
    // The icon for a game pass.
    ThumbnailType["GamePass"] = "GamePass";
    // The icon for a developer product.
    ThumbnailType["DeveloperProduct"] = "DeveloperProduct";
    // The icon for a game.
    ThumbnailType["GameIcon"] = "GameIcon";
})(ThumbnailType || (ThumbnailType = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThumbnailType);


/***/ }),

/***/ "./src/js/pages/roblox-plus/transactions/index.ts":
/*!********************************************************!*\
  !*** ./src/js/pages/roblox-plus/transactions/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_assetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enums/assetType */ "./src/js/enums/assetType.ts");
/* harmony import */ var _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/thumbnailState */ "./src/js/enums/thumbnailState.ts");
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/thumbnails */ "./src/js/services/thumbnails/index.ts");
/* harmony import */ var _services_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/transactions */ "./src/js/services/transactions/index.ts");




const respond = (success, message) => {
    window.postMessage({
        type: 'download-transactions',
        success,
        message,
    });
};
window.addEventListener('message', (event) => {
    const targetId = Number(event.data.targetId);
    if (event.data.type === 'download-transactions' &&
        targetId &&
        event.data.targetType) {
        const startDate = new Date(event.data.startDate);
        const endDate = new Date(event.data.endDate);
        console.log('Received request to download transactions', event.data.targetType, targetId, startDate, endDate);
        switch (event.data.targetType) {
            case 'User':
                (0,_services_transactions__WEBPACK_IMPORTED_MODULE_3__.emailUserTransactionSales)(targetId, startDate, endDate)
                    .then(() => {
                    respond(true, 'Please check your email for your transactions, then come back to this page to upload the CSV.');
                })
                    .catch((err) => {
                    console.error('Failed to email user transactions', err);
                    respond(false, 'An unexpected error occurred while attempting to email your transactions. Please try again.');
                });
                return;
            case 'Group':
                (0,_services_transactions__WEBPACK_IMPORTED_MODULE_3__.emailGroupTransactionSales)(targetId, startDate, endDate)
                    .then(() => {
                    respond(true, 'Please check your email for your group transactions, then come back to this page to upload the CSV.');
                })
                    .catch((err) => {
                    console.error('Failed to email group transactions', err);
                    respond(false, 'An unexpected error occurred while attempting to email your group transactions. Please ensure you have access to the transactions for this group, and try again.');
                });
                return;
            default:
                respond(false, "we... don't know what happened here.");
                return;
        }
    }
});
setInterval(() => {
    document
        .querySelectorAll('.rplus-item-card-media:not([rplus])')
        .forEach((element) => {
        if (!(element instanceof HTMLElement)) {
            return;
        }
        element.setAttribute('rplus', `${+new Date()}`);
        const itemType = element.dataset.itemType;
        const itemId = Number(element.dataset.itemId);
        if (typeof itemType !== 'string' || !itemType || !itemId) {
            return;
        }
        const thumbnailLoaded = (thumbnail) => {
            if (thumbnail.state !== _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_1__["default"].Completed) {
                return;
            }
            const img = document.createElement('img');
            img.src = thumbnail.imageUrl;
            element.appendChild(img);
        };
        const thumbnailFailed = (err) => {
            console.warn('Failed to load image for transaction card', itemType, itemId, err);
        };
        if (itemType === 'Game Pass') {
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__.getGamePassIcon)(itemId).then(thumbnailLoaded).catch(thumbnailFailed);
        }
        else if (itemType === 'Developer Product') {
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__.getDeveloperProductIcon)(itemId)
                .then(thumbnailLoaded)
                .catch(thumbnailFailed);
        }
        else if (itemType === 'Private Server Product') {
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__.getGameIcon)(itemId).then(thumbnailLoaded).catch(thumbnailFailed);
        }
        else if (Object.keys(_enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"]).includes(itemType)) {
            (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_2__.getAssetThumbnail)(itemId).then(thumbnailLoaded).catch(thumbnailFailed);
        }
    });
}, 500);


/***/ }),

/***/ "./src/js/services/groups/get-creator-groups.ts":
/*!******************************************************!*\
  !*** ./src/js/services/groups/get-creator-groups.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'groupsService.getCreatorGroups';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
// Fetches the groups the user has access privileged roles in.
const getCreatorGroups = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { userId });
};
// Loads the groups the user has access privileged roles in.
const loadAuthenticatedUserCreatorGroups = async () => {
    const response = await fetch(`https://develop.roblox.com/v1/user/groups/canmanage`);
    if (response.status === 401) {
        throw 'User is unauthenticated';
    }
    else if (!response.ok) {
        throw 'Failed to load creation groups for the authenticated user';
    }
    const result = await response.json();
    return result.data.map((g) => {
        return {
            id: g.id,
            name: g.name,
        };
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadAuthenticatedUserCreatorGroups());
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCreatorGroups);


/***/ }),

/***/ "./src/js/services/groups/get-user-groups.ts":
/*!***************************************************!*\
  !*** ./src/js/services/groups/get-user-groups.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'groupsService.getUserGroups';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
// Fetches the groups the user is a member of.
const getUserGroups = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { userId });
};
// Loads the groups the user is a member of.
const loadUserGroups = async (userId) => {
    const response = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/roles`);
    if (!response.ok) {
        throw 'Failed to load groups the user is a member of';
    }
    const result = await response.json();
    return result.data.map((g) => {
        return {
            id: g.group.id,
            name: g.group.name,
        };
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadUserGroups(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserGroups);


/***/ }),

/***/ "./src/js/services/groups/get-user-primary-group.ts":
/*!**********************************************************!*\
  !*** ./src/js/services/groups/get-user-primary-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'groupsService.getUserPrimaryGroup';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
// Fetches the groups the user is a member of.
const getUserPrimaryGroup = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { userId });
};
// Loads the groups the user is a member of.
const loadUserPrimaryGroup = async (userId) => {
    const response = await fetch(`https://groups.roblox.com/v1/users/${userId}/groups/primary/role`);
    if (!response.ok) {
        throw 'Failed to load primary group for the user';
    }
    const result = await response.json();
    if (!result || !result.group) {
        return null;
    }
    return {
        id: result.group.id,
        name: result.group.name,
    };
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.userId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadUserPrimaryGroup(message.userId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserPrimaryGroup);


/***/ }),

/***/ "./src/js/services/groups/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/groups/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCreatorGroups": () => (/* reexport safe */ _get_creator_groups__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getUserGroups": () => (/* reexport safe */ _get_user_groups__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "getUserPrimaryGroup": () => (/* reexport safe */ _get_user_primary_group__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _get_creator_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-creator-groups */ "./src/js/services/groups/get-creator-groups.ts");
/* harmony import */ var _get_user_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-user-groups */ "./src/js/services/groups/get-user-groups.ts");
/* harmony import */ var _get_user_primary_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-primary-group */ "./src/js/services/groups/get-user-primary-group.ts");



globalThis.groupsService = { getCreatorGroups: _get_creator_groups__WEBPACK_IMPORTED_MODULE_0__["default"], getUserGroups: _get_user_groups__WEBPACK_IMPORTED_MODULE_1__["default"], getUserPrimaryGroup: _get_user_primary_group__WEBPACK_IMPORTED_MODULE_2__["default"] };



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

/***/ "./src/js/services/thumbnails/index.ts":
/*!*********************************************!*\
  !*** ./src/js/services/thumbnails/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAssetThumbnail": () => (/* binding */ getAssetThumbnail),
/* harmony export */   "getAvatarHeadshotThumbnail": () => (/* binding */ getAvatarHeadshotThumbnail),
/* harmony export */   "getDeveloperProductIcon": () => (/* binding */ getDeveloperProductIcon),
/* harmony export */   "getGameIcon": () => (/* binding */ getGameIcon),
/* harmony export */   "getGamePassIcon": () => (/* binding */ getGamePassIcon),
/* harmony export */   "getGroupIcon": () => (/* binding */ getGroupIcon)
/* harmony export */ });
/* harmony import */ var _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/thumbnailState */ "./src/js/enums/thumbnailState.ts");
/* harmony import */ var _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/thumbnailType */ "./src/js/enums/thumbnailType.ts");
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _batchProcessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./batchProcessor */ "./src/js/services/thumbnails/batchProcessor.ts");





const messageDestination = 'thumbnailsService.getAvatarHeadshotThumbnail';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_2__["default"](messageDestination, 5 * 60 * 1000);
// Fetches an avatar headshot thumbnail, for the given user ID.
const getAvatarHeadshotThumbnail = (userId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].AvatarHeadShot,
        targetId: userId,
    });
};
// Fetches an asset thumbnail, for the given asset ID.
const getAssetThumbnail = (assetId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].Asset,
        targetId: assetId,
    });
};
// Fetches a group icon.
const getGroupIcon = (groupId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].GroupIcon,
        targetId: groupId,
    });
};
// Fetches a game pass icon.
const getGamePassIcon = (gamePassId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].GamePass,
        targetId: gamePassId,
    });
};
// Fetches a developer product icon.
const getDeveloperProductIcon = (gamePassId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].DeveloperProduct,
        targetId: gamePassId,
    });
};
// Fetches a game icon.
const getGameIcon = (gamePassId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        type: _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].GameIcon,
        targetId: gamePassId,
    });
};
// Gets the default size for the thumbnail, by type.
const getThumbnailSize = (thumbnailType) => {
    switch (thumbnailType) {
        case _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].GamePass:
            return '150x150';
        case _enums_thumbnailType__WEBPACK_IMPORTED_MODULE_1__["default"].GameIcon:
            return '256x256';
        default:
            return '420x420';
    }
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_3__.addListener)(messageDestination, async (message) => {
    const cacheKey = `${message.type}:${message.targetId}`;
    // Check the cache
    const thumbnail = await cache.getOrAdd(cacheKey, () => 
    // Queue up the fetch request, when not in the cache
    _batchProcessor__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue({
        type: message.type,
        targetId: message.targetId,
        size: getThumbnailSize(message.type),
    }));
    if (thumbnail.state !== _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__["default"].Completed) {
        setTimeout(() => {
            // If the thumbnail isn't complete, evict it from the cache early.
            cache.evict(cacheKey);
        }, 30 * 1000);
    }
    return thumbnail;
});
globalThis.thumbnailsService = {
    getAvatarHeadshotThumbnail,
    getAssetThumbnail,
    getGroupIcon,
    getGamePassIcon,
    getDeveloperProductIcon,
    getGameIcon,
};



/***/ }),

/***/ "./src/js/services/transactions/email-transactions.ts":
/*!************************************************************!*\
  !*** ./src/js/services/transactions/email-transactions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'transactionsService.emailTransactions';
// Fetches the groups the user has access privileged roles in.
const emailTransactions = (targetType, targetId, transactionType, startDate, endDate) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, {
        targetType,
        targetId,
        transactionType,
        startDate: startDate.getTime(),
        endDate: endDate.getTime(),
    });
};
// Loads the groups the user has access privileged roles in.
const doEmailTransactions = async (targetType, targetId, transactionType, startDate, endDate) => {
    const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(new URL(`https://economy.roblox.com/v2/sales/sales-report-download`), {
        method: 'POST',
        body: JSON.stringify({
            targetType,
            targetId,
            transactionType,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
        }),
    });
    if (!response.ok) {
        throw 'Failed to send transactions email';
    }
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return doEmailTransactions(message.targetType, message.targetId, message.transactionType, new Date(message.startDate), new Date(message.endDate));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailTransactions);


/***/ }),

/***/ "./src/js/services/transactions/index.ts":
/*!***********************************************!*\
  !*** ./src/js/services/transactions/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailGroupTransactionSales": () => (/* binding */ emailGroupTransactionSales),
/* harmony export */   "emailUserTransactionSales": () => (/* binding */ emailUserTransactionSales)
/* harmony export */ });
/* harmony import */ var _email_transactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-transactions */ "./src/js/services/transactions/email-transactions.ts");

// Sends an email to the authenticated user with the group's transactions (sales).
const emailGroupTransactionSales = (groupId, startDate, endDate) => (0,_email_transactions__WEBPACK_IMPORTED_MODULE_0__["default"])('Group', groupId, 'Sale', startDate, endDate);
// Sends an email to the authenticated user with their personally transactions (sales).
const emailUserTransactionSales = (userId, startDate, endDate) => (0,_email_transactions__WEBPACK_IMPORTED_MODULE_0__["default"])('User', userId, 'Sale', startDate, endDate);
globalThis.transactionsService = { emailGroupTransactionSales, emailUserTransactionSales };



/***/ }),

/***/ "./src/js/services/users/get-user-by-id.ts":
/*!*************************************************!*\
  !*** ./src/js/services/users/get-user-by-id.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");




const messageDestination = 'usersService.getUserById';
class UsersBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__["default"])(new URL(`https://users.roblox.com/v1/users`), {
            method: 'POST',
            body: JSON.stringify({
                userIds: items.map((i) => i.key),
                excludeBannedUsers: false,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to users by ids');
        }
        const result = await response.json();
        items.forEach((item) => {
            const user = result.data.find((a) => a.id === item.value);
            if (user) {
                item.resolve({
                    id: user.id,
                    name: user.name,
                    displayName: user.displayName,
                });
            }
            else {
                item.resolve(null);
            }
        });
    }
    getKey(item) {
        return item.toString();
    }
}
const batchProcessor = new UsersBatchProcessor();
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](messageDestination, 2 * 60 * 1000);
// Fetches the date when a badge was awarded to the specified user.
const getUserById = async (id) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        id,
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_3__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(batchProcessor.getKey(message.id), () => {
        // Queue up the fetch request, when not in the cache
        return batchProcessor.enqueue(message.id);
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserById);


/***/ }),

/***/ "./src/js/services/users/get-user-by-name.ts":
/*!***************************************************!*\
  !*** ./src/js/services/users/get-user-by-name.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tix-factory/batch */ "./node_modules/@tix-factory/batch/dist/index.js");
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");




const messageDestination = 'usersService.getUserByName';
class UserNamesBatchProcessor extends _tix_factory_batch__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor() {
        super({
            levelOfParallelism: 1,
            maxSize: 100,
            minimumDelay: 1000,
            enqueueDeferDelay: 10,
        });
    }
    async process(items) {
        const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_2__["default"])(new URL(`https://users.roblox.com/v1/usernames/users`), {
            method: 'POST',
            body: JSON.stringify({
                usernames: items.map((i) => i.key),
                excludeBannedUsers: false,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to users by names');
        }
        const result = await response.json();
        items.forEach((item) => {
            const user = result.data.find((a) => a.requestedUsername === item.key);
            if (user) {
                item.resolve({
                    id: user.id,
                    name: user.name,
                    displayName: user.displayName,
                });
            }
            else {
                item.resolve(null);
            }
        });
    }
    getKey(item) {
        return item;
    }
}
const batchProcessor = new UserNamesBatchProcessor();
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](messageDestination, 2 * 60 * 1000);
// Fetches the date when a badge was awarded to the specified user.
const getUserByName = async (name) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_3__.sendMessage)(messageDestination, {
        name: name.toLowerCase(),
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_3__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(batchProcessor.getKey(message.name), () => {
        // Queue up the fetch request, when not in the cache
        return batchProcessor.enqueue(message.name);
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserByName);


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
/* harmony export */   "getAuthenticatedUser": () => (/* reexport safe */ _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getUserById": () => (/* reexport safe */ _get_user_by_id__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "getUserByName": () => (/* reexport safe */ _get_user_by_name__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAuthenticatedUser */ "./src/js/services/users/getAuthenticatedUser.ts");
/* harmony import */ var _get_user_by_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-user-by-name */ "./src/js/services/users/get-user-by-name.ts");
/* harmony import */ var _get_user_by_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-by-id */ "./src/js/services/users/get-user-by-id.ts");



globalThis.usersService = { getAuthenticatedUser: _getAuthenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"], getUserByName: _get_user_by_name__WEBPACK_IMPORTED_MODULE_1__["default"], getUserById: _get_user_by_id__WEBPACK_IMPORTED_MODULE_2__["default"] };



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
/*!*******************************************!*\
  !*** ./src/js/pages/roblox-plus/index.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/thumbnailState */ "./src/js/enums/thumbnailState.ts");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/groups */ "./src/js/services/groups/index.ts");
/* harmony import */ var _services_premium__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/premium */ "./src/js/services/premium/index.ts");
/* harmony import */ var _services_thumbnails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/thumbnails */ "./src/js/services/thumbnails/index.ts");
/* harmony import */ var _services_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users */ "./src/js/services/users/index.ts");
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions */ "./src/js/pages/roblox-plus/transactions/index.ts");






const load = async () => {
    if (!document.body) {
        // No body yet... try again.
        setTimeout(load, 1);
        return;
    }
    document.body.setAttribute('data-extension-id', chrome.runtime.id);
    try {
        const user = await (0,_services_users__WEBPACK_IMPORTED_MODULE_4__.getAuthenticatedUser)();
        if (!user) {
            document.body.setAttribute('data-user-id', '0');
            document.body.setAttribute('data-user-thumbnail-state', _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__["default"].Blocked);
            return;
        }
        try {
            const primaryGroup = await (0,_services_groups__WEBPACK_IMPORTED_MODULE_1__.getUserPrimaryGroup)(user.id);
            const userGroups = await (0,_services_groups__WEBPACK_IMPORTED_MODULE_1__.getUserGroups)(user.id);
            const creatorGroups = await (0,_services_groups__WEBPACK_IMPORTED_MODULE_1__.getCreatorGroups)(user.id);
            const creatorGroupIds = creatorGroups.map((g) => g.id);
            const groupsContainer = document.createElement('div');
            groupsContainer.setAttribute('id', 'rplus-groups');
            groupsContainer.style.display = 'hidden';
            userGroups.forEach(async (group) => {
                const groupMeta = document.createElement('meta');
                groupMeta.setAttribute('data-group-id', `${group.id}`);
                groupMeta.setAttribute('data-group-name', group.name);
                groupMeta.setAttribute('data-group-manager', `${creatorGroupIds.includes(group.id)}`);
                groupMeta.setAttribute('data-group-primary', `${primaryGroup?.id === group.id}`);
                groupsContainer.append(groupMeta);
                try {
                    const groupIcon = await (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_3__.getGroupIcon)(group.id);
                    if (groupIcon.state === _enums_thumbnailState__WEBPACK_IMPORTED_MODULE_0__["default"].Completed) {
                        groupMeta.setAttribute('data-group-icon', groupIcon.imageUrl);
                    }
                }
                catch (e) {
                    console.warn('Failed to load group icon', group, e);
                }
            });
            document.body.append(groupsContainer);
        }
        catch (e) {
            console.warn('Failed to load creator groups', e);
        }
        try {
            const premiumExpiration = await (0,_services_premium__WEBPACK_IMPORTED_MODULE_2__.getPremiumExpirationDate)(user.id);
            if (premiumExpiration === null) {
                document.body.setAttribute('data-user-premium-expiration', 'null');
            }
            else if (premiumExpiration) {
                document.body.setAttribute('data-user-premium-expiration', premiumExpiration.toISOString());
            }
        }
        catch (e) {
            document.body.setAttribute('data-user-premium-expiration', 'error');
            console.error('Failed to check user premium subscription', e);
        }
        document.body.setAttribute('data-user-id', `${user.id}`);
        document.body.setAttribute('data-user-name', user.name);
        document.body.setAttribute('data-user-display-name', user.displayName);
        const thumbnail = await (0,_services_thumbnails__WEBPACK_IMPORTED_MODULE_3__.getAvatarHeadshotThumbnail)(user.id);
        document.body.setAttribute('data-user-thumbnail-image', thumbnail.imageUrl);
        document.body.setAttribute('data-user-thumbnail-state', thumbnail.state);
    }
    catch (err) {
        console.error('Failed to load page data from extension', err);
    }
};
load();

})();

/******/ })()
;
//# sourceMappingURL=roblox-plus.js.map