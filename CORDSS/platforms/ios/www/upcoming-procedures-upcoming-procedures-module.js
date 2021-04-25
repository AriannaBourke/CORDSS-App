(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upcoming-procedures-upcoming-procedures-module"],{

/***/ "KEB7":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/procedures/upcoming-procedures/upcoming-procedures.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Upcoming Procedures</ion-title>\r\n    <ion-button color=\"success\" slot=\"end\" (click)=\"openModal()\"\r\n      ><ion-icon slot=\"start\" name=\"add\"></ion-icon>Add</ion-button\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\" >\r\n    <ion-img [src]=\"myProfileImage\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-card class=\"hiddencard\" [hidden]=\"noContent()\">\r\n    <ion-item lines=\"none\">\r\n      <p style=\"font-size: 30px\">\r\n        Click 'Add' to start adding Upcoming Procedures!\r\n      </p>\r\n      <img class=\"arrow\" src=\"../../../assets/icon/curly arrow 1.png\" />\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-list *ngFor=\"let pro of procedures; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-card-title>Upcoming Procedure Info</ion-card-title>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <p>\r\n                I have {{pro.type}} scheduled for {{pro.date | date: \"dd MMMM\r\n                YYYY 'at' HH:mm a\"}}\r\n              </p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon class=\"orange\" slot=\"start\" name=\"business\"></ion-icon>\r\n              <p>Location: {{pro.place}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(pro.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(pro.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n            <ion-button\r\n              color=\"tertiary\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"viewModal(pro.rowid)\"\r\n              ><ion-icon color=\"tertiary\" slot=\"start\" name=\"eye\"></ion-icon\r\n              >View</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "L/P4":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/upcoming-procedures.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UpcomingProceduresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingProceduresPageModule", function() { return UpcomingProceduresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _upcoming_procedures_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upcoming-procedures-routing.module */ "c11g");
/* harmony import */ var _upcoming_procedures_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upcoming-procedures.page */ "WNSe");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-entry/add-entry.module */ "+hFr");
/* harmony import */ var _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.module */ "aK8X");
/* harmony import */ var _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-entry/edit-entry.module */ "9hNY");










let UpcomingProceduresPageModule = class UpcomingProceduresPageModule {
};
UpcomingProceduresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _upcoming_procedures_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpcomingProceduresPageRoutingModule"],
            _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__["AddEntryPageModule"],
            _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__["ViewEntryPageModule"],
            _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__["EditEntryPageModule"]
        ],
        declarations: [_upcoming_procedures_page__WEBPACK_IMPORTED_MODULE_6__["UpcomingProceduresPage"]]
    })
], UpcomingProceduresPageModule);



/***/ }),

/***/ "WNSe":
/*!*********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/upcoming-procedures.page.ts ***!
  \*********************************************************************************/
/*! exports provided: UpcomingProceduresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingProceduresPage", function() { return UpcomingProceduresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_upcoming_procedures_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./upcoming-procedures.page.html */ "KEB7");
/* harmony import */ var _upcoming_procedures_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcoming-procedures.page.scss */ "gKq+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry/add-entry.page */ "d2nG");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-entry/edit-entry.page */ "dOZ6");
/* harmony import */ var _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.page */ "HDWH");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17
// Date(), toISOString():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString










let UpcomingProceduresPage = class UpcomingProceduresPage {
    constructor(modalController, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.aboutmepicture = [];
        this.procedures = [];
        this.isData = false;
        this.storedData = null;
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
        this.getDataPicture();
    }
    ionViewWillEnter() {
        this.getData();
        this.getDataPicture();
    }
    getData() {
        this.verifyDatabasePopulated();
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
            .catch(e => alert('get data error' + JSON.stringify(e)));
    }
    verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM procedures WHERE date > ?', [this.today])
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
        this._db.executeSql('INSERT INTO procedures VALUES(NULL,?,?,?,?,?,?)', [this.data.date, this.data.doctor, this.data.place, this.data.type, this.data.description, this.data.questions])
            .then(res => {
            this.getData();
        })
            .catch(e => alert("save data error" + e));
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM procedures WHERE rowid=?', [rowid])
            .then(res => {
            this.getData();
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
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_6__["AddEntryPage"],
                componentProps: {}
            });
            modal.onDidDismiss().then(() => {
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
UpcomingProceduresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
UpcomingProceduresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upcoming-procedures',
        template: _raw_loader_upcoming_procedures_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_upcoming_procedures_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpcomingProceduresPage);



/***/ }),

/***/ "c11g":
/*!*******************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/upcoming-procedures-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: UpcomingProceduresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingProceduresPageRoutingModule", function() { return UpcomingProceduresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _upcoming_procedures_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcoming-procedures.page */ "WNSe");




const routes = [
    {
        path: '',
        component: _upcoming_procedures_page__WEBPACK_IMPORTED_MODULE_3__["UpcomingProceduresPage"]
    },
    {
        path: 'add-entry',
        loadChildren: () => Promise.all(/*! import() | add-entry-add-entry-module */[__webpack_require__.e("default~add-entry-add-entry-module~medical-history-medical-history-module"), __webpack_require__.e("default~add-entry-add-entry-module~current-medicines-current-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-medicines-past-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~tab1-tab1-module"), __webpack_require__.e("default~add-entry-add-entry-module~test-results-test-results-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-procedures-past-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~mood-mood-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-family-my-family-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-appointments-upcoming-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-appointments-past-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~urgent-health-plan-urgent-health-plan-module"), __webpack_require__.e("default~add-entry-add-entry-module~basic-info-basic-info-module"), __webpack_require__.e("common"), __webpack_require__.e("add-entry-add-entry-module")]).then(__webpack_require__.bind(null, /*! ./add-entry/add-entry.module */ "+hFr")).then(m => m.AddEntryPageModule)
    },
    {
        path: 'edit-entry',
        loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~basic-info-basic-info-module~edit-entry-edit-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ./edit-entry/edit-entry.module */ "9hNY")).then(m => m.EditEntryPageModule)
    },
    {
        path: 'view-entry',
        loadChildren: () => Promise.all(/*! import() | view-entry-view-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-appointments-upcoming-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./view-entry/view-entry.module */ "aK8X")).then(m => m.ViewEntryPageModule)
    }
];
let UpcomingProceduresPageRoutingModule = class UpcomingProceduresPageRoutingModule {
};
UpcomingProceduresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpcomingProceduresPageRoutingModule);



/***/ }),

/***/ "gKq+":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/upcoming-procedures.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.profile-pic {\n  margin-top: 1vh;\n  width: 50px;\n  height: 50px;\n  border: white solid 1px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBjb21pbmctcHJvY2VkdXJlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoidXBjb21pbmctcHJvY2VkdXJlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMHB4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=upcoming-procedures-upcoming-procedures-module.js.map