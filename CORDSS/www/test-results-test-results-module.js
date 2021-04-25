(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-results-test-results-module"],{

/***/ "/Tl3":
/*!******************************************************************!*\
  !*** ./src/app/tab3/test-results/test-results-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TestResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResultsPageRoutingModule", function() { return TestResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-results.page */ "KuSo");




const routes = [
    {
        path: '',
        component: _test_results_page__WEBPACK_IMPORTED_MODULE_3__["TestResultsPage"]
    },
    {
        path: 'add-entry',
        loadChildren: () => Promise.all(/*! import() | add-entry-add-entry-module */[__webpack_require__.e("default~add-entry-add-entry-module~medical-history-medical-history-module"), __webpack_require__.e("default~add-entry-add-entry-module~current-medicines-current-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-medicines-past-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~tab1-tab1-module"), __webpack_require__.e("default~add-entry-add-entry-module~test-results-test-results-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-procedures-past-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~mood-mood-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-family-my-family-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-appointments-upcoming-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-appointments-past-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~urgent-health-plan-urgent-health-plan-module"), __webpack_require__.e("default~add-entry-add-entry-module~basic-info-basic-info-module"), __webpack_require__.e("common"), __webpack_require__.e("add-entry-add-entry-module")]).then(__webpack_require__.bind(null, /*! ./add-entry/add-entry.module */ "x4WC")).then(m => m.AddEntryPageModule)
    },
    {
        path: 'edit-entry',
        loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~basic-info-basic-info-module~edit-entry-edit-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ./edit-entry/edit-entry.module */ "Qn1E")).then(m => m.EditEntryPageModule)
    },
    {
        path: 'view-entry',
        loadChildren: () => Promise.all(/*! import() | view-entry-view-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-appointments-upcoming-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./view-entry/view-entry.module */ "v5/0")).then(m => m.ViewEntryPageModule)
    }
];
let TestResultsPageRoutingModule = class TestResultsPageRoutingModule {
};
TestResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestResultsPageRoutingModule);



/***/ }),

/***/ "DS6T":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/test-results/test-results.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Test Results</ion-title>\r\n    <ion-button color=\"success\" slot=\"end\" (click)=\"openModal()\"\r\n      ><ion-icon slot=\"start\" name=\"add\"></ion-icon>Add</ion-button\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\" >\r\n    <ion-img [src]=\"myProfileImage\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-card class=\"hiddencard\" [hidden]=\"noContent()\">\r\n    <ion-item lines=\"none\">\r\n      <p style=\"font-size: 30px\">Click 'Add' to start adding Test Results!</p>\r\n      <img class=\"arrow\" src=\"../../../assets/icon/curly arrow 1.png\" />\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-list *ngFor=\"let result of testresults; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-card-title>Test Result Info</ion-card-title>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <p>Date of Test: {{result.date | date: \"dd MMMM YYYY\"}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon name=\"medkit\" class=\"orange\" slot=\"start\"></ion-icon>\r\n              <p>Test Type: {{result.type}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(result.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(result.rowid)\"\r\n            >\r\n              <ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n            <ion-button\r\n              color=\"tertiary\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"viewModal(result.rowid)\"\r\n              ><ion-icon color=\"tertiary\" slot=\"start\" name=\"eye\"></ion-icon\r\n              >View</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "KuSo":
/*!********************************************************!*\
  !*** ./src/app/tab3/test-results/test-results.page.ts ***!
  \********************************************************/
/*! exports provided: TestResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResultsPage", function() { return TestResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test-results.page.html */ "DS6T");
/* harmony import */ var _test_results_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-results.page.scss */ "hEaJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry/add-entry.page */ "Vc8s");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-entry/edit-entry.page */ "Uee9");
/* harmony import */ var _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.page */ "AH4h");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17











let TestResultsPage = class TestResultsPage {
    constructor(_alertController, modalController, _plat, _sql, camera, alertCtrl) {
        this._alertController = _alertController;
        this.modalController = modalController;
        this._plat = _plat;
        this._sql = _sql;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.testresults = [];
        this.pictures = [];
        this.isData = false;
        this.storedData = null;
        this.TestResultsTable = 'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, photo TEXT, notes TEXT)';
        this.data = { date: "", type: "", photo: "", notes: "" };
        this.PicturesTable = 'CREATE TABLE IF NOT EXISTS pictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)';
        this.datapicture = { cardid: "", picture: "" };
        this.testresults = [];
        this.pictures = [];
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
            yield this._db.executeSql(this.TestResultsTable, []);
            yield this._db.executeSql(this.PicturesTable, []);
            this.getData();
            this.getDataPictures();
        });
    }
    ionViewDidLoad() {
        this.getData();
        this.getDataPictures();
    }
    ionViewWillEnter() {
        this.getData();
        this.getDataPictures();
    }
    getData() {
        this.verifyDatabasePopulated();
        this._db.executeSql('SELECT * FROM testresults ORDER BY rowid DESC', [])
            .then(res => {
            this.testresults = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.testresults.push({
                    rowid: res.rows.item(i).rowid,
                    date: res.rows.item(i).date,
                    type: res.rows.item(i).type,
                    photo: res.rows.item(i).photo,
                    notes: res.rows.item(i).notes,
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    getDataPictures() {
        this.verifyDatabasePopulatedPictures();
        this._db.executeSql('SELECT * FROM pictures ORDER BY rowid DESC', [])
            .then(res => {
            this.pictures = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.pictures.push({
                    rowid: res.rows.item(i).rowid,
                    cardid: res.rows.item(i).cardid,
                    picture: res.rows.item(i).picture,
                });
            }
        })
            .catch(e => alert('get data error' + e));
    }
    verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM testresults', [])
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
    verifyDatabasePopulatedPictures() {
        this._db.executeSql('SELECT * FROM pictures', [])
            .then(res => {
            if (res.rows.length == 0) {
                this.isEnabled = true;
            }
            else {
                this.isEnabled = false;
            }
        });
    }
    saveData() {
        this._db.executeSql('INSERT INTO testresults VALUES(NULL,?,?,?,?)', [this.data.date, this.data.type, this.data.photo, this.data.notes])
            .then(res => {
            this.getData();
            this.saveDataPictures();
        })
            .catch(e => alert("save data error" + e));
    }
    saveDataPictures() {
        for (let i = 0; i < this.photos.length; i++) {
            this._db.executeSql('INSERT INTO pictures VALUES(NULL,?,?)', [this.testresults[this.testresults.length - 1].rowid, this.photos[i]])
                .then(res => {
                this.getDataPictures();
            })
                .catch(e => alert("save data error" + e));
        }
    }
    editData(rowid) {
        console.log("added data"), {
            rowid: rowid
        };
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM testresults WHERE rowid=?', [rowid])
            .then(res => {
            this.getData();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your test results?",
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
    ngOnInit() {
        this.photos = [];
    }
    takePhoto() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 200,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
        this.camera.getPicture(options)
            .then((ImageData) => {
            this.base64Image = "data:image/jpeg;base64," + ImageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
        });
    }
    deletePhoto(index) {
        const alert = this.alertCtrl.create({
            header: 'Sure you want to delete this photo? There is NO undo!',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Agree clicked');
                        this.photos.splice(index, 1);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
};
TestResultsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
TestResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test-results',
        template: _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_results_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TestResultsPage);



/***/ }),

/***/ "SjUs":
/*!**********************************************************!*\
  !*** ./src/app/tab3/test-results/test-results.module.ts ***!
  \**********************************************************/
/*! exports provided: TestResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestResultsPageModule", function() { return TestResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _test_results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-results-routing.module */ "/Tl3");
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-results.page */ "KuSo");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-entry/add-entry.module */ "x4WC");
/* harmony import */ var _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-entry/view-entry.module */ "v5/0");
/* harmony import */ var _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-entry/edit-entry.module */ "Qn1E");










let TestResultsPageModule = class TestResultsPageModule {
};
TestResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_results_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestResultsPageRoutingModule"],
            _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_7__["AddEntryPageModule"],
            _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_8__["ViewEntryPageModule"],
            _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_9__["EditEntryPageModule"]
        ],
        declarations: [_test_results_page__WEBPACK_IMPORTED_MODULE_6__["TestResultsPage"]]
    })
], TestResultsPageModule);



/***/ }),

/***/ "hEaJ":
/*!**********************************************************!*\
  !*** ./src/app/tab3/test-results/test-results.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.block .deleteIcon {\n  color: #ffffff;\n  margin-right: 80%;\n}\n\n.block .deleteIcon:before {\n  font-size: 30px !important;\n}\n\n.hiddencard {\n  margin-top: 5vh;\n}\n\n.image-container {\n  background-size: cover;\n  min-height: 220px;\n}\n\n@media (min-width: 0px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n.pick-single-image {\n  margin: 4px;\n}\n\n.profile-pic {\n  margin-top: 1vh;\n  width: 50px;\n  height: 50px;\n  border: white solid 1px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0LXJlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUlFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBSUU7RUFDRSwwQkFBQTtBQUZKOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU9BO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0UsV0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQVBGIiwiZmlsZSI6InRlc3QtcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5kZWxldGVJY29uIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwJTtcclxuICB9XHJcbiAgLmRlbGV0ZUljb246YmVmb3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4gIFxyXG4uaGlkZGVuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkge1xyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAuaW1hZ2VzLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLmltYWdlcy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbHVtbi1jb3VudDogMztcclxuICB9XHJcbn1cclxuXHJcbi5waWNrLXNpbmdsZS1pbWFnZSB7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXBpYyB7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=test-results-test-results-module.js.map