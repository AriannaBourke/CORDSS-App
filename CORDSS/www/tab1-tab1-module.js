(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title width-50 style=\"text-align: center\">About Me</ion-title>\r\n    <ion-button\r\n      color=\"success\"\r\n      slot=\"end\"\r\n      [hidden]=\"checkIsEnabled()\"\r\n      (click)=\"openModal()\"\r\n      ><ion-icon slot=\"start\" name=\"add\"></ion-icon>Add</ion-button\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\">\r\n    <ion-img [src]=\"myProfileImage\"></ion-img>\r\n  </ion-avatar>\r\n  <ion-title class=\"title\" width-50 style=\"text-align: center\">Welcome To CORDSS!</ion-title>\r\n  <ion-list *ngFor=\"let about of aboutme; let i = index\" class=\"list\">\r\n  <ion-title class=\"title\" width-50 style=\"text-align: center\">Hello {{about.name}}</ion-title>\r\n  </ion-list>\r\n  <ion-card class=\"hiddencard\" [hidden]=\"noContent()\">\r\n    <ion-item lines=\"none\">\r\n      <p style=\"font-size: 30px\">Click 'Add' to add information About Me!</p>\r\n      <img class=\"arrow\" src=\"../../../assets/icon/curly arrow 1.png\" />\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-list *ngFor=\"let about of aboutme; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button\r\n              color=\"success\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(about.rowid)\"\r\n            >\r\n              <ion-icon slot=\"start\" name=\"create\" size=\"large\"></ion-icon>Edit\r\n              Info</ion-button\r\n            >\r\n            <ion-item lines=\"none\">\r\n              <ion-card-title>Basic Info </ion-card-title>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"person\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.name}}</p>\r\n            </ion-item>\r\n            <ion-item\r\n              ><ion-label position=\"stacked\">Date of Birth</ion-label\r\n              ><ion-icon\r\n                class=\"orange\"\r\n                slot=\"start\"\r\n                name=\"gift\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.birthday | date: \"dd MMMM YYYY\"}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">A little bit about me</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"information-circle\"\r\n                size=\"medium\"\r\n                class=\"yellow\"\r\n              ></ion-icon>\r\n              <p>{{about.about}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Private Info</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">My Email</ion-label>\r\n              <ion-icon\r\n                class=\"green\"\r\n                slot=\"start\"\r\n                name=\"mail\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.email}}</p>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">My Phone Number</ion-label>\r\n              <ion-icon\r\n                class=\"teal\"\r\n                slot=\"start\"\r\n                name=\"call\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.phone}}</p>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">My Address</ion-label>\r\n              <ion-icon\r\n                class=\"lightblue\"\r\n                slot=\"start\"\r\n                name=\"home\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.address}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">My NHS Number</ion-label>\r\n              <ion-icon\r\n                class=\"blue\"\r\n                slot=\"start\"\r\n                name=\"newspaper\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.nhs_number}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Emergency Contacts</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label color=\"primary\"> Emergency Contact 1 </ion-label>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-icon\r\n                class=\"darkblue\"\r\n                slot=\"start\"\r\n                name=\"person\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_1_name}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Phone Number</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                class=\"purple\"\r\n                name=\"call\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_1_number}}</p>\r\n              <ion-button shape=\"round\"  fill=\"outline\" slot=\"end\">Call</ion-button>\r\n            </ion-item>\r\n            <ion-label color=\"primary\"> Emergency Contact 2 </ion-label>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-icon\r\n                class=\"magenta\"\r\n                slot=\"start\"\r\n                name=\"person\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_2_name}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Phone Number</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"call\"\r\n                size=\"medium\"\r\n                class=\"pink\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_2_number}}</p>\r\n              <ion-button shape=\"round\" fill=\"outline\" slot=\"end\">Call</ion-button>\r\n            </ion-item>\r\n            <ion-label color=\"primary\"> Emergency Contact 3 </ion-label>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Name</ion-label>\r\n              <ion-icon\r\n                class=\"brightpink\"\r\n                slot=\"start\"\r\n                name=\"person\"\r\n                size=\"medium\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_3_name}}</p>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label position=\"stacked\">Phone Number</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"call\"\r\n                size=\"medium\"\r\n                class=\"redpink\"\r\n              ></ion-icon>\r\n              <p>{{about.emergency_3_number}}</p>\r\n              <ion-button shape=\"round\" fill=\"outline\" slot=\"end\">Call</ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<!-- <ion-content [fullscreen]=\"true\">\r\n    <ion-avatar (click)=\"selectImageSource()\" class=\"profile-pic\">\r\n      <ion-img [src]=\"myProfileImage\"></ion-img>\r\n    </ion-avatar>\r\n\r\n    <ion-list *ngFor=\"let me of aboutme; let i = index\" class=\"list\">\r\n      <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label class=\"entry-header\">My Info</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" (ngSubmit)=\"update(rowid)\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Date of Birth</ion-label>\r\n                    <ion-icon color=\"tertiary\" slot=\"start\" name=\"calendar-number-outline\"></ion-icon>\r\n                    <ion-datetime\r\n                    placeholder=\"{{me.birthday | date: 'dd MMMM y'}}\"\r\n                    displayFormat=\"DD MMMM YYYY\"\r\n                    [(ngModel)]=\"data.birthday\"\r\n                    name=\"birthday\"\r\n                  ></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">A little about me</ion-label>\r\n                 <ion-icon color=\"tertiary\" slot=\"start\" name=\"help-circle-outline\"></ion-icon>\r\n                 <ion-textarea\r\n                 type=\"text\"\r\n                 placeholder=\"{{me.notes}}\"\r\n                 [(ngModel)]=\"default\"\r\n                 name=\"notes\"\r\n                ></ion-textarea>\r\n                </ion-item>\r\n               <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                type=\"button\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                size=\"small\"\r\n                (click)=\"form.reset()\"\r\n              >\r\n                <ion-icon slot=\"start\" name=\"close\"></ion-icon>Clear</ion-button>\r\n\r\n                <ion-button\r\n                type=\"button\"\r\n                size=\"small\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n              >\r\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>Update</ion-button\r\n              >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n    </form>\r\n\r\n   </ion-grid>\r\n</ion-card>\r\n</ion-list>\r\n</ion-content> -->\r\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-entry/add-entry.page */ "wS5e");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-entry/edit-entry.page */ "G5lX");
/* harmony import */ var _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-entry/view-entry.page */ "9Z+K");
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












let Tab1Page = class Tab1Page {
    constructor(_camera, callNumber, modalController, _alertController, _plat, _sql) {
        this._camera = _camera;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.aboutme = [];
        this.aboutmepicture = [];
        this.isData = false;
        this.storedData = null;
        this.AboutMeTable = 'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone INT, address TEXT, nhs_number INT, emergency_1_name TEXT, emergency_1_number TEXT, emergency_2_name TEXT, emergency_2_number TEXT, emergency_3_name TEXT, emergency_3_number TEXT)';
        this.data = { name: "", birthday: "", about: "", email: "", phone: "", address: "", nhs_number: "", emergency_1_name: "", emergency_1_number: "", emergency_2_name: "", emergency_2_number: "", emergency_3_name: "", emergency_3_number: "" };
        this.AboutMeTablePicture = 'CREATE TABLE IF NOT EXISTS aboutmepicture (rowid INTEGER PRIMARY KEY AUTOINCREMENT, picture TEXT)';
        this.datapicture = { picture: "" };
        this.default = "";
        this.aboutme = [];
        this.aboutmepicture = [];
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
            yield this._db.executeSql(this.AboutMeTablePicture, []);
            this.getData();
            this.getDataPicture();
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
    verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM aboutme', [])
            .then(res => {
            if (res.rows.length == 0) {
                this.isEnabled = true;
            }
            else {
                this.isEnabled = false;
            }
        });
    }
    checkIsEnabled() {
        return !this.isEnabled;
    }
    noContent() {
        return !this.isEnabled;
    }
    getData() {
        this.verifyDatabasePopulated();
        this._db.executeSql('SELECT * FROM aboutme ORDER BY rowid DESC', [])
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
            .catch(e => alert('get data error' + JSON.stringify(e)));
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
            console.log(this.aboutmepicture[0].picture);
            this.myProfileImage = this.aboutmepicture[res.rows.length - 1].picture;
        });
        // .catch(e => alert('get data error' + e));
    }
    saveData() {
        this._db.executeSql('INSERT INTO aboutme VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)', [this.data.name, this.data.birthday, this.data.about, this.data.email,
            this.data.phone, this.data.address, this.data.nhs_number, this.data.emergency_1_name, this.data.emergency_1_number, this.data.emergency_2_name, this.data.emergency_2_number, this.data.emergency_3_name, this.data.emergency_3_number])
            .then(res => {
            this.getData();
        })
            .catch(e => alert("save data error" + e));
    }
    saveDataPicture() {
        this._db.executeSql('INSERT INTO aboutmepicture VALUES(NULL, ?)', [this.datapicture.picture])
            .then(res => {
            this.getDataPicture();
        })
            .catch(e => alert("save data error" + e.message));
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM aboutme WHERE rowid=?', [rowid])
            .then(res => {
            this.getData();
        })
            .catch(e => alert('delete data error' + e));
    }
    removeData(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: "Delete this entry?",
                message: "Would you like to delete this entry from your profile?",
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
                component: _add_entry_add_entry_page__WEBPACK_IMPORTED_MODULE_8__["AddEntryPage"],
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
                component: _view_entry_view_entry_page__WEBPACK_IMPORTED_MODULE_10__["ViewEntryPage"],
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
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_9__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData();
            });
            return yield modal.present();
        });
    }
    selectImageSource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cameraOptions = {
                quality: 100,
                destinationType: this._camera.DestinationType.DATA_URL,
                encodingType: this._camera.EncodingType.JPEG,
                mediaType: this._camera.MediaType.PICTURE,
                targetHeight: 200,
                correctOrientation: true,
                sourceType: this._camera.PictureSourceType.CAMERA
            };
            const galleryOptions = {
                quality: 100,
                destinationType: this._camera.DestinationType.DATA_URL,
                encodingType: this._camera.EncodingType.JPEG,
                mediaType: this._camera.MediaType.PICTURE,
                targetHeight: 200,
                correctOrientation: true,
                sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
            };
            const alert = yield this._alertController.create({
                header: "Select Source",
                message: "Pick a source for your avatar",
                buttons: [
                    {
                        text: "Camera",
                        handler: () => {
                            this._camera.getPicture(cameraOptions)
                                .then((ImageData) => {
                                this.myProfileImage = "data:image/jpeg;base64," + ImageData;
                                this.datapicture.picture = this.myProfileImage.toString();
                                this.saveDataPicture();
                                console.log(this.myProfileImage);
                            });
                        }
                    },
                    {
                        text: "Gallery",
                        handler: () => {
                            this._camera.getPicture(galleryOptions)
                                .then((ImageData) => {
                                this.myProfileImage = "data:image/jpeg;base64," + ImageData;
                                this.datapicture.picture = this.myProfileImage.toString();
                                this.saveDataPicture();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ;
    callNow(number) {
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    },
    {
        path: 'add-entry',
        loadChildren: () => Promise.all(/*! import() | add-entry-add-entry-module */[__webpack_require__.e("default~add-entry-add-entry-module~medical-history-medical-history-module"), __webpack_require__.e("default~add-entry-add-entry-module~current-medicines-current-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-medicines-past-medicines-module"), __webpack_require__.e("default~add-entry-add-entry-module~tab1-tab1-module"), __webpack_require__.e("default~add-entry-add-entry-module~test-results-test-results-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-procedures-past-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-procedures-upcoming-procedures-module"), __webpack_require__.e("default~add-entry-add-entry-module~mood-mood-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-clinical-team-my-clinical-team-module"), __webpack_require__.e("default~add-entry-add-entry-module~my-family-my-family-module"), __webpack_require__.e("default~add-entry-add-entry-module~upcoming-appointments-upcoming-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~past-appointments-past-appointments-module"), __webpack_require__.e("default~add-entry-add-entry-module~urgent-health-plan-urgent-health-plan-module"), __webpack_require__.e("default~add-entry-add-entry-module~basic-info-basic-info-module"), __webpack_require__.e("common"), __webpack_require__.e("add-entry-add-entry-module")]).then(__webpack_require__.bind(null, /*! ./add-entry/add-entry.module */ "U4OP")).then(m => m.AddEntryPageModule)
    },
    {
        path: 'edit-entry',
        loadChildren: () => Promise.all(/*! import() | edit-entry-edit-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~basic-info-basic-info-module~edit-entry-edit-entry-module"), __webpack_require__.e("common"), __webpack_require__.e("edit-entry-edit-entry-module")]).then(__webpack_require__.bind(null, /*! ./edit-entry/edit-entry.module */ "A/sq")).then(m => m.EditEntryPageModule)
    },
    {
        path: 'view-entry',
        loadChildren: () => Promise.all(/*! import() | view-entry-view-entry-module */[__webpack_require__.e("default~current-medicines-current-medicines-module~edit-entry-edit-entry-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-medicines-past-medicines-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~upcoming-appointments-upcoming-appointments-module~view-entry-v~c67cc2be"), __webpack_require__.e("default~edit-entry-edit-entry-module~urgent-health-plan-urgent-health-plan-module~view-entry-view-en~0bb6a323"), __webpack_require__.e("default~edit-entry-edit-entry-module~medical-notes-medical-notes-module~view-entry-view-entry-module"), __webpack_require__.e("default~edit-entry-edit-entry-module~thoughts-feelings-thoughts-feelings-module~view-entry-view-entry-module"), __webpack_require__.e("default~test-results-test-results-module~view-entry-view-entry-module"), __webpack_require__.e("default~mood-mood-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-procedures-upcoming-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~my-clinical-team-my-clinical-team-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-procedures-past-procedures-module~view-entry-view-entry-module"), __webpack_require__.e("default~upcoming-appointments-upcoming-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~past-appointments-past-appointments-module~view-entry-view-entry-module"), __webpack_require__.e("default~tab1-tab1-module~view-entry-view-entry-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./view-entry/view-entry.module */ "ReBR")).then(m => m.ViewEntryPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-pic {\n  width: 220px;\n  height: 220px;\n  border: white solid 4px;\n  margin: 10px auto;\n}\n\n.hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.title {\n  color: #041a97;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWMge1xyXG4gIHdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlcjogd2hpdGUgc29saWQgNHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4uaGlkZGVuY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMwNDFhOTc7XHJcbn0iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-entry/add-entry.module */ "U4OP");
/* harmony import */ var _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-entry/view-entry.module */ "ReBR");
/* harmony import */ var _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-entry/edit-entry.module */ "A/sq");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
            _add_entry_add_entry_module__WEBPACK_IMPORTED_MODULE_8__["AddEntryPageModule"],
            _view_entry_view_entry_module__WEBPACK_IMPORTED_MODULE_9__["ViewEntryPageModule"],
            _edit_entry_edit_entry_module__WEBPACK_IMPORTED_MODULE_10__["EditEntryPageModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map