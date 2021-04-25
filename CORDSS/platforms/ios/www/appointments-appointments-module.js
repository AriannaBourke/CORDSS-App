(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointments-appointments-module"],{

/***/ "/KJA":
/*!**********************************************************!*\
  !*** ./src/app/tab3/appointments/appointments.module.ts ***!
  \**********************************************************/
/*! exports provided: AppointmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageModule", function() { return AppointmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointments-routing.module */ "M0H6");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments.page */ "K/Xu");







let AppointmentsPageModule = class AppointmentsPageModule {
};
AppointmentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentsPageRoutingModule"]
        ],
        declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentsPage"]]
    })
], AppointmentsPageModule);



/***/ }),

/***/ "K/Xu":
/*!********************************************************!*\
  !*** ./src/app/tab3/appointments/appointments.page.ts ***!
  \********************************************************/
/*! exports provided: AppointmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPage", function() { return AppointmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./appointments.page.html */ "M/ll");
/* harmony import */ var _appointments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointments.page.scss */ "NtqG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppointmentsPage = class AppointmentsPage {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentsPage.ctorParameters = () => [];
AppointmentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-appointments',
        template: _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_appointments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppointmentsPage);



/***/ }),

/***/ "M/ll":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/appointments/appointments.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Icon buttons adapted from https://www.svgrepo.com/ -->\r\n\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title width-50 style=\"text-align: center\"> Appointments </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          color=\"light\"\r\n          routerLink=\"upcoming-appointments\"\r\n          expand=\"block\"\r\n          class=\"button1\"\r\n          style=\"font-size: 15px\"\r\n          ><img\r\n            class=\"image\"\r\n            src=\"../../../assets/icon/cardiogram-healthcare-and-medical-svgrepo-com (1).svg\"\r\n          />Upcoming Appointments</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\"\r\n        ><ion-button\r\n          color=\"light\"\r\n          class=\"button2\"\r\n          routerLink=\"past-appointments\"\r\n          expand=\"block\"\r\n          style=\"font-size: 17px\"\r\n          ><img\r\n            class=\"image\"\r\n            src=\"../../../assets/icon/band-aid-svgrepo-com.svg\"\r\n          />Past Appointments</ion-button\r\n        >\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "M0H6":
/*!******************************************************************!*\
  !*** ./src/app/tab3/appointments/appointments-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AppointmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsPageRoutingModule", function() { return AppointmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointments.page */ "K/Xu");




const routes = [
    {
        path: '',
        component: _appointments_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentsPage"]
    },
    {
        path: 'upcoming-appointments',
        loadChildren: () => Promise.all(/*! import() | upcoming-appointments-upcoming-appointments-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-appointments-upcoming-appointments-module"), __webpack_require__.e("default~upcoming-appointments-upcoming-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("upcoming-appointments-upcoming-appointments-module")]).then(__webpack_require__.bind(null, /*! ./upcoming-appointments/upcoming-appointments.module */ "PmAT")).then(m => m.UpcomingAppointmentsPageModule)
    },
    {
        path: 'past-appointments',
        loadChildren: () => Promise.all(/*! import() | past-appointments-past-appointments-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-appointments-past-appointments-module"), __webpack_require__.e("default~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("past-appointments-past-appointments-module")]).then(__webpack_require__.bind(null, /*! ./past-appointments/past-appointments.module */ "5pbD")).then(m => m.PastAppointmentsPageModule)
    }
];
let AppointmentsPageRoutingModule = class AppointmentsPageRoutingModule {
};
AppointmentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentsPageRoutingModule);



/***/ }),

/***/ "NtqG":
/*!**********************************************************!*\
  !*** ./src/app/tab3/appointments/appointments.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button1 {\n  margin-top: 22vh;\n  height: 100px;\n  padding: 10;\n}\n\n.image {\n  position: absolute;\n  height: 55px;\n  left: 0px;\n}\n\n.button2 {\n  height: 100px;\n  padding: 10;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#5cb9dd, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBvaW50bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHVEQUFBO0FBQ0YiLCJmaWxlIjoiYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24xIHtcclxuICBtYXJnaW4tdG9wOiAyMnZoO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24yIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KCM1Y2I5ZGQsIHdoaXRlKTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=appointments-appointments-module.js.map