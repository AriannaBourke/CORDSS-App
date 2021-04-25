(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module"],{

/***/ "6YsL":
/*!*********************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/add-entry/add-entry.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GCMF":
/*!*****************************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/add-entry/add-entry-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "b+s2");




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

/***/ "a8cv":
/*!*********************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/add-entry/add-entry.module.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "GCMF");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "b+s2");







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

/***/ "b+s2":
/*!*******************************************************************!*\
  !*** ./src/app/tab2/my-clinical-team/add-entry/add-entry.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "kjKr");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "6YsL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\







let AddEntryPage = class AddEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.clinicalteam = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.ClinicalTeamTable = 'CREATE TABLE IF NOT EXISTS clinicalteam (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, phone INT, photo TEXT)';
        this.data = { name: "", role: "", clinic_name: "", email: "", phone: "", photo: "" };
        this.clinicalteam = [];
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
            yield this._db.executeSql(this.ClinicalTeamTable, []);
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
        this._db.executeSql('SELECT * FROM clinicalteam', [])
            .then(res => {
            this.clinicalteam = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.clinicalteam.push({
                    rowid: res.rows.item(i).rowid,
                    name: res.rows.item(i).name,
                    role: res.rows.item(i).role,
                    clinic_name: res.rows.item(i).clinic_name,
                    email: res.rows.item(i).email,
                    phone: res.rows.item(i).phone,
                    photo: res.rows.item(i).photo,
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    saveData() {
        this._db.executeSql('INSERT INTO clinicalteam VALUES(NULL,?,?,?,?,?,?)', [this.data.name, this.data.role, this.data.clinic_name, this.data.email, this.data.phone, this.data.photo])
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
                message: "Would you like to save this entry in your clinical team?",
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

/***/ "kjKr":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/my-clinical-team/add-entry/add-entry.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center\">Add a person to your team!</ion-title>\r\n    <ion-button\r\n      fill=\"clear\"\r\n      color=\"dark\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-title color=\"dark\" style=\"text-align: center\"\r\n              >Add Clinical Team Member</ion-title\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\">\r\n              <ion-img [src]=\"myProfileImage\"></ion-img>\r\n            </ion-avatar>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-icon slot=\"start\" name=\"person\" class=\"red\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Name (*Required)\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.name\"\r\n                name=\"name\"\r\n                required\r\n                #nameCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!nameCtrl.valid && nameCtrl.touched\">\r\n              <ion-text color=\"danger\">*Name is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Role</ion-label>\r\n         <ion-icon class=\"orange\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n         <ion-select \r\n        #links ngModel \r\n        name=\"clinicalrole\"\r\n        interface=\"popover\" \r\n        placeholder=\"Select Option\"\r\n        [(ngModel)]=\"data.role\"\r\n        [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n        <ion-select-option value='Doctor'>Doctor</ion-select-option>\r\n          <ion-select-option value='Ophthalmologist'>Ophthalmologist</ion-select-option>\r\n          <ion-select-option value='Optometrist'>Optometrist</ion-select-option>\r\n          <ion-select-option value='Rheumatologist'>Rheumatologist</ion-select-option>\r\n          <ion-select-option value='Clinical Nurse specialist'>Clinical Nurse Specialist</ion-select-option>\r\n          <ion-select-option value='GP'>GP</ion-select-option>\r\n          <ion-select-option value='Mental Health Specialist'>Mental Health Specialist</ion-select-option>\r\n          <ion-select-option value='Other'>Other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n     </ion-col>\r\n    </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Clinic Name</ion-label>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"location\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Clinic Name\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.clinic_name\"\r\n                name=\"clinic_name\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Email</ion-label>\r\n              <ion-icon class=\"green\" slot=\"start\" name=\"mail\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Email Address\"\r\n                type=\"email\"\r\n                [(ngModel)]=\"data.email\"\r\n                name=\"email\"\r\n                #emailCtrl=\"ngModel\"\r\n                email\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!emailCtrl.valid && emailCtrl.touched\">\r\n              <ion-text color=\"danger\">Email is not valid</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Telephone</ion-label>\r\n              <ion-icon class=\"teal\" slot=\"start\" name=\"call\"></ion-icon>\r\n              <ion-input\r\n                placeholder=\"Phone Number\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"data.phone\"\r\n                name=\"phone\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                shape=\"round\"\r\n                type=\"button\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                shape=\"round\"\r\n                type=\"button\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                color=\"success\"\r\n                id=\"submit\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module.js.map