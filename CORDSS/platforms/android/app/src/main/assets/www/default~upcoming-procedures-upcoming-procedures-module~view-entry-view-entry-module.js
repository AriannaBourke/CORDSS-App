(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"],{

/***/ "50Sk":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/procedures/upcoming-procedures/view-entry/view-entry.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Upcoming Procedure info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list *ngFor=\"let pro of procedures; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Upcoming Procedure Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Date & Time</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <p>{{pro.date | date: \"dd MMMM YYYY 'at' HH:mm a\"}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Doctor</ion-label>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>{{pro.doctor}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Place</ion-label>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"business\"></ion-icon>\r\n              <p>{{pro.place}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Procedure Type</ion-label\r\n              >\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"fitness\"></ion-icon>\r\n              <p>{{pro.type}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Description</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"teal\"\r\n                slot=\"start\"\r\n                name=\"chatbubble-ellipses\"\r\n              ></ion-icon>\r\n              <p>{{pro.description}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Questions?</ion-label\r\n              >\r\n              <ion-icon\r\n                class=\"lightblue\"\r\n                slot=\"start\"\r\n                name=\"help-circle\"\r\n              ></ion-icon>\r\n              <p>{{pro.questions}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(pro.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(pro.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "HDWH":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/view-entry/view-entry.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "50Sk");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "I7dt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "dOZ6");
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
        this.procedures = [];
        this.isData = false;
        this.storedData = null;
        this.ProceduresTable = 'CREATE TABLE IF NOT EXISTS procedures(rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)';
        this.data = { date: "", doctor: "", place: "", type: "", description: "", questions: "" };
        this.rowid = navParams.get('rowid');
        this.procedures = [];
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
            yield this._db.executeSql(this.ProceduresTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM procedures WHERE rowid=?', [rowid])
            .then(res => {
            this.procedures = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.procedures.push({
                    rowid: res.rows.item(i).rowid,
                    date: res.rows.item(i).date,
                    doctor: res.rows.item(i).doctor,
                    place: res.rows.item(i).place,
                    type: res.rows.item(i).type,
                    description: res.rows.item(i).description,
                    questions: res.rows.item(i).questions,
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
        this._db.executeSql('DELETE FROM procedures WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your procedures?",
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

/***/ "I7dt":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/view-entry/view-entry.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "aK8X":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/view-entry/view-entry.module.ts ***!
  \*************************************************************************************/
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
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "l8tq");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "HDWH");







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

/***/ "l8tq":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/view-entry/view-entry-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "HDWH");




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



/***/ })

}]);
//# sourceMappingURL=default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module.js.map