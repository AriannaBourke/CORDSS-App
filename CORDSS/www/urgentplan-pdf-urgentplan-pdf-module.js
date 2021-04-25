(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["urgentplan-pdf-urgentplan-pdf-module"],{

/***/ "K5w/":
/*!**********************************************************************!*\
  !*** ./src/app/tab5/urgentplan-pdf/urgentplan-pdf-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UrgentplanPdfPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentplanPdfPageRoutingModule", function() { return UrgentplanPdfPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _urgentplan_pdf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urgentplan-pdf.page */ "ZhrA");




const routes = [
    {
        path: '',
        component: _urgentplan_pdf_page__WEBPACK_IMPORTED_MODULE_3__["UrgentplanPdfPage"]
    }
];
let UrgentplanPdfPageRoutingModule = class UrgentplanPdfPageRoutingModule {
};
UrgentplanPdfPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UrgentplanPdfPageRoutingModule);



/***/ }),

/***/ "QgAE":
/*!**************************************************************!*\
  !*** ./src/app/tab5/urgentplan-pdf/urgentplan-pdf.module.ts ***!
  \**************************************************************/
/*! exports provided: UrgentplanPdfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentplanPdfPageModule", function() { return UrgentplanPdfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _urgentplan_pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urgentplan-pdf-routing.module */ "K5w/");
/* harmony import */ var _urgentplan_pdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urgentplan-pdf.page */ "ZhrA");







let UrgentplanPdfPageModule = class UrgentplanPdfPageModule {
};
UrgentplanPdfPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _urgentplan_pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__["UrgentplanPdfPageRoutingModule"]
        ],
        declarations: [_urgentplan_pdf_page__WEBPACK_IMPORTED_MODULE_6__["UrgentplanPdfPage"]]
    })
], UrgentplanPdfPageModule);



/***/ })

}]);
//# sourceMappingURL=urgentplan-pdf-urgentplan-pdf-module.js.map