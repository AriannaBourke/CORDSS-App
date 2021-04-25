(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module"],{

/***/ "EukW":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/test-results/edit-entry/edit-entry.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Test Result info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let result of testresults; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Edit Test Result</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" novalidate (ngSubmit)=\"update(rowid)\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Test Date</ion-label\r\n                >\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"calendar-number\"\r\n                  class=\"red\"\r\n                ></ion-icon>\r\n                <ion-datetime\r\n                  displayFormat=\"DD MMMM YYYY\"\r\n                  placeholder=\"{{result.date | date: 'dd MMMM y'}}\"\r\n                  [(ngModel)]=\"data.date\"\r\n                  name=\"date\"\r\n                  required\r\n                  #dateCtrl=\"ngModel\"\r\n                ></ion-datetime>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n                <ion-text color=\"danger\">*Date is required</ion-text>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        \r\n               <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label color=\"medium\" position=\"stacked\">Test Type</ion-label>\r\n                    <ion-icon slot=\"start\" name=\"medkit\" class=\"orange\"></ion-icon>\r\n                    <ion-input \r\n                    type=\"text\"\r\n                    placeholder=\"{{result.type}}\"\r\n                    [(ngModel)]=\"data.type\"\r\n                    name=\"type\" required\r\n                    #typeCtrl=\"ngModel\"\r\n                    ></ion-input>\r\n                    <ion-item *ngIf=\"!typeCtrl.valid && typeCtrl.touched\">\r\n                      <ion-text color=\"danger\">*Test type is required</ion-text>\r\n                      </ion-item>\r\n                  </ion-item>\r\n                </ion-col>\r\n               </ion-row>\r\n               \r\n               <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label color=\"medium\" position=\"stacked\">Photo</ion-label>\r\n                    <ion-icon slot=\"start\" name=\"camera\" class=\"yellow\" (click)=\"takePhoto()\" ></ion-icon>\r\n                    <div class=\"images-wrapper\">\r\n                      <div class=\"pick-single-image\" *ngFor=\"let photo of photos; let id = index\">\r\n                        <ion-icon name=\"trash\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\r\n                        <img [src]=\"photo\" alt=\"\" srcset=\"\">\r\n                      </div>\r\n                    </div>\r\n                    <ion-input \r\n                    type=\"text\"\r\n                  placeholder=\"{{result.photo}}\"\r\n                  [(ngModel)]=\"data.photo\"\r\n                  name=\"photo\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n                <ion-icon\r\n                  slot=\"start\"\r\n                  name=\"pencil-outline\"\r\n                  class=\"teal\"\r\n                ></ion-icon>\r\n                <ion-textarea\r\n                  type=\"text\"\r\n                  placeholder=\"{{result.notes}}\"\r\n                  [(ngModel)]=\"data.notes\"\r\n                  name=\"notes\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n\r\n                <ion-button\r\n                  type=\"button\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Uee9":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/test-results/edit-entry/edit-entry.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "EukW");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "uRnY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\








let EditEntryPage = class EditEntryPage {
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
        this.isSubmitted = false;
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
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Update this entry?",
                message: "Would you like to update this entry in your test results?",
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
    noSubmit(e) {
        e.preventDefault();
    }
    updatepictures(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Update this entry?",
                message: "Would you like to update this entry in your test results?",
                buttons: [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Save",
                        handler: () => {
                            this.updateSQLpictures(rowid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    noSubmitpictures(e) {
        e.preventDefault();
    }
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.date != "") {
                this._db.executeSql('UPDATE testresults SET date=? WHERE rowid=?', [this.data.date, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.type != "") {
                this._db.executeSql('UPDATE testresults SET doctor=? WHERE rowid=?', [this.data.type, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.photo != "") {
                this._db.executeSql('UPDATE testresults SET place=? WHERE rowid=?', [this.data.photo, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.notes != "") {
                this._db.executeSql('UPDATE testresults SET questions=? WHERE rowid=?', [this.data.notes, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            this.closeModal();
        });
    }
    updateSQLpictures(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.datapicture.cardid != "") {
                this._db.executeSql('UPDATE pictures SET cardid=? WHERE rowid=?', [this.datapicture.cardid, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.datapicture.picture != "") {
                this._db.executeSql('UPDATE pictures SET picture=? WHERE rowid=?', [this.datapicture.picture, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            this.closeModal();
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
EditEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
EditEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-entry',
        template: _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditEntryPage);



/***/ }),

/***/ "uRnY":
/*!*******************************************************************!*\
  !*** ./src/app/tab3/test-results/edit-entry/edit-entry.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\n.image-container {\n  background-size: cover;\n  min-height: 220px;\n}\n\n@media (min-width: 0px) {\n  .images-wrapper {\n    column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images-wrapper {\n    column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images-wrapper {\n    column-count: 3;\n  }\n}\n\n.pick-single-image {\n  margin: 4px;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVRO0VBQ0UsWUFBQTtFQUNGLHdCQUFBO0FBQ1I7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsZUFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxXQUFBO0FBRkY7O0FBTUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUhGIiwiZmlsZSI6ImVkaXQtZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5teWNvbXBvbmVudC13aWRlci1wb3BvdmVyIHtcclxuICAtLXdpZHRoOiA5NSU7XHJcbiAgLS1tYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiAgICAgICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSB7XHJcbiAgLmltYWdlcy13cmFwcGVyIHtcclxuICAgIGNvbHVtbi1jb3VudDogMjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xyXG4gIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAuaW1hZ2VzLXdyYXBwZXIge1xyXG4gICAgY29sdW1uLWNvdW50OiAzO1xyXG4gIH1cclxufVxyXG5cclxuLnBpY2stc2luZ2xlLWltYWdlIHtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG4gICAgXHJcbiAgICBcclxuaW9uLXRleHRhcmVhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~test-results-test-results-module~view-entry-view-entry-module.js.map