(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~basic-info-basic-info-module~edit-entry-edit-entry-module"],{

/***/ "92FX":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/basic-info/edit-entry/edit-entry.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit your Basic Info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let basic of basicInfo; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Edit Basic Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" novalidate (ngSubmit)=\"update(rowid)\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Gender</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"transgender-outline\"\r\n                  class=\"red\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.gender}}\"\r\n                  [(ngModel)]=\"data.gender\"\r\n                  name=\"gender\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Height</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"accessibility\"\r\n                  class=\"orange\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.height}}\"\r\n                  [(ngModel)]=\"data.height\"\r\n                  name=\"height\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Weight</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"accessibility\"\r\n                  class=\"yellow\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.weight}}\"\r\n                  [(ngModel)]=\"data.weight\"\r\n                  name=\"height\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Blood Pressure</ion-label>\r\n                <ion-icon slot=\"start\" name=\"pulse\" class=\"green\"></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.blood_pressure}}\"\r\n                  [(ngModel)]=\"data.blood_pressure\"\r\n                  name=\"blood_pressure\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Allergies</ion-label>\r\n                <ion-icon slot=\"start\" name=\"sad\" class=\"teal\"></ion-icon>\r\n                <ion-textarea\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.allergies}}\"\r\n                  [(ngModel)]=\"data.allergies\"\r\n                  name=\"allergies\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n                <ion-icon slot=\"start\" name=\"pencil\" class=\"green\"></ion-icon>\r\n                <ion-textarea\r\n                  type=\"text\"\r\n                  placeholder=\"{{basic.notes}}\"\r\n                  [(ngModel)]=\"data.notes\"\r\n                  name=\"notes\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n\r\n                <ion-button\r\n                  type=\"button\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "C7MH":
/*!***************************************************************!*\
  !*** ./src/app/tab3/basic-info/edit-entry/edit-entry.page.ts ***!
  \***************************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "92FX");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "aPfH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from: Database - 
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
        this.basicInfo = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.BasicInfoTable = 'CREATE TABLE IF NOT EXISTS basicinfo (rowid INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, blood_pressure TEXT, allergies TEXT, notes TEXT)';
        this.data = { gender: "", height: "", weight: "", blood_pressure: "", allergies: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.basicInfo = [];
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
            yield this._db.executeSql(this.BasicInfoTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM basicinfo WHERE rowid=?', [rowid])
            .then(res => {
            this.basicInfo = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.basicInfo.push({
                    rowid: res.rows.item(i).rowid,
                    gender: res.rows.item(i).gender,
                    height: res.rows.item(i).height,
                    weight: res.rows.item(i).weight,
                    blood_pressure: res.rows.item(i).blood_pressure,
                    allergies: res.rows.item(i).allergies,
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
            this.isSubmitted = true;
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
    noSubmit(e) {
        e.preventDefault();
    }
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.gender != "") {
                this._db.executeSql('UPDATE basicinfo SET gender=? WHERE rowid=?', [this.data.gender, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.height != "") {
                this._db.executeSql('UPDATE basicinfo SET height=? WHERE rowid=?', [this.data.height, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.weight != "") {
                this._db.executeSql('UPDATE basicinfo SET weight=? WHERE rowid=?', [this.data.weight, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.blood_pressure != "") {
                this._db.executeSql('UPDATE basicinfo SET blood_pressure=? WHERE rowid=?', [this.data.blood_pressure, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.allergies != "") {
                this._db.executeSql('UPDATE basicinfo SET allergies=? WHERE rowid=?', [this.data.allergies, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.notes != "") {
                this._db.executeSql('UPDATE basicinfo SET notes=? WHERE rowid=?', [this.data.notes, rowid])
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



/***/ }),

/***/ "aPfH":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/basic-info/edit-entry/edit-entry.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n\nion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJlZGl0LWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogOTUlO1xyXG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~basic-info-basic-info-module~edit-entry-edit-entry-module.js.map