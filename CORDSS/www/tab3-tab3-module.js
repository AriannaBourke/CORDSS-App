(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    },
    {
        path: 'basic-info',
        loadChildren: () => Promise.all(/*! import() | basic-info-basic-info-module */[__webpack_require__.e("default~basic-info-basic-info-module~edit-entry-edit-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~basic-info-basic-info-module"), __webpack_require__.e("basic-info-basic-info-module")]).then(__webpack_require__.bind(null, /*! ./basic-info/basic-info.module */ "3cjP")).then(m => m.BasicInfoPageModule)
    },
    {
        path: 'medical-history',
        loadChildren: () => Promise.all(/*! import() | medical-history-medical-history-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~medical-history-medical-history-module"), __webpack_require__.e("common"), __webpack_require__.e("medical-history-medical-history-module")]).then(__webpack_require__.bind(null, /*! ./medical-history/medical-history.module */ "hGI8")).then(m => m.MedicalHistoryPageModule)
    },
    {
        path: 'medicines',
        loadChildren: () => __webpack_require__.e(/*! import() | medicines-medicines-module */ "medicines-medicines-module").then(__webpack_require__.bind(null, /*! ./medicines/medicines.module */ "qR4Y")).then(m => m.MedicinesPageModule)
    },
    {
        path: 'test-results',
        loadChildren: () => Promise.all(/*! import() | test-results-test-results-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~add-entry-add-entry-module~test-results-test-results-module"), __webpack_require__.e("default~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("test-results-test-results-module")]).then(__webpack_require__.bind(null, /*! ./test-results/test-results.module */ "SjUs")).then(m => m.TestResultsPageModule)
    },
    {
        path: 'appointments',
        loadChildren: () => __webpack_require__.e(/*! import() | appointments-appointments-module */ "appointments-appointments-module").then(__webpack_require__.bind(null, /*! ./appointments/appointments.module */ "/KJA")).then(m => m.AppointmentsPageModule)
    },
    {
        path: 'procedures',
        loadChildren: () => __webpack_require__.e(/*! import() | procedures-procedures-module */ "procedures-procedures-module").then(__webpack_require__.bind(null, /*! ./procedures/procedures.module */ "twXE")).then(m => m.ProceduresPageModule)
    },
    {
        path: 'urgent-health-plan',
        loadChildren: () => Promise.all(/*! import() | urgent-health-plan-urgent-health-plan-module */[__webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~add-entry-add-entry-module~urgent-health-plan-urgent-health-plan-module"), __webpack_require__.e("common"), __webpack_require__.e("urgent-health-plan-urgent-health-plan-module")]).then(__webpack_require__.bind(null, /*! ./urgent-health-plan/urgent-health-plan.module */ "v7wV")).then(m => m.UrgentHealthPlanPageModule)
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Icon buttons adapted from https://www.svgrepo.com/ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title width-50 style=\"text-align: center\"> My Health </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button1\"\r\n          color=\"light\"\r\n          routerLink=\"basic-info\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image1\"\r\n            src=\"../../assets/icon/smartphone-mobile-phone-svgrepo-com.svg\"\r\n          />\r\n          <span class=\"basicinfo\" style=\"font-size: 20px\">Basic Info</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button2\"\r\n          color=\"light\"\r\n          routerLink=\"urgent-health-plan\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image2\"\r\n            src=\"../../assets/icon/folder-files-and-folders-svgrepo-com.svg\"\r\n          />\r\n          <span class=\"basicinfo\" style=\"font-size: 20px\"\r\n            >Urgent Health Plan</span\r\n          >\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button2\"\r\n          color=\"light\"\r\n          routerLink=\"medical-history\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image2\"\r\n            src=\"../../assets/icon/hospital-svgrepo-com (1).svg\"\r\n          />\r\n          <span class=\"medicalhistory\" style=\"font-size: 20px\"\r\n            >My Conditions</span\r\n          >\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button3\"\r\n          color=\"light\"\r\n          routerLink=\"medicines\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image3\"\r\n            src=\"../../assets/icon/medicine-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Medicines</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button4\"\r\n          color=\"light\"\r\n          routerLink=\"test-results\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image4\"\r\n            src=\"../../assets/icon/computer-healthcare-and-medical-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Test Results</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button5\"\r\n          color=\"light\"\r\n          routerLink=\"appointments\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image5\"\r\n            src=\"../../assets/icon/stethoscope-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Appointments</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col width-50 style=\"text-align: center\">\r\n        <ion-button\r\n          class=\"button6\"\r\n          color=\"light\"\r\n          routerLink=\"procedures\"\r\n          expand=\"block\"\r\n        >\r\n          <img\r\n            class=\"image6\"\r\n            src=\"../../assets/icon/hospital-bed-svgrepo-com.svg\"\r\n          />\r\n          <span style=\"font-size: 20px\">Procedures</span>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button1 {\n  margin-top: 5vh;\n  height: 60px;\n  padding: 10;\n}\n\n.image1 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\n.button2 {\n  height: 60px;\n  padding: 10;\n}\n\n.image2 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\n.button3 {\n  height: 60px;\n  padding: 10;\n}\n\n.image3 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\n.button4 {\n  height: 60px;\n  padding: 10;\n}\n\n.image4 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\n.button5 {\n  height: 60px;\n  padding: 10;\n}\n\n.image5 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\n.button6 {\n  height: 60px;\n  padding: 10;\n}\n\n.image6 {\n  position: absolute;\n  height: 40px;\n  left: 0px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#5cb9dd, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHVEQUFBO0FBQ0YiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uMSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxMDtcclxufVxyXG5cclxuLmltYWdlMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24yIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbi5pbWFnZTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uMyB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDEwO1xyXG59XHJcblxyXG4uaW1hZ2UzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbjQge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxMDtcclxufVxyXG5cclxuLmltYWdlNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTA7XHJcbn1cclxuXHJcbi5pbWFnZTUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uNiB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDEwO1xyXG59XHJcblxyXG4uaW1hZ2U2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjNWNiOWRkLCB3aGl0ZSk7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map