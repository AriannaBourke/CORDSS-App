(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicines-medicines-module"],{

/***/ "8MGG":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medicines/medicines.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title width-50 style=\"text-align: center\"> Medicines </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-row>\r\n    <ion-col width-50 style=\"text-align: center\">\r\n      <ion-button\r\n        color=\"light\"\r\n        expand=\"block\"\r\n        routerLink=\"current-medicines\"\r\n        class=\"button1\"\r\n      >\r\n        <img\r\n          class=\"image1\"\r\n          src=\"../../../assets/icon/medicine-healthcare-and-medical-svgrepo-com.svg\"\r\n        />\r\n        <span style=\"font-size: 20px\">Current Medicines</span>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col width-50 style=\"text-align: center\">\r\n      <ion-button\r\n        color=\"light\"\r\n        routerLink=\"past-medicines\"\r\n        expand=\"block\"\r\n        class=\"button2\"\r\n        ><img class=\"image2\" src=\"../../../assets/icon/pill-svgrepo-com.svg\" />\r\n        <span style=\"font-size: 20px\">Past Medicines</span>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "JnCQ":
/*!************************************************************!*\
  !*** ./src/app/tab3/medicines/medicines-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MedicinesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageRoutingModule", function() { return MedicinesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicines.page */ "o2ez");




const routes = [
    {
        path: '',
        component: _medicines_page__WEBPACK_IMPORTED_MODULE_3__["MedicinesPage"]
    },
    {
        path: 'past-medicines',
        loadChildren: () => Promise.all(/*! import() | past-medicines-past-medicines-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-medicines-past-medicines-module"), __webpack_require__.e("common"), __webpack_require__.e("past-medicines-past-medicines-module")]).then(__webpack_require__.bind(null, /*! ./past-medicines/past-medicines.module */ "WQgG")).then(m => m.PastMedicinesPageModule)
    },
    {
        path: 'current-medicines',
        loadChildren: () => Promise.all(/*! import() | current-medicines-current-medicines-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~current-medicines-current-medicines-module"), __webpack_require__.e("common"), __webpack_require__.e("current-medicines-current-medicines-module")]).then(__webpack_require__.bind(null, /*! ./current-medicines/current-medicines.module */ "1TJh")).then(m => m.CurrentMedicinesPageModule)
    }
];
let MedicinesPageRoutingModule = class MedicinesPageRoutingModule {
};
MedicinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicinesPageRoutingModule);



/***/ }),

/***/ "QBFz":
/*!****************************************************!*\
  !*** ./src/app/tab3/medicines/medicines.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button1 {\n  margin-top: 22vh;\n  height: 100px;\n  padding: 10;\n}\n\n.image1 {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\n.button2 {\n  height: 100px;\n  padding: 10;\n}\n\n.image2 {\n  position: absolute;\n  height: 60px;\n  left: 0px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#5cb9dd, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWRpY2luZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHVEQUFBO0FBQ0YiLCJmaWxlIjoibWVkaWNpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24xIHtcclxuICBtYXJnaW4tdG9wOiAyMnZoO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbi5pbWFnZTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uMiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAxMDtcclxufVxyXG5cclxuLmltYWdlMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzVjYjlkZCwgd2hpdGUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "o2ez":
/*!**************************************************!*\
  !*** ./src/app/tab3/medicines/medicines.page.ts ***!
  \**************************************************/
/*! exports provided: MedicinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPage", function() { return MedicinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medicines.page.html */ "8MGG");
/* harmony import */ var _medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicines.page.scss */ "QBFz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MedicinesPage = class MedicinesPage {
    constructor() { }
    ngOnInit() {
    }
};
MedicinesPage.ctorParameters = () => [];
MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medicines',
        template: _raw_loader_medicines_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicines_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MedicinesPage);



/***/ }),

/***/ "qR4Y":
/*!****************************************************!*\
  !*** ./src/app/tab3/medicines/medicines.module.ts ***!
  \****************************************************/
/*! exports provided: MedicinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageModule", function() { return MedicinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicines-routing.module */ "JnCQ");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicines.page */ "o2ez");







let MedicinesPageModule = class MedicinesPageModule {
};
MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"],
        ],
        declarations: [_medicines_page__WEBPACK_IMPORTED_MODULE_6__["MedicinesPage"]]
    })
], MedicinesPageModule);



/***/ })

}]);
//# sourceMappingURL=medicines-medicines-module.js.map