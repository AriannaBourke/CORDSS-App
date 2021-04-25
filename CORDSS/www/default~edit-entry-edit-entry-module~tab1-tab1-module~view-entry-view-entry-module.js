(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"],{

/***/ "G5lX":
/*!****************************************************!*\
  !*** ./src/app/tab1/edit-entry/edit-entry.page.ts ***!
  \****************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "Rami");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "mnaa");
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
        this.aboutme = [];
        this.isData = false;
        this.storedData = null;
        this.AboutMeTable = 'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone TEXT, address TEXT, nhs_number TEXT, emergency_1_name TEXT, emergency_1_number TEXT, emergency_2_name TEXT, emergency_2_number TEXT, emergency_3_name TEXT, emergency_3_number TEXT)';
        this.data = { name: "", birthday: "", about: "", email: "", phone: "", address: "", nhs_number: "", emergency_1_name: "", emergency_1_number: "", emergency_2_name: "", emergency_2_number: "", emergency_3_name: "", emergency_3_number: "" };
        this.rowid = navParams.get('rowid');
        this.aboutme = [];
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
            yield this._db.executeSql(this.AboutMeTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM aboutme WHERE rowid=?', [rowid])
            .then(res => {
            this.aboutme = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.aboutme.push({
                    rowid: res.rows.item(i).rowid,
                    name: res.rows.item(i).name,
                    birthday: res.rows.item(i).birthday,
                    about: res.rows.item(i).about,
                    email: res.rows.item(i).email,
                    phone: res.rows.item(i).phone,
                    address: res.rows.item(i).address,
                    nhs_number: res.rows.item(i).nhs_number,
                    emergency_1_name: res.rows.item(i).emergency_1_name,
                    emergency_1_number: res.rows.item(i).emergency_1_number,
                    emergency_2_name: res.rows.item(i).emergency_2_name,
                    emergency_2_number: res.rows.item(i).emergency_2_number,
                    emergency_3_name: res.rows.item(i).emergency_3_name,
                    emergency_3_number: res.rows.item(i).emergency_3_number
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
                header: "Update About Me?",
                message: "Would you like to update your About Me page?",
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
            if (this.data.name != "") {
                this._db.executeSql('UPDATE aboutme SET name=? WHERE rowid=?', [this.data.name, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.birthday != "") {
                this._db.executeSql('UPDATE aboutme SET birthday=? WHERE rowid=?', [this.data.birthday, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.about != "") {
                this._db.executeSql('UPDATE aboutme SET about=? WHERE rowid=?', [this.data.about, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.email != "") {
                this._db.executeSql('UPDATE aboutme SET email=? WHERE rowid=?', [this.data.email, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.phone != "") {
                this._db.executeSql('UPDATE aboutme SET phone=? WHERE rowid=?', [this.data.phone, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.address != "") {
                this._db.executeSql('UPDATE aboutme SET address=? WHERE rowid=?', [this.data.address, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.nhs_number != "") {
                this._db.executeSql('UPDATE aboutme SET nhs_number=? WHERE rowid=?', [this.data.nhs_number, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_1_name != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_1_name=? WHERE rowid=?', [this.data.emergency_1_name, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_1_number != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_1_number=? WHERE rowid=?', [this.data.emergency_1_number, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_2_name != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_2_name=? WHERE rowid=?', [this.data.emergency_2_name, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_2_number != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_2_number=? WHERE rowid=?', [this.data.emergency_2_number, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_3_name != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_3_name=? WHERE rowid=?', [this.data.emergency_3_name, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.emergency_3_number != "") {
                this._db.executeSql('UPDATE aboutme SET emergency_3_number=? WHERE rowid=?', [this.data.emergency_3_number, rowid])
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

/***/ "Rami":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/edit-entry/edit-entry.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit your information!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let about of aboutme; let i=index\" class=\"list\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"update(rowid)\">\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Basic Info </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Name</ion-label>\r\n                <ion-icon\r\n                  class=\"red\"\r\n                  slot=\"start\"\r\n                  name=\"person\"\r\n                  size=\"medium\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  placeholder=\"{{about.name}}\"\r\n                  name=\"name\"\r\n                  required\r\n                  [(ngModel)]=\"data.name\"\r\n                  #nameCtrl=\"ngModel\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Date of Birth</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"gift\"\r\n                  class=\"orange\"\r\n                  size=\"medium\"\r\n                ></ion-icon>\r\n                <ion-datetime\r\n                  displayFormat=\"DD MMMM YYYY\"\r\n                  placeholder=\"{{about.birthday | date: 'dd MMMM YYYY'}}\"\r\n                  name=\"birthday\"\r\n                  [(ngModel)]=\"data.birthday\"\r\n                ></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">A little bit about me</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"information-circle\"\r\n                  size=\"medium\"\r\n                  class=\"yellow\"\r\n                ></ion-icon>\r\n                <ion-textarea\r\n                  rows=\"2\"\r\n                  placeholder=\"{{about.about}}\"\r\n                  name=\"about\"\r\n                  [(ngModel)]=\"data.about\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Private Info</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Email</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  class=\"green\"\r\n                  name=\"mail\"\r\n                  size=\"medium\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                placeholder=\"{{about.email}}\"\r\n                name=\"email\"\r\n                type=\"email\"\r\n                [(ngModel)]=\"data.email\"\r\n                #emailCtrl=\"ngModel\"\r\n                email\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\r\n              <ion-text color=\"danger\">Email is not valid</ion-text>\r\n            </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Phone Number</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"call\"\r\n                  size=\"medium\"\r\n                  class=\"teal\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  placeholder=\"{{about.phone}}\"\r\n                  name=\"phone\"\r\n                  [(ngModel)]=\"data.phone\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Address</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"home\"\r\n                  size=\"medium\"\r\n                  class=\"lightblue\"\r\n                ></ion-icon>\r\n                <ion-textarea\r\n                  placeholder=\"{{about.address}}\"\r\n                  name=\"address\"\r\n                  [(ngModel)]=\"data.address\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"stacked\">NHS Number</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"newspaper\"\r\n                  size=\"medium\"\r\n                  class=\"blue\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  placeholder=\"{{about.nhs_number}}\"\r\n                  name=\"nhs_number\"\r\n                  [(ngModel)]=\"data.nhs_number\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title>Emergency Contacts</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label color=\"primary\"> Emergency Contact 1 </ion-label>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Name</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"person\"\r\n                  size=\"medium\"\r\n                  class=\"darkblue\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_1_name\"\r\n                  name=\"emergency_1_name\"\r\n                  placeholder=\"{{about.emergency_1_name}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Phone Number</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"call\"\r\n                  size=\"medium\"\r\n                  class=\"purple\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_1_number\"\r\n                  name=\"emergency_1_number\"\r\n                  placeholder=\"{{about.emergency_1_number}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label color=\"primary\"> Emergency Contact 2 </ion-label>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Name</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"person\"\r\n                  size=\"medium\"\r\n                  class=\"magenta\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_2_name\"\r\n                  name=\"emergency_2_name\"\r\n                  placeholder=\"{{about.emergency_2_name}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Phone Number</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"call\"\r\n                  size=\"medium\"\r\n                  class=\"pink\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_2_number\"\r\n                  name=\"emergency_2_number\"\r\n                  placeholder=\"{{about.emergency_2_number}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label color=\"primary\"> Emergency Contact 3 </ion-label>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Name</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"person\"\r\n                  class=\"brightpink\"\r\n                  size=\"medium\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_3_name\"\r\n                  name=\"emergency_3_name\"\r\n                  placeholder=\"{{about.emergency_3_name}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Phone Number</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"call\"\r\n                  size=\"medium\"\r\n                  class=\"redpink\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  [(ngModel)]=\"data.emergency_3_number\"\r\n                  name=\"emergency_3_number\"\r\n                  placeholder=\"{{about.emergency_3_number}}\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <div class=\"ion-margin-vertical ion-text-right\">\r\n            <ion-button\r\n              type=\"button\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              color=\"danger\"\r\n              (click)=\"form.reset()\"\r\n              >Clear</ion-button\r\n            >\r\n            <ion-button\r\n              type=\"button\"\r\n              shape=\"round\"\r\n              type=\"submit\"\r\n              value=\"submit\"\r\n              id=\"submit\"\r\n              color=\"success\"\r\n              >Update</ion-button\r\n            >\r\n          </div>\r\n        </ion-grid>\r\n      </ion-card>\r\n    </form>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "mnaa":
/*!******************************************************!*\
  !*** ./src/app/tab1/edit-entry/edit-entry.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0LWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFDSiIsImZpbGUiOiJlZGl0LWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3Qge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10ZXh0YXJlYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgfVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module.js.map