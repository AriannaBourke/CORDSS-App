(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-entry-edit-entry-module"],{

/***/ "D8Ra":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/basic-info/edit-entry/edit-entry-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "C7MH");




const routes = [
    {
        path: '',
        component: _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__["EditEntryPage"]
    }
];
let EditEntryPageRoutingModule = class EditEntryPageRoutingModule {
};
EditEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditEntryPageRoutingModule);



/***/ }),

/***/ "lAMj":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/basic-info/edit-entry/edit-entry.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageModule", function() { return EditEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "D8Ra");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "C7MH");







let EditEntryPageModule = class EditEntryPageModule {
};
EditEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditEntryPageRoutingModule"]
        ],
        declarations: [_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"]]
    })
], EditEntryPageModule);



/***/ })

}]);
//# sourceMappingURL=edit-entry-edit-entry-module.js.map