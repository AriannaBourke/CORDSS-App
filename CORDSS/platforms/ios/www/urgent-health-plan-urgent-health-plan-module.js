(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["urgent-health-plan-urgent-health-plan-module"],{

/***/ "TBmF":
/*!********************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/urgent-health-plan.page.ts ***!
  \********************************************************************/
/*! exports provided: UrgentHealthPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentHealthPlanPage", function() { return UrgentHealthPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_urgent_health_plan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./urgent-health-plan.page.html */ "qTRC");
/* harmony import */ var _urgent_health_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urgent-health-plan.page.scss */ "sEoA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry/add-entry.page */ "FEtN");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-entry/edit-entry.page */ "vmWj");
/* harmony import */ var _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.page */ "1zTi");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/










let UrgentHealthPlanPage = class UrgentHealthPlanPage {
    constructor(_alertController, _plat, _sql, modalController) {
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.modalController = modalController;
        this.aboutmepicture = [];
        this.urgentplan = [];
        this.isData = false;
        this.storedData = null;
        this.UrgentPlanTable = 'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone INT, notes TEXT)';
        this.data = { type: "", instructions: "", phone: "", notes: "" };
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
            this.getData();
        });
    }
    ionViewDidLoad() {
        this.getData();
        this.getDataPicture();
    }
    ionViewWillEnter() {
        this.getData();
        this.getDataPicture();
    }
    getData() {
        this.verifyDatabasePopulated();
        this._db.executeSql('SELECT * FROM urgentplan ORDER BY rowid DESC', [])
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
    verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM urgentplan', [])
            .then(res => {
            if (res.rows.length == 0) {
                this.isEnabled = true;
            }
            else {
                this.isEnabled = false;
            }
        });
    }
    noContent() {
        return !this.isEnabled;
    }
    saveData() {
        this._db.executeSql('INSERT INTO urgentplan VALUES(NULL,?,?,?,?)', [this.data.type, this.data.instructions, this.data.phone, this.data.notes])
            .then(res => {
            this.getData();
        })
            .catch(e => alert("save data error" + e));
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM urgentplan WHERE rowid=?', [rowid])
            .then(res => {
            this.getData();
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
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_6__["AddEntryPage"],
                componentProps: {}
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.getData();
            });
            return yield modal.present();
        });
    }
    viewModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_8__["ViewEntryPage"],
                componentProps: { 'rowid': rowid
                }
            });
            modal.onDidDismiss().then(() => {
                this.getData();
            });
            return yield modal.present();
        });
    }
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_7__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData();
            });
            return yield modal.present();
        });
    }
    getDataPicture() {
        this._db.executeSql('SELECT * FROM aboutmepicture', [])
            .then(res => {
            this.aboutmepicture = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.aboutmepicture.push({
                    rowid: res.rows.item(i).rowid,
                    picture: res.rows.item(i).picture,
                });
            }
            console.log('hey maria');
            console.log(this.aboutmepicture[0].picture);
            this.myProfileImage = this.aboutmepicture[res.rows.length - 1].picture;
        })
            .catch(e => alert('get data error' + e));
    }
};
UrgentHealthPlanPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
UrgentHealthPlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-urgent-health-plan',
        template: _raw_loader_urgent_health_plan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_urgent_health_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UrgentHealthPlanPage);



/***/ }),

/***/ "f5VA":
/*!******************************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/urgent-health-plan-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: UrgentHealthPlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentHealthPlanPageRoutingModule", function() { return UrgentHealthPlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _urgent_health_plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urgent-health-plan.page */ "TBmF");




const routes = [
    {
        path: '',
        component: _urgent_health_plan_page__WEBPACK_IMPORTED_MODULE_3__["UrgentHealthPlanPage"]
    },
    {
        path: 'add-entry',
        loadChildren: () => Promise.all(/*! import() | add-entry-add-entry-module */[__webpack_require__.e("default~add-entry-add-entry-module~medical-history-medical-history-module"), __webpack_require__.e("default~add-entry-add-entry-module~current-medicines-current-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-medicines-past-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~tab1-tab1-module"), __webpack_require__.e("default~add-entry-add-entry-module~test-results-test-results-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-procedures-past-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~mood-mood-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-family-my-family-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-appointments-upcoming-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-appointments-past-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~urgent-health-plan-urgent-health-plan-module"), __webpack_require__.e("default~add-entry-add-entry-module~basic-info-basic-info-module"), __webpack_require__.e("common"), __webpack_require__.e("add-entry-add-entry-module")]).then(__webpack_require__.bind(null, /*! ./add-entry/add-entry.module */ "Jksx")).then(m => m.AddEntryPageModule)
    },
    {
        path: 'edit-entry',
        loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~basic-info-basic-info-module~edit-entry-edit-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ./edit-entry/edit-entry.module */ "tvNB")).then(m => m.EditEntryPageModule)
    },
    {
        path: 'view-entry',
        loadChildren: () => Promise.all(/*! import() | view-entry-view-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-appointments-upcoming-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./view-entry/view-entry.module */ "TxGo")).then(m => m.ViewEntryPageModule)
    }
];
let UrgentHealthPlanPageRoutingModule = class UrgentHealthPlanPageRoutingModule {
};
UrgentHealthPlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UrgentHealthPlanPageRoutingModule);



/***/ }),

/***/ "qTRC":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/urgent-health-plan/urgent-health-plan.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Urgent Health Plan</ion-title>\r\n    <ion-button color=\"success\" slot=\"end\" (click)=\"openModal()\"\r\n      ><ion-icon slot=\"start\" name=\"add\"></ion-icon>Add</ion-button\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\" >\r\n    <ion-img [src]=\"myProfileImage\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-card class=\"hiddencard\" [hidden]=\"noContent()\">\r\n    <ion-item lines=\"none\">\r\n      <p style=\"font-size: 30px\">\r\n        Click 'Add' to add your Urgent Health Plans!\r\n      </p>\r\n      <img class=\"arrow\" src=\"../../../assets/icon/curly arrow 1.png\" />\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-list *ngFor=\"let plan of urgentplan; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-card-title>Urgent Plan Info</ion-card-title>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <p>Emergency Type: {{plan.type}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(plan.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(plan.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n            <ion-button\r\n              color=\"tertiary\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"viewModal(plan.rowid)\"\r\n              ><ion-icon color=\"tertiary\" slot=\"start\" name=\"eye\"></ion-icon\r\n              >View</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "sEoA":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/urgent-health-plan.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.profile-pic {\n  margin-top: 1vh;\n  width: 50px;\n  height: 50px;\n  border: white solid 1px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1cmdlbnQtaGVhbHRoLXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InVyZ2VudC1oZWFsdGgtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "v7wV":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/urgent-health-plan/urgent-health-plan.module.ts ***!
  \**********************************************************************/
/*! exports provided: UrgentHealthPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrgentHealthPlanPageModule", function() { return UrgentHealthPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _urgent_health_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urgent-health-plan-routing.module */ "f5VA");
/* harmony import */ var _urgent_health_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urgent-health-plan.page */ "TBmF");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-entry/add-entry.module */ "Jksx");
/* harmony import */ var _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.module */ "TxGo");
/* harmony import */ var _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-entry/edit-entry.module */ "tvNB");










let UrgentHealthPlanPageModule = class UrgentHealthPlanPageModule {
};
UrgentHealthPlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _urgent_health_plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["UrgentHealthPlanPageRoutingModule"],
            _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__["AddEntryPageModule"],
            _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__["ViewEntryPageModule"],
            _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__["EditEntryPageModule"]
        ],
        declarations: [_urgent_health_plan_page__WEBPACK_IMPORTED_MODULE_6__["UrgentHealthPlanPage"]]
    })
], UrgentHealthPlanPageModule);



/***/ })

}]);
//# sourceMappingURL=urgent-health-plan-urgent-health-plan-module.js.map