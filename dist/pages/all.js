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
const addListener = (destination, listener) => {
    if (listeners[destination]) {
        throw new Error(`${destination} already has message listener attached`);
    }
    listeners[destination] = async (message) => {
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

/***/ "./src/js/services/settingsService.ts":
/*!********************************************!*\
  !*** ./src/js/services/settingsService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingValue": () => (/* binding */ getSettingValue),
/* harmony export */   "setSettingValue": () => (/* binding */ setSettingValue)
/* harmony export */ });
/* harmony import */ var _messageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageService */ "./src/js/services/messageService.ts");

// Destination to be used with messaging.
const messageDestination = 'settingsService';
const getSettingValue = (key) => {
    const method = 'getSettingValue';
    console.debug(`${messageDestination}.${method}`, key);
    return (0,_messageService__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {
        method,
        key,
    });
};
const setSettingValue = (key, value) => {
    const method = 'setSettingValue';
    console.debug(`${messageDestination}.${method}`, key, value);
    return (0,_messageService__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {
        method,
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
(0,_messageService__WEBPACK_IMPORTED_MODULE_0__.addListener)(messageDestination, (message) => {
    return new Promise((resolve, reject) => {
        // chrome.storage APIs are callback-based until manifest V3.
        // Currently in migration phase, to migrate settings from localStorage -> chrome.storage.local
        switch (message.method) {
            case 'getSettingValue':
                const value = getValueFromLocalStorage(message.key);
                if (value !== undefined) {
                    chrome.storage.local.set({
                        [message.key]: value,
                    }, () => {
                        localStorage.removeItem(message.key);
                        resolve(value);
                    });
                }
                else {
                    chrome.storage.local.get(message.key, (values) => {
                        resolve(values[message.key]);
                    });
                }
                return;
            case 'setSettingValue':
                if (message.value === undefined) {
                    chrome.storage.local.remove(message.key, () => {
                        localStorage.removeItem(message.key);
                        resolve(undefined);
                    });
                }
                else {
                    chrome.storage.local.set({
                        [message.key]: message.value,
                    }, () => {
                        localStorage.removeItem(message.key);
                        resolve(undefined);
                    });
                }
                return;
            default:
                reject(`Unknown settings method: ${message.method}`);
                return;
        }
    });
});
globalThis.settingsService = { getSettingValue, setSettingValue };



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
/*!***********************************!*\
  !*** ./src/js/pages/all/index.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingValue": () => (/* reexport safe */ _services_settingsService__WEBPACK_IMPORTED_MODULE_0__.getSettingValue)
/* harmony export */ });
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/settingsService */ "./src/js/services/settingsService.ts");


})();

/******/ })()
;
//# sourceMappingURL=all.js.map