(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~test-results-test-results-module"],{

/***/ "Vc8s":
/*!***************************************************************!*\
  !*** ./src/app/tab3/test-results/add-entry/add-entry.page.ts ***!
  \***************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "eNbv");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "tBlZ");
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
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ 








let AddEntryPage = class AddEntryPage {
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
        this._db.executeSql('SELECT * FROM pictures ORDER BY rowid DESC', [])
            .then(res => {
            this.pictures = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.pictures.push({
                    rowid: res.rows.item(i).rowid,
                    cardid: res.rows.item(i).cardid,
                    picture: res.rows.item(i).picture,
                });
                console.log('doulefkei');
                console.log(this.pictures[0]);
                console.log(this.pictures[1]);
            }
        })
            .catch(e => alert('get data error' + e));
    }
    saveData() {
        this._db.executeSql('INSERT INTO testresults VALUES(NULL,?,?,?,?)', [this.data.date, this.data.type, this.data.photo, this.data.notes])
            .then(res => {
            this.closeModal();
            this.saveDataPictures();
        })
            .catch(e => alert("save data error" + e));
    }
    saveDataPictures() {
        for (let i = 0; i < this.photos.length; i++) {
            this._db.executeSql('INSERT INTO pictures VALUES(NULL,?,?)', [this.testresults[0].rowid + 1, this.photos[i]])
                .then(res => {
                this.getDataPictures();
            })
                .catch(e => alert("save data error" + e));
        }
    }
    submitData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Save this entry?",
                message: "Would you like to save this entry in your test results?",
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
            this.getData();
            yield this.modalController.dismiss();
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
AddEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AddEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-entry',
        template: _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddEntryPage);



/***/ }),

/***/ "eNbv":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/test-results/add-entry/add-entry.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a Test Result!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Test Result</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Test Date</ion-label>\r\n              <ion-icon\r\n                class=\"red\"\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n              ></ion-icon>\r\n              <ion-datetime\r\n                displayFormat=\"DD MMMM YYYY\"\r\n                placeholder=\"Date (*Required)\"\r\n                [(ngModel)]=\"data.date\"\r\n                name=\"date\"\r\n                required\r\n                #dateCtrl=\"ngModel\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n              <ion-text color=\"danger\">*Date is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Test Type</ion-label>\r\n              <ion-icon slot=\"start\" name=\"medkit\" class=\"orange\"></ion-icon>\r\n              <ion-input\r\n                type=\"text\"\r\n                placeholder=\"Test Type (*Required)\"\r\n                [(ngModel)]=\"data.type\"\r\n                name=\"type\"\r\n                required\r\n                #typeCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!typeCtrl.valid && typeCtrl.touched\">\r\n              <ion-text color=\"danger\">*Test type is required</ion-text>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Photo</ion-label>\r\n              <ion-icon slot=\"start\" name=\"camera\" class=\"yellow\"></ion-icon>\r\n              <div class=\"images-wrapper\">\r\n                <div class=\"pick-single-image\" *ngFor=\"let photo of photos; let id = index\">\r\n                  <ion-icon name=\"trash\" class=\"deleteIcon\" (click)=\"deletePhoto(id)\"></ion-icon>\r\n                  <img [src]=\"photo\" alt=\"\" srcset=\"\">\r\n                </div>\r\n              </div>\r\n              <ion-button \r\n              (click)=\"takePhoto()\"\r\n              [(ngModel)]=\"data.photo\"\r\n              name=\"photo\"\r\n              shape=\"round\"\r\n              fill=\"outline\"\r\n              color=\"tertiary\"\r\n              size=\"medium\"\r\n              ><ion-icon slot=\"start\" name=\"arrow-up-circle\" color=\"tertiary\"></ion-icon>\r\n              Select Images</ion-button>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"pencil-outline\"\r\n                class=\"teal\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                shape=\"round\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "tBlZ":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/test-results/add-entry/add-entry.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".entry-header {\n  font-size: large;\n  color: black;\n}\n\n.block .deleteIcon {\n  color: #ffffff;\n  margin-right: 80%;\n}\n\n.block .deleteIcon:before {\n  font-size: 30px !important;\n}\n\n.hiddencard {\n  margin-top: 5vh;\n}\n\n.arrow {\n  margin-top: 1vh;\n  height: 80px;\n  margin-right: 0px;\n}\n\n.image-container {\n  background-size: cover;\n  min-height: 220px;\n}\n\n@media (min-width: 0px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 2;\n  }\n}\n\n@media (min-width: 420px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n@media (min-width: 720px) {\n  .images-wrapper {\n    position: relative;\n    column-count: 3;\n  }\n}\n\n.pick-single-image {\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQU1JO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0FBSk47O0FBTUk7RUFDRSwwQkFBQTtBQUpOOztBQVFFO0VBQ0UsZUFBQTtBQUxKOztBQVFFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFMSjtBQUNGOztBQVFFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFOSjtBQUNGOztBQVNFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFQSjtBQUNGOztBQVVFO0VBQ0UsV0FBQTtBQVJKIiwiZmlsZSI6ImFkZC1lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW50cnktaGVhZGVyIHtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcblxyXG4gIC5ibG9jayB7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICAuZGVsZXRlSWNvbjpiZWZvcmUge1xyXG4gICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxuICAuaGlkZGVuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcnJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAwcHgpIHtcclxuICAgIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sdW1uLWNvdW50OiAyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDIwcHgpIHtcclxuICAgIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAgIC5pbWFnZXMtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucGljay1zaW5nbGUtaW1hZ2Uge1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "v9pH":
/*!*************************************************************************!*\
  !*** ./src/app/tab3/test-results/add-entry/add-entry-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "Vc8s");




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

/***/ "x4WC":
/*!*****************************************************************!*\
  !*** ./src/app/tab3/test-results/add-entry/add-entry.module.ts ***!
  \*****************************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "v9pH");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "Vc8s");







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



/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~test-results-test-results-module.js.map