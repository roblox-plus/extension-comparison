/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/pages/item-details.scss":
/*!*****************************************!*\
  !*** ./src/css/pages/item-details.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components/system-feedback/index.ts":
/*!****************************************************!*\
  !*** ./src/js/components/system-feedback/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showErrorBanner": () => (/* binding */ showErrorBanner),
/* harmony export */   "showSuccessBanner": () => (/* binding */ showSuccessBanner)
/* harmony export */ });
const getSystemFeedbackContainer = () => {
    const systemFeedbackContainer = document.querySelector('.system-feedback');
    if (systemFeedbackContainer instanceof HTMLElement) {
        return systemFeedbackContainer;
    }
    const container = document.createElement('div');
    container.setAttribute('class', 'system-feedback');
    document.body.appendChild(container);
    return container;
};
const createBanner = (text, bannerType) => {
    const systemFeedbackContainer = getSystemFeedbackContainer();
    const container = document.createElement('div');
    container.classList.add('alert-system-feedback');
    systemFeedbackContainer?.appendChild(container);
    const label = document.createElement('div');
    label.innerText = text;
    label.setAttribute('class', `alert alert-${bannerType}`);
    container.appendChild(label);
    return label;
};
const showBanner = (text, bannerType, timeout) => {
    const banner = createBanner(text, bannerType);
    setTimeout(() => {
        banner.classList.remove('on');
        setTimeout(() => {
            banner.parentElement?.remove();
        }, 10 * 1000);
    }, timeout);
    setTimeout(() => {
        banner.classList.add('on');
    }, 100);
};
// Renders an error feedback banner on the web page, temporarily.
const showErrorBanner = (text, timeout) => {
    showBanner(text, 'warning', timeout);
};
// Renders a success feedback banner on the web page, temporarily.
const showSuccessBanner = (text, timeout) => {
    showBanner(text, 'success', timeout);
};



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

/***/ "./src/js/pages/item-details/avatar.ts":
/*!*********************************************!*\
  !*** ./src/js/pages/item-details/avatar.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeContextMenu": () => (/* binding */ initializeContextMenu)
/* harmony export */ });
/* harmony import */ var _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/authenticatedUser */ "./src/js/utils/authenticatedUser.ts");
/* harmony import */ var _services_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/avatar */ "./src/js/services/avatar/index.ts");
/* harmony import */ var _components_system_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/system-feedback */ "./src/js/components/system-feedback/index.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/localization */ "./src/js/services/localization/index.ts");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details */ "./src/js/pages/item-details/details.ts");





const initializeContextMenu = (createContextMenuButton) => {
    if (!_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return;
    }
    (0,_services_avatar__WEBPACK_IMPORTED_MODULE_1__.getAvatarAssetRules)()
        .then(async (avatarRules) => {
        const avatarRule = avatarRules.find((rule) => rule.assetType === _details__WEBPACK_IMPORTED_MODULE_4__.assetType);
        if (!avatarRule) {
            // Not an avatar asset.
            return;
        }
        const assets = await (0,_services_avatar__WEBPACK_IMPORTED_MODULE_1__.getAvatarAssets)(_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"]?.id || 0);
        const isWearing = !!assets.find((a) => a.id === _details__WEBPACK_IMPORTED_MODULE_4__.assetId);
        if (isWearing) {
            // Already wearing the item
            const removeText = await (0,_services_localization__WEBPACK_IMPORTED_MODULE_3__.getTranslationResource)('Feature.Item', 'Action.TakeOff');
            const removeItemButton = createContextMenuButton(removeText);
            removeItemButton.addEventListener('click', async () => {
                try {
                    await (0,_services_avatar__WEBPACK_IMPORTED_MODULE_1__.removeItem)(_details__WEBPACK_IMPORTED_MODULE_4__.assetId);
                    (0,_components_system_feedback__WEBPACK_IMPORTED_MODULE_2__.showSuccessBanner)('Item removed from avatar', 5 * 1000);
                }
                catch (e) {
                    console.error('Failed to remove item', e);
                    (0,_components_system_feedback__WEBPACK_IMPORTED_MODULE_2__.showErrorBanner)('Failed to remove item from avatar.', 5 * 1000);
                }
            });
        }
        else {
            // Not wearing the item
            const wearButtonText = await (0,_services_localization__WEBPACK_IMPORTED_MODULE_3__.getTranslationResource)('Feature.Item', 'Action.Wear');
            const wearItemButton = createContextMenuButton(wearButtonText);
            wearItemButton.addEventListener('click', async () => {
                if (!_utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                    return;
                }
                try {
                    await (0,_services_avatar__WEBPACK_IMPORTED_MODULE_1__.wearItem)(_details__WEBPACK_IMPORTED_MODULE_4__.assetId, _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_0__["default"].id);
                    (0,_components_system_feedback__WEBPACK_IMPORTED_MODULE_2__.showSuccessBanner)(`Item added to avatar`, 5 * 1000);
                }
                catch (e) {
                    console.error('Failed to wear item', e);
                    (0,_components_system_feedback__WEBPACK_IMPORTED_MODULE_2__.showErrorBanner)('Failed to wear item on avatar.', 5 * 1000);
                }
            });
        }
    })
        .catch((err) => {
        console.error('Failed to load avatar rules', err);
    });
};



/***/ }),

/***/ "./src/js/pages/item-details/calculate-rap-after-sale.ts":
/*!***************************************************************!*\
  !*** ./src/js/pages/item-details/calculate-rap-after-sale.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calculateRecentAveragePriceAfterSale = (currentAveragePrice, priceToSellFor) => {
    if (currentAveragePrice === priceToSellFor) {
        return currentAveragePrice;
    }
    if (currentAveragePrice <= 0) {
        return priceToSellFor;
    }
    return (currentAveragePrice > priceToSellFor ? Math.floor : Math.ceil)(currentAveragePrice * 0.9 + priceToSellFor * 0.1);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateRecentAveragePriceAfterSale);


/***/ }),

/***/ "./src/js/pages/item-details/context-menu.ts":
/*!***************************************************!*\
  !*** ./src/js/pages/item-details/context-menu.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeContextMenu": () => (/* binding */ addContextMenuOptions)
/* harmony export */ });
/* harmony import */ var _enums_assetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/assetType */ "./src/js/enums/assetType.ts");
/* harmony import */ var _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/authenticatedUser */ "./src/js/utils/authenticatedUser.ts");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar */ "./src/js/pages/item-details/avatar.ts");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details */ "./src/js/pages/item-details/details.ts");
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download */ "./src/js/pages/item-details/download.ts");





// Creates an individual context menu button
const createContextMenuButton = (contextMenu, label) => {
    const listItem = document.createElement('li');
    listItem.classList.add('rplus-list-item');
    contextMenu?.appendChild(listItem);
    const button = document.createElement('button');
    button.innerText = label;
    button.setAttribute('role', 'button');
    listItem.appendChild(button);
    return button;
};
// Any option that needs to be added to the context menu should exist in here.
const addContextMenuOptions = async (contextMenu) => {
    // If the item is an owned avatar asset, attempt to add the wear + remove button to the context menu, when it opens.
    if ((0,_details__WEBPACK_IMPORTED_MODULE_3__.isOwnedAvatarAsset)() &&
        _details__WEBPACK_IMPORTED_MODULE_3__.assetType !== _enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"].Emote &&
        !isNaN(_details__WEBPACK_IMPORTED_MODULE_3__.assetId) &&
        _utils_authenticatedUser__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        (0,_avatar__WEBPACK_IMPORTED_MODULE_2__.initializeContextMenu)((text) => createContextMenuButton(contextMenu, text));
    }
    // Add download button when the item is made by the authenticated user.
    if (_details__WEBPACK_IMPORTED_MODULE_3__.isOwnCreatedItem || _details__WEBPACK_IMPORTED_MODULE_3__.isOwnedStudioItem) {
        const downloadLink = await (0,_download__WEBPACK_IMPORTED_MODULE_4__.createDownloadLink)();
        if (downloadLink) {
            const downloadButton = createContextMenuButton(contextMenu, '');
            downloadButton.parentElement?.appendChild(downloadLink);
            downloadButton.remove();
        }
    }
};



/***/ }),

/***/ "./src/js/pages/item-details/details.ts":
/*!**********************************************!*\
  !*** ./src/js/pages/item-details/details.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assetId": () => (/* binding */ assetId),
/* harmony export */   "assetType": () => (/* binding */ assetType),
/* harmony export */   "creatorId": () => (/* binding */ creatorId),
/* harmony export */   "isLimited": () => (/* binding */ isLimited),
/* harmony export */   "isOwnCreatedItem": () => (/* binding */ isOwnCreatedItem),
/* harmony export */   "isOwnedAvatarAsset": () => (/* binding */ isOwnedAvatarAsset),
/* harmony export */   "isOwnedStudioItem": () => (/* binding */ isOwnedStudioItem)
/* harmony export */ });
/* harmony import */ var _utils_linkify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/linkify */ "./src/js/utils/linkify.ts");

const itemContainer = document.querySelector('#item-container');
const parseCreatorId = () => {
    const creatorId = Number(itemContainer?.getAttribute('data-expected-seller-id'));
    if (creatorId) {
        return creatorId;
    }
    const creatorUrl = document
        .querySelector('.item-name-container a.text-name')
        ?.getAttribute('href');
    if (creatorUrl) {
        return (0,_utils_linkify__WEBPACK_IMPORTED_MODULE_0__.getIdFromUrl)(new URL(creatorUrl));
    }
    return NaN;
};
const creatorId = parseCreatorId();
const assetId = Number(itemContainer?.getAttribute('data-item-id'));
const assetType = Number(itemContainer?.getAttribute('data-asset-type-id'));
// These elements aren't guaranteed to be on the page when it loads.
const isOwnedAvatarAsset = () => {
    if (document.querySelector('#edit-avatar-button')) {
        // option to edit avatar, we definitely own this one
        return true;
    }
    if (document.querySelectorAll('#item-details-limited-inventory-container .resale-button').length > 0) {
        // it's a limited, and we own a copy
        // and all limiteds are avatar assets
        return true;
    }
    // nope.
    return false;
};
const isOwnCreatedItem = !!document.querySelector('#configure-item');
const isOwnedStudioItem = !!document.querySelector('#try-in-studio-button');
const isLimited = !!document.querySelector('asset-resale-pane');



/***/ }),

/***/ "./src/js/pages/item-details/download.ts":
/*!***********************************************!*\
  !*** ./src/js/pages/item-details/download.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDownloadLink": () => (/* binding */ createDownloadLink)
/* harmony export */ });
/* harmony import */ var _enums_assetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/assetType */ "./src/js/enums/assetType.ts");
/* harmony import */ var _services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/assets */ "./src/js/services/assets/index.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/localization */ "./src/js/services/localization/index.ts");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details */ "./src/js/pages/item-details/details.ts");




const createDownloadLink = async () => {
    const downloadUrl = await (0,_services_assets__WEBPACK_IMPORTED_MODULE_1__.getAssetContentsUrl)(_details__WEBPACK_IMPORTED_MODULE_3__.assetId);
    if (!downloadUrl) {
        return;
    }
    const downloadText = await (0,_services_localization__WEBPACK_IMPORTED_MODULE_2__.getTranslationResource)('Feature.UserAds', 'Action.Download');
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', downloadUrl.href);
    downloadLink.download = 'download';
    downloadLink.innerText = downloadText;
    return downloadLink;
};
if (_details__WEBPACK_IMPORTED_MODULE_3__.creatorId === 1) {
    switch (_details__WEBPACK_IMPORTED_MODULE_3__.assetType) {
        case _enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"].Image:
        case _enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"].Mesh:
            const actionButton = document.querySelector('.price-container .action-button>button');
            if (
            // if we found the button
            !(actionButton instanceof HTMLButtonElement) ||
                // and the button is currently disabled
                !actionButton.disabled) {
                break;
            }
            // then we can replace it with the download button
            createDownloadLink()
                .then((downloadLink) => {
                if (!downloadLink) {
                    return;
                }
                actionButton.classList.remove('btn-growth-lg');
                actionButton.classList.add('btn-control-lg');
                actionButton.innerText = '';
                actionButton.appendChild(downloadLink);
                actionButton.disabled = false;
            })
                .catch((err) => {
                console.error('Failed to create download link', err);
            });
            break;
    }
}



/***/ }),

/***/ "./src/js/pages/item-details/stats.ts":
/*!********************************************!*\
  !*** ./src/js/pages/item-details/stats.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
const getItemTypeStat = () => {
    // Game pass details page has this format.
    const itemTypeStat = document.querySelector('.item-details .item-type-field-container');
    if (itemTypeStat instanceof HTMLElement) {
        return [
            itemTypeStat,
            'clearfix item-field-container',
            'text-subheader text-label text-overflow field-label',
            'field-content',
        ];
    }
    // Item details page has this format sometimes.
    const itemTypeSpan = document.querySelectorAll('#type-content');
    if (itemTypeSpan.length > 0 &&
        itemTypeSpan[itemTypeSpan.length - 1] instanceof HTMLElement) {
        return [
            itemTypeSpan[itemTypeSpan.length - 1].parentElement,
            'clearfix item-info-row-container',
            'font-header-1 text-subheader text-label text-overflow row-label',
            'font-body text',
        ];
    }
    return [null, '', '', ''];
};
const createStat = (label, value) => {
    const [itemTypeStat, containerClassName, labelClassName, valueClassName] = getItemTypeStat();
    if (!itemTypeStat) {
        return;
    }
    const container = document.createElement('div');
    container.setAttribute('class', containerClassName);
    const labelElement = document.createElement('div');
    labelElement.setAttribute('class', labelClassName);
    labelElement.innerText = label;
    const valueElement = document.createElement('span');
    valueElement.setAttribute('class', valueClassName);
    valueElement.innerText = value;
    container.appendChild(labelElement);
    container.appendChild(valueElement);
    itemTypeStat.after(container);
};



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
            const asset = result.find((a) => a.requestId === item.key);
            const location = asset?.locations[0];
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
const getAssetContentsUrl = async (assetId) => {
    const url = await (0,_message__WEBPACK_IMPORTED_MODULE_4__.sendMessage)(messageDestination, {
        assetId,
    });
    return url ? new URL(url) : undefined;
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

/***/ "./src/js/services/assets/get-asset-sales-count.ts":
/*!*********************************************************!*\
  !*** ./src/js/services/assets/get-asset-sales-count.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/expireableDictionary */ "./src/js/utils/expireableDictionary.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");


const messageDestination = 'assetsService.getAssetSalesCount';
const cache = new _utils_expireableDictionary__WEBPACK_IMPORTED_MODULE_0__["default"](messageDestination, 30 * 1000);
const getAssetSalesCount = async (assetId) => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(messageDestination, { assetId });
};
const loadAssetSalesCount = async (assetId) => {
    const response = await fetch(`https://economy.roblox.com/v2/assets/${assetId}/details`);
    if (!response.ok) {
        throw new Error('Failed to load asset product info');
    }
    const result = await response.json();
    return result.Sales || NaN;
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_1__.addListener)(messageDestination, (message) => {
    // Check the cache
    return cache.getOrAdd(`${message.assetId}`, () => 
    // Queue up the fetch request, when not in the cache
    loadAssetSalesCount(message.assetId));
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAssetSalesCount);


/***/ }),

/***/ "./src/js/services/assets/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/assets/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAssetContentsUrl": () => (/* reexport safe */ _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "getAssetSalesCount": () => (/* reexport safe */ _get_asset_sales_count__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-asset-contents-url */ "./src/js/services/assets/get-asset-contents-url.ts");
/* harmony import */ var _get_asset_sales_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-asset-sales-count */ "./src/js/services/assets/get-asset-sales-count.ts");


globalThis.assetsService = { getAssetContentsUrl: _get_asset_contents_url__WEBPACK_IMPORTED_MODULE_0__["default"], getAssetSalesCount: _get_asset_sales_count__WEBPACK_IMPORTED_MODULE_1__["default"] };



/***/ }),

/***/ "./src/js/services/avatar/get-avatar-asset-rules.ts":
/*!**********************************************************!*\
  !*** ./src/js/services/avatar/get-avatar-asset-rules.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message */ "./src/js/services/message/index.ts");

const messageDestination = 'avatarService.getAvatarRules';
let avatarAssetRules = [];
const getAvatarAssetRules = async () => {
    return (0,_message__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(messageDestination, {});
};
const loadAvatarAssetRules = async () => {
    const response = await fetch(`https://avatar.roblox.com/v1/avatar-rules`);
    if (!response.ok) {
        throw new Error(`Failed to load avatar rules (${response.status})`);
    }
    const result = await response.json();
    return result.wearableAssetTypes.map((rule) => {
        return {
            maxNumber: rule.maxNumber,
            assetType: rule.id,
        };
    });
};
// Listen for messages sent to the service worker.
(0,_message__WEBPACK_IMPORTED_MODULE_0__.addListener)(messageDestination, async () => {
    if (avatarAssetRules.length > 0) {
        return avatarAssetRules;
    }
    avatarAssetRules = await loadAvatarAssetRules();
    return avatarAssetRules;
}, {
    levelOfParallelism: 1,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAvatarAssetRules);


/***/ }),

/***/ "./src/js/services/avatar/index.ts":
/*!*****************************************!*\
  !*** ./src/js/services/avatar/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvatarAssetRules": () => (/* reexport safe */ _get_avatar_asset_rules__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "getAvatarAssets": () => (/* binding */ getAvatarAssets),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "wearItem": () => (/* binding */ wearItem)
/* harmony export */ });
/* harmony import */ var _enums_assetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/assetType */ "./src/js/enums/assetType.ts");
/* harmony import */ var _utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/xsrfFetch */ "./src/js/utils/xsrfFetch.ts");
/* harmony import */ var _get_avatar_asset_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-avatar-asset-rules */ "./src/js/services/avatar/get-avatar-asset-rules.ts");



const getAvatarAssets = async (userId) => {
    const response = await fetch(`https://avatar.roblox.com/v1/users/${userId}/avatar`);
    if (!response.ok) {
        throw new Error(`Failed to load avatar (${response.status})`);
    }
    const result = await response.json();
    const assets = result.assets.map((asset) => {
        return {
            id: asset.id,
            name: asset.name,
            assetType: asset.assetType.id,
        };
    });
    result.emotes.forEach((emote) => {
        assets.push({
            id: emote.assetId,
            name: emote.assetName,
            assetType: _enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"].Emote,
        });
    });
    return assets;
};
const wearItem = async (assetId, authenticatedUserId) => {
    // Use set-wearing-assets instead of wear because it will allow more than the limit
    const currentAssets = await getAvatarAssets(authenticatedUserId);
    const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(new URL(`https://avatar.roblox.com/v1/avatar/set-wearing-assets`), {
        method: 'POST',
        body: JSON.stringify({
            assetIds: [assetId].concat(currentAssets
                .filter((a) => a.assetType !== _enums_assetType__WEBPACK_IMPORTED_MODULE_0__["default"].Emote)
                .map((a) => a.id)),
        }),
    });
    if (!response.ok) {
        throw new Error(`Failed to wear asset (${assetId})`);
    }
    const result = await response.json();
    if (result.invalidAssetIds.length > 0) {
        throw new Error(`Failed to wear assets (${result.invalidAssetIds.join(', ')})`);
    }
};
const removeItem = async (assetId) => {
    const response = await (0,_utils_xsrfFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(new URL(`https://avatar.roblox.com/v1/avatar/assets/${assetId}/remove`), {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error(`Failed to remove asset (${assetId})`);
    }
};
globalThis.avatarService = { getAvatarAssetRules: _get_avatar_asset_rules__WEBPACK_IMPORTED_MODULE_2__["default"], getAvatarAssets, wearItem, removeItem };



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

/***/ "./src/js/utils/authenticatedUser.ts":
/*!*******************************************!*\
  !*** ./src/js/utils/authenticatedUser.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!********************************************!*\
  !*** ./src/js/pages/item-details/index.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_pages_item_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css/pages/item-details.scss */ "./src/css/pages/item-details.scss");
/* harmony import */ var _services_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/assets */ "./src/js/services/assets/index.ts");
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/localization */ "./src/js/services/localization/index.ts");
/* harmony import */ var _services_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings */ "./src/js/services/settings/index.ts");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/wait */ "./src/js/utils/wait.ts");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details */ "./src/js/pages/item-details/details.ts");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats */ "./src/js/pages/item-details/stats.ts");
/* harmony import */ var _calculate_rap_after_sale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculate-rap-after-sale */ "./src/js/pages/item-details/calculate-rap-after-sale.ts");
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context-menu */ "./src/js/pages/item-details/context-menu.ts");









// Add sales counter onto the page.
if (_details__WEBPACK_IMPORTED_MODULE_5__.isOwnCreatedItem && !_details__WEBPACK_IMPORTED_MODULE_5__.isLimited) {
    (0,_services_settings__WEBPACK_IMPORTED_MODULE_3__.getToggleSettingValue)('itemSalesCounter')
        .then(async (enabled) => {
        if (!enabled) {
            return;
        }
        while (!document.getElementById('item-details')) {
            // Wait until the item details container is loaded.
            await (0,_utils_wait__WEBPACK_IMPORTED_MODULE_4__["default"])(250);
        }
        (0,_services_assets__WEBPACK_IMPORTED_MODULE_1__.getAssetSalesCount)(_details__WEBPACK_IMPORTED_MODULE_5__.assetId)
            .then(async (saleCount) => {
            if (isNaN(saleCount)) {
                return;
            }
            try {
                const salesLabel = await (0,_services_localization__WEBPACK_IMPORTED_MODULE_2__.getTranslationResource)('CreatorDashboard.Creations', 'Heading.Sales');
                (0,_stats__WEBPACK_IMPORTED_MODULE_6__.createStat)(salesLabel, saleCount.toLocaleString());
            }
            catch (e) {
                console.error('Failed to render sales label', e);
            }
        })
            .catch((err) => {
            console.error('Failed to fetch sale count', err);
        });
    })
        .catch((err) => {
        console.warn('Failed to check if sale counter setting was enabled.', err);
    });
}
// Add features for limited items.
if (_details__WEBPACK_IMPORTED_MODULE_5__.isLimited) {
    setInterval(() => {
        const currentAveragePrice = Number(document
            .getElementById('item-average-price')
            ?.innerText?.replace(/\D+/g, ''));
        if (!currentAveragePrice) {
            return;
        }
        document
            .querySelectorAll('.reseller-price-container:not([rplus])')
            .forEach((priceContainer) => {
            if (!(priceContainer instanceof HTMLElement)) {
                return;
            }
            priceContainer.setAttribute('rplus', `${+new Date()}`);
            const price = Number(priceContainer.innerText.replace(/\D+/g, ''));
            if (!price) {
                return;
            }
            const rapAfterSale = (0,_calculate_rap_after_sale__WEBPACK_IMPORTED_MODULE_7__["default"])(currentAveragePrice, price);
            priceContainer.setAttribute('title', `If this sells, the average price of the item should be approximately R\$${rapAfterSale.toLocaleString()}`);
        });
    }, 1000);
}
// Listen for the context menu to open.
window.addEventListener('DOMNodeInserted', async (event) => {
    if (!(event.target instanceof HTMLElement)) {
        return;
    }
    if (event.target.classList.contains('popover') &&
        event.target.parentElement?.id === 'item-context-menu') {
        const contextMenu = event.target.parentElement.querySelector('ul.dropdown-menu');
        if (contextMenu instanceof HTMLElement) {
            try {
                await (0,_context_menu__WEBPACK_IMPORTED_MODULE_8__.initializeContextMenu)(contextMenu);
            }
            catch (e) {
                console.warn('Unexpected error opening context menu', e);
            }
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=item-details.js.map