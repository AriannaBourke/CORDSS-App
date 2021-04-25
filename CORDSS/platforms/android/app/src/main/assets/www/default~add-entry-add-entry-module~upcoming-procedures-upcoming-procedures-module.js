(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"],{

/***/ "+hFr":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/add-entry/add-entry.module.ts ***!
  \***********************************************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "Mcwy");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "d2nG");







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

/***/ "86Uv":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/add-entry/add-entry.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiA5NSU7XHJcbiAgLS1tYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Mcwy":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/add-entry/add-entry-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "d2nG");




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

/***/ "d2nG":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/add-entry/add-entry.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "xFky");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "86Uv");
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
        this.procedures = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.ProceduresTable = 'CREATE TABLE IF NOT EXISTS procedures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)';
        this.data = { date: "", doctor: "", place: "", type: "", description: "", questions: "" };
        this.now = new Date();
        this.today = this.now.toISOString();
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
        this._db.executeSql('SELECT * FROM procedures WHERE date > ? ORDER BY date DESC', [this.today])
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
    saveData() {
        this._db.executeSql('INSERT INTO procedures VALUES(NULL,?,?,?,?,?,?)', [this.data.date, this.data.doctor, this.data.place, this.data.type, this.data.description, this.data.questions])
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
                message: "Would you like to save this entry in your procedures? <br/><br/>Note: if the date is in the past, the procedure will be placed in your past procedures!",
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

/***/ "xFky":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/procedures/upcoming-procedures/add-entry/add-entry.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a Procedure!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Procedure</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Date & Time</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <ion-datetime\r\n                placeholder=\"Date & Time (*Required)\"\r\n                displayFormat=\"DD MMMM YYYY HH:mm a\"\r\n                [(ngModel)]=\"data.date\"\r\n                name=\"date\"\r\n                required\r\n                #dateCtrl=\"ngModel\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n              <ion-text color=\"danger\">*Date is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Doctor</ion-label>\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Doctor's Name\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.doctor\"\r\n                name=\"doctor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Place</ion-label>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"business\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Place\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.place\"\r\n                name=\"place\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Procedure Type</ion-label>\r\n            <ion-icon class=\"green\" slot=\"start\" name=\"fitness\"></ion-icon>\r\n             <ion-select \r\n            #links ngModel \r\n            name=\"estate\" \r\n            interface=\"popover\" \r\n            placeholder=\"Select Option\"\r\n            [(ngModel)]=\"data.type\"\r\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='Cataract surgery'>Cataract surgery</ion-select-option>\r\n            <ion-select-option value='Cataract surgery with lens implant'>Cataract surgery with lens implant </ion-select-option>\r\n            <ion-select-option value='Glaucoma surgery'>Glaucoma surgery</ion-select-option>\r\n            <ion-select-option value='Glaucoma surgery with tube'>Glaucoma surgery with tube</ion-select-option>\r\n            <ion-select-option value='Removal of band keratopathy'>Removal of band keratopathy</ion-select-option>\r\n            <ion-select-option value='Injection of steroid inside eye (intravitreal steroid)'>Injection of steroid inside eye (intravitreal steroid)</ion-select-option>\r\n            <ion-select-option value='Injection of steroid implant into eye (Ozurdex implant)'>Injection of steroid implant into eye (Ozurdex implant)</ion-select-option>\r\n            <ion-select-option value='Injection of steroids around the eye (Orbital floor steroid)'>Injection of steroids around the eye (Orbital floor steroid)</ion-select-option>\r\n            <ion-select-option value='Injection of steroid into joint'>Injection of steroid into joint</ion-select-option>\r\n            <ion-select-option value='Endoscopy'>Endoscopy</ion-select-option>\r\n            <ion-select-option value='Gastroscopy'>Gastroscopy</ion-select-option>\r\n            <ion-select-option value='Kidney transplant'>Kidney transplant</ion-select-option>\r\n            <ion-select-option value='Biopsy'>Biopsy</ion-select-option>\r\n            <ion-select-option value='Other'>Other Operation</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n         </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Description</ion-label>\r\n              <ion-icon\r\n                class=\"teal\"\r\n                slot=\"start\"\r\n                name=\"chatbubble-ellipses\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                placeholder=\"Description\"\r\n                rows=\"3\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.description\"\r\n                name=\"description\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Questions?</ion-label>\r\n              <ion-icon\r\n                class=\"lightblue\"\r\n                slot=\"start\"\r\n                name=\"help-circle\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                placeholder=\"Questions to ask at the procedure\"\r\n                rows=\"3\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.questions\"\r\n                name=\"questions\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                fill=\"outline\"\r\n                shape=\"round\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                shape=\"round\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module.js.map