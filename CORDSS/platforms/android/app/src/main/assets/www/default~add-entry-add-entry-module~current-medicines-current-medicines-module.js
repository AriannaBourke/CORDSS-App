(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~current-medicines-current-medicines-module"],{

/***/ "66bx":
/*!****************************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/add-entry/add-entry-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "pOiv");




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

/***/ "JXWZ":
/*!********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/add-entry/add-entry.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  max-width: 95%;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhZGQtZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogOTUlO1xyXG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "YXr7":
/*!********************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/add-entry/add-entry.module.ts ***!
  \********************************************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "66bx");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "pOiv");







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

/***/ "pOiv":
/*!******************************************************************************!*\
  !*** ./src/app/tab3/medicines/current-medicines/add-entry/add-entry.page.ts ***!
  \******************************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "un6V");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "JXWZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from: Database - 
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
        this.medicines = [];
        this.isData = false;
        this.storedData = null;
        this.MedicinesTable = 'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)';
        this.data = { medicinename: "", instructions: "", sideeffects: "", notes: "" };
        this.isSubmitted = false;
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
        this._db.executeSql('SELECT * FROM medicine WHERE activeflag="Yes" ORDER BY rowid DESC', [])
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
    saveData() {
        this._db.executeSql('INSERT INTO medicine VALUES(NULL,?,?,?,?,?)', [this.data.medicinename, this.data.instructions, this.data.sideeffects, this.data.notes, "Yes"])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert("save data error" + JSON.stringify(e)));
    }
    submitData(myForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Save this entry?",
                message: "Would you like to save this entry in your medicines?",
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

/***/ "un6V":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medicines/current-medicines/add-entry/add-entry.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a Current Medicine!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Current Medicine</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Medicine Type</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <ion-select\r\n                #links\r\n                ngModel\r\n                name=\"estate\"\r\n                interface=\"popover\"\r\n                placeholder=\"Select Option (*Required)\"\r\n                required\r\n                #medicinenameCtrl=\"ngModel\"\r\n                [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n              >\r\n                <ion-select-option value=\"1\"\r\n                  >Medium/long term medications</ion-select-option\r\n                >\r\n                <ion-select-option value=\"2\">Eye drops</ion-select-option>\r\n                <ion-select-option value=\"3\">Topical Treatment</ion-select-option>\r\n                <ion-select-option value=\"4\"\r\n                  >Conventional immunosuppressants</ion-select-option\r\n                >\r\n                <ion-select-option value=\"5\"\r\n                  >Biologic/targeted synthetic</ion-select-option\r\n                >\r\n                <ion-select-option value=\"6\">Other</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item\r\n              *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n            >\r\n              <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n            </ion-item>\r\n            <div *ngIf=\"links.value === '1'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Prednisolone tablets\"\r\n                    >Prednisolone tablets</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Folic acid\"\r\n                    >Folic acid</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Naproxen\"\r\n                    >Naproxen</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '2'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Prednisolone eye drops\"\r\n                    >Prednisolone</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Dexamethasone eye drops\"\r\n                    >Dexamethasone</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Timolol eye drops\"\r\n                    >Timolol</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Brinzolamide eye drops\"\r\n                    >Brinzolamide</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Dorzolamide eye drops\"\r\n                    >Dorzolamide</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Apraclonidine eye drops\"\r\n                    >Apraclonidine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Betaxolol eye drops\"\r\n                    >Betaxolol</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Levobunolol eye drops\"\r\n                    >Levobunolol</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Latanoprost eye drops\"\r\n                    >Latanoprost</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Bimatoprost eye drops\"\r\n                    >Bimatoprost</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Tafluprost eye drops\"\r\n                    >Tafluprost</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Travaprost eye drops\"\r\n                    >Travaprost</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Brimonidine eye drops\"\r\n                    >Brimonidine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Cyclopentolate eye drops\"\r\n                    >Cyclopentolate</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '3'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Dexamethasone gel\"\r\n                    >Dexamethasone gel</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Dexamethasone cream\"\r\n                    >Dexamethasone cream</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Betamethasone cream\"\r\n                    >Betamethasone cream</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '4'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Azathioprine (AZA)\"\r\n                    >Azathioprine (AZA)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Ciclosporin\"\r\n                    >Ciclosporin</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Methotrexate (MTX)\"\r\n                  >Methotrexate (MTX)</ion-select-option\r\n                >\r\n                  <ion-select-option value=\"Mycophenolate (aka mycophenolate mofetil, mycophenolic acid, MMF, Cellcept)\"\r\n                    >Mycophenolate (aka mycophenolate mofetil, mycophenolic acid, MMF, Cellcept)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Leflunomide\"\r\n                    >Leflunomide</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Sirolimus\"\r\n                    >Sirolimus</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Tacrolimus\"\r\n                    >Tacrolimus</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Cyclophosphamide\"\r\n                    >Cyclophosphamide</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Chloroquine\"\r\n                    >Chloroquine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Hydroxychloroquine\"\r\n                    >Hydroxychloroquine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Sulphasalazine\"\r\n                    >Sulphasalazine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Balsalazide sodium\"\r\n                    >Balsalazide sodium</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Mesalazine\"\r\n                    >Mesalazine</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Olsalazine sodium\"\r\n                    >Olsalazine sodium</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Pencillamine\"\r\n                    >Pencillamine</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '5'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Etanercept (eg Enbrel, Benepali, other\r\n                  biosimilar)\"\r\n                    >Etanercept (eg Enbrel, Benepali, other\r\n                    biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Adalimumab  (Humira, Amgevita, other\r\n                  biosimilar)\"\r\n                    >Adalimumab (Humira, Amgevita, other\r\n                    biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Infliximab (Remicade, other biosimilar)\"\r\n                    >Infliximab (Remicade, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Golimumab (Simponi, other biosimilar)\"\r\n                    >Golimumab (Simponi, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Certolizumab (Cimzia, other biosimilar)\"\r\n                    >Certolizumab (Cimzia, other biosimilar)\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Rituximab Tocilizumab (Roactemra, other\r\n                  biosimilar)\"\r\n                    >Rituximab Tocilizumab (Roactemra, other\r\n                    biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Sarilumab (Kevzara, other biosimilar)\"\r\n                    >Sarilumab (Kevzara, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Abatacept (Orencia, other biosimilar)\"\r\n                    >Abatacept (Orencia, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Belimumab (Benlysta, other biosimilar)\"\r\n                    >Belimumab (Benlysta, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Anakinra (Kineret, other biosimilar)\"\r\n                    >Anakinra (Kineret, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Canakinumab (Ilaris, other biosimilar)\"\r\n                    >Canakinumab (Ilaris, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Secukinumab (Cosentyx, other biosimilar)\"\r\n                    >Secukinumab (Cosentyx, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Ixekizumab (Taltz, other biosimilar)\"\r\n                    >Ixekizumab (Taltz, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Ustekinumab (Stelara, other biosimilar)\"\r\n                    >Ustekinumab (Stelara, other biosimilar)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Other biological agent\"\r\n                    >Other biological agent\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Other synthetic medication\"\r\n                    >Other synthetic medication</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Baricitinib\"\r\n                    >Baricitinib</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Tofacitinib\"\r\n                    >Tofacitinib</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"JAK inhibitor\"\r\n                    >JAK inhibitor</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '6'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Medicine Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n                <ion-input\r\n                  placeholder=\"Write medication name\"\r\n                  [(ngModel)]=\"data.medicinename\"\r\n                  name=\"medicinename\"\r\n                  required\r\n                  #medicinenameCtrl=\"ngModel\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-item\r\n                *ngIf=\"!medicinenameCtrl.valid && medicinenameCtrl.touched\"\r\n              >\r\n                <ion-text color=\"danger\">*Medicine is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Instructions</ion-label>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Instructions\"\r\n                [(ngModel)]=\"data.instructions\"\r\n                name=\"instructions\"\r\n              ></ion-textarea>\r\n              <ion-icon\r\n                class=\"orange\"\r\n                slot=\"start\"\r\n                name=\"information\"\r\n              ></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Side Effects</ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Side Effects\"\r\n                [(ngModel)]=\"data.sideeffects\"\r\n                name=\"sideeffects\"\r\n              ></ion-input>\r\n              <ion-icon class=\"yellow\" slot=\"start\" name=\"sad\"></ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                class=\"green\"\r\n                slot=\"start\"\r\n                name=\"chatbox-ellipses\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                shape=\"round\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~current-medicines-current-medicines-module.js.map