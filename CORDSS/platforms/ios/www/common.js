(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "+AMU":
/*!********************************************************************!*\
  !*** ./src/app/tab4/medical-notes/view-entry/view-entry.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "0KYb":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/edit-entry/edit-entry-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "vmWj");




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

/***/ "0Ww+":
/*!***************************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/view-entry/view-entry-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "UWyi");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "1+GR":
/*!*******************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/view-entry/view-entry.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "0Ww+");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "UWyi");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "1zTi":
/*!***********************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/view-entry/view-entry.page.ts ***!
  \***********************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "DWXb");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "Xto0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "vmWj");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.urgentplan = [];
        this.isData = false;
        this.storedData = null;
        this.UrgentPlanTable = 'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone INT, notes TEXT)';
        this.data = { type: "", instructions: "", phone: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.urgentplan = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.UrgentPlanTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM urgentplan WHERE rowid=?', [rowid])
            .then(res => {
            this.urgentplan = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.urgentplan.push({
                    rowid: res.rows.item(i).rowid,
                    type: res.rows.item(i).type,
                    instructions: res.rows.item(i).instructions,
                    phone: res.rows.item(i).phone,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM urgentplan WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your urgent health plan?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "2AFt":
/*!*******************************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/edit-entry/edit-entry-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "JDp8");




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

/***/ "365N":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medicines/past-medicines/view-entry/view-entry.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Past Medicine info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let med of medicines; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Past Medicine Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Medicine Name</ion-label\r\n              >\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>{{med.medicinename}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Instructions</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"orange\"\r\n                slot=\"start\"\r\n                name=\"information-outline\"\r\n              ></ion-icon>\r\n              <p>{{med.instructions}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Side Effects</ion-label\r\n              >\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"sad\"></ion-icon>\r\n              <p>{{med.sideeffects}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <p>{{med.notes}}</p>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(med.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(med.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "5Vil":
/*!******************************************************************!*\
  !*** ./src/app/tab4/medical-notes/add-entry/add-entry.module.ts ***!
  \******************************************************************/
/*! exports provided: AddEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageModule", function() { return AddEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "Il+D");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "eJGE");







let AddEntryPageModule = class AddEntryPageModule {
};
AddEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddEntryPageRoutingModule"]
        ],
        declarations: [_add_entry_page__WEBPACK_IMPORTED_MODULE_6__["AddEntryPage"]]
    })
], AddEntryPageModule);



/***/ }),

/***/ "5vcb":
/*!**********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/view-entry/view-entry.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "6l7L":
/*!************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/view-entry/view-entry.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "6x0D":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/thoughts-feelings/add-entry/add-entry.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a Thoughts & Feelings note!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Thoughts & Feelings</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Note Name</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"chatbubble-ellipses\"\r\n              ></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Note Name (*required)\"\r\n                [(ngModel)]=\"data.note_name\"\r\n                name=\"note_name\"\r\n                required\r\n                #note_nameCtrl=\"ngModel\"\r\n              >\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!note_nameCtrl.valid && note_nameCtrl.touched\">\r\n              <ion-text color=\"danger\">*Note name is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Photo</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Upload Photo\"\r\n                [(ngModel)]=\"data.photo\"\r\n                name=\"photo\"\r\n              ></ion-input>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"camera\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                class=\"green\"\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "73lf":
/*!****************************************************************!*\
  !*** ./src/app/tab2/my-family/view-entry/view-entry.module.ts ***!
  \****************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "YQM/");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "mybA");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "7wRl":
/*!*******************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/edit-entry/edit-entry.module.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "vykg");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "kB4a");







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



/***/ }),

/***/ "91MQ":
/*!**********************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/add-entry/add-entry.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "96Q8":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/procedures/past-procedures/edit-entry/edit-entry.module.ts ***!
  \*********************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "Yxdn");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "FJ2m");







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



/***/ }),

/***/ "9Bs5":
/*!**********************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/view-entry/view-entry.page.ts ***!
  \**********************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "9ELp");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "6l7L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "WjmQ");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.thoughtsfeelings = [];
        this.isData = false;
        this.storedData = null;
        this.ThoughtsFeelingsTable = 'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, notes TEXT)';
        this.data = { note_name: "", photo: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.thoughtsfeelings = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.ThoughtsFeelingsTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM thoughtsfeelings WHERE rowid=?', [rowid])
            .then(res => {
            this.thoughtsfeelings = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.thoughtsfeelings.push({
                    rowid: res.rows.item(i).rowid,
                    note_name: res.rows.item(i).note_name,
                    photo: res.rows.item(i).photo,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM thoughtsfeelings WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "9ELp":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/thoughts-feelings/view-entry/view-entry.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Thoughts & Feelings notes!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let note of thoughtsfeelings; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Thoughts & Feelings Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Note Name</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"chatbubble-ellipses\"\r\n              ></ion-icon>\r\n              <p>{{note.note_name}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Photo</ion-label>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"camera\"></ion-icon>\r\n              <p>{{note.photo}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <p>{{note.notes}}</p>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(note.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(note.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "9hNY":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/edit-entry/edit-entry.module.ts ***!
  \*************************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "i2au");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "dOZ6");







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



/***/ }),

/***/ "A/sq":
/*!******************************************************!*\
  !*** ./src/app/tab1/edit-entry/edit-entry.module.ts ***!
  \******************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "MdYK");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "G5lX");







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



/***/ }),

/***/ "B3wo":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab3/appointments/past-appointments/edit-entry/edit-entry-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "2qWL");




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

/***/ "BRIl":
/*!****************************************************************!*\
  !*** ./src/app/tab2/my-family/edit-entry/edit-entry.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "aRCM");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "lmRT");







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



/***/ }),

/***/ "C6iN":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/medical-history/view-entry/view-entry.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "DWXb":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/urgent-health-plan/view-entry/view-entry.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Urgent Plan details!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let plan of urgentplan; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Urgent Plan Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Type of Emergency</ion-label\r\n              >\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>{{plan.type}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Instructions</ion-label\r\n              >\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"book\"></ion-icon>\r\n              <p>{{plan.instructions}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Telephone</ion-label>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"call\"></ion-icon>\r\n              <p>{{plan.phone}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n              <p>{{plan.notes}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(plan.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(plan.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Dw51":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/medical-history/edit-entry/edit-entry.module.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "HcyG");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "KuXV");







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



/***/ }),

/***/ "ECRk":
/*!********************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/view-entry/view-entry-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "9Bs5");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "GHNe":
/*!*******************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/view-entry/view-entry.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "HcyG":
/*!******************************************************************************!*\
  !*** ./src/app/tab3/medical-history/edit-entry/edit-entry-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "KuXV");




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

/***/ "Il+D":
/*!**************************************************************************!*\
  !*** ./src/app/tab4/medical-notes/add-entry/add-entry-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "eJGE");




const routes = [
    {
        path: '',
        component: _add_entry_page__WEBPACK_IMPORTED_MODULE_3__["AddEntryPage"]
    }
];
let AddEntryPageRoutingModule = class AddEntryPageRoutingModule {
};
AddEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddEntryPageRoutingModule);



/***/ }),

/***/ "J/w7":
/*!*******************************************************************!*\
  !*** ./src/app/tab4/mood/edit-entry/edit-entry-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "s+yr");




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

/***/ "JR//":
/*!************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/view-entry/view-entry.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "ECRk");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "9Bs5");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "LG9K":
/*!***********************************************************!*\
  !*** ./src/app/tab4/mood/edit-entry/edit-entry.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "J/w7");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "s+yr");







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



/***/ }),

/***/ "LSNw":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/medical-notes/add-entry/add-entry.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a new Medical Note!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Medical Note</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Note Name</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"document\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Note Name (*required)\"\r\n                [(ngModel)]=\"data.note_name\"\r\n                name=\"note_name\"\r\n                required\r\n                #note_nameCtrl=\"ngModel\"\r\n              >\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!note_nameCtrl.valid && note_nameCtrl.touched\">\r\n              <ion-text color=\"danger\">*Note name is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Photo</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Upload Photo\"\r\n                [(ngModel)]=\"data.photo\"\r\n                name=\"photo\"\r\n              ></ion-input>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"camera\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                class=\"green\"\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "MCv9":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab3/appointments/upcoming-appointments/edit-entry/edit-entry.module.ts ***!
  \*****************************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "p/AG");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "+Ri2");







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



/***/ }),

/***/ "MdYK":
/*!**************************************************************!*\
  !*** ./src/app/tab1/edit-entry/edit-entry-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "G5lX");




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

/***/ "NDuh":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/medical-notes/view-entry/view-entry.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View your Medical Note!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let note of mednotes; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Medical Note Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Note Name</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"document\"></ion-icon>\r\n              <p>{{note.note_name}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Photo</ion-label>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"camera\"></ion-icon>\r\n              <p>{{note.photo}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <p>{{note.notes}}</p>\r\n              <ion-icon\r\n                class=\"green\"\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n              ></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(note.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(note.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "OYsd":
/*!**********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/edit-entry/edit-entry.module.ts ***!
  \**********************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "UF87");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "99Hv");







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



/***/ }),

/***/ "OyYa":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/test-results/edit-entry/edit-entry-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "Uee9");




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

/***/ "PM4N":
/*!******************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/add-entry/add-entry-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "wIPu");




const routes = [
    {
        path: '',
        component: _add_entry_page__WEBPACK_IMPORTED_MODULE_3__["AddEntryPage"]
    }
];
let AddEntryPageRoutingModule = class AddEntryPageRoutingModule {
};
AddEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddEntryPageRoutingModule);



/***/ }),

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "Qj+s":
/*!****************************************************************!*\
  !*** ./src/app/tab2/my-family/view-entry/view-entry.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Qn1E":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/test-results/edit-entry/edit-entry.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "OyYa");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "Uee9");







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



/***/ }),

/***/ "Re3S":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/appointments/past-appointments/edit-entry/edit-entry.module.ts ***!
  \*************************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "B3wo");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "2qWL");







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



/***/ }),

/***/ "S2bl":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/medical-history/view-entry/view-entry.module.ts ***!
  \**********************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "VWhK");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "mYdi");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "TtNj":
/*!**********************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/add-entry/add-entry.module.ts ***!
  \**********************************************************************/
/*! exports provided: AddEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageModule", function() { return AddEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "PM4N");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "wIPu");







let AddEntryPageModule = class AddEntryPageModule {
};
AddEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddEntryPageRoutingModule"]
        ],
        declarations: [_add_entry_page__WEBPACK_IMPORTED_MODULE_6__["AddEntryPage"]]
    })
], AddEntryPageModule);



/***/ }),

/***/ "TxGo":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/view-entry/view-entry.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "n0Nc");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "1zTi");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "UF87":
/*!******************************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/edit-entry/edit-entry-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "99Hv");




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

/***/ "UWyi":
/*!*****************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/view-entry/view-entry.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "365N");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "GHNe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "kB4a");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.medicines = [];
        this.isData = false;
        this.storedData = null;
        this.MedicinesTable = 'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)';
        this.data = { medicinename: "", instructions: "", sideeffects: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.medicines = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MedicinesTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM medicine WHERE rowid=?', [rowid])
            .then(res => {
            this.medicines = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.medicines.push({
                    rowid: res.rows.item(i).rowid,
                    medicinename: res.rows.item(i).medicinename,
                    instructions: res.rows.item(i).instructions,
                    sideeffects: res.rows.item(i).sideeffects,
                    notes: res.rows.item(i).notes,
                    activeflag: res.rows.item(i).activeflag
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM medicine WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your medicines?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "VWhK":
/*!******************************************************************************!*\
  !*** ./src/app/tab3/medical-history/view-entry/view-entry-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "mYdi");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "Xto0":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/view-entry/view-entry.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Y7Uw":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/my-family/view-entry/view-entry.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Family Member's details!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let family of myfamily; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Family Member Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Name</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"person\"></ion-icon>\r\n              <p>{{family.name}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Birthday</ion-label>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"gift\"></ion-icon>\r\n              <p>{{family.birthday | date: \"dd MMMM YYYY\"}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Relation</ion-label>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"heart\"></ion-icon>\r\n              <p>{{family.relation}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Email</ion-label>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"mail\"></ion-icon>\r\n              <p>{{family.email}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Telephone</ion-label>\r\n              <ion-icon class=\"teal\" slot=\"start\" name=\"call\"></ion-icon>\r\n              <p>{{family.phone}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(family.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(family.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "YQM/":
/*!************************************************************************!*\
  !*** ./src/app/tab2/my-family/view-entry/view-entry-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "mybA");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "Yxdn":
/*!*****************************************************************************************!*\
  !*** ./src/app/tab3/procedures/past-procedures/edit-entry/edit-entry-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "FJ2m");




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

/***/ "aMcf":
/*!****************************************************************************!*\
  !*** ./src/app/tab4/medical-notes/edit-entry/edit-entry-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "dF7z");




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

/***/ "aRCM":
/*!************************************************************************!*\
  !*** ./src/app/tab2/my-family/edit-entry/edit-entry-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "lmRT");




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

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "cVlY":
/*!***********************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/edit-entry/edit-entry.module.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "2AFt");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "JDp8");







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



/***/ }),

/***/ "dw8v":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medical-history/view-entry/view-entry.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View your Condition info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let history of medicalhistory; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Condition Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Diagnosis</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>{{history.diagnosis}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Diagnosis Details</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"orange\"\r\n                slot=\"start\"\r\n                name=\"document-text\"\r\n              ></ion-icon>\r\n              <p>{{history.diagnosis_details}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Diagnosis Date</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"yellow\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <p>{{history.diagnosis_date | date: 'dd MMMM y'}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n              <p>{{history.notes}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(history.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(history.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "eJGE":
/*!****************************************************************!*\
  !*** ./src/app/tab4/medical-notes/add-entry/add-entry.page.ts ***!
  \****************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "LSNw");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "qpTQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/







let AddEntryPage = class AddEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.mednotes = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.MedNotesTable = 'CREATE TABLE IF NOT EXISTS mednotes (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT,  notes TEXT)';
        this.data = { note_name: "", photo: "", notes: "" };
        this.mednotes = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MedNotesTable, []);
            this.getData();
        });
    }
    ionViewDidLoad() {
        this.getData();
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        this._db.executeSql('SELECT * FROM mednotes ORDER BY rowid DESC', [])
            .then(res => {
            this.mednotes = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.mednotes.push({
                    rowid: res.rows.item(i).rowid,
                    note_name: res.rows.item(i).note_name,
                    photo: res.rows.item(i).photo,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    saveData() {
        this._db.executeSql('INSERT INTO mednotes VALUES(NULL,?,?,?)', [this.data.note_name, this.data.photo, this.data.notes])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert("save data error" + e));
    }
    submitData(myForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Save this entry?",
                message: "Would you like to save this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "save",
                        handler: () => {
                            this.saveData();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    noSubmit(e) {
        e.preventDefault();
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
            this.getData();
        });
    }
};
AddEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
AddEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-entry',
        template: _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddEntryPage);



/***/ }),

/***/ "fw7v":
/*!********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/view-entry/view-entry.page.ts ***!
  \********************************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "guve");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "5vcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "99Hv");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.medicines = [];
        this.isData = false;
        this.storedData = null;
        this.MedicinesTable = 'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)';
        this.data = { medicinename: "", instructions: "", sideeffects: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.medicines = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MedicinesTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM medicine WHERE rowid=?', [rowid])
            .then(res => {
            this.medicines = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.medicines.push({
                    rowid: res.rows.item(i).rowid,
                    medicinename: res.rows.item(i).medicinename,
                    instructions: res.rows.item(i).instructions,
                    sideeffects: res.rows.item(i).sideeffects,
                    notes: res.rows.item(i).notes,
                    activeflag: res.rows.item(i).activeflag
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM medicine WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your medicines?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "guve":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medicines/current-medicines/view-entry/view-entry.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Current Medicine info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let med of medicines; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Current Medicine Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Medicine Name</ion-label\r\n              >\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>{{med.medicinename}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Instructions</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"orange\"\r\n                slot=\"start\"\r\n                name=\"information\"\r\n              ></ion-icon>\r\n              <p>{{med.instructions}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Side Effects</ion-label\r\n              >\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"sad\"></ion-icon>\r\n              <p>{{med.sideeffects}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <p>{{med.notes}}</p>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(med.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(med.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "i2au":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/edit-entry/edit-entry-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "dOZ6");




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

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>");

/***/ }),

/***/ "mF3I":
/*!******************************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/view-entry/view-entry-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "fw7v");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "mYdi":
/*!********************************************************************!*\
  !*** ./src/app/tab3/medical-history/view-entry/view-entry.page.ts ***!
  \********************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "dw8v");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "C6iN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "KuXV");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.medicalhistory = [];
        this.isData = false;
        this.storedData = null;
        this.MedicalHistoryTable = 'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)';
        this.data = { diagnosis: "", diagnosis_details: "", diagnosis_date: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.medicalhistory = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MedicalHistoryTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM medicalhistory WHERE rowid=?', [rowid])
            .then(res => {
            this.medicalhistory = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.medicalhistory.push({
                    rowid: res.rows.item(i).rowid,
                    diagnosis: res.rows.item(i).diagnosis,
                    diagnosis_details: res.rows.item(i).diagnosis_details,
                    diagnosis_date: res.rows.item(i).diagnosis_date,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM medicalhistory WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "mybA":
/*!**************************************************************!*\
  !*** ./src/app/tab2/my-family/view-entry/view-entry.page.ts ***!
  \**************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "Y7Uw");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "Qj+s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "lmRT");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.myfamily = [];
        this.isData = false;
        this.storedData = null;
        this.MyFamilyTable = 'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone INT)';
        this.data = { name: "", birthday: "", relation: "", email: "", phone: "" };
        this.rowid = navParams.get('rowid');
        this.myfamily = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MyFamilyTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM myfamily WHERE rowid=?', [rowid])
            .then(res => {
            this.myfamily = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.myfamily.push({
                    rowid: res.rows.item(i).rowid,
                    name: res.rows.item(i).name,
                    birthday: res.rows.item(i).birthday,
                    relation: res.rows.item(i).relation,
                    email: res.rows.item(i).email,
                    phone: res.rows.item(i).phone
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM myfamily WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "n0Nc":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/view-entry/view-entry-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "1zTi");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "p/AG":
/*!*************************************************************************************************!*\
  !*** ./src/app/tab3/appointments/upcoming-appointments/edit-entry/edit-entry-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "+Ri2");




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

/***/ "pmhf":
/*!**********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/view-entry/view-entry.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "mF3I");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "fw7v");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qZxd":
/*!************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/edit-entry/edit-entry.module.ts ***!
  \************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "tUPb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "WjmQ");







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



/***/ }),

/***/ "qdxw":
/*!********************************************************************!*\
  !*** ./src/app/tab4/medical-notes/edit-entry/edit-entry.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "aMcf");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "dF7z");







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



/***/ }),

/***/ "qpTQ":
/*!******************************************************************!*\
  !*** ./src/app/tab4/medical-notes/add-entry/add-entry.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "t9Or":
/*!******************************************************************!*\
  !*** ./src/app/tab4/medical-notes/view-entry/view-entry.page.ts ***!
  \******************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "NDuh");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "+AMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "dF7z");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/








let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.mednotes = [];
        this.isData = false;
        this.storedData = null;
        this.MedNotesTable = 'CREATE TABLE IF NOT EXISTS mednotes (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, notes TEXT)';
        this.data = { note_name: "", photo: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.mednotes = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.MedNotesTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM mednotes WHERE rowid=?', [rowid])
            .then(res => {
            this.mednotes = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.mednotes.push({
                    rowid: res.rows.item(i).rowid,
                    note_name: res.rows.item(i).note_name,
                    photo: res.rows.item(i).photo,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM mednotes WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.deleteData(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
            });
            return yield modal.present();
        });
    }
};
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "tUPb":
/*!********************************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/edit-entry/edit-entry-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "WjmQ");




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

/***/ "tvNB":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/edit-entry/edit-entry.module.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _edit_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-entry-routing.module */ "0KYb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-entry.page */ "vmWj");







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



/***/ }),

/***/ "vykg":
/*!***************************************************************************************!*\
  !*** ./src/app/tab3/medicines/past-medicines/edit-entry/edit-entry-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPageRoutingModule", function() { return EditEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-entry.page */ "kB4a");




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

/***/ "wIPu":
/*!********************************************************************!*\
  !*** ./src/app/tab4/thoughts-feelings/add-entry/add-entry.page.ts ***!
  \********************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "6x0D");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "91MQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/







let AddEntryPage = class AddEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.thoughtsfeelings = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.ThoughtsFeelingsTable = 'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, notes TEXT)';
        this.data = { note_name: "", photo: "", notes: "" };
        this.thoughtsfeelings = [];
        this._plat
            .ready()
            .then(() => {
            this._createDatabase();
        })
            .catch(e => alert('create database error' + e));
    }
    _createDatabase() {
        this._sql.create({
            name: "database.db",
            location: 'default'
        })
            .then((db) => {
            this._db = db;
            this._createDatabaseTables();
        })
            .catch(e => alert('create tables error' + e));
    }
    _createDatabaseTables() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._db.executeSql(this.ThoughtsFeelingsTable, []);
            this.getData();
        });
    }
    ionViewDidLoad() {
        this.getData();
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        this._db.executeSql('SELECT * FROM thoughtsfeelings ORDER BY rowid DESC', [])
            .then(res => {
            this.thoughtsfeelings = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.thoughtsfeelings.push({
                    rowid: res.rows.item(i).rowid,
                    note_name: res.rows.item(i).note_name,
                    photo: res.rows.item(i).photo,
                    notes: res.rows.item(i).notes
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    saveData() {
        this._db.executeSql('INSERT INTO thoughtsfeelings VALUES(NULL,?,?,?)', [this.data.note_name, this.data.photo, this.data.notes])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert("save data error" + e));
    }
    submitData(myForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Save this entry?",
                message: "Would you like to save this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "save",
                        handler: () => {
                            this.saveData();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    noSubmit(e) {
        e.preventDefault();
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
            this.getData();
        });
    }
};
AddEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
AddEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-entry',
        template: _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddEntryPage);



/***/ }),

/***/ "yMGa":
/*!****************************************************************************!*\
  !*** ./src/app/tab4/medical-notes/view-entry/view-entry-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "t9Or");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "zUpt":
/*!********************************************************************!*\
  !*** ./src/app/tab4/medical-notes/view-entry/view-entry.module.ts ***!
  \********************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "yMGa");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "t9Or");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ })

}]);
//# sourceMappingURL=common.js.map