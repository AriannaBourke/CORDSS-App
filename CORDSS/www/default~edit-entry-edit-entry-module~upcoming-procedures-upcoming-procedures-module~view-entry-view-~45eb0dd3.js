(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3"],{

/***/ "WrOO":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/procedures/upcoming-procedures/edit-entry/edit-entry.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Upcoming Procedure info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let pro of procedures; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Edit Upcoming Procedure</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" novalidate (ngSubmit)=\"update(rowid)\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Date & Time</ion-label\r\n                >\r\n                <ion-icon\r\n                  class=\"red\"\r\n                  slot=\"start\"\r\n                  name=\"calendar-number\"\r\n                ></ion-icon>\r\n                <ion-datetime\r\n                  placeholder=\"{{pro.date | date: 'dd MMMM y HH:mm a'}}\"\r\n                  displayFormat=\"DD MMMM YYYY HH:mm\"\r\n                  [(ngModel)]=\"data.date\"\r\n                  name=\"date\"\r\n                  required\r\n                  #dateCtrl=\"ngModel\"\r\n                ></ion-datetime>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n                <ion-text color=\"danger\">*Date is required</ion-text>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Doctor</ion-label>\r\n                <ion-icon class=\"orange\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{pro.doctor}}\"\r\n                  [(ngModel)]=\"data.doctor\"\r\n                  name=\"doctor\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Place</ion-label>\r\n                <ion-icon\r\n                  class=\"yellow\"\r\n                  slot=\"start\"\r\n                  name=\"business\"\r\n                ></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{pro.place}}\"\r\n                  [(ngModel)]=\"data.place\"\r\n                  name=\"place\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Procedure Type</ion-label\r\n                >\r\n                <ion-icon class=\"green\" slot=\"start\" name=\"fitness\"></ion-icon>\r\n                <ion-select\r\n                  #links\r\n                  ngModel\r\n                  name=\"estate\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"{{pro.type}}\"\r\n                  [(ngModel)]=\"data.type\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n                  <ion-select-option value='Cataract surgery'>Cataract surgery</ion-select-option>\r\n                  <ion-select-option value='Cataract surgery with lens implant'>Cataract surgery with lens implant </ion-select-option>\r\n                  <ion-select-option value='Glaucoma surgery'>Glaucoma surgery</ion-select-option>\r\n                  <ion-select-option value='Glaucoma surgery with tube'>Glaucoma surgery with tube</ion-select-option>\r\n                  <ion-select-option value='Removal of band keratopathy'>Removal of band keratopathy</ion-select-option>\r\n                  <ion-select-option value='Injection of steroid inside eye (intravitreal steroid)'>Injection of steroid inside eye (intravitreal steroid)</ion-select-option>\r\n                  <ion-select-option value='Injection of steroid implant into eye (Ozurdex implant)'>Injection of steroid implant into eye (Ozurdex implant)</ion-select-option>\r\n                  <ion-select-option value='Injection of steroids around the eye (Orbital floor steroid)'>Injection of steroids around the eye (Orbital floor steroid)</ion-select-option>\r\n                  <ion-select-option value='Injection of steroid into joint'>Injection of steroid into joint</ion-select-option>\r\n                  <ion-select-option value='Endoscopy'>Endoscopy</ion-select-option>\r\n                  <ion-select-option value='Gastroscopy'>Gastroscopy</ion-select-option>\r\n                  <ion-select-option value='Kidney transplant'>Kidney transplant</ion-select-option>\r\n                  <ion-select-option value='Biopsy'>Biopsy</ion-select-option>\r\n                  <ion-select-option value='Other'>Other Operation</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n               </ion-col>\r\n              </ion-row>      \r\n      \r\n               <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label color=\"medium\" position=\"stacked\">Description</ion-label>\r\n                    <ion-icon\r\n                    class=\"teal\"\r\n                    slot=\"start\"\r\n                    name=\"chatbubble-ellipses\"\r\n                  ></ion-icon>\r\n                   <ion-textarea \r\n                   type=\"text\"\r\n                   placeholder=\"{{pro.description}}\"\r\n                   [(ngModel)]=\"data.description\"\r\n                   name=\"description\"\r\n                   ></ion-textarea>\r\n                  </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n      \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label color=\"medium\" position=\"stacked\">Questions?</ion-label>\r\n                    <ion-icon\r\n                    class=\"lightblue\"\r\n                    slot=\"start\"\r\n                    name=\"help-circle\"\r\n                  ></ion-icon>\r\n                   <ion-textarea \r\n                   type=\"text\"\r\n                   placeholder=\"{{pro.questions}}\"\r\n                   [(ngModel)]=\"data.questions\"\r\n                   name=\"questions\"\r\n                  ></ion-textarea>\r\n                  </ion-item>\r\n                 <div class=\"ion-margin-vertical ion-text-right\">\r\n                  <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n\r\n                <ion-button\r\n                  type=\"button\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "dOZ6":
/*!***********************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/edit-entry/edit-entry.page.ts ***!
  \***********************************************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "WrOO");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "ztUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/







let EditEntryPage = class EditEntryPage {
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
        this.ProceduresTable = 'CREATE TABLE IF NOT EXISTS procedures(rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)';
        this.data = { date: "", doctor: "", place: "", type: "", description: "", questions: "" };
        this.rowid = navParams.get('rowid');
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
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM procedures WHERE rowid=?', [rowid])
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
                message: "Would you like to update this entry in your procedures? <br/><br/>Note: if the date is in the past, the procedure will be placed in your past procedures!",
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
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.date != "") {
                this._db.executeSql('UPDATE procedures SET date=? WHERE rowid=?', [this.data.date, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.doctor != "") {
                this._db.executeSql('UPDATE procedures SET doctor=? WHERE rowid=?', [this.data.doctor, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.place != "") {
                this._db.executeSql('UPDATE procedures SET place=? WHERE rowid=?', [this.data.place, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.description != "") {
                this._db.executeSql('UPDATE procedures SET description=? WHERE rowid=?', [this.data.description, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.questions != "") {
                this._db.executeSql('UPDATE procedures SET questions=? WHERE rowid=?', [this.data.questions, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            this.closeModal();
        });
    }
};
EditEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
EditEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-entry',
        template: _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditEntryPage);



/***/ }),

/***/ "ztUU":
/*!*************************************************************************************!*\
  !*** ./src/app/tab3/procedures/upcoming-procedures/edit-entry/edit-entry.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n\nion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtZW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoiZWRpdC1lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXIge1xyXG4gIC0td2lkdGg6IDk1JTtcclxuICAtLW1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~upcoming-procedures-upcoming-procedures-module~view-entry-view-~45eb0dd3.js.map