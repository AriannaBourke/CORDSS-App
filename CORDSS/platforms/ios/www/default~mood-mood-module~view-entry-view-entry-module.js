(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~mood-mood-module~view-entry-view-entry-module"],{

/***/ "/DPu":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/mood/view-entry/view-entry.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View your Mood entry!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let m of mood; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Mood Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Date</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"calendar\"></ion-icon>\r\n              <p>{{m.date | date: \"dd MMMM YYYY\"}}</p>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Happy</ion-label>\r\n              <ion-range\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                value=\"{{m.happy}}\"\r\n                name=\"happy\"\r\n                disabled=\"true\"\r\n              >\r\n                <ion-icon\r\n                  class=\"orange\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"orange\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Independent</ion-label>\r\n              <ion-range\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                value=\"{{m.independent}}\"\r\n                name=\"independent\"\r\n                disabled=\"true\"\r\n              >\r\n                <ion-icon\r\n                  class=\"yellow\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"yellow\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Tired</ion-label>\r\n              <ion-range\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                value=\"{{m.tired}}\"\r\n                name=\"tired\"\r\n                disabled=\"true\"\r\n              >\r\n                <ion-icon\r\n                  class=\"green\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"green\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Productive</ion-label>\r\n              <ion-range\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                value=\"{{m.productive}}\"\r\n                name=\"productive\"\r\n                disabled=\"true\"\r\n              >\r\n                <ion-icon\r\n                  class=\"teal\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"teal\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                class=\"lightblue\"\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n              ></ion-icon>\r\n              <p>{{m.notes}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(m.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <!-- <ion-button color=\"light\" style=\"float: right\" (click)=\"editModal(m.rowid)\">\r\n                    <ion-icon size=\"large\" color=\"success\" slot=\"start\" name=\"create\"></ion-icon>Edit</ion-button> -->\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "00qA":
/*!***********************************************************!*\
  !*** ./src/app/tab4/mood/view-entry/view-entry.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "7Vph":
/*!*******************************************************************!*\
  !*** ./src/app/tab4/mood/view-entry/view-entry-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "w6Is");




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

/***/ "idQg":
/*!***********************************************************!*\
  !*** ./src/app/tab4/mood/view-entry/view-entry.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "7Vph");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "w6Is");







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

/***/ "w6Is":
/*!*********************************************************!*\
  !*** ./src/app/tab4/mood/view-entry/view-entry.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "/DPu");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "00qA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "s+yr");
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
        this.mood = [];
        this.isData = false;
        this.storedData = null;
        this.MoodTable = 'CREATE TABLE IF NOT EXISTS mood (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT)';
        this.data = { date: "", happy: "", independent: "", tired: "", productive: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.mood = [];
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
            yield this._db.executeSql(this.MoodTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM mood WHERE rowid=?', [rowid])
            .then(res => {
            this.mood = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.mood.push({
                    rowid: res.rows.item(i).rowid,
                    date: res.rows.item(i).date,
                    happy: res.rows.item(i).happy,
                    independent: res.rows.item(i).independent,
                    tired: res.rows.item(i).tired,
                    productive: res.rows.item(i).productive,
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
        this._db.executeSql('DELETE FROM mood WHERE rowid=?', [rowid])
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



/***/ })

}]);
//# sourceMappingURL=default~mood-mood-module~view-entry-view-entry-module.js.map