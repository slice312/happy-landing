/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/atoms/index.css":
/*!****************************************!*\
  !*** ./src/components/atoms/index.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/molecules/index.css":
/*!********************************************!*\
  !*** ./src/components/molecules/index.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/ad-countdown-timer/styles.css":
/*!****************************************************************!*\
  !*** ./src/components/organisms/ad-countdown-timer/styles.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/app-preview/styles.css":
/*!*********************************************************!*\
  !*** ./src/components/organisms/app-preview/styles.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/download/styles.css":
/*!******************************************************!*\
  !*** ./src/components/organisms/download/styles.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/header-nav-bar/styles.css":
/*!************************************************************!*\
  !*** ./src/components/organisms/header-nav-bar/styles.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/pricing/styles.css":
/*!*****************************************************!*\
  !*** ./src/components/organisms/pricing/styles.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/sections/index.css":
/*!*****************************************************!*\
  !*** ./src/components/organisms/sections/index.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/testimonials/styles.css":
/*!**********************************************************!*\
  !*** ./src/components/organisms/testimonials/styles.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/organisms/theme-demo/styles.css":
/*!********************************************************!*\
  !*** ./src/components/organisms/theme-demo/styles.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/templates/modal-order/styles.css":
/*!*********************************************************!*\
  !*** ./src/components/templates/modal-order/styles.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/shared/styles/index.css":
/*!*************************************!*\
  !*** ./src/shared/styles/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
const sendPurchaseGoods = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "success";
};


const Api = {
    sendPurchaseGoods
};

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _src_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components */ "./src/components/index.js");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/config */ "./src/config.js");




const app = () => {
    (0,_src_config__WEBPACK_IMPORTED_MODULE_1__.getConfig)()
        .then(config => (0,_src_components__WEBPACK_IMPORTED_MODULE_0__.renderComponents)(config));
};

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderComponents": () => (/* binding */ renderComponents)
/* harmony export */ });
/* harmony import */ var _atoms_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atoms/index.css */ "./src/components/atoms/index.css");
/* harmony import */ var _molecules_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molecules/index.css */ "./src/components/molecules/index.css");
/* harmony import */ var _organisms_sections_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organisms/sections/index.css */ "./src/components/organisms/sections/index.css");
/* harmony import */ var _organisms_header_nav_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisms/header-nav-bar */ "./src/components/organisms/header-nav-bar/index.js");
/* harmony import */ var _organisms_ad_countdown_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organisms/ad-countdown-timer */ "./src/components/organisms/ad-countdown-timer/index.js");
/* harmony import */ var _organisms_app_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisms/app-preview */ "./src/components/organisms/app-preview/index.js");
/* harmony import */ var _organisms_theme_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisms/theme-demo */ "./src/components/organisms/theme-demo/index.js");
/* harmony import */ var _organisms_pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organisms/pricing */ "./src/components/organisms/pricing/index.js");
/* harmony import */ var _organisms_testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organisms/testimonials */ "./src/components/organisms/testimonials/index.js");
/* harmony import */ var _organisms_download__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organisms/download */ "./src/components/organisms/download/index.js");
/* harmony import */ var _templates_modal_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/modal-order */ "./src/components/templates/modal-order/index.js");













const renderComponents = (config) => {
    (0,_organisms_header_nav_bar__WEBPACK_IMPORTED_MODULE_3__.renderHeaderNavBar)(config.appStoreLink);
    (0,_organisms_ad_countdown_timer__WEBPACK_IMPORTED_MODULE_4__.renderAdCountdownTimer)(config.timerEndDate);
    (0,_organisms_app_preview__WEBPACK_IMPORTED_MODULE_5__.renderAppPreview)();
    (0,_organisms_theme_demo__WEBPACK_IMPORTED_MODULE_6__.renderThemeDemoBlock)();
    (0,_organisms_pricing__WEBPACK_IMPORTED_MODULE_7__.renderPricing)(config.plans);
    (0,_organisms_testimonials__WEBPACK_IMPORTED_MODULE_8__.renderTestimonials)(config.testimonials);
    (0,_organisms_download__WEBPACK_IMPORTED_MODULE_9__.renderDownload)(config.appStoreLink);

    _templates_modal_order__WEBPACK_IMPORTED_MODULE_10__.ModalOrder.renderModal(config.plans);
};

/***/ }),

/***/ "./src/components/organisms/ad-countdown-timer/index.js":
/*!**************************************************************!*\
  !*** ./src/components/organisms/ad-countdown-timer/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownTimer": () => (/* binding */ CountdownTimer),
/* harmony export */   "renderAdCountdownTimer": () => (/* binding */ renderAdCountdownTimer)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/ad-countdown-timer/styles.css");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/utils */ "./src/utils/index.js");




class CountdownTimer {
    #dom = {
        timerElement: document.getElementById("ad-countdown-timer"),
        daysElem: document.getElementById("timer-days"),
        hoursElem: document.getElementById("timer-hours"),
        minutesElem: document.getElementById("timer-minutes"),
        secondsElem: document.getElementById("timer-seconds")
    };

    #timerEndDate;


    constructor() {
    }

    runTimer(timerEndDate) {
        this.#timerEndDate = timerEndDate;

        const timeSpan = this.#timerEndDate - new Date();
        if (timeSpan <= 0)
            this.#removeControlFromDom();
        else {
            this.#showControl();
            this.#setTimerValues(timeSpan);
            this.#runTimer();
        }
    }

    #runTimer() {
        const handler = setInterval(() => {
            const timeSpan = this.#timerEndDate - new Date();
            if (timeSpan <= 0) {
                this.#removeControlFromDom();
                clearInterval(handler);
                return;
            }

            this.#setTimerValues(timeSpan);
        }, 1000);
    }

    #setTimerValues(timeSpan) {
        const padWithZero = _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.String.padWithZero;
        const timeSpanParts = _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.Date.getTimeSpanParts(timeSpan);

        this.#dom.daysElem.textContent = padWithZero(timeSpanParts.days, 2);
        this.#dom.hoursElem.textContent = padWithZero(timeSpanParts.hours, 2);
        this.#dom.minutesElem.textContent = padWithZero(timeSpanParts.minutes, 2);
        this.#dom.secondsElem.textContent = padWithZero(timeSpanParts.seconds, 2);
    }

    #removeControlFromDom() {
        this.#dom.timerElement.remove();
    }

    #showControl() {
        this.#dom.timerElement.style.visibility = "visible";
    }
}


const renderAdCountdownTimer = (timerEndDate) => {
    const timer = new CountdownTimer();
    timer.runTimer(timerEndDate);
};

/***/ }),

/***/ "./src/components/organisms/app-preview/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/app-preview/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAppPreview": () => (/* binding */ renderAppPreview)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/app-preview/styles.css");
/* harmony import */ var _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/templates/modal-order */ "./src/components/templates/modal-order/index.js");




const renderAppPreview = () => {
    const btn = document.getElementById("app-preview-btn-buy-now");
    btn.onclick = () => _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_1__.ModalOrder.openModal();
};


/***/ }),

/***/ "./src/components/organisms/download/index.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/download/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDownload": () => (/* binding */ renderDownload)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/download/styles.css");



const renderDownload = (appStoreLink) => {
    const appStoreLinkElem = document.getElementById("download-app-store-link");
    appStoreLinkElem.setAttribute("href", appStoreLink);
};

/***/ }),

/***/ "./src/components/organisms/header-nav-bar/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/header-nav-bar/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeaderNavBar": () => (/* binding */ renderHeaderNavBar)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/header-nav-bar/styles.css");



const renderHeaderNavBar = (appStoreLink) => {
    setOpenCloseMenuHandlers();
    setButtonsHandlers(appStoreLink);
};

const setOpenCloseMenuHandlers = () => {
    const btnBurgerMenu = document.getElementById("burger-menu-btn");
    btnBurgerMenu.onclick = toggleMobileNavMenu;

    const navLinks = document.querySelectorAll("#header-nav-bar__menu a");
    Array.from(navLinks)
        .forEach(x => x.onclick = toggleMobileNavMenu);
};

const toggleMobileNavMenu = () => {
    const menu = document.getElementById("header-nav-bar__menu");
    menu.classList.toggle("nav-bar__menu_active");
};

const setButtonsHandlers = (appStoreLink) => {
    const btnGetApp = document.getElementById("nav-btn-get-app");
    btnGetApp.onclick = () => window.open(appStoreLink, "_blank", "noopener,noreferrer");
};

/***/ }),

/***/ "./src/components/organisms/pricing/index.js":
/*!***************************************************!*\
  !*** ./src/components/organisms/pricing/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPricing": () => (/* binding */ renderPricing)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/pricing/styles.css");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/templates/modal-order */ "./src/components/templates/modal-order/index.js");





const renderPricing = (plans) => {

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-title1", plans[0].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-price1", "$" + plans[0].price);

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-title2", plans[1].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-price2", "$" + plans[1].price);

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-title3", plans[2].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("pricing-plan-price3", "$" + plans[2].price);


    document.getElementById("pricing-btn-plan1")
        .onclick = () => _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_2__.ModalOrder.openModal(1);

    document.getElementById("pricing-btn-plan2")
        .onclick = () => _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_2__.ModalOrder.openModal(2);

    document.getElementById("pricing-btn-plan3")
        .onclick = () => _src_components_templates_modal_order__WEBPACK_IMPORTED_MODULE_2__.ModalOrder.openModal(3);
};



/***/ }),

/***/ "./src/components/organisms/testimonials/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/testimonials/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTestimonials": () => (/* binding */ renderTestimonials)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/testimonials/styles.css");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/utils */ "./src/utils/index.js");




const renderTestimonials = (testimonials) => {

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-comment1", testimonials[0].text);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-name1", testimonials[0].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-job1", testimonials[0].job);

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-comment2", testimonials[1].text);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-name2", testimonials[1].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-job2", testimonials[1].job);

    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-comment3", testimonials[2].text);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-name3", testimonials[2].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("user-card-job3", testimonials[2].job);
};

/***/ }),

/***/ "./src/components/organisms/theme-demo/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/theme-demo/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderThemeDemoBlock": () => (/* binding */ renderThemeDemoBlock)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/organisms/theme-demo/styles.css");



const themeBlock = document.getElementById("theme-demo-block");
const otherThemeLabel = document.getElementById("theme-demo-other-theme-name");
const currentThemeLabel = document.getElementById("theme-demo-name");


const renderThemeDemoBlock = () => {
    const btnLightMode = document.getElementById("theme-demo-button-light-mode");
    btnLightMode.onclick = setLightTheme;

    const btnDarkMode = document.getElementById("theme-demo-button-dark-mode");
    btnDarkMode.onclick = setDarkTheme;
};


const setLightTheme = () => {
    themeBlock.classList.add("theme-demo_light-theme");
    themeBlock.classList.remove("theme-demo_dark-theme");
    otherThemeLabel.textContent = "dark";
    currentThemeLabel.textContent = "Light mode";
};

const setDarkTheme = () => {
    themeBlock.classList.add("theme-demo_dark-theme");
    themeBlock.classList.remove("theme-demo_light-theme");
    otherThemeLabel.textContent = "light";
    currentThemeLabel.textContent = "Dark mode";
};



/***/ }),

/***/ "./src/components/templates/modal-order/index.js":
/*!*******************************************************!*\
  !*** ./src/components/templates/modal-order/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOrder": () => (/* binding */ ModalOrder)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/components/templates/modal-order/styles.css");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/utils */ "./src/utils/index.js");
/* harmony import */ var _validation_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/validator */ "./src/components/templates/modal-order/validation/validator.js");
/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/api */ "./src/api/index.js");






let plansConfig = [];

const renderModal = (plans) => {
    plansConfig = plans;
    setOutSideClickHandler();
    setCloseButtonHandler();
    renderPlanRadioButtons();
    setFormSubmitHandler();
};


const setOutSideClickHandler = () => {
    const modal = document.getElementById("modal-order");
    document.addEventListener("click", (e) => {
        if (modal.classList.contains("modal-order_open")) {
            if (e.target.matches("modal-order-container")
                || !e.target.closest("#modal-order-container")) {
                closeModal();
            }
        }
    }, true);
};

const setCloseButtonHandler = () => {
    const btnClose = document.getElementById("modal-order-close-btn");
    btnClose.onclick = closeModal;
};

const renderPlanRadioButtons = () => {
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("plan-radio-button-label1", plansConfig[0].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("plan-radio-button-label2", plansConfig[1].name);
    _src_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.setTextToElement("plan-radio-button-label3", plansConfig[2].name);

    document.getElementById("btn-plan-1")
        .setAttribute("value", plansConfig[0].name);

    document.getElementById("btn-plan-2")
        .setAttribute("value", plansConfig[1].name);

    document.getElementById("btn-plan-3")
        .setAttribute("value", plansConfig[2].name);
};


const setFormSubmitHandler = () => {
    const form = document.getElementById("modal-order-form");

    form.onsubmit = (e) => {
        e.preventDefault(); // прервать перезагрузку страницы
        _validation_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.clearErrorsAll();

        // таймаут для анимации мигания перед валидацией
        setTimeout(() => {
            const isValid = _validation_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.validateAll();
            if (isValid) {
                setActivityIndicator(true);
                void postFormData(form);
            }
        }, 70);
    };
};

const setActivityIndicator = (isVisible) => {
    const activityIndicator = document.getElementById("modal-order-activity-indicator");
    activityIndicator.style.visibility = isVisible ? "visible" : "hidden";
};

const postFormData = async (form) => {
    const submitButton = document.getElementById("modal-order-submit-button");
    submitButton.disabled = true;

    const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        plan: form.elements.plan.value,
        infoSources: Array.from(form.elements.srcInfo)
            .filter(x => x.checked)
            .map(x => x.value)
    };

    const response = await _src_api__WEBPACK_IMPORTED_MODULE_3__.Api.sendPurchaseGoods(formData);
    console.log("Posted Form Data", response, formData);
    submitButton.disabled = false;
    closeModal();
};


/**
 * @param {number} [selectedPlan]
 */
const openModal = (selectedPlan) => {
    const modal = document.getElementById("modal-order");
    modal.classList.add("modal-order_open");
    document.body.classList.add("modal-open");

    setPlan(selectedPlan);
};

/**
 * @param {number} [selectedPlan]
 */
const setPlan = (selectedPlan) => {
    if (!selectedPlan) {
        setMostExpensivePlan();
    } else {
        const form = document.getElementById("modal-order-form");
        const plan = plansConfig[selectedPlan - 1];
        const radio = Array.from(form.elements.plan)
            .find(x => x.value === plan.name);

        if (radio)
            radio.checked = true;
    }
};

const setMostExpensivePlan = () => {
    const form = document.getElementById("modal-order-form");
    const sortedByPrice = plansConfig.slice()
        .sort((x, y) => y.price - x.price);

    const radio = Array.from(form.elements.plan)
        .find(x => x.value === sortedByPrice[0].name);

    if (radio)
        radio.checked = true;
};


const closeModal = () => {
    const modalOrder = document.getElementById("modal-order");
    document.body.classList.remove("modal-open");
    modalOrder.classList.remove("modal-order_open");
    setActivityIndicator(false);
    resetState();
};

const resetState = () => {
    const form = document.getElementById("modal-order-form");
    form.reset();
    _validation_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.clearErrorsAll();
};


const ModalOrder = {
    renderModal,
    openModal,
    closeModal
};

/***/ }),

/***/ "./src/components/templates/modal-order/validation/rules.js":
/*!******************************************************************!*\
  !*** ./src/components/templates/modal-order/validation/rules.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rule": () => (/* binding */ Rule)
/* harmony export */ });
const Rule = Object.freeze({
    required: (value) => !value ? "this field is required*" : "",

    atLeast: (num) => (value) => (value?.length < num)
        ? `should be at least ${num} symbols`
        : "",

    checkedAtLeastOnce: (boxes) =>
        !Array.from(boxes).some(box => box.checked)
            ? "this field is required*"
            : "",

    email: (email) => {
        return !emailRegex.test(email)
            ? "email"
            : "";
    }
});



/* eslint-disable */
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
/* eslint-enable */

/***/ }),

/***/ "./src/components/templates/modal-order/validation/validator.js":
/*!**********************************************************************!*\
  !*** ./src/components/templates/modal-order/validation/validator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validator": () => (/* binding */ Validator)
/* harmony export */ });
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules */ "./src/components/templates/modal-order/validation/rules.js");



class InputValidator {
    #fields = {
        name: {
            elements: {
                input: document.getElementById("modal-order-input-name"),
                status: document.getElementById("modal-order-input-name-err")
            },
            rules: [_rules__WEBPACK_IMPORTED_MODULE_0__.Rule.required, _rules__WEBPACK_IMPORTED_MODULE_0__.Rule.atLeast(3)],
            errorText: ""
        },
        email: {
            elements: {
                input: document.getElementById("modal-order-input-email"),
                status: document.getElementById("modal-order-input-email-err")
            },
            rules: [_rules__WEBPACK_IMPORTED_MODULE_0__.Rule.required, _rules__WEBPACK_IMPORTED_MODULE_0__.Rule.atLeast(3)],
            errorText: ""
        }
    };

    get fields() {
        return this.#fields;
    }

    validate(fieldName) {
        this.#fields[fieldName].errorText = this.#getErrorText(fieldName);
        this.#renderError(fieldName);
    }

    clearError(fieldName) {
        this.#fields[fieldName].errorText = "";
        this.#renderError(fieldName);
    }

    #renderError(fieldName) {
        const {status, input} = this.#fields[fieldName].elements;
        const {errorText} = this.#fields[fieldName];

        if (errorText)
            input.classList.add("input-default_error");
        else
            input.classList.remove("input-default_error");

        status.textContent = errorText;
    };

    #getErrorText(fieldName) {
        const rules = this.#fields[fieldName].rules;
        const value = this.#fields[fieldName].elements.input.value;

        let errorText = "";

        rules.some(rule => {
            errorText = rule(value);
            return errorText;
        });

        return errorText;
    };
}


class CheckBoxValidator {
    #fields = {
        srcInfo: {
            elements: {
                boxes: document.getElementById("modal-order-form").elements.srcInfo,
                status: document.getElementById("modal-order-checkbox-src")
            },
            rules: [_rules__WEBPACK_IMPORTED_MODULE_0__.Rule.checkedAtLeastOnce],
            errorText: ""
        }
    };

    get fields() {
        return this.#fields;
    }

    validate(fieldName) {
        this.#fields[fieldName].errorText = this.#getErrorText(fieldName);
        this.#renderError(fieldName);
    }

    clearError(fieldName) {
        this.#fields[fieldName].errorText = "";
        this.#renderError(fieldName);
    }

    #renderError(fieldName) {
        const {status} = this.#fields[fieldName].elements;
        const {errorText} = this.#fields[fieldName];
        status.textContent = errorText;
    };

    #getErrorText(fieldName) {
        const rules = this.#fields[fieldName].rules;
        const boxes = this.#fields[fieldName].elements.boxes;

        let errorText = "";

        rules.some(rule => {
            errorText = rule(boxes);
            return errorText;
        });

        return errorText;
    };
}


const validate = (validator) => {
    Object.keys(validator.fields)
        .forEach(field => validator.validate(field));

    return Object.values(validator.fields)
        .every(field => !field.errorText);
};

const clearErrors = (validator) => {
    Object.keys(validator.fields)
        .forEach(field => validator.clearError(field));
};


const Validator = {
    validateAll: () => {
        let isValid = validate(new InputValidator());
        isValid &= validate(new CheckBoxValidator());
        return isValid;

    },
    clearErrorsAll: () => {
        clearErrors(new InputValidator());
        clearErrors(new CheckBoxValidator());
    }
};

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConfig": () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");



/**
 * @typedef Testimonial
 * @property {string} name
 * @property {string} text
 * @property {string} job
 */

/**
 * @typedef Plan
 * @property {string} name
 * @property {number} price
 */

/**
 * @typedef Config
 * @property {Plan[]} plans
 * @property {Testimonial[]} testimonials
 * @property {Date} timerEndDate
 * @property {string} appStoreLink
 */


/**
 * @returns {Promise<Config>}
 */
const getConfig = async () => {
    const response = await fetch("./config.json");
    const config = await response.json();
    config.timerEndDate = (config.timerEndDate)
        ? _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.Date.parseDateWithDefaultFormat(config.timerEndDate)
        : new Date();

    return config;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/**
 * Парсинг строки в дату по дефолтному формату.
 * @param {string} dateTimeStr - Дата-время в формате dd.MM.yyyy HH:mm
 * @returns {Date} - Объект даты
 */
const parseDateWithDefaultFormat = (dateTimeStr) => {
    const regexFormat = /(\d{2})\.(\d{2})\.(\d{4}) +(\d{2}):(\d{2})/;

    const [day, month, year, hour, minute] = regexFormat.exec(dateTimeStr)
        .splice(1)
        .map(x => Number(x));

    return new Date(year, month - 1, day, hour, minute);
};

/**
 * @param {number} timeSpan
 * @returns {{hours: number, seconds: number, minutes: number, days: number}}
 */
const getTimeSpanParts = (timeSpan) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        days: Math.floor(timeSpan / day),
        hours: Math.floor((timeSpan % day) / hour),
        minutes: Math.floor((timeSpan % hour) / minute),
        seconds: Math.floor((timeSpan % minute) / second)
    };
};


/**
 * Приводит число к строке заполняя leading zeroes под указанную длину.
 * @param {number} num - Число
 * @param {number} targetLength - Длина строки
 * @returns {string} - Число в виде строки с leading zeroes
 */
const padWithZero = (num, targetLength) => {
    return String(num).padStart(targetLength, "0");
};

/**
 * @param {string} elemId - Id html элемента
 * @param {string} text - текст
 */
const setTextToElement = (elemId, text) => {
    document.getElementById(elemId).textContent = text;
};


const Utils = {
    Date: {
        parseDateWithDefaultFormat,
        getTimeSpanParts
    },
    String: {
        padWithZero
    },
    setTextToElement
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/styles/index.css */ "./src/shared/styles/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app/index.js");





document.addEventListener("DOMContentLoaded", _app__WEBPACK_IMPORTED_MODULE_2__.app);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map