/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/db.js/dist/db.min.js":
/*!*******************************************!*\
  !*** ./node_modules/db.js/dist/db.min.js ***!
  \*******************************************/
/***/ ((module) => {

!function(a){if(true)module.exports=a();else { var b; }}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i=undefined;if(!h&&i)return require(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f=undefined,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(b,c,d){"use strict";function e(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var f=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a};!function(b){function d(a){return a&&"object"===("undefined"==typeof a?"undefined":g(a))}function h(a){var b=Object.keys(a).sort();if(1===b.length){var c=b[0],d=a[c],e=void 0,f=void 0;switch(c){case"eq":e="only";break;case"gt":e="lowerBound",f=!0;break;case"lt":e="upperBound",f=!0;break;case"gte":e="lowerBound";break;case"lte":e="upperBound";break;default:throw new TypeError("`"+c+"` is not a valid key")}return[e,[d,f]]}var g=a[b[0]],h=a[b[1]],i=b.join("-");switch(i){case"gt-lt":case"gt-lte":case"gte-lt":case"gte-lte":return["bound",[g,h,"gt"===b[0],"lt"===b[1]]];default:throw new TypeError("`"+i+"` are conflicted keys")}}function i(a){if(a&&"object"===("undefined"==typeof a?"undefined":g(a))&&!(a instanceof j)){var b=h(a),c=f(b,2),d=c[0],i=c[1];return j[d].apply(j,e(i))}return a}var j=b.IDBKeyRange||b.webkitIDBKeyRange,k={readonly:"readonly",readwrite:"readwrite"},l=Object.prototype.hasOwnProperty,m=function(a){return a},n=b.indexedDB||b.webkitIndexedDB||b.mozIndexedDB||b.oIndexedDB||b.msIndexedDB||b.shimIndexedDB||function(){throw new Error("IndexedDB required")}(),o={},p=["abort","error","versionchange"],q=function(a,b,c,d){var f=this,i=null,l=function(d,f,h,l,m,n,o){return new Promise(function(p,q){var r=void 0;try{r=d?j[d].apply(j,e(f)):null}catch(s){return void q(s)}n=n||[],m=m||null;var t=[],u=0,v=[r],w=b.transaction(a,i?k.readwrite:k.readonly);w.onerror=function(a){return q(a)},w.onabort=function(a){return q(a)},w.oncomplete=function(){return p(t)};var x=w.objectStore(a),y="string"==typeof c?x.index(c):x;"count"!==h&&v.push(l||"next");var z=i?Object.keys(i):[],A=function(a){return z.forEach(function(b){var c=i[b];"function"==typeof c&&(c=c(a)),a[b]=c}),a};y[h].apply(y,v).onsuccess=function(a){var b=a.target.result;if("number"==typeof b)t=b;else if(b)if(null!==m&&m[0]>u)u=m[0],b.advance(m[0]);else if(null!==m&&u>=m[0]+m[1]);else{var c=function(){var a=!0,c="value"in b?b.value:b.key;try{n.forEach(function(b){a="function"==typeof b[0]?a&&b[0](c):a&&c[b[0]]===b[1]})}catch(d){return q(d),{v:void 0}}if(a){if(u++,i)try{c=A(c),b.update(c)}catch(d){return q(d),{v:void 0}}try{t.push(o(c))}catch(d){return q(d),{v:void 0}}}b["continue"]()}();if("object"===("undefined"==typeof c?"undefined":g(c)))return c.v}}})},n=function(a,b,c){var e=[],f="next",h="openCursor",j=null,k=m,n=!1,o=d||c,p=function(){return o?Promise.reject(o):l(a,b,h,n?f+"unique":f,j,e,k)},q=function(){return f=null,h="count",{execute:p}},r=function(){return h="openKeyCursor",{desc:u,distinct:v,execute:p,filter:t,limit:s,map:x}},s=function(a,b){return j=b?[a,b]:[0,a],o=j.some(function(a){return"number"!=typeof a})?new Error("limit() arguments must be numeric"):o,{desc:u,distinct:v,filter:t,keys:r,execute:p,map:x,modify:w}},t=function y(a,b){return e.push([a,b]),{desc:u,distinct:v,execute:p,filter:y,keys:r,limit:s,map:x,modify:w}},u=function(){return f="prev",{distinct:v,execute:p,filter:t,keys:r,limit:s,map:x,modify:w}},v=function(){return n=!0,{count:q,desc:u,execute:p,filter:t,keys:r,limit:s,map:x,modify:w}},w=function(a){return i=a&&"object"===("undefined"==typeof a?"undefined":g(a))?a:null,{execute:p}},x=function(a){return k=a,{count:q,desc:u,distinct:v,execute:p,filter:t,keys:r,limit:s,modify:w}};return{count:q,desc:u,distinct:v,execute:p,filter:t,keys:r,limit:s,map:x,modify:w}};["only","bound","upperBound","lowerBound"].forEach(function(a){f[a]=function(){return n(a,arguments)}}),this.range=function(a){var b=void 0,c=[null,null];try{c=h(a)}catch(d){b=d}return n.apply(void 0,e(c).concat([b]))},this.filter=function(){var a=n(null,null);return a.filter.apply(a,arguments)},this.all=function(){return this.filter()}},r=function(a,b,c,e){var f=this,g=!1;if(this.getIndexedDB=function(){return a},this.isClosed=function(){return g},this.query=function(b,c){var d=g?new Error("Database has been closed"):null;return new q(b,a,c,d)},this.add=function(b){for(var c=arguments.length,e=Array(c>1?c-1:0),f=1;c>f;f++)e[f-1]=arguments[f];return new Promise(function(c,f){if(g)return void f(new Error("Database has been closed"));var h=e.reduce(function(a,b){return a.concat(b)},[]),j=a.transaction(b,k.readwrite);j.onerror=function(a){a.preventDefault(),f(a)},j.onabort=function(a){return f(a)},j.oncomplete=function(){return c(h)};var m=j.objectStore(b);h.some(function(a){var b=void 0,c=void 0;if(d(a)&&l.call(a,"item")&&(c=a.key,a=a.item,null!=c))try{c=i(c)}catch(e){return f(e),!0}try{b=null!=c?m.add(a,c):m.add(a)}catch(e){return f(e),!0}b.onsuccess=function(b){if(d(a)){var c=b.target,e=c.source.keyPath;null===e&&(e="__id__"),l.call(a,e)||Object.defineProperty(a,e,{value:c.result,enumerable:!0})}}})})},this.update=function(b){for(var c=arguments.length,e=Array(c>1?c-1:0),f=1;c>f;f++)e[f-1]=arguments[f];return new Promise(function(c,f){if(g)return void f(new Error("Database has been closed"));var h=e.reduce(function(a,b){return a.concat(b)},[]),j=a.transaction(b,k.readwrite);j.onerror=function(a){a.preventDefault(),f(a)},j.onabort=function(a){return f(a)},j.oncomplete=function(){return c(h)};var m=j.objectStore(b);h.some(function(a){var b=void 0,c=void 0;if(d(a)&&l.call(a,"item")&&(c=a.key,a=a.item,null!=c))try{c=i(c)}catch(e){return f(e),!0}try{b=null!=c?m.put(a,c):m.put(a)}catch(g){return f(g),!0}b.onsuccess=function(b){if(d(a)){var c=b.target,e=c.source.keyPath;null===e&&(e="__id__"),l.call(a,e)||Object.defineProperty(a,e,{value:c.result,enumerable:!0})}}})})},this.put=function(){return this.update.apply(this,arguments)},this.remove=function(b,c){return new Promise(function(d,e){if(g)return void e(new Error("Database has been closed"));try{c=i(c)}catch(f){return void e(f)}var h=a.transaction(b,k.readwrite);h.onerror=function(a){a.preventDefault(),e(a)},h.onabort=function(a){return e(a)},h.oncomplete=function(){return d(c)};var j=h.objectStore(b);try{j["delete"](c)}catch(l){e(l)}})},this["delete"]=function(){return this.remove.apply(this,arguments)},this.clear=function(b){return new Promise(function(c,d){if(g)return void d(new Error("Database has been closed"));var e=a.transaction(b,k.readwrite);e.onerror=function(a){return d(a)},e.onabort=function(a){return d(a)},e.oncomplete=function(){return c()};var f=e.objectStore(b);f.clear()})},this.close=function(){return new Promise(function(d,e){return g?void e(new Error("Database has been closed")):(a.close(),g=!0,delete o[b][c],void d())})},this.get=function(b,c){return new Promise(function(d,e){if(g)return void e(new Error("Database has been closed"));try{c=i(c)}catch(f){return void e(f)}var h=a.transaction(b);h.onerror=function(a){a.preventDefault(),e(a)},h.onabort=function(a){return e(a)};var j=h.objectStore(b),k=void 0;try{k=j.get(c)}catch(l){e(l)}k.onsuccess=function(a){return d(a.target.result)}})},this.count=function(b,c){return new Promise(function(d,e){if(g)return void e(new Error("Database has been closed"));try{c=i(c)}catch(f){return void e(f)}var h=a.transaction(b);h.onerror=function(a){a.preventDefault(),e(a)},h.onabort=function(a){return e(a)};var j=h.objectStore(b),k=void 0;try{k=null==c?j.count():j.count(c)}catch(l){e(l)}k.onsuccess=function(a){return d(a.target.result)}})},this.addEventListener=function(b,c){if(!p.includes(b))throw new Error("Unrecognized event type "+b);return"error"===b?void a.addEventListener(b,function(a){a.preventDefault(),c(a)}):void a.addEventListener(b,c)},this.removeEventListener=function(b,c){if(!p.includes(b))throw new Error("Unrecognized event type "+b);a.removeEventListener(b,c)},p.forEach(function(a){this[a]=function(b){return this.addEventListener(a,b),this}},this),!e){var h=void 0;return[].some.call(a.objectStoreNames,function(a){if(f[a])return h=new Error('The store name, "'+a+'", which you have attempted to load, conflicts with db.js method names."'),f.close(),!0;f[a]={};var b=Object.keys(f);b.filter(function(a){return![].concat(p,["close","addEventListener","removeEventListener"]).includes(a)}).map(function(b){return f[a][b]=function(){for(var c=arguments.length,d=Array(c),e=0;c>e;e++)d[e]=arguments[e];return f[b].apply(f,[a].concat(d))}})}),h}},s=function(a,b,c,d,e,f){if(c&&0!==c.length){for(var h=0;h<d.objectStoreNames.length;h++){var i=d.objectStoreNames[h];l.call(c,i)||d.deleteObjectStore(i)}var j=void 0;return Object.keys(c).some(function(a){var e=c[a],f=void 0;if(d.objectStoreNames.contains(a))f=b.transaction.objectStore(a);else try{f=d.createObjectStore(a,e.key)}catch(h){return j=h,!0}Object.keys(e.indexes||{}).some(function(a){try{f.index(a)}catch(b){var c=e.indexes[a];c=c&&"object"===("undefined"==typeof c?"undefined":g(c))?c:{};try{f.createIndex(a,c.keyPath||c.key||a,c)}catch(d){return j=d,!0}}})}),j}},t=function(a,b,c,d){var e=a.target.result;o[b][c]=e;var f=new r(e,b,c,d);return f instanceof Error?Promise.reject(f):Promise.resolve(f)},u={version:"0.15.0",open:function(a){var b=a.server,c=a.version||1,d=a.schema,e=a.noServerMethods;return o[b]||(o[b]={}),new Promise(function(a,f){if(o[b][c])t({target:{result:o[b][c]}},b,c,e).then(a,f);else{var h=function(){if("function"==typeof d)try{d=d()}catch(g){return f(g),{v:void 0}}var h=n.open(b,c);h.onsuccess=function(d){return t(d,b,c,e).then(a,f)},h.onerror=function(a){a.preventDefault(),f(a)},h.onupgradeneeded=function(a){var e=s(a,h,d,a.target.result,b,c);e&&f(e)},h.onblocked=function(a){var d=new Promise(function(a,d){h.onsuccess=function(f){t(f,b,c,e).then(a,d)},h.onerror=function(a){return d(a)}});a.resume=d,f(a)}}();if("object"===("undefined"==typeof h?"undefined":g(h)))return h.v}})},"delete":function(a){return new Promise(function(b,c){var d=n.deleteDatabase(a);d.onsuccess=function(a){return b(a)},d.onerror=function(a){return c(a)},d.onblocked=function(a){a=null===a.newVersion||"undefined"==typeof Proxy?a:new Proxy(a,{get:function(a,b){return"newVersion"===b?null:a[b]}});var b=new Promise(function(b,c){d.onsuccess=function(c){"newVersion"in c||(c.newVersion=a.newVersion),"oldVersion"in c||(c.oldVersion=a.oldVersion),b(c)},d.onerror=function(a){return c(a)}});a.resume=b,c(a)}})},cmp:function(a,b){return new Promise(function(c,d){try{c(n.cmp(a,b))}catch(e){d(e)}})}};"undefined"!=typeof c&&"undefined"!=typeof c.exports?c.exports=u:"function"==typeof a&&a.amd?a(function(){return u}):b.db=u}(self)},{}]},{},[1])(1)});
//# sourceMappingURL=db.min.js.map

/***/ }),

/***/ "./src/css/pages/all.scss":
/*!********************************!*\
  !*** ./src/css/pages/all.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/constants/index.ts":
/*!***********************************!*\
  !*** ./src/js/constants/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/js/pages/all/navigation/bubble.ts":
/*!***********************************************!*\
  !*** ./src/js/pages/all/navigation/bubble.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBubbleValue": () => (/* binding */ getBubbleValue),
/* harmony export */   "setBubbleValue": () => (/* binding */ setBubbleValue)
/* harmony export */ });
/* harmony import */ var _utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/abbreviateNumber */ "./src/js/utils/abbreviateNumber.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/pages/all/navigation/utils.ts");


// Gets or creates a bubble in the side navigation bar.
const getOrCreateBubble = (navigationBarItem, allowCreate) => {
    const selector = `#${navigationBarItem} .notification-blue`;
    let bubble = document.querySelector(selector);
    if (bubble) {
        // it's possible that Roblox could have created a bubble after we did
        // validate that, and if they did, prefer theirs.
        const allBubbles = document.querySelectorAll(selector);
        if (allBubbles.length > 1) {
            const ourBubble = document.querySelector(`#${navigationBarItem} div[rplus] .notification-blue`);
            if (ourBubble) {
                ourBubble.parentElement?.remove();
            }
            bubble = document.querySelector(selector);
        }
        if (bubble) {
            return bubble;
        }
    }
    if (allowCreate) {
        const navigationItem = document.getElementById(navigationBarItem);
        if (!navigationItem) {
            return undefined;
        }
        let container = navigationItem?.querySelector('.dynamic-width-item.align-right');
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('class', 'dynamic-width-item align-right');
            container.setAttribute('rplus', `${+new Date()}`);
            navigationItem?.appendChild(container);
        }
        bubble = document.createElement('span');
        bubble.setAttribute('class', 'notification-blue notification hidden');
        bubble.setAttribute('title', '0');
        bubble.setAttribute('count', '0');
        bubble.innerHTML = '0';
        container.appendChild(bubble);
        return bubble;
    }
    return undefined;
};
// Gets the value from a navigation bar bubble.
const getBubbleValue = (navigationBarItem) => {
    const bubble = getOrCreateBubble(navigationBarItem, false);
    if (!bubble) {
        return 0;
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseNumber)(bubble.getAttribute('title'));
};
// Attempts to set the value in a navigation bar bubble.
const setBubbleValue = async (navigationBarItem, value) => {
    const bubble = getOrCreateBubble(navigationBarItem, true);
    if (!bubble) {
        // It's possible the navigation bar item doesn't exist yet.
        return;
    }
    const abbreviatedAt = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getAbbreviateAtValue)();
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.setText)(bubble, (0,_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(value, abbreviatedAt))) {
        bubble.setAttribute('title', value.toLocaleString());
        bubble.classList.toggle('hidden', value <= 0);
    }
};



/***/ }),

/***/ "./src/js/pages/all/navigation/index.ts":
/*!**********************************************!*\
  !*** ./src/js/pages/all/navigation/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _services_friends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/friends */ "./src/js/services/friends/index.ts");
/* harmony import */ var _services_private_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/private-messages */ "./src/js/services/private-messages/index.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _services_trades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/trades */ "./src/js/services/trades/index.ts");
/* harmony import */ var _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/authenticatedUser */ "./src/js/utils/authenticatedUser.ts");
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bubble */ "./src/js/pages/all/navigation/bubble.ts");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./links */ "./src/js/pages/all/navigation/links.ts");
/* harmony import */ var _robux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./robux */ "./src/js/pages/all/navigation/robux.ts");









// Check if we should be refreshing the counter values.
const refreshEnabled = async () => {
    try {
        return await (0,_services_settings__WEBPACK_IMPORTED_MODULE_3__.getToggleSettingValue)('navcounter');
    }
    catch (err) {
        console.warn('Failed to check if live navigation counters are enabled', err);
        return false;
    }
};
// Fetches the count of friend requests
const getFriendRequestBubbleCount = async (refresh) => {
    const authenticatedUser = (0,_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_5__.parseAuthenticatedUser)();
    if (refresh && authenticatedUser) {
        return await (0,_services_friends__WEBPACK_IMPORTED_MODULE_1__.getFriendRequestCount)(authenticatedUser.id);
    }
    return (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.getBubbleValue)('nav-friends');
};
// Fetches the count of unread private messages
const getPrivateMessageBubbleCount = async (refresh) => {
    const authenticatedUser = (0,_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_5__.parseAuthenticatedUser)();
    if (refresh && authenticatedUser) {
        return await (0,_services_private_messages__WEBPACK_IMPORTED_MODULE_2__.getUnreadMessageCount)(authenticatedUser.id);
    }
    return (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.getBubbleValue)('nav-message');
};
// Fetches the count of inbound trades
const getTradeBubbleCount = async (refresh) => {
    const authenticatedUser = (0,_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_5__.parseAuthenticatedUser)();
    if (refresh && authenticatedUser) {
        return await (0,_services_trades__WEBPACK_IMPORTED_MODULE_4__.getTradeCount)('inbound');
    }
    return (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.getBubbleValue)('nav-trade');
};
// Update the navigation bar, periodically.
setInterval(async () => {
    const shouldRefresh = await refreshEnabled();
    // Update the Robux count.
    const robux = await (0,_robux__WEBPACK_IMPORTED_MODULE_8__.getRobux)(shouldRefresh);
    (0,_robux__WEBPACK_IMPORTED_MODULE_8__.setRobux)(robux);
    // Update the friend request count.
    const friendRequests = await getFriendRequestBubbleCount(shouldRefresh);
    (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.setBubbleValue)('nav-friends', friendRequests);
    // Update the private message count.
    const unreadPrivateMessages = await getPrivateMessageBubbleCount(shouldRefresh);
    (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.setBubbleValue)('nav-message', unreadPrivateMessages);
    // Update the trade count.
    const trades = await getTradeBubbleCount(shouldRefresh);
    (0,_bubble__WEBPACK_IMPORTED_MODULE_6__.setBubbleValue)('nav-trade', trades);
    // Update navigation links.
    const links = await (0,_links__WEBPACK_IMPORTED_MODULE_7__.getLinkOverrides)();
    if (links.length === 2) {
        // First element in the array is the third link in the navigation bar.
        // Which is also the link that is second to last.
        if (links[0].override) {
            (0,_links__WEBPACK_IMPORTED_MODULE_7__.updateNavigationLink)(-2, links[0].text, links[0].href);
        }
        // Second element in the array is the fourth link in the navigation bar.
        // Which is also the link that is also the last link in the navigation bar.
        if (links[1].override) {
            (0,_links__WEBPACK_IMPORTED_MODULE_7__.updateNavigationLink)(-1, links[1].text, links[1].href);
        }
    }
    // Control panel link.
    let controlPanelLink = document.querySelector('a#nav-rplus');
    if (!controlPanelLink && _constants__WEBPACK_IMPORTED_MODULE_0__.manifest.homepage_url) {
        const upgradeButton = document.querySelector('li.rbx-upgrade-now');
        if (!upgradeButton) {
            // Couldn't find the element we use to prepend before... :coffin:
            return;
        }
        const container = document.createElement('li');
        // The link itself
        controlPanelLink = document.createElement('a');
        controlPanelLink.setAttribute('id', 'nav-rplus');
        controlPanelLink.setAttribute('href', _constants__WEBPACK_IMPORTED_MODULE_0__.manifest.homepage_url);
        controlPanelLink.setAttribute('class', 'dynamic-overflow-container text-nav');
        container.appendChild(controlPanelLink);
        // The icon
        const controlPanelIcon = document.createElement('span');
        controlPanelIcon.setAttribute('class', 'rplus-icon');
        const controlPanelIconContainer = document.createElement('div');
        controlPanelIconContainer.appendChild(controlPanelIcon);
        controlPanelLink.appendChild(controlPanelIconContainer);
        // The text
        const controlPanelText = document.createElement('span');
        controlPanelText.setAttribute('class', 'font-header-2 dynamic-ellipsis-item');
        controlPanelText.innerText = 'Control Panel';
        controlPanelLink.appendChild(controlPanelText);
        // The finale
        upgradeButton.before(container);
    }
}, 500);
window.navigationBar = {
    getRobux: _robux__WEBPACK_IMPORTED_MODULE_8__.getRobux,
    setRobux: _robux__WEBPACK_IMPORTED_MODULE_8__.setRobux,
    getBubbleValue: _bubble__WEBPACK_IMPORTED_MODULE_6__.getBubbleValue,
    setBubbleValue: _bubble__WEBPACK_IMPORTED_MODULE_6__.setBubbleValue,
    updateNavigationLink: _links__WEBPACK_IMPORTED_MODULE_7__.updateNavigationLink,
};


/***/ }),

/***/ "./src/js/pages/all/navigation/links.ts":
/*!**********************************************!*\
  !*** ./src/js/pages/all/navigation/links.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLinkOverrides": () => (/* binding */ getLinkOverrides),
/* harmony export */   "updateNavigationLink": () => (/* binding */ updateNavigationLink)
/* harmony export */ });
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/pages/all/navigation/utils.ts");


const getLinkOverrides = async () => {
    try {
        const setting = await (0,_services_settings__WEBPACK_IMPORTED_MODULE_0__.getSettingValue)('navigation');
        if (setting.buttons) {
            return setting.buttons.map((button) => {
                if ((button.href === '/develop' && button.text === 'Create') ||
                    (button.href.startsWith('/robux') && button.text === 'Robux')) {
                    // default value, do not override
                    return {
                        href: '',
                        text: '',
                        override: false,
                    };
                }
                // Value has been set explicitly, use that.
                return {
                    href: button.href,
                    text: button.text,
                    override: true,
                };
            });
        }
    }
    catch (err) {
        console.warn('Failed to fetch navigation link overrides', err);
    }
    return [];
};
// Updates a navigation link item by its index.
const updateNavigationLink = (index, text, href) => {
    document
        .querySelectorAll('#header ul.rbx-navbar')
        .forEach((navigationBar) => {
        const navigationLinks = Array.from(navigationBar.querySelectorAll('li>a.nav-menu-title:first-child'));
        const link = navigationLinks[index >= 0 ? index : navigationLinks.length + index];
        if (link) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setText)(link, text);
            link.setAttribute('href', href);
        }
    });
};



/***/ }),

/***/ "./src/js/pages/all/navigation/robux.ts":
/*!**********************************************!*\
  !*** ./src/js/pages/all/navigation/robux.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRobux": () => (/* binding */ getRobux),
/* harmony export */   "setRobux": () => (/* binding */ setRobux)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/pages/all/navigation/utils.ts");
/* harmony import */ var _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/authenticatedUser */ "./src/js/utils/authenticatedUser.ts");
/* harmony import */ var _services_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/currency */ "./src/js/services/currency/index.ts");
/* harmony import */ var _utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/abbreviateNumber */ "./src/js/utils/abbreviateNumber.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/settings */ "./src/js/services/settings/index.ts");





const devexRate = 0.0035;
// Checks whether or not the DevEx rate is visible.
const devexRateEnabled = async () => {
    try {
        const setting = await (0,_services_settings__WEBPACK_IMPORTED_MODULE_4__.getSettingValue)('navigation');
        return setting?.showDevexRate === true;
    }
    catch (err) {
        console.warn('Failed to check if DevEx rate is visible.', err);
        return false;
    }
};
// Gets the element containing the DevEx rate for the current Robux.
const getDevExRateElement = (robuxValueElement) => {
    let devexContainer = document.getElementById('rplus-devex-rate');
    if (!devexContainer) {
        // We don't have a container, create it.
        devexContainer = document.createElement('li');
        devexContainer.setAttribute('id', 'rplus-devex-rate');
        robuxValueElement.parentElement?.after(devexContainer);
    }
    let devexElement = devexContainer.querySelector('a');
    if (!devexElement) {
        devexElement = document.createElement('a');
        devexElement.setAttribute('href', 'https://create.roblox.com/devex');
        devexElement.classList.add('rbx-menu-item');
        devexContainer.append(devexElement);
    }
    return devexElement;
};
// Fetches the Robux from the navigation bar, if possible.
// Otherwise, fetches the Robux from the API.
const getRobux = async (mustLoad) => {
    const authenticatedUser = (0,_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_1__.parseAuthenticatedUser)();
    if (!authenticatedUser) {
        return 0;
    }
    const countElement = document.getElementById('navbar-robux');
    if (!mustLoad) {
        // Adding a count attribute on the element to cache the value.
        const count = Number(countElement?.getAttribute('count') || NaN);
        if (!isNaN(count)) {
            return count;
        }
        const element = document.getElementById('nav-robux-balance');
        if (element) {
            const textCount = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.parseNumber)(element?.innerText);
            countElement?.setAttribute('count', `${textCount}`);
            return textCount;
        }
    }
    const loadedCount = await (0,_services_currency__WEBPACK_IMPORTED_MODULE_2__.getRobuxBalance)(authenticatedUser.id);
    countElement?.setAttribute('count', `${loadedCount}`);
    return loadedCount;
};
// Updates the Robux count in the navigation bar.
const setRobux = async (value) => {
    const authenticatedUser = (0,_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_1__.parseAuthenticatedUser)();
    if (!authenticatedUser) {
        // Can't update the Robux count yet because there is no authenticated user.
        // Page probably isn't loaded, or we're logged out.
        return;
    }
    const countElement = document.getElementById('navbar-robux');
    countElement?.setAttribute('count', `${value}`);
    try {
        const abbreviatedAt = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getAbbreviateAtValue)();
        const abbreviatedElement = document.getElementById('nav-robux-amount');
        if (abbreviatedElement) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setText)(abbreviatedElement, (0,_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_3__["default"])(value, abbreviatedAt));
        }
        const fullValueElement = document.getElementById('nav-robux-balance');
        if (fullValueElement) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setText)(fullValueElement, `${value.toLocaleString()} Robux`);
            if (await devexRateEnabled()) {
                const devexBalance = value * devexRate;
                const devexElement = getDevExRateElement(fullValueElement);
                const formattedValue = Number(devexBalance.toFixed(2))
                    .toLocaleString()
                    .replace(/\.(\d)$/, `.$10`);
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setText)(devexElement, `$${formattedValue} USD`);
            }
        }
    }
    catch (err) {
        console.warn('Failed to update Robux in navigation bar', err);
    }
};



/***/ }),

/***/ "./src/js/pages/all/navigation/utils.ts":
/*!**********************************************!*\
  !*** ./src/js/pages/all/navigation/utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAbbreviateAtValue": () => (/* binding */ getAbbreviateAtValue),
/* harmony export */   "parseNumber": () => (/* binding */ parseNumber),
/* harmony export */   "setText": () => (/* binding */ setText)
/* harmony export */ });
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/abbreviateNumber */ "./src/js/utils/abbreviateNumber.ts");


// Parses a whole number out of a string, which could be locale-formatted.
const parseNumber = (input) => {
    const match = input?.match(/\d+/g) || [];
    if (match.length < 1) {
        return NaN;
    }
    return Number(match.join(''));
};
// Sets the text on an element, or ignores it.
const setText = (element, text) => {
    if (element.innerText === text) {
        return false;
    }
    element.innerText = text;
    return true;
};
// Fetches the value where we should start abbreviating navigation counters.
const getAbbreviateAtValue = async () => {
    let abbreviation = null;
    try {
        const setting = await (0,_services_settings__WEBPACK_IMPORTED_MODULE_0__.getSettingValue)('navigation');
        if (setting?.counterCommas) {
            abbreviation = Number(setting.counterCommas);
        }
    }
    catch (err) {
        console.warn('Failed to determine abbreviation value', err);
    }
    return abbreviation || _utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_1__.abbreviations[0].value;
};



/***/ }),

/***/ "./src/js/services/currency/getRobuxBalance.ts":
/*!*****************************************************!*\
  !*** ./src/js/services/currency/getRobuxBalance.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history */ "./src/js/services/currency/history.ts");




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
        await (0,_history__WEBPACK_IMPORTED_MODULE_3__.recordUserRobux)(userId, result.robux);
    }
    catch (err) {
        console.warn('Failed to record Robux history');
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

/***/ "./src/js/services/currency/history.ts":
/*!*********************************************!*\
  !*** ./src/js/services/currency/history.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserRobuxHistory": () => (/* binding */ getUserRobuxHistory),
/* harmony export */   "recordUserRobux": () => (/* binding */ recordUserRobux)
/* harmony export */ });
/* harmony import */ var db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db.js */ "./node_modules/db.js/dist/db.min.js");
/* harmony import */ var db_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(db_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/js/constants/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings */ "./src/js/services/settings/index.ts");




const messageDestination = 'currencyService.history.';
if (_constants__WEBPACK_IMPORTED_MODULE_1__.isBackgroundPage) {
    (0,db_js__WEBPACK_IMPORTED_MODULE_0__.open)({
        server: 'currencyBalances',
        version: 1,
        schema: {
            robuxHistory: {
                key: {
                    keyPath: ['currencyHolderType', 'currencyHolderId', 'robuxDate'],
                },
                indexes: {
                    currencyHolderType: {},
                    currencyHolderId: {},
                    robuxDate: {},
                },
            },
        },
    })
        .then((database) => {
        console.log('Database connection (for robuxHistory) opened.');
        window.robuxHistoryDatabase = database;
        // Ensure the amount of stored data doesn't get too out of hand.
        // Only store one year of data.
        setInterval(async () => {
            try {
                const now = +new Date();
                const purgeDate = new Date(now - 32 * 12 * 24 * 60 * 60 * 1000);
                const robuxHistory = await database.robuxHistory
                    .query('robuxDate')
                    .range({ lte: purgeDate.getTime() })
                    .execute();
                if (robuxHistory.length <= 0) {
                    return;
                }
                await Promise.all(robuxHistory.map((robuxHistoryRecord) => {
                    return database.robuxHistory.remove({
                        eq: [
                            robuxHistoryRecord.currencyHolderType,
                            robuxHistoryRecord.currencyHolderId,
                            robuxHistoryRecord.robuxDate,
                        ],
                    });
                }));
            }
            catch (e) {
                console.warn('Failed to purge Robux history database', e);
            }
        }, 60 * 60 * 1000);
    })
        .catch((err) => {
        console.error('Failed to connect to robuxHistory database.', err);
    });
}
const recordUserRobux = async (userId, robux) => {
    const enabled = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getToggleSettingValue)('robuxHistoryEnabled');
    if (!enabled) {
        return;
    }
    return (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination + 'recordUserRobux', {
        userId,
        robux,
    });
};
const getUserRobuxHistory = async (userId, startDateTime, endDateTime) => {
    const robuxHistory = await (0,_message__WEBPACK_IMPORTED_MODULE_2__.sendMessage)(messageDestination + 'getUserRobuxHistory', {
        userId,
        startDateTime: startDateTime.getTime(),
        endDateTime: endDateTime.getTime(),
    });
    return robuxHistory.map((h) => {
        return {
            value: h.robux,
            date: new Date(h.robuxDate),
        };
    });
};
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination + 'recordUserRobux', async (message) => {
    const now = +new Date();
    const robuxDateTime = new Date(now - (now % 60000));
    await robuxHistoryDatabase.robuxHistory.update({
        currencyHolderType: 'User',
        currencyHolderId: message.userId,
        robux: message.robux,
        robuxDate: robuxDateTime.getTime(),
    });
}, {
    levelOfParallelism: 1,
});
(0,_message__WEBPACK_IMPORTED_MODULE_2__.addListener)(messageDestination + 'getUserRobuxHistory', async (message) => {
    const history = await robuxHistoryDatabase.robuxHistory
        .query('robuxDate')
        .range({
        gte: message.startDateTime,
        lte: message.endDateTime,
    })
        .filter((row) => row.currencyHolderType === 'User' &&
        row.currencyHolderId === message.userId)
        .execute();
    return history;
}, {
    levelOfParallelism: 1,
});



/***/ }),

/***/ "./src/js/services/currency/index.ts":
/*!*******************************************!*\
  !*** ./src/js/services/currency/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRobuxBalance": () => (/* reexport safe */ _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getUserRobuxHistory": () => (/* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_1__.getUserRobuxHistory)
/* harmony export */ });
/* harmony import */ var _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRobuxBalance */ "./src/js/services/currency/getRobuxBalance.ts");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/js/services/currency/history.ts");


globalThis.currencyService = { getRobuxBalance: _getRobuxBalance__WEBPACK_IMPORTED_MODULE_0__["default"], getUserRobuxHistory: _history__WEBPACK_IMPORTED_MODULE_1__.getUserRobuxHistory };



/***/ }),

/***/ "./src/js/services/friends/getFriendRequestCount.ts":
/*!**********************************************************!*\
  !*** ./src/js/services/friends/getFriendRequestCount.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/js/services/message/index.ts":
/*!******************************************!*\
  !*** ./src/js/services/message/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/services/presence/batchProcessor.ts":
/*!****************************************************!*\
  !*** ./src/js/services/presence/batchProcessor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/js/services/trades/getTradeCount.ts":
/*!*************************************************!*\
  !*** ./src/js/services/trades/getTradeCount.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTradeCount": () => (/* reexport safe */ _getTradeCount__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _getTradeCount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTradeCount */ "./src/js/services/trades/getTradeCount.ts");

globalThis.tradesService = { getTradeCount: _getTradeCount__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "./src/js/utils/abbreviateNumber.ts":
/*!******************************************!*\
  !*** ./src/js/utils/abbreviateNumber.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abbreviations": () => (/* binding */ abbreviations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// All the values to abbreviate a number at.
const abbreviations = [
    {
        value: 1000,
        abbreviation: 'K',
    },
    {
        value: 1000000,
        abbreviation: 'M',
    },
    {
        value: 1000000000,
        abbreviation: 'B',
    },
    {
        value: 1000000000000,
        abbreviation: 'T',
    },
];

// Abbreviates a number, for human readability, after it surpasses a given value (or after 1,000 if not provided).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((value, abbreviateAt) => {
    if (!abbreviateAt) {
        abbreviateAt = abbreviations[0].value;
    }
    if (value >= abbreviateAt) {
        for (let i = abbreviations.length - 1; i >= 0; i--) {
            if (value >= abbreviations[i].value) {
                return `${Math.floor(value / abbreviations[i].value).toLocaleString()}${abbreviations[i].abbreviation}+`;
            }
        }
    }
    return value.toLocaleString();
});


/***/ }),

/***/ "./src/js/utils/authenticatedUser.ts":
/*!*******************************************!*\
  !*** ./src/js/utils/authenticatedUser.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "parseAuthenticatedUser": () => (/* binding */ parseAuthenticatedUser)
/* harmony export */ });
// Fetches the user who is currently authenticated on the loaded web page.
const parseAuthenticatedUser = () => {
    const userData = globalThis.document && document.querySelector(`meta[name='user-data']`);
    // The user who is currently authenticated on the loaded web page.
    return userData
        ? {
            id: Number(userData.getAttribute('data-userid')),
            name: userData.getAttribute('data-name') || '',
            displayName: userData.getAttribute('data-displayname') || '',
        }
        : null;
};
const authenticatedUser = parseAuthenticatedUser();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authenticatedUser);
// TODO: Deprecate after manifest V3 conversion.



/***/ }),

/***/ "./src/js/utils/expireableDictionary.ts":
/*!**********************************************!*\
  !*** ./src/js/utils/expireableDictionary.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/utils/launchProtocolUrl.ts":
/*!*******************************************!*\
  !*** ./src/js/utils/launchProtocolUrl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/utils/wait.ts":
/*!******************************!*\
  !*** ./src/js/utils/wait.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/twemoji/dist/twemoji.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/twemoji/dist/twemoji.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var twemoji=function(){"use strict";var twemoji={base:"https://twemoji.maxcdn.com/v/14.0.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,false),this)}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D=String.fromCharCode(8205),rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return"".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(nodeType===3){allText.push(subnode)}else if(nodeType===1&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText)}}return allText}function grabTheRightIcon(rawText){return toCodePoint(rawText.indexOf(U200D)<0?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=false;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),true))}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname])}}img.className=options.className;img.alt=rawText;img.src=src;modified=true;fragment.appendChild(img)}if(!img)fragment.appendChild(createText(rawText,false));img=null}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),true))}subnode.parentNode.replaceChild(fragment,subnode)}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat('class="',options.className,'" ','draggable="false" ','alt="',rawText,'"',' src="',src,'"');attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&ret.indexOf(" "+attrname+"=")===-1){ret=ret.concat(" ",attrname,'="',escapeHTML(attrib[attrname]),'"')}}ret=ret.concat("/>")}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return typeof value==="number"?value+"x"+value:value}function fromCodePoint(codepoint){var code=typeof codepoint==="string"?parseInt(codepoint,16):codepoint;if(code<65536){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(code&1023))}function parse(what,how){if(!how||typeof how==="function"){how={callback:how}}return(typeof what==="string"?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:typeof how.attributes==="function"?how.attributes:returnNull,base:typeof how.base==="string"?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return String(text).replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0}else if(55296<=c&&c<=56319){p=c}else{r.push(c.toString(16))}}return r.join(sep||"-")}}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twemoji);

/***/ }),

/***/ "./node_modules/@tix-factory/batch/dist/batch/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@tix-factory/batch/dist/batch/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/js/pages/all/index.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": () => (/* reexport safe */ _services_game_launch__WEBPACK_IMPORTED_MODULE_5__.followUser),
/* harmony export */   "getUserPresence": () => (/* reexport safe */ _services_presence__WEBPACK_IMPORTED_MODULE_4__.getUserPresence)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/js/pages/all/navigation/index.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! twemoji */ "./node_modules/twemoji/dist/twemoji.esm.js");
/* harmony import */ var _css_pages_all_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/pages/all.scss */ "./src/css/pages/all.scss");
/* harmony import */ var _services_presence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/presence */ "./src/js/services/presence/index.ts");
/* harmony import */ var _services_game_launch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game-launch */ "./src/js/services/game-launch/index.ts");




// twemojis
(0,_services_settings__WEBPACK_IMPORTED_MODULE_1__.getToggleSettingValue)('twemoji')
    .then((enabled) => {
    if (!enabled) {
        return;
    }
    setInterval(() => twemoji__WEBPACK_IMPORTED_MODULE_2__["default"].parse(document.body), 500);
    if (document.body) {
        twemoji__WEBPACK_IMPORTED_MODULE_2__["default"].parse(document.body);
    }
})
    .catch((err) => {
    console.warn('Failed to load twemoji setting preference', err);
});
// Exports for compatibility, while existing JavaScript doesn't use imports.



})();

/******/ })()
;
//# sourceMappingURL=all.js.map