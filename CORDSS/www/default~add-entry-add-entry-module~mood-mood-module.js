(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~mood-mood-module"],{

/***/ "S2Tq":
/*!*****************************************************************!*\
  !*** ./src/app/tab4/mood/add-entry/add-entry-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "pCPG");




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

/***/ "Yprg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/mood/add-entry/add-entry.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a new Mood entry!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Mood</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Date</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <ion-datetime\r\n                placeholder=\"Date (*Required)\"\r\n                displayFormat=\"DD MMMM YYYY\"\r\n                [(ngModel)]=\"data.date\"\r\n                name=\"date\"\r\n                required\r\n                #dateCtrl=\"ngModel\"\r\n              >\r\n              </ion-datetime>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n              <ion-text color=\"danger\">*Date is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Happy</ion-label>\r\n              <ion-range\r\n                color=\"tertiary\"\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                [(ngModel)]=\"data.happy\"\r\n                name=\"happy\"\r\n              >\r\n                <ion-icon\r\n                  class=\"orange\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"orange\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">independent</ion-label>\r\n              <ion-range\r\n                color=\"tertiary\"\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                [(ngModel)]=\"data.independent\"\r\n                name=\"independent\"\r\n              >\r\n                <ion-icon\r\n                  class=\"yellow\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"yellow\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Tired</ion-label>\r\n              <ion-range\r\n                color=\"tertiary\"\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                [(ngModel)]=\"data.tired\"\r\n                name=\"tired\"\r\n              >\r\n                <ion-icon\r\n                  class=\"green\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"green\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Productive</ion-label>\r\n              <ion-range\r\n                color=\"tertiary\"\r\n                min=\"20\"\r\n                max=\"80\"\r\n                step=\"2\"\r\n                [(ngModel)]=\"data.productive\"\r\n                name=\"productive\"\r\n              >\r\n                <ion-icon\r\n                  class=\"teal\"\r\n                  slot=\"start\"\r\n                  name=\"thumbs-down\"\r\n                ></ion-icon>\r\n                <ion-icon class=\"teal\" slot=\"end\" name=\"thumbs-up\"></ion-icon>\r\n              </ion-range>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                class=\"lightblue\"\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "eUCX":
/*!*********************************************************!*\
  !*** ./src/app/tab4/mood/add-entry/add-entry.module.ts ***!
  \*********************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "S2Tq");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "pCPG");







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

/***/ "pCPG":
/*!*******************************************************!*\
  !*** ./src/app/tab4/mood/add-entry/add-entry.page.ts ***!
  \*******************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "Yprg");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "ynjZ");
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
        this.mood = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.MoodTable = 'CREATE TABLE IF NOT EXISTS mood (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT)';
        this.data = { date: "", happy: "", independent: "", tired: "", productive: "", notes: "" };
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
        this._db.executeSql('SELECT * FROM mood ORDER BY rowid DESC', [])
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
    saveData() {
        this._db.executeSql('INSERT INTO mood VALUES(NULL,?,?,?,?,?,?)', [this.data.date, this.data.happy, this.data.independent, this.data.tired, this.data.productive, this.data.notes])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert("save data error" + e));
    }
    submitData(rowid) {
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

/***/ "ynjZ":
/*!*********************************************************!*\
  !*** ./src/app/tab4/mood/add-entry/add-entry.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~mood-mood-module.js.map