(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~test-results-test-results-module~view-entry-view-entry-module"],{

/***/ "AH4h":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/test-results/view-entry/view-entry.page.ts ***!
  \*****************************************************************/
/*! exports provided: ViewEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPage", function() { return ViewEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-entry.page.html */ "cJUt");
/* harmony import */ var _view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-entry.page.scss */ "WJNz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ..//edit-entry/edit-entry.page */ "Uee9");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ 









let ViewEntryPage = class ViewEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql, camera, alertCtrl) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
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
        this.rowid = navParams.get('rowid');
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
            this.getData(this.rowid);
            this.getDataPictures(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM testresults WHERE rowid=?', [rowid])
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
    getDataPictures(rowid) {
        this._db.executeSql('SELECT * FROM pictures WHERE cardid=?', [rowid])
            .then(res => {
            this.pictures = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.pictures.push({
                    rowid: res.rows.item(i).rowid,
                    cardid: res.rows.item(i).cardid,
                    picture: res.rows.item(i).picture,
                });
                this.photos[i] = res.rows.item(i).picture;
            }
        })
            .catch(e => alert('get data error' + e));
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    deleteData(rowid) {
        this._db.executeSql('DELETE FROM testresults WHERE rowid=?', [rowid])
            .then(res => {
            this.closeModal();
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
    editModal(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edit_entry_edit_entry_page__WEBPACK_IMPORTED_MODULE_6__["EditEntryPage"],
                componentProps: { 'rowid': rowid }
            });
            modal.onDidDismiss().then(() => {
                this.getData(rowid);
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
ViewEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ViewEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-entry',
        template: _raw_loader_view_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewEntryPage);



/***/ }),

/***/ "WJNz":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/test-results/view-entry/view-entry.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".entry-header {\n  font-size: large;\n  color: blue;\n}\n\n.block .deleteIcon {\n  color: #ffffff;\n  margin-right: 80%;\n}\n\n.block .deleteIcon:before {\n  font-size: 30px !important;\n}\n\n.hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.image-container {\n  background-size: cover;\n  min-height: 220px;\n}\n\n@media (min-width: 0px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n.pick-single-image {\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFNSTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtBQUpOOztBQU1JO0VBQ0UsMEJBQUE7QUFKTjs7QUFRRTtFQUNFLGVBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBTEo7QUFDRjs7QUFRRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBTko7QUFDRjs7QUFTRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBUEo7QUFDRjs7QUFVRTtFQUNFLFdBQUE7QUFSSiIsImZpbGUiOiJ2aWV3LWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnRyeS1oZWFkZXIge1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuYmxvY2sge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmRlbGV0ZUljb24ge1xyXG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogODAlO1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZUljb246YmVmb3JlIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgLmhpZGRlbmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIH1cclxuICBcclxuICAuYXJyb3cge1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KSB7XHJcbiAgICAuaW1hZ2VzLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuaW1hZ2VzLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICAuaW1hZ2VzLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBpY2stc2luZ2xlLWltYWdlIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "cJUt":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/test-results/view-entry/view-entry.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>View Test Result details!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let result of testresults; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Test Result Info</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\"\r\n                >Result Date</ion-label\r\n              >\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n                class=\"red\"\r\n              ></ion-icon>\r\n              <p>{{result.date | date: 'dd MMMM y'}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Test Type</ion-label>\r\n              <ion-icon slot=\"start\" name=\"medkit\" class=\"orange\"></ion-icon>\r\n              <p>{{result.type}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Photo</ion-label>\r\n              <ion-icon slot=\"start\" name=\"camera\" class=\"yellow\"></ion-icon>\r\n              <div class=\"images-wrapper\">\r\n                <div class=\"pick-single-image\" *ngFor=\"let photo of photos; let id = index\">\r\n                  <ion-icon name=\"trash\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\r\n                  <img [src]=\"photo\" alt=\"\" srcset=\"\">\r\n                </div>\r\n              </div>\r\n              <p>{{result.photo}}</p>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item lines=\"none\">\r\n              <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n                class=\"teal\"\r\n              ></ion-icon>\r\n              <p>{{result.notes}}</p>\r\n            </ion-item>\r\n            <ion-button\r\n              color=\"danger\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              style=\"float: right\"\r\n              (click)=\"removeData(result.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"danger\"\r\n                name=\"trash-outline\"\r\n              ></ion-icon\r\n            ></ion-button>\r\n            <ion-button\r\n              color=\"success\"\r\n              fill=\"outline\"\r\n              shape=\"round\"\r\n              style=\"float: right\"\r\n              (click)=\"editModal(result.rowid)\"\r\n              ><ion-icon\r\n                size=\"large\"\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"create\"\r\n              ></ion-icon\r\n              >Edit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "m6za":
/*!***************************************************************************!*\
  !*** ./src/app/tab3/test-results/view-entry/view-entry-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ViewEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageRoutingModule", function() { return ViewEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-entry.page */ "AH4h");




const routes = [
    {
        path: '',
        component: _view_entry_page__WEBPACK_IMPORTED_MODULE_3__["ViewEntryPage"]
    }
];
let ViewEntryPageRoutingModule = class ViewEntryPageRoutingModule {
};
ViewEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewEntryPageRoutingModule);



/***/ }),

/***/ "v5/0":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/test-results/view-entry/view-entry.module.ts ***!
  \*******************************************************************/
/*! exports provided: ViewEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEntryPageModule", function() { return ViewEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-entry-routing.module */ "m6za");
/* harmony import */ var _view_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-entry.page */ "AH4h");







let ViewEntryPageModule = class ViewEntryPageModule {
};
ViewEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewEntryPageRoutingModule"]
        ],
        declarations: [_view_entry_page__WEBPACK_IMPORTED_MODULE_6__["ViewEntryPage"]]
    })
], ViewEntryPageModule);



/***/ })

}]);
//# sourceMappingURL=default~test-results-test-results-module~view-entry-view-entry-module.js.map