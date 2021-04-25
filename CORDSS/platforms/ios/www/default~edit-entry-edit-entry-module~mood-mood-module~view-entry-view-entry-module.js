(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"],{

/***/ "SjGM":
/*!***********************************************************!*\
  !*** ./src/app/tab4/mood/edit-entry/edit-entry.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVudHJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "owSl":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/mood/edit-entry/edit-entry.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit your Mood details!</ion-title>\r\n    <ion-button color=\"light\" slot=\"start\" size=\"small\" (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list *ngFor=\"let m of mood; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label color=\"tertiary\">Edit Mood</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" (ngSubmit)=\"update(rowid)\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Date</ion-label>\r\n                <ion-icon\r\n                  color=\"tertiary\"\r\n                  slot=\"start\"\r\n                  name=\"calendar-number-outline\"\r\n                ></ion-icon>\r\n                <ion-datetime\r\n                  displayFormat=\"DD MMMM YYYY\"\r\n                  [(ngModel)]=\"data.date\"\r\n                  name=\"date\"\r\n                >\r\n                </ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Happy</ion-label>\r\n                <ion-range\r\n                  color=\"tertiary\"\r\n                  min=\"20\"\r\n                  max=\"80\"\r\n                  step=\"2\"\r\n                  [(ngModel)]=\"data.happy\"\r\n                  name=\"happy\"\r\n                >\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"sad-outline\"\r\n                  ></ion-icon>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"end\"\r\n                    name=\"happy-outline\"\r\n                  ></ion-icon>\r\n                </ion-range>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">independent</ion-label>\r\n                <ion-range\r\n                  color=\"tertiary\"\r\n                  min=\"20\"\r\n                  max=\"80\"\r\n                  step=\"2\"\r\n                  [(ngModel)]=\"data.independent\"\r\n                  name=\"independent\"\r\n                >\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"sad-outline\"\r\n                  ></ion-icon>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"end\"\r\n                    name=\"happy-outline\"\r\n                  ></ion-icon>\r\n                </ion-range>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Tired</ion-label>\r\n                <ion-range\r\n                  color=\"tertiary\"\r\n                  min=\"20\"\r\n                  max=\"80\"\r\n                  step=\"2\"\r\n                  [(ngModel)]=\"data.tired\"\r\n                  name=\"tired\"\r\n                >\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"sad-outline\"\r\n                  ></ion-icon>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"end\"\r\n                    name=\"happy-outline\"\r\n                  ></ion-icon>\r\n                </ion-range>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Productive</ion-label>\r\n                <ion-range\r\n                  color=\"tertiary\"\r\n                  min=\"20\"\r\n                  max=\"80\"\r\n                  step=\"2\"\r\n                  [(ngModel)]=\"data.productive\"\r\n                  name=\"productive\"\r\n                >\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"sad-outline\"\r\n                  ></ion-icon>\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"end\"\r\n                    name=\"happy-outline\"\r\n                  ></ion-icon>\r\n                </ion-range>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Notes</ion-label>\r\n                <ion-icon\r\n                  color=\"tertiary\"\r\n                  slot=\"start\"\r\n                  name=\"pencil-outline\"\r\n                ></ion-icon>\r\n                <ion-textarea\r\n                  type=\"text\"\r\n                  placeholder=\"Notes\"\r\n                  [(ngModel)]=\"data.notes\"\r\n                  name=\"notes\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  size=\"small\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n\r\n                <ion-button\r\n                  type=\"button\"\r\n                  size=\"small\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "s+yr":
/*!*********************************************************!*\
  !*** ./src/app/tab4/mood/edit-entry/edit-entry.page.ts ***!
  \*********************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "owSl");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "SjGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/







let EditEntryPage = class EditEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.mood = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
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
    update(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Update this entry?",
                message: "Would you like to update this entry?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Save",
                        handler: () => {
                            this.updateSQL(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.date != "") {
                this._db.executeSql('UPDATE mood SET date=? WHERE rowid=?', [this.data.date, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.happy != "") {
                this._db.executeSql('UPDATE mood SET happy=? WHERE rowid=?', [this.data.happy, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.independent != "") {
                this._db.executeSql('UPDATE mood SET independent=? WHERE rowid=?', [this.data.independent, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.tired != "") {
                this._db.executeSql('UPDATE mood SET tired=? WHERE rowid=?', [this.data.tired, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.productive != "") {
                this._db.executeSql('UPDATE mood SET productive=? WHERE rowid=?', [this.data.productive, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.notes != "") {
                this._db.executeSql('UPDATE mood SET notes=? WHERE rowid=?', [this.data.notes, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            this.closeModal();
        });
    }
};
EditEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
EditEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-entry',
        template: _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditEntryPage);



/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module.js.map