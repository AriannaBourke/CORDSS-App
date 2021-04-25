(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "1GDv":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "Wxre");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab4-routing.module */ "dkQB");









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab4PageRoutingModule"],
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "Wxre":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "kfDu");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "vacZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab4Page = class Tab4Page {
    constructor() { }
};
Tab4Page.ctorParameters = () => [];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ }),

/***/ "dkQB":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "Wxre");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"],
    },
    {
        path: 'medical-notes',
        loadChildren: () => Promise.all(/*! import() | medical-notes-medical-notes-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("medical-notes-medical-notes-module")]).then(__webpack_require__.bind(null, /*! ./medical-notes/medical-notes.module */ "SC1P")).then(m => m.MedicalNotesPageModule)
    },
    {
        path: 'thoughts-feelings',
        loadChildren: () => Promise.all(/*! import() | thoughts-feelings-thoughts-feelings-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("thoughts-feelings-thoughts-feelings-module")]).then(__webpack_require__.bind(null, /*! ./thoughts-feelings/thoughts-feelings.module */ "WFG5")).then(m => m.ThoughtsFeelingsPageModule)
    },
    {
        path: 'mood',
        loadChildren: () => Promise.all(/*! import() | mood-mood-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~mood-mood-module"), __webpack_require__.e("default~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("mood-mood-module")]).then(__webpack_require__.bind(null, /*! ./mood/mood.module */ "Nrti")).then(m => m.MoodPageModule)
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "kfDu":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Icon buttons adapted from https://www.svgrepo.com/ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title width-50 style=\"text-align: center\"> My Notes </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button\r\n          color=\"light\"\r\n          routerLink=\"medical-notes\"\r\n          expand=\"block\"\r\n          class=\"button1\"\r\n        >\r\n          <img\r\n            class=\"image1\"\r\n            src=\"../../assets/icon/first-aid-kit-doctor-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Medical Notes</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button\r\n          color=\"light\"\r\n          routerLink=\"thoughts-feelings\"\r\n          expand=\"block\"\r\n          class=\"button2\"\r\n        >\r\n          <img\r\n            class=\"image2\"\r\n            src=\"../../assets/icon/heart-doctor-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Thoughts & Feelings</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button\r\n          color=\"light\"\r\n          routerLink=\"mood\"\r\n          expand=\"block\"\r\n          class=\"button3\"\r\n        >\r\n          <img class=\"image3\" src=\"../../assets/icon/brain-svgrepo-com.svg\" />\r\n          <span style=\"font-size: 20px\">Mood</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "vacZ":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button1 {\n  margin-top: 20vh;\n  height: 80px;\n  padding: 10;\n}\n\n.image1 {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\n.button2 {\n  height: 80px;\n  padding: 10;\n}\n\n.image2 {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\n.button3 {\n  height: 80px;\n  padding: 10;\n}\n\n.image3 {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#5cb9dd, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1REFBQTtBQUNGIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbjEge1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmc6IDEwO1xyXG59XHJcblxyXG4uaW1hZ2UxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gIGhlaWdodDogODBweDtcclxuICBwYWRkaW5nOiAxMDtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbi5pbWFnZTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM1Y2I5ZGQsIHdoaXRlKTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map