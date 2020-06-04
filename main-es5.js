function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _emoji_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./emoji.pipe */
    "./src/app/emoji.pipe.ts");

    function AppComponent_mat_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var l_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", l_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r1.label);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(translocoService) {
        _classCallCheck(this, AppComponent);

        this.translocoService = translocoService;
        this.title = 'ashchuk🇺🇸🇬🇧🇫🇷'; // the locales the app supports

        this.locales = [{
          label: '🇬🇧 English',
          value: 'en-GB'
        }, {
          label: '🇷🇺 Русский',
          value: 'ru-RU'
        }]; // the user's locale

        this.detectedLocale = ''; // the default locale

        this.locale = this.locales[0].value;
        this.detectedLocale = this.getUsersLocale('en-GB'); // generate a regex from the locales we support

        var supportedRegex = new RegExp('^' + this.locales.map(function (l) {
          return l.value.substring(0, 2);
        }).join('|^')); // check if the user's preferred language is supported and if so, use it.

        if (this.detectedLocale.match(supportedRegex)) {
          this.updateLocale(this.detectedLocale);
        }
      }

      _createClass(AppComponent, [{
        key: "getUsersLocale",
        value: function getUsersLocale(defaultValue) {
          if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return defaultValue;
          }

          var wn = window.navigator;
          var lang = wn.languages ? wn.languages[0] : defaultValue;
          lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
          return lang;
        } // change locale/language at runtime

      }, {
        key: "updateLocale",
        value: function updateLocale(locale) {
          console.log('update locale', locale);

          if (this.locales.some(function (l) {
            return l.value === locale;
          })) {
            this.locale = locale;
          }

          var lang = locale.substring(0, 2);
          this.translocoService.setActiveLang(lang);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 266,
      vars: 107,
      consts: [[1, "intro"], [1, "language-selector"], [1, "select-css", 3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "intro-row"], [1, "emoji-large", 3, "innerHTML"], ["role", "main", 1, "content"], [1, "card-container"], ["target", "_blank", "rel", "noopener", "href", "https://blog.ashchuk.space", 1, "card"], ["target", "_blank", "rel", "noopener", "href", "https://github.com/ashchuk/", 1, "card"], ["target", "_blank", "rel", "noopener", "href", "https://ashchuk.github.io/resume.pdf", 1, "card"], ["target", "_blank", "rel", "noopener", "href", "https://www.meetup.com/ru-RU/GDG-Tula/", 1, "card"], [1, "item-card"], ["mat-card-image", "", "src", "./assets/img/webchat.png", "alt", "WebRTC web chat app"], [1, "button-row"], ["mat-stroked-button", "", "href", "https://github.com/ashchuk/react-webrtc-chat", "color", "primary", "target", "_blank", 1, "mat-button"], ["mat-stroked-button", "", "href", "https://webchat.compositekey.tech/", "color", "primary", "target", "_blank", 1, "mat-button"], ["mat-stroked-button", "", "href", "https://www.youtube.com/playlist?list=PLFPNh6kYREgvtj85gA_wE7WLXu8f0gpnz", "color", "primary", "target", "_blank", 1, "mat-button"], [1, "project-description"], ["mat-card-image", "", "src", "./assets/img/uwpeditor.png", "alt", "UWP image editor app"], ["mat-stroked-button", "", "href", "https://github.com/ashchuk/UWPImageEditor", "color", "primary", "target", "_blank", 1, "mat-button"], ["mat-card-image", "", "src", "./assets/img/cuckooapp.png", "alt", "Android notification app"], ["mat-stroked-button", "", "href", "https://github.com/ashchuk/CuckooApp", "color", "primary", "target", "_blank", 1, "mat-button"], ["mat-card-image", "", "src", "./assets/img/photosender.png", "alt", "Android photo sharing app"], ["mat-stroked-button", "", "href", "https://www.google.com/", "color", "primary", "target", "_blank", 1, "mat-button"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [3, "value"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_2_listener($event) {
            return ctx.updateLocale($event.value);
          })("valueChange", function AppComponent_Template_mat_select_valueChange_2_listener($event) {
            return ctx.locale = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_mat_option_3_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "emoji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Meetup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "YouTube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "NodeJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "WebRTC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Kubernetes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Helm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Docker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "websocket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Web app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Peer to peer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Let's Encrypt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](127, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "UWP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "XAML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Unity DI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "MVVM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Win2D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Canvas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Windows 10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Image editor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](162, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](167, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](174, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Dagger2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "RxJava2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Moxy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Retrofit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "AAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "ButterKnife");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Firebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](198, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Widgets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Material Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](214, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](217, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](222, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](229, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "GLES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "OkHttp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Gson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Python");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "MongoDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Tornado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Pillow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](251, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Mobile app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "OpenGL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "OpenShift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "svg", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.locale);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.locales);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 37, "greetings"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 39, "1F44B"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 41, "about.0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 43, "about.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 45, "about.2.1"), "\uD83E\uDDEA ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 47, "about.2.2"), "\uD83D\uDEF9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 49, "about.3.1"), "\uD83D\uDCC8", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 51, "about.3.2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 53, "about.4.1"), "\uD83D\uDCD6", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 55, "about.4.2"), "\uD83D\uDCAA", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 57, "about.4.3"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 59, "about.5.1"), "\uD83D\uDD27", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 61, "about.5.2"), "\uD83C\uDF0D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 63, "resources.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 65, "resources.subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 67, "project1.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 69, "project1.subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 71, "project1.description"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 73, "stack"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 75, "keywords"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 77, "project2.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 79, "project2.subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 81, "project2.description"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](127, 83, "stack"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 85, "keywords"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](159, 87, "project3.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](162, 89, "project3.subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](167, 91, "project3.description"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](174, 93, "stack"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](198, 95, "keywords"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](214, 97, "project4.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](217, 99, "project4.subtitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](222, 101, "project4.description"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](229, 103, "stack"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](251, 105, "keywords"));
        }
      },
      directives: [_angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoPipe"], _emoji_pipe__WEBPACK_IMPORTED_MODULE_10__["EmojiPipe"]],
      styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-top: 16px;\n}\n\n.inline-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.intro-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nmat-chip[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n\n.skills-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.emoji-large[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  margin: 0 8px;\n}\n\n.emoji-small[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  margin: 0 4px;\n}\n\n.language-selector[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 32px auto;\n  align-items: center;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 24px;\n  max-width: 300px;\n}\n\n.project-description-header[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.project-description-text[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  position: fixed;\n  padding: 16px;\n  width: 500px;\n  left: 100px;\n  flex-direction: column;\n  align-items: center;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px 0 650px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n\n.item-card[_ngcontent-%COMP%] {\n  margin: 8px 8px;\n  max-width: 300px;\n}\n\n.item-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 160px;\n  margin: 0 8px 16px;\n  padding: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 16px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n  color: #125699;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    flex-direction: column;\n    margin-top: 16px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .intro[_ngcontent-%COMP%] {\n    position: static;\n    padding: 32px 32px 0 32px;\n    margin: 32px 32px 0 32px;\n    width: auto;\n    left: auto;\n    flex-direction: column;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 0 16px;\n    margin: 48px auto 32px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGNodWsvcHJvai9hc2hjaHVrLmdpdGh1Yi5pby9hc2hjaHVrL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQywwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxTQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1NGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUNFLE9BQUE7QUNXRjs7QURUQTtFQUNFLGlCQUFBO0FDWUY7O0FEVkE7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFpBO0VBQ0UsZ0JBQUE7QUNlRjs7QURiQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ2lCRjs7QURmQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDa0JGOztBRGhCRTtFQUNFLGlCQUFBO0FDa0JKOztBRGZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGhCQTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNtQkY7O0FEakJBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQ29CRjs7QURsQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxlQUFBO0FDc0JGOztBRHBCQTtFQUNFLGVBQUE7QUN1QkY7O0FEckJFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQ3VCSjs7QURyQkk7RUFDRSxhQUFBO0FDdUJOOztBRHJCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN3QkY7O0FEdEJFO0VBQ0UsaUJBQUE7QUN3Qko7O0FEdEJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDeUJGOztBRHZCRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ3lCSjs7QUR2QkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDeUJKOztBRHZCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDMEJGOztBRHhCQSxzQkFBQTs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUMyQkY7QUFDRjs7QUQxQkE7RUFFRTtJQUNFLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0Esc0JBQUE7RUMyQkY7O0VEekJBO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDNEJGO0FBQ0Y7O0FEM0JBO0VBRUU7SUFDRSxXQUFBO0VDNEJGOztFRHpCRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDNEJKO0VEMUJFO0lBQ0UsaUJBQUE7RUM0Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxcOmhvc3RcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiXG4gIGZvbnQtc2l6ZTogMTRweFxuICBjb2xvcjogIzMzM1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGVcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxuICBtYXJnaW46IDhweCAwXG5cbnBcbiAgbWFyZ2luOiAwXG5cbm1hdC1kaXZpZGVyXG4gIHdpZHRoOiA4MCVcbiAgbWFyZ2luLXRvcDogMTZweFxuXG5cbi5pbmxpbmUtdGV4dFxuICB3aGl0ZS1zcGFjZTogbm93cmFwXG5cbi5pbnRyby1yb3dcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWRpcmVjdGlvbjogcm93XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxubWF0LWNoaXBcbiAgbWFyZ2luOiA0cHhcblxuLnNraWxscy1hcmVhXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC13cmFwOiB3cmFwXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcblxuLmVtb2ppLWxhcmdlXG4gIGhlaWdodDogMzJweFxuICB3aWR0aDogMzJweFxuICBtYXJnaW46IDAgOHB4XG5cbi5lbW9qaS1zbWFsbFxuICBoZWlnaHQ6IDI0cHhcbiAgd2lkdGg6IDI0cHhcbiAgbWluLWhlaWdodDogMjRweFxuICBtaW4td2lkdGg6IDI0cHhcbiAgbWFyZ2luOiAwIDRweFxuXG4ubGFuZ3VhZ2Utc2VsZWN0b3JcbiAgd2lkdGg6IDEwMHB4XG4gIG1hcmdpbjogMzJweCBhdXRvXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuLnNwYWNlclxuICBmbGV4OiAxXG5cbi5tYXQtYnV0dG9uXG4gIG1hcmdpbi1yaWdodDogOHB4XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uXG4gIGZsZXg6IDFcbiAgbWFyZ2luLWxlZnQ6IDI0cHhcbiAgbWF4LXdpZHRoOiAzMDBweFxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1oZWFkZXJcbiAgbWFyZ2luLXRvcDogOHB4XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLXRleHRcbiAgbWFyZ2luLXRvcDogMzJweFxuXG4uaW50cm9cbiAgcG9zaXRpb246IGZpeGVkXG4gIHBhZGRpbmc6IDE2cHhcbiAgd2lkdGg6IDUwMHB4XG4gIGxlZnQ6IDEwMHB4XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXBcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZFxuXG4uY29udGVudFxuICBkaXNwbGF5OiBmbGV4XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHhcbiAgcGFkZGluZzogMCAxNnB4IDAgNjUwcHhcbiAgbWF4LXdpZHRoOiA5NjBweFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcblxuc3ZnLm1hdGVyaWFsLWljb25zXG4gIGhlaWdodDogMjRweFxuICB3aWR0aDogYXV0b1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKVxuICAgIG1hcmdpbi1yaWdodDogOHB4XG5cblxuLml0ZW0tY2FyZFxuICBtYXJnaW46IDhweCA4cHhcbiAgbWF4LXdpZHRoOiAzMDBweFxuXG4uaXRlbS1oZWFkZXItaW1hZ2VcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJylcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuXG4uY2FyZFxuICBib3JkZXItcmFkaXVzOiA0cHhcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhXG4gIGhlaWdodDogNDBweFxuICB3aWR0aDogMTYwcHhcbiAgbWFyZ2luOiAwIDhweCAxNnB4XG4gIHBhZGRpbmc6IDhweFxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxuICBsaW5lLWhlaWdodDogMjRweFxuXG4uY2FyZC1jb250YWluZXJcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LXdyYXA6IHdyYXBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xuICBtYXJnaW4tdG9wOiAxNnB4XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpXG4gIG1hcmdpbi1yaWdodDogMFxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZClcbiAgY3Vyc29yOiBwb2ludGVyXG5cbiAgJjpob3ZlclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KVxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KVxuXG4gICAgLm1hdGVyaWFsLWljb25zIHBhdGhcbiAgICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyXG4gIGNvbG9yOiB3aGl0ZVxuICBmb250LXdlaWdodDogNjAwXG4gIGJvcmRlcjogbm9uZVxuICB3aWR0aDogYXV0b1xuICBtaW4td2lkdGg6IDMwJVxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuICBzcGFuXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHhcblxuYVxuICBjb2xvcjogIzE5NzZkMlxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcblxuICAmOnZpc2l0ZWRcbiAgICBjb2xvcjogIzE5NzZkMlxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuXG4gICY6aG92ZXJcbiAgICBjb2xvcjogIzE5NzZkMlxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgIGNvbG9yOiAjMTI1Njk5XG5cbnN2ZyNjbG91ZHNcbiAgcG9zaXRpb246IGZpeGVkXG4gIGJvdHRvbTogLTE2MHB4XG4gIGxlZnQ6IC0yMzBweFxuICB6LWluZGV4OiAtMTBcbiAgd2lkdGg6IDE5MjBweFxuXG4vKiBSZXNwb25zaXZlIFN0eWxlc1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KVxuICAuY2FyZC1jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC13cmFwOiB3cmFwXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgbWFyZ2luLXRvcDogMTZweFxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpXG5cbiAgLmludHJvXG4gICAgcG9zaXRpb246IHN0YXRpY1xuICAgIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHhcbiAgICBtYXJnaW46IDMycHggMzJweCAwIDMycHhcbiAgICB3aWR0aDogYXV0b1xuICAgIGxlZnQ6IGF1dG9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG5cbiAgLmNvbnRlbnRcbiAgICBwYWRkaW5nOiAwIDE2cHhcbiAgICBtYXJnaW46IDQ4cHggYXV0byAzMnB4XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KVxuXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksIC50ZXJtaW5hbFxuICAgIHdpZHRoOiAxMDAlXG5cbiAgLmNhcmRcbiAgICAmOm5vdCguaGlnaGxpZ2h0LWNhcmQpXG4gICAgICBoZWlnaHQ6IDE2cHhcbiAgICAgIG1hcmdpbjogOHB4IDBcblxuICAgICYuaGlnaGxpZ2h0LWNhcmQgc3BhblxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHhcbiIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmlubGluZS10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmludHJvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1jaGlwIHtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5za2lsbHMtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5lbW9qaS1sYXJnZSB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5lbW9qaS1zbWFsbCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgbWFyZ2luOiAwIDRweDtcbn1cblxuLmxhbmd1YWdlLXNlbGVjdG9yIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5pbnRybyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBsZWZ0OiAxMDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA4MnB4IGF1dG8gMzJweDtcbiAgcGFkZGluZzogMCAxNnB4IDAgNjUwcHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgbWFyZ2luOiA4cHggOHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uaXRlbS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjNjk2NzY3O1xufVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOnZpc2l0ZWQge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0xNjBweDtcbiAgbGVmdDogLTIzMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaW50cm8ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgICBtYXJnaW46IDMycHggMzJweCAwIDMycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBtYXJnaW46IDQ4cHggYXV0byAzMnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspLCAudGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], function () {
        return [{
          type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_1__["TranslocoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _transloco_root_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./transloco-root.module */
    "./src/app/transloco-root.module.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _emoji_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./emoji.pipe */
    "./src/app/emoji.pipe.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_11__["TranslocoRootModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _emoji_pipe__WEBPACK_IMPORTED_MODULE_14__["EmojiPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_11__["TranslocoRootModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _emoji_pipe__WEBPACK_IMPORTED_MODULE_14__["EmojiPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _transloco_root_module__WEBPACK_IMPORTED_MODULE_11__["TranslocoRootModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/emoji.pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/emoji.pipe.ts ***!
    \*******************************/

  /*! exports provided: EmojiPipe */

  /***/
  function srcAppEmojiPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmojiPipe", function () {
      return EmojiPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var EmojiPipe = /*#__PURE__*/function () {
      function EmojiPipe(domSanitizer) {
        _classCallCheck(this, EmojiPipe);

        this.domSanitizer = domSanitizer;
      }

      _createClass(EmojiPipe, [{
        key: "transform",
        value: function transform(codePoint) {
          var castedCode = twemoji.convert.fromCodePoint(codePoint);
          return this.domSanitizer.bypassSecurityTrustHtml(twemoji.parse(castedCode, {
            folder: 'svg',
            ext: '.svg'
          }));
        }
      }]);

      return EmojiPipe;
    }();

    EmojiPipe.ɵfac = function EmojiPipe_Factory(t) {
      return new (t || EmojiPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    EmojiPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "emoji",
      type: EmojiPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmojiPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'emoji'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/transloco-root.module.ts":
  /*!******************************************!*\
    !*** ./src/app/transloco-root.module.ts ***!
    \******************************************/

  /*! exports provided: TranslocoHttpLoader, TranslocoRootModule */

  /***/
  function srcAppTranslocoRootModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslocoHttpLoader", function () {
      return TranslocoHttpLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslocoRootModule", function () {
      return TranslocoRootModule;
    });
    /* harmony import */


    var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngneat/transloco */
    "./node_modules/@ngneat/transloco/__ivy_ngcc__/fesm2015/ngneat-transloco.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TranslocoHttpLoader = /*#__PURE__*/function () {
      function TranslocoHttpLoader(http) {
        _classCallCheck(this, TranslocoHttpLoader);

        this.http = http;
      }

      _createClass(TranslocoHttpLoader, [{
        key: "getTranslation",
        value: function getTranslation(lang) {
          return this.http.get("/assets/i18n/".concat(lang, ".json"));
        }
      }]);

      return TranslocoHttpLoader;
    }();

    TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) {
      return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    TranslocoHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TranslocoHttpLoader,
      factory: TranslocoHttpLoader.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslocoHttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();

    var TranslocoRootModule = function TranslocoRootModule() {
      _classCallCheck(this, TranslocoRootModule);
    };

    TranslocoRootModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TranslocoRootModule
    });
    TranslocoRootModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TranslocoRootModule_Factory(t) {
        return new (t || TranslocoRootModule)();
      },
      providers: [{
        provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_CONFIG"],
        useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["translocoConfig"])({
          availableLangs: ['en', 'ru'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
        })
      }, {
        provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_LOADER"],
        useClass: TranslocoHttpLoader
      }],
      imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TranslocoRootModule, {
        exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslocoRootModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TranslocoModule"]],
          providers: [{
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_CONFIG"],
            useValue: Object(_ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["translocoConfig"])({
              availableLangs: ['en', 'ru'],
              defaultLang: 'en',
              // Remove this option if your application doesn't support changing language in runtime.
              reRenderOnLangChange: true,
              prodMode: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production
            })
          }, {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_0__["TRANSLOCO_LOADER"],
            useClass: TranslocoHttpLoader
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ashchuk/proj/ashchuk.github.io/ashchuk/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map