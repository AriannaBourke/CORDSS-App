(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["procedures-procedures-module"],{

/***/ "3s5d":
/*!****************************************************!*\
  !*** ./src/app/tab3/procedures/procedures.page.ts ***!
  \****************************************************/
/*! exports provided: ProceduresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceduresPage", function() { return ProceduresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_procedures_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./procedures.page.html */ "h7wW");
/* harmony import */ var _procedures_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./procedures.page.scss */ "c/lX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProceduresPage = class ProceduresPage {
    constructor() { }
    ngOnInit() {
    }
};
ProceduresPage.ctorParameters = () => [];
ProceduresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-procedures',
        template: _raw_loader_procedures_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_procedures_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProceduresPage);



/***/ }),

/***/ "SGCs":
/*!**************************************************************!*\
  !*** ./src/app/tab3/procedures/procedures-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProceduresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceduresPageRoutingModule", function() { return ProceduresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _procedures_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procedures.page */ "3s5d");




const routes = [
    {
        path: '',
        component: _procedures_page__WEBPACK_IMPORTED_MODULE_3__["ProceduresPage"]
    },
    {
        path: 'past-procedures',
        loadChildren: () => Promise.all(/*! import() | past-procedures-past-procedures-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-procedures-past-procedures-module"), __webpack_require__.e("default~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("past-procedures-past-procedures-module")]).then(__webpack_require__.bind(null, /*! ./past-procedures/past-procedures.module */ "tvhA")).then(m => m.PastProceduresPageModule)
    },
    {
        path: 'upcoming-procedures',
        loadChildren: () => Promise.all(/*! import() | upcoming-procedures-upcoming-procedures-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"), __webpack_require__.e("default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("upcoming-procedures-upcoming-procedures-module")]).then(__webpack_require__.bind(null, /*! ./upcoming-procedures/upcoming-procedures.module */ "L/P4")).then(m => m.UpcomingProceduresPageModule)
    }
];
let ProceduresPageRoutingModule = class ProceduresPageRoutingModule {
};
ProceduresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProceduresPageRoutingModule);



/***/ }),

/***/ "c/lX":
/*!******************************************************!*\
  !*** ./src/app/tab3/procedures/procedures.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button1 {\n  margin-top: 22vh;\n  height: 100px;\n  padding: 10;\n}\n\n.image {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\n.button2 {\n  height: 100px;\n  padding: 10;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#5cb9dd, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9jZWR1cmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1REFBQTtBQUNGIiwiZmlsZSI6InByb2NlZHVyZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbjEge1xyXG4gIG1hcmdpbi10b3A6IDIydmg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxMDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzVjYjlkZCwgd2hpdGUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "h7wW":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/procedures/procedures.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Icon buttons adapted from https://www.svgrepo.com/ -->\r\n\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title width-50 style=\"text-align: center\">  Procedures </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          color=\"light\"\r\n          class=\"button1\"\r\n          routerLink=\"upcoming-procedures\"\r\n          expand=\"block\"\r\n          style=\"font-size: 17px\"\r\n          ><img\r\n            class=\"image\"\r\n            src=\"../../../assets/icon/tag-price-tag-svgrepo-com.svg\"\r\n          />Upcoming Procedures</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          color=\"light\"\r\n          class=\"button2\"\r\n          routerLink=\"past-procedures\"\r\n          expand=\"block\"\r\n          style=\"font-size: 17px\"\r\n          ><img\r\n            class=\"image\"\r\n            src=\"../../../assets/icon/first-aid-kit-svgrepo-com.svg\"\r\n          />Past Procedures</ion-button\r\n        ></ion-col\r\n      >\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "twXE":
/*!******************************************************!*\
  !*** ./src/app/tab3/procedures/procedures.module.ts ***!
  \******************************************************/
/*! exports provided: ProceduresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceduresPageModule", function() { return ProceduresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _procedures_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./procedures-routing.module */ "SGCs");
/* harmony import */ var _procedures_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./procedures.page */ "3s5d");







let ProceduresPageModule = class ProceduresPageModule {
};
ProceduresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _procedures_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProceduresPageRoutingModule"]
        ],
        declarations: [_procedures_page__WEBPACK_IMPORTED_MODULE_6__["ProceduresPage"]]
    })
], ProceduresPageModule);



/***/ })

}]);
//# sourceMappingURL=procedures-procedures-module.js.map