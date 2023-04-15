/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/pages/groups.scss":
/*!***********************************!*\
  !*** ./src/css/pages/groups.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

/***/ "./src/js/pages/groups/trade.ts":
/*!**************************************!*\
  !*** ./src/js/pages/groups/trade.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTradeLinks": () => (/* binding */ addTradeLinks),
/* harmony export */   "tradeGroupId": () => (/* binding */ tradeGroupId)
/* harmony export */ });
/* harmony import */ var _services_localizationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/localizationService */ "./src/js/services/localizationService.ts");
/* harmony import */ var _utils_linkify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/linkify */ "./src/js/utils/linkify.ts");
// Features for the group Trade.
// https://www.roblox.com/groups/650266/Trade


const tradeGroupId = 650266;
const addTradeLinks = () => {
    const currentTime = `${+new Date()}`;
    document
        .querySelectorAll('.group-comments .comment.list-item .text-date-hint:not([rplus-trade-link])')
        .forEach(async (footer) => {
        try {
            if (footer instanceof HTMLElement) {
                footer.setAttribute('rplus-trade-link', currentTime);
                const posterLink = footer.parentElement
                    ?.querySelector('a.text-name')
                    ?.getAttribute('href');
                if (!posterLink) {
                    return;
                }
                const posterUserId = (0,_utils_linkify__WEBPACK_IMPORTED_MODULE_1__.getIdFromUrl)(new URL(posterLink));
                if (isNaN(posterUserId)) {
                    return;
                }
                const tradeText = await (0,_services_localizationService__WEBPACK_IMPORTED_MODULE_0__.getTranslationResource)('Feature.Profile', 'Action.Trade');
                const tradeLink = document.createElement('a');
                tradeLink.setAttribute('href', `/users/${posterUserId}/trade`);
                tradeLink.setAttribute('class', 'text-link');
                tradeLink.innerText = tradeText;
                footer.insertAdjacentText('beforeend', ' | ');
                footer.appendChild(tradeLink);
            }
        }
        catch (e) {
            console.warn('Failed to add trade link', e);
        }
    });
};



/***/ }),

/***/ "./src/js/services/localizationService.ts":
/*!************************************************!*\
  !*** ./src/js/services/localizationService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTranslationResource": () => (/* binding */ getTranslationResource)
/* harmony export */ });
/* harmony import */ var _messageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageService */ "./src/js/services/messageService.ts");

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
    return (translationResourceCache = await (0,_messageService__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {}));
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
(0,_messageService__WEBPACK_IMPORTED_MODULE_0__.addListener)(messageDestination, async () => {
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

/***/ "./src/js/services/messageService.ts":
/*!*******************************************!*\
  !*** ./src/js/services/messageService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.ts");

// All the listeners, set in the background page.
const listeners = {};
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
        return new Promise(async (resolve, reject) => {
            // https://stackoverflow.com/a/73482349/1663648
            await navigator.locks.request(`messageService:${destination}`, async () => {
                try {
                    const result = await processMessage(message);
                    resolve(result);
                }
                catch (e) {
                    reject(e);
                }
            });
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
}
else {
    console.debug(`Not attaching listener for messages, because we're not in the background.`);
}
globalThis.messageService = { sendMessage, addListener };



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
/*!**************************************!*\
  !*** ./src/js/pages/groups/index.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_pages_groups_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/pages/groups.scss */ "./src/css/pages/groups.scss");
/* harmony import */ var _utils_linkify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/linkify */ "./src/js/utils/linkify.ts");
/* harmony import */ var _trade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade */ "./src/js/pages/groups/trade.ts");



const groupId = (0,_utils_linkify__WEBPACK_IMPORTED_MODULE_1__.getIdFromUrl)(new URL(location.href));
if (groupId === _trade__WEBPACK_IMPORTED_MODULE_2__.tradeGroupId) {
    setInterval(async () => {
        (0,_trade__WEBPACK_IMPORTED_MODULE_2__.addTradeLinks)();
    }, 500);
}

})();

/******/ })()
;
//# sourceMappingURL=groups.js.map