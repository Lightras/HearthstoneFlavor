(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\HSAPI\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "LEUU":
/*!************************************!*\
  !*** ./src/app/hs-json.service.ts ***!
  \************************************/
/*! exports provided: HsJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HsJsonService", function() { return HsJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var hearthstonejson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hearthstonejson-client */ "SKpc");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal-compatibility */ "w0v+");






class HsJsonService {
    constructor(http) {
        this.http = http;
        this.hsjson = new hearthstonejson_client__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    getAllCards() {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__["fromPromise"])(this.hsjson.get(58213));
    }
    getArt(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            contentType: 'image/png'
        });
        const options = { responseType: 'text', headers };
        // @ts-ignore
        return this.http.get('https://cors-anywhere.herokuapp.com/https://art.hearthstonejson.com/v1/orig/EX1_001.png', options);
    }
}
HsJsonService.ɵfac = function HsJsonService_Factory(t) { return new (t || HsJsonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HsJsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HsJsonService, factory: HsJsonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HsJsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OJs1":
/*!**************************************!*\
  !*** ./src/app/blizz-api.service.ts ***!
  \**************************************/
/*! exports provided: BlizzApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlizzApiService", function() { return BlizzApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BlizzApiService {
    constructor(http) {
        this.http = http;
    }
    getCards() {
        return this.http.get('/blizzAPI/hearthstone/cards');
    }
    getCard(id) {
        return this.http.get(`/blizzAPI/hearthstone/cards?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(cardsResponse => {
            if (cardsResponse.cardCount === 0) {
                console.error(`No such card: id ${id}`);
            }
            else {
                return cardsResponse.cards[0];
            }
        }));
    }
    getMetaData() {
        return this.http.get('/blizzAPI/hearthstone/metadata');
    }
}
BlizzApiService.ɵfac = function BlizzApiService_Factory(t) { return new (t || BlizzApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BlizzApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlizzApiService, factory: BlizzApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlizzApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.service */ "khYj");
/* harmony import */ var _blizz_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blizz-api.service */ "OJs1");
/* harmony import */ var _hs_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hs-json.service */ "LEUU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _art_display_art_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./art-display/art-display.component */ "al0w");







function AppComponent_app_art_display_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-art-display", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_app_art_display_2_Template_app_art_display_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.refreshCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx_r0.displayCard);
} }
class AppComponent {
    constructor(authService, blizzAPI, hsJsonService) {
        this.authService = authService;
        this.blizzAPI = blizzAPI;
        this.hsJsonService = hsJsonService;
        this.title = 'HSAPI';
    }
    ngOnInit() {
        this.hsJsonService.getAllCards().subscribe(cards => {
            this.cards = cards;
            console.log('this.cards: ', this.cards);
            this.displayCard = this.getRandomCard();
        });
    }
    getRandomCard() {
        const cardsWithArt = this.cards.filter(card => card.artist);
        return cardsWithArt[Math.floor(Math.random() * cardsWithArt.length)];
    }
    refreshCard() {
        this.displayCard = this.getRandomCard();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blizz_api_service__WEBPACK_IMPORTED_MODULE_2__["BlizzApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hs_json_service__WEBPACK_IMPORTED_MODULE_3__["HsJsonService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "card", "click", 4, "ngIf"], [3, "card", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_art_display_2_Template, 1, 1, "app-art-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _art_display_art_display_component__WEBPACK_IMPORTED_MODULE_5__["ArtDisplayComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }, { type: _blizz_api_service__WEBPACK_IMPORTED_MODULE_2__["BlizzApiService"] }, { type: _hs_json_service__WEBPACK_IMPORTED_MODULE_3__["HsJsonService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization.service */ "khYj");
/* harmony import */ var _art_display_art_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./art-display/art-display.component */ "al0w");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _art_display_art_display_component__WEBPACK_IMPORTED_MODULE_5__["ArtDisplayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _art_display_art_display_component__WEBPACK_IMPORTED_MODULE_5__["ArtDisplayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "al0w":
/*!******************************************************!*\
  !*** ./src/app/art-display/art-display.component.ts ***!
  \******************************************************/
/*! exports provided: ArtDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtDisplayComponent", function() { return ArtDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ArtDisplayComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r0.card.flavor, "\"");
} }
class ArtDisplayComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.card) {
            this.isImgLoaded = false;
            console.log('FALSE');
        }
    }
    imgOnload() {
        this.isImgLoaded = true;
        console.log('TRUE');
    }
}
ArtDisplayComponent.ɵfac = function ArtDisplayComponent_Factory(t) { return new (t || ArtDisplayComponent)(); };
ArtDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtDisplayComponent, selectors: [["app-art-display"]], inputs: { card: "card" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 8, consts: [[1, "card-container"], [1, "card-name"], [1, "card-art-container"], ["alt", "", 1, "card-art", 3, "src", "load"], [1, "loading-overlay"], [1, "lds-roller"], ["class", "card-flavor", 4, "ngIf"], [1, "card-artist"], [1, "card-flavor"]], template: function ArtDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ArtDisplayComponent_Template_img_load_4_listener() { return ctx.imgOnload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ArtDisplayComponent_div_15_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("not-loaded", !ctx.isImgLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://art.hearthstonejson.com/v1/orig/", ctx.card.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loading", !ctx.isImgLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.flavor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Artist: ", ctx.card.artist, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: white;\n}\n\n.loading-overlay[_ngcontent-%COMP%]:not(.loading) {\n  display: none;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.card-art-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-art[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: fadeIn 3s ease;\n  height: min(512px, 100vw);\n  margin: 10px 0;\n}\n\n.card-art.not-loaded[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.card-flavor[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-style: italic;\n  text-align: center;\n}\n\n.card-artist[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0LWRpc3BsYXkvYXJ0LWRpc3BsYXkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBRW5CLGlCQUFpQjtBQUZwQjs7QUFSQTtFQWFNLGFBQWE7QUFEbkI7O0FBR0E7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUF6Qjs7QUFFQTtFQUNHLGtCQUFrQjtBQUNyQjs7QUFDQTtFQUNHLFVBQVU7RUFDVix5QkFBeUI7RUFFekIseUJBQVE7RUFFUixjQUFjO0FBQWpCOztBQU5BO0VBU00sa0JBQWtCO0FBQ3hCOztBQUNBO0VBQ0csZUFBZTtBQUVsQjs7QUFBQTtFQUNHLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBR3JCOztBQURBO0VBQ0csZUFBZTtFQUNmLGlCQUFpQjtBQUlwQjs7QUFGQTtFQUNHO0lBQ0csVUFBVTtFQUtkO0VBSEM7SUFDRyxVQUFVO0VBS2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FydC1kaXNwbGF5L2FydC1kaXNwbGF5LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGZpeGVkU2l6ZTogNTEycHg7XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgdG9wOiAwO1xuICAgYm90dG9tOiAwO1xuICAgbGVmdDogMDtcbiAgIHJpZ2h0OiAwO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICY6bm90KC5sb2FkaW5nKSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmNhcmQtYXJ0LWNvbnRhaW5lciB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNhcmQtYXJ0IHtcbiAgIG9wYWNpdHk6IDE7XG4gICBhbmltYXRpb246IGZhZGVJbiAzcyBlYXNlO1xuXG4gICBoZWlnaHQ6ICN7XCJtaW4oXCIgKyAkZml4ZWRTaXplICsgXCIsIDEwMHZ3KVwifTtcblxuICAgbWFyZ2luOiAxMHB4IDA7XG5cbiAgICYubm90LWxvYWRlZCB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH0gfVxuXG4uY2FyZC1uYW1lIHtcbiAgIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4uY2FyZC1mbGF2b3Ige1xuICAgZm9udC1zaXplOiAxN3B4O1xuICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5jYXJkLWFydGlzdCB7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAwJSB7XG4gICAgICBvcGFjaXR5OiAwOyB9XG5cbiAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTsgfSB9XG5cblxuIl19 */", ".lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: black;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0LWRpc3BsYXkvbG9hZGVyLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Y7O0FBQ0E7RUFDRyxnRUFBZ0U7RUFDaEUsMkJBQTJCO0FBRTlCOztBQUFBO0VBQ0csWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUd4Qjs7QUFEQTtFQUNHLHdCQUF3QjtBQUkzQjs7QUFGQTtFQUNHLFNBQVM7RUFDVCxVQUFVO0FBS2I7O0FBSEE7RUFDRyx3QkFBd0I7QUFNM0I7O0FBSkE7RUFDRyxTQUFTO0VBQ1QsVUFBVTtBQU9iOztBQUxBO0VBQ0csd0JBQXdCO0FBUTNCOztBQU5BO0VBQ0csU0FBUztFQUNULFVBQVU7QUFTYjs7QUFQQTtFQUNHLHdCQUF3QjtBQVUzQjs7QUFSQTtFQUNHLFNBQVM7RUFDVCxVQUFVO0FBV2I7O0FBVEE7RUFDRyx1QkFBdUI7QUFZMUI7O0FBVkE7RUFDRyxTQUFTO0VBQ1QsVUFBVTtBQWFiOztBQVhBO0VBQ0csd0JBQXdCO0FBYzNCOztBQVpBO0VBQ0csU0FBUztFQUNULFVBQVU7QUFlYjs7QUFiQTtFQUNHLHdCQUF3QjtBQWdCM0I7O0FBZEE7RUFDRyxTQUFTO0VBQ1QsVUFBVTtBQWlCYjs7QUFmQTtFQUNHLHdCQUF3QjtBQWtCM0I7O0FBaEJBO0VBQ0csU0FBUztFQUNULFVBQVU7QUFtQmI7O0FBakJBO0VBQ0c7SUFDRyx1QkFBdUI7RUFvQjNCO0VBbkJDO0lBQ0cseUJBQXlCO0VBcUI3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJ0LWRpc3BsYXkvbG9hZGVyLnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJvbGxlciB7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB3aWR0aDogODBweDtcbiAgIGhlaWdodDogODBweDsgfVxuXG4ubGRzLXJvbGxlciBkaXYge1xuICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDsgfVxuXG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgY29udGVudDogXCIgXCI7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHdpZHRoOiA3cHg7XG4gICBoZWlnaHQ6IDdweDtcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4OyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzOyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgdG9wOiA2M3B4O1xuICAgbGVmdDogNjNweDsgfVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcyczsgfVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgIHRvcDogNjhweDtcbiAgIGxlZnQ6IDU2cHg7IH1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7IH1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICB0b3A6IDcxcHg7XG4gICBsZWZ0OiA0OHB4OyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzOyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgdG9wOiA3MnB4O1xuICAgbGVmdDogNDBweDsgfVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzOyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgdG9wOiA3MXB4O1xuICAgbGVmdDogMzJweDsgfVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2czsgfVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgIHRvcDogNjhweDtcbiAgIGxlZnQ6IDI0cHg7IH1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7IH1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICB0b3A6IDYzcHg7XG4gICBsZWZ0OiAxN3B4OyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzOyB9XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgdG9wOiA1NnB4O1xuICAgbGVmdDogMTJweDsgfVxuXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art-display',
                templateUrl: './art-display.component.html',
                styleUrls: ['./art-display.component.sass', './loader.sass']
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "khYj":
/*!******************************************!*\
  !*** ./src/app/authorization.service.ts ***!
  \******************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class AuthorizationService {
    constructor(http) {
        this.http = http;
        this.region = 'eu';
    }
    intercept(req, next) {
        if (req.url.includes('/oauth/token')) {
            return next.handle(req);
        }
        if (req.url.startsWith('/blizzAPI')) {
            let newReq = req.clone({
                url: req.url.replace('/blizzAPI', `https://${this.region}.api.blizzard.com`)
            });
            if (this.token) {
                newReq = newReq.clone({
                    setHeaders: {
                        Authorization: `Bearer ${this.token}`
                    }
                });
                return next.handle(newReq);
            }
            else {
                return this.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((r) => {
                    if (r.access_token) {
                        this.token = r.access_token;
                        newReq = newReq.clone({
                            headers: newReq.headers.append('Authorization', `Bearer ${this.token}`)
                        });
                        return next.handle(newReq);
                    }
                    else {
                        console.error('Cannot retrieve token');
                        return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                    }
                }));
            }
        }
        else {
            return next.handle(req);
        }
    }
    getToken() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: 'Basic ' + btoa('ebba5d4e44004b23b4f120f07f59cfba:OF3IvChTSXfGRhwDrnQsVm8bFFCsGxm8')
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('grant_type', 'client_credentials');
        console.log('params: ', params);
        return this.http.post('https://us.battle.net/oauth/token', {}, { headers, params });
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map