(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medications-pdf-medications-pdf-module"],{

/***/ "I8WN":
/*!****************************************************************!*\
  !*** ./src/app/tab5/medications-pdf/medications-pdf.module.ts ***!
  \****************************************************************/
/*! exports provided: MedicationsPdfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationsPdfPageModule", function() { return MedicationsPdfPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _medications_pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medications-pdf-routing.module */ "awi8");
/* harmony import */ var _medications_pdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medications-pdf.page */ "Efvq");







let MedicationsPdfPageModule = class MedicationsPdfPageModule {
};
MedicationsPdfPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medications_pdf_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicationsPdfPageRoutingModule"]
        ],
        declarations: [_medications_pdf_page__WEBPACK_IMPORTED_MODULE_6__["MedicationsPdfPage"]]
    })
], MedicationsPdfPageModule);



/***/ }),

/***/ "awi8":
/*!************************************************************************!*\
  !*** ./src/app/tab5/medications-pdf/medications-pdf-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MedicationsPdfPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationsPdfPageRoutingModule", function() { return MedicationsPdfPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medications_pdf_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medications-pdf.page */ "Efvq");




const routes = [
    {
        path: '',
        component: _medications_pdf_page__WEBPACK_IMPORTED_MODULE_3__["MedicationsPdfPage"]
    }
];
let MedicationsPdfPageRoutingModule = class MedicationsPdfPageRoutingModule {
};
MedicationsPdfPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicationsPdfPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=medications-pdf-medications-pdf-module.js.map