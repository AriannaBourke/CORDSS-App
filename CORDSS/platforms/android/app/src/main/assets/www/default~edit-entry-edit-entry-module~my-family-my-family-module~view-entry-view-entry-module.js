(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module"],{

/***/ "Im9i":
/*!****************************************************************!*\
  !*** ./src/app/tab2/my-family/edit-entry/edit-entry.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".entry-header {\n  font-size: large;\n  color: black;\n}\n\nion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\n::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUFGIiwiZmlsZSI6ImVkaXQtZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudHJ5LWhlYWRlciB7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogOTUlO1xyXG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "lmRT":
/*!**************************************************************!*\
  !*** ./src/app/tab2/my-family/edit-entry/edit-entry.page.ts ***!
  \**************************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "z+Dc");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "Im9i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17







let EditEntryPage = class EditEntryPage {
    constructor(modalController, navParams, _alertController, _plat, _sql) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertController = _alertController;
        this._plat = _plat;
        this._sql = _sql;
        this.myfamily = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.MyFamilyTable = 'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone INT)';
        this.data = { name: "", birthday: "", relation: "", email: "", phone: "" };
        this.rowid = navParams.get('rowid');
        this.myfamily = [];
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
            yield this._db.executeSql(this.MyFamilyTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM myfamily WHERE rowid=?', [rowid])
            .then(res => {
            this.myfamily = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.myfamily.push({
                    rowid: res.rows.item(i).rowid,
                    name: res.rows.item(i).name,
                    birthday: res.rows.item(i).birthday,
                    relation: res.rows.item(i).relation,
                    email: res.rows.item(i).email,
                    phone: res.rows.item(i).phone
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
                message: "Would you like to update this entry?",
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
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.name != "") {
                this._db.executeSql('UPDATE myfamily SET name=? WHERE rowid=?', [this.data.name, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.birthday != "") {
                this._db.executeSql('UPDATE myfamily SET birthday=? WHERE rowid=?', [this.data.birthday, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.relation != "") {
                this._db.executeSql('UPDATE myfamily SET relation=? WHERE rowid=?', [this.data.relation, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.email != "") {
                this._db.executeSql('UPDATE myfamily SET email=? WHERE rowid=?', [this.data.email, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.phone != "") {
                this._db.executeSql('UPDATE myfamily SET phone=? WHERE rowid=?', [this.data.phone, rowid])
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

/***/ "z+Dc":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/my-family/edit-entry/edit-entry.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit your Family Member's details!</ion-title>\r\n    <ion-button\r\n      fill=\"clear\"\r\n      color=\"dark\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let family of myfamily; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Edit Family Member</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <form #form=\"ngForm\" novalidate (ngSubmit)=\"update(rowid)\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"person\"></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{family.name}}\"\r\n                  [(ngModel)]=\"data.name\"\r\n                  name=\"name\"\r\n                  required\r\n                  #dateCtrl=\"ngModel\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!dateCtrl.valid && dateCtrl.touched\">\r\n                <ion-text color=\"danger\">*Date is required</ion-text>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Birthday</ion-label\r\n                >\r\n                <ion-icon class=\"orange\" slot=\"start\" name=\"gift\"></ion-icon>\r\n                <ion-datetime\r\n                  displayFormat=\"DD MMMM\"\r\n                  placeholder=\"{{family.birthday | date: 'dd MMMM y' }}\"\r\n                  [(ngModel)]=\"data.birthday\"\r\n                  name=\"birthday\"\r\n                ></ion-datetime>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Relation</ion-label\r\n                >\r\n                <ion-icon class=\"yellow\" slot=\"start\" name=\"heart\"></ion-icon>\r\n                <ion-select\r\n                  interface=\"popover\"\r\n                  placeholder=\"{{family.relation}}\"\r\n                  [(ngModel)]=\"data.relation\"\r\n                  name=\"relation\"\r\n                >\r\n                  <ion-select-option value=\"Parent\">Parent</ion-select-option>\r\n                  <ion-select-option value=\"Guardian\"\r\n                    >Guardian</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Sibling\">Sibling</ion-select-option>\r\n                  <ion-select-option value=\"Grandparent\"\r\n                    >Grandparent</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Other\">Other</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Email</ion-label>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{family.email}}\"\r\n                  [(ngModel)]=\"data.email\"\r\n                  name=\"email\"\r\n                ></ion-input>\r\n                <ion-icon class=\"green\" slot=\"start\" name=\"mail\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\"\r\n                  >Telephone</ion-label\r\n                >\r\n                <ion-icon class=\"teal\" slot=\"start\" name=\"call\"></ion-icon>\r\n                <ion-input\r\n                  type=\"text\"\r\n                  placeholder=\"{{family.phone}}\"\r\n                  [(ngModel)]=\"data.phone\"\r\n                  name=\"phone\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n                <ion-button\r\n                  type=\"button\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~my-family-my-family-module~view-entry-view-entry-module.js.map