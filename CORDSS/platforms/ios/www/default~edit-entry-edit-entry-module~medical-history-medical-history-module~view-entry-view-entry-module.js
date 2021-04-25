(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module"],{

/***/ "6UKV":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medical-history/edit-entry/edit-entry.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit your Condition info!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngFor=\"let history of medicalhistory; let i = index\" class=\"list\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n        <ion-col>\r\n          <ion-card-title>Edit Condition</ion-card-title>\r\n        </ion-col>\r\n      </ion-row>\r\n        \r\n\r\n      <form #form=\"ngForm\" novalidate (ngSubmit)=\"update(rowid)\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label color=\"medium\" position=\"stacked\">Diagnosis</ion-label>\r\n            <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select \r\n            #links ngModel \r\n            name=\"estate\" \r\n            interface=\"popover\" \r\n            placeholder=\"{{history.diagnosis}}\"\r\n            required\r\n            #diagnosisCtrl=\"ngModel\"\r\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='1'>Ophthalmology disorders</ion-select-option>\r\n            <ion-select-option value='2'>Rheumatology disorders</ion-select-option>\r\n            <ion-select-option value='3'>Gastroenterology disorders</ion-select-option>\r\n            <ion-select-option value='4'>Dermatology disorders</ion-select-option>\r\n            <ion-select-option value='5'>Nephrology disorders</ion-select-option>\r\n            <ion-select-option value='6'>Other</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n          <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n        </ion-item>       \r\n          <div *ngIf=\"links.value === '1'\">\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Diagnosis Name</ion-label> \r\n              <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n                        interface=\"popover\" placeholder=\"Select Option (*Required)\" required\r\n                        #diagnosisCtrl=\"ngModel\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='Uveitis'>Uveitis</ion-select-option>\r\n            <ion-select-option value='Anterior Uveitis'>Anterior Uveitis</ion-select-option>\r\n            <ion-select-option value='Intermediate Uveitis'>Intermediate Uveitis </ion-select-option>\r\n            <ion-select-option value='Posterior Uveitis'>Posterior Uveitis</ion-select-option>\r\n            <ion-select-option value='Panuveitis'>Panuveitis</ion-select-option>\r\n            <ion-select-option value='Scleritis'>Scleritis</ion-select-option>\r\n            <ion-select-option value='Orbital Inflammation'>Orbital Inflammation</ion-select-option>\r\n            <ion-select-option value='Ocular sarcoidosis'>Ocular sarcoidosis</ion-select-option>\r\n            <ion-select-option value='Inflammatory eye condition'>Inflammatory eye condition </ion-select-option>\r\n            <ion-select-option value='Cataract'>Cataract</ion-select-option>\r\n            <ion-select-option value='Aphakia (removed cataract)'>Aphakia (removed cataract)</ion-select-option>\r\n            <ion-select-option value='Pseudophakia (removed cataract and artificial lens in place)'>Pseudophakia (removed cataract and artificial lens in place)</ion-select-option>\r\n            <ion-select-option value='Amblyopia'>Amblyopia</ion-select-option>\r\n            \r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n          <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n        </ion-item>\r\n          </div>\r\n          <div *ngIf=\"links.value === '2'\">\r\n            <ion-item>\r\n              <ion-label color=\"medium\" position=\"stacked\">Diagnosis Name</ion-label> \r\n              <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n                        interface=\"popover\" placeholder=\"Select Option (*Required)\"\r\n                        required #diagnosisCtrl=\"ngModel\" \r\n                        [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='Juvenile idiopathic arthritis (JIA)'>Juvenile idiopathic arthritis (JIA)</ion-select-option>\r\n            <ion-select-option value='Systemic JIA'>Systemic JIA</ion-select-option>\r\n            <ion-select-option value='Polyarticular JIA, rheumatoid factor negative'>Polyarticular JIA, rheumatoid factor negative</ion-select-option>\r\n            <ion-select-option value='Polyarticular JIA: rheumatoid factor positive '>Polyarticular JIA: rheumatoid factor positive </ion-select-option>\r\n            <ion-select-option value='Oligoarticular arthritis'>Oligoarticular arthritis</ion-select-option>\r\n            <ion-select-option value='Enthesitis-related arthritis'>Enthesitis-related arthritis</ion-select-option>\r\n            <ion-select-option value='Psoriatic arthritis'>Psoriatic arthritis</ion-select-option>\r\n            <ion-select-option value='JIA (type not known)'>JIA (type not known)</ion-select-option>\r\n            <ion-select-option value='Arthritis associated with chronic disease'>Arthritis associated with chronic disease</ion-select-option>\r\n            <ion-select-option value='Behçet’s'>Behçet’s</ion-select-option>\r\n            <ion-select-option value='Scleroderma'>Scleroderma</ion-select-option>\r\n            <ion-select-option value='Systemic sclerosis'>Systemic sclerosis </ion-select-option>\r\n            <ion-select-option value='Localised scleroderma'>Localised scleroderma </ion-select-option>\r\n            <ion-select-option value='Juvenile dermatomyositis'>Juvenile dermatomyositis</ion-select-option>\r\n            <ion-select-option value='Vasculitis'>Vasculitis</ion-select-option>\r\n            <ion-select-option value='Kawasaki disease'>Kawasaki disease</ion-select-option>\r\n            <ion-select-option value='Polyarteritis nodosa'>Polyarteritis nodosa</ion-select-option>\r\n            <ion-select-option value='Other vasculitis'>Other vasculitis</ion-select-option>\r\n            <ion-select-option value='Systemic lupus erythematosus'>Systemic lupus erythematosus</ion-select-option>\r\n            <ion-select-option value='Sarcoidosis'>Sarcoidosis</ion-select-option>\r\n            <ion-select-option value='Blau syndrome'>Blau syndrome</ion-select-option>\r\n            <ion-select-option value='Overlap connective tissue disease'>Overlap connective tissue disease</ion-select-option>\r\n            <ion-select-option value='Chronic infantile neurological cutaneous and articular syndrome (CINCA)'>Chronic infantile neurological cutaneous and articular syndrome (CINCA)</ion-select-option>\r\n            <ion-select-option value='Chronic recurrent multifocal osteomyelitis (CRMO)'>Chronic recurrent multifocal osteomyelitis (CRMO) </ion-select-option>\r\n            <ion-select-option value='Periodic fever syndrome'>Periodic fever syndrome</ion-select-option>\r\n            <ion-select-option value='Familial mediterranean fever (FMF)'>Familial mediterranean fever (FMF)</ion-select-option>\r\n            <ion-select-option value='Cryopyrin-Associated Periodic Syndrome (CAPS)'>Cryopyrin-Associated Periodic Syndrome (CAPS)</ion-select-option> \r\n            <ion-select-option value='Other periodic fever syndrome'>Other periodic fever syndrome</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n          <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n        </ion-item>\r\n          </div>\r\n          <div *ngIf=\"links.value === '3'\">\r\n            <ion-item>\r\n            <ion-label color=\"medium\" position=\"stacked\">Diagnosis Name</ion-label> \r\n            <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n                        interface=\"popover\" placeholder=\"Select Option (*Required)\"\r\n                        required #diagnosisCtrl=\"ngModel\"\r\n                        [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='Autoimmune bowel disorder'>Autoimmune bowel disorder</ion-select-option>\r\n            <ion-select-option value='Coeliac disease '>Coeliac disease </ion-select-option>\r\n            <ion-select-option value='Crohn’s'>Crohn’s</ion-select-option>\r\n            <ion-select-option value='Colitis'>Colitis</ion-select-option>\r\n            <ion-select-option value='Eosinophilic GI disorder'>Eosinophilic GI disorder</ion-select-option>\r\n            <ion-select-option value='Oesophagitis'>Oesophagitis</ion-select-option>\r\n            <ion-select-option value='Pancreatitis'>Pancreatitis</ion-select-option>\r\n            <ion-select-option value='Inflammatory bowel disease'>Inflammatory bowel disease</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n          <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n        </ion-item>\r\n          </div>\r\n          <div *ngIf=\"links.value === '4'\">\r\n            <ion-item>\r\n          <ion-label color=\"medium\" position=\"stacked\">Diagnosis Name</ion-label> \r\n          <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n                        interface=\"popover\" placeholder=\"Select Option (*Required)\"\r\n                        required #diagnosisCtrl=\"ngModel\"\r\n                        [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n            <ion-select-option value='Eczema'>Eczema</ion-select-option>\r\n            <ion-select-option value='Psoriasis'>Psoriasis</ion-select-option>\r\n            <ion-select-option value='Scleroderma'>Scleroderma</ion-select-option>\r\n            <ion-select-option value='Behçet’s disease'>Behçet’s disease</ion-select-option>\r\n            <ion-select-option value='Connective tissue disorders'>Connective tissue disorders</ion-select-option>\r\n            <ion-select-option value='Dermatomyositis'>Dermatomyositis</ion-select-option>\r\n            <ion-select-option value='Systemic lupus erythematosus'>Systemic lupus erythematosus</ion-select-option>\r\n            <ion-select-option value='Inflammatory skin condition '>Inflammatory skin condition</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n          <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n        </ion-item>\r\n          </div>\r\n          <div *ngIf=\"links.value === '5'\">\r\n            <ion-item>\r\n          <ion-label color=\"medium\" position=\"stacked\">Diagnosis Name</ion-label> \r\n          <ion-icon slot=\"start\" name=\"medkit\" class=\"red\"></ion-icon>\r\n            <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n            interface=\"popover\" placeholder=\"Select Option (*Required)\"\r\n            required #diagnosisCtrl=\"ngModel\"\r\n            [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n          <ion-select-option value='Nephritis'>Nephritis</ion-select-option>\r\n            <ion-select-option value='Membranoproliferative glomerulonephritis (MPGN)'>Membranoproliferative glomerulonephritis (MPGN)</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n            <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n          </ion-item>\r\n        </div>  \r\n        <div *ngIf=\"links.value === '6'\">\r\n          <ion-item>\r\n          <ion-label color=\"medium\" position=\"stacked\">diagnosis Name</ion-label>\r\n          <ion-icon slot=\"start\" name=\"pencil\" class=\"red\"></ion-icon>\r\n          <ion-input placeholder=\"Write diagnosis name\" [(ngModel)]=\"data.diagnosis\"\r\n                    name=\"diagnosis\" required #diagnosisCtrl=\"ngModel\"></ion-input>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n            <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n          </ion-item>\r\n        </div>  \r\n      </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label color=\"medium\" position=\"stacked\">Details About Diagnosis</ion-label>\r\n            <ion-icon slot=\"start\" name=\"document-text\" class=\"orange\"></ion-icon>\r\n            <ion-textarea\r\n            type=\"text\"\r\n            placeholder=\"{{history.diagnosis_details}}\"\r\n            [(ngModel)]=\"data.diagnosis_details\"\r\n            name=\"diagnosis_details\"\r\n          ></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label color=\"medium\" position=\"stacked\">Diagnosis Date</ion-label>\r\n            <ion-icon slot=\"start\" name=\"calendar-number\" class=\"yellow\"></ion-icon>\r\n            <ion-datetime\r\n            displayFormat=\"DD MMMM YYYY\"\r\n            placeholder=\"{{history.diagnosis_date | date: 'dd MMMM YYYY'}}\"\r\n            [(ngModel)]=\"data.diagnosis_date\"\r\n            name=\"diagnosis_date\"\r\n          ></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n       \r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item>\r\n                <ion-label color=\"medium\" position=\"stacked\">Notes</ion-label>\r\n                <ion-icon slot=\"start\" name=\"pencil\" class=\"green\"></ion-icon>\r\n                <ion-textarea\r\n                  type=\"text\"\r\n                  placeholder=\"{{history.notes}}\"\r\n                  [(ngModel)]=\"data.notes\"\r\n                  name=\"notes\"\r\n                ></ion-textarea>\r\n              </ion-item>\r\n              <div class=\"ion-margin-vertical ion-text-right\">\r\n                <ion-button\r\n                  type=\"button\"\r\n                  fill=\"outline\"\r\n                  color=\"danger\"\r\n                  shape=\"round\"\r\n                  (click)=\"form.reset()\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"close\"></ion-icon\r\n                  >Clear</ion-button\r\n                >\r\n\r\n                <ion-button\r\n                  type=\"button\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  value=\"submit\"\r\n                  id=\"submit\"\r\n                  color=\"success\"\r\n                >\r\n                  <ion-icon slot=\"start\" name=\"add\"></ion-icon\r\n                  >Update</ion-button\r\n                >\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "KuXV":
/*!********************************************************************!*\
  !*** ./src/app/tab3/medical-history/edit-entry/edit-entry.page.ts ***!
  \********************************************************************/
/*! exports provided: EditEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEntryPage", function() { return EditEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-entry.page.html */ "6UKV");
/* harmony import */ var _edit_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-entry.page.scss */ "qmXm");
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
        this.medicalhistory = [];
        this.isData = false;
        this.storedData = null;
        this.isSubmitted = false;
        this.MedicalHistoryTable = 'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)';
        this.data = { diagnosis: "", diagnosis_details: "", diagnosis_date: "", notes: "" };
        this.rowid = navParams.get('rowid');
        this.medicalhistory = [];
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
            yield this._db.executeSql(this.MedicalHistoryTable, []);
            this.getData(this.rowid);
        });
    }
    getData(rowid) {
        this._db.executeSql('SELECT * FROM medicalhistory WHERE rowid=?', [rowid])
            .then(res => {
            this.medicalhistory = [];
            for (var i = 0; i < res.rows.length; i++) {
                this.medicalhistory.push({
                    rowid: res.rows.item(i).rowid,
                    diagnosis: res.rows.item(i).diagnosis,
                    diagnosis_details: res.rows.item(i).diagnosis_details,
                    diagnosis_date: res.rows.item(i).diagnosis_date,
                    notes: res.rows.item(i).notes
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
    noSubmit(e) {
        e.preventDefault();
    }
    updateSQL(rowid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data.diagnosis != "") {
                this._db.executeSql('UPDATE medicalhistory SET date=? WHERE rowid=?', [this.data.diagnosis, rowid])
                    .then(res => {
                    this.closeModal();
                })
                    .catch(e => alert('update error' + e));
            }
            if (this.data.diagnosis_details != "") {
                this._db.executeSql('UPDATE medicalhistory SET diagnosis_details=? WHERE rowid=?', [this.data.diagnosis_details, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.diagnosis_date != "") {
                this._db.executeSql('UPDATE medicalhistory SET diagnosis_date=? WHERE rowid=?', [this.data.diagnosis_date, rowid])
                    .then(res => {
                    this.closeModal();
                });
            }
            if (this.data.notes != "") {
                this._db.executeSql('UPDATE medicalhistory SET notes=? WHERE rowid=?', [this.data.notes, rowid])
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

/***/ "qmXm":
/*!**********************************************************************!*\
  !*** ./src/app/tab3/medical-history/edit-entry/edit-entry.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n\nion-select {\n  color: black;\n  --placeholder-opacity: 1;\n  max-width: 95%;\n}\n\nion-input {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-textarea {\n  color: black;\n  --placeholder-opacity: 1;\n}\n\nion-datetime {\n  color: black;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJlZGl0LWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3ZlciB7XHJcbiAgLS13aWR0aDogOTUlO1xyXG4gIC0tbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~edit-entry-edit-entry-module~medical-history-medical-history-module~view-entry-view-entry-module.js.map