(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-entry-add-entry-module~medical-history-medical-history-module"],{

/***/ "7yX+":
/*!********************************************************************!*\
  !*** ./src/app/tab3/medical-history/add-entry/add-entry.module.ts ***!
  \********************************************************************/
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
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-entry-routing.module */ "lq1z");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry.page */ "f3ax");







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



/***/ }),

/***/ "ZN0r":
/*!********************************************************************!*\
  !*** ./src/app/tab3/medical-history/add-entry/add-entry.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  --max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1lbnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm15Y29tcG9uZW50LXdpZGVyLXBvcG92ZXIge1xyXG4gIC0td2lkdGg6IDk1JTtcclxuICAtLW1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "dpzp":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/medical-history/add-entry/add-entry.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add a Condition!</ion-title>\r\n    <ion-button\r\n      color=\"dark\"\r\n      fill=\"clear\"\r\n      slot=\"start\"\r\n      size=\"small\"\r\n      (click)=\"closeModal()\"\r\n      ><ion-icon size=\"large\" name=\"arrow-back-outline\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"submitData(form)\">\r\n    <ion-card>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-card-title>Add Condition</ion-card-title>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Diagnosis</ion-label>\r\n              <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <ion-select\r\n                #links\r\n                ngModel\r\n                name=\"estate\"\r\n                interface=\"popover\"\r\n                placeholder=\"Select Option (*Required)\"\r\n                required\r\n                #diagnosisCtrl=\"ngModel\"\r\n                [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n              >\r\n                <ion-select-option value=\"1\"\r\n                  >Ophthalmology disorders</ion-select-option\r\n                >\r\n                <ion-select-option value=\"2\"\r\n                  >Rheumatology disorders</ion-select-option\r\n                >\r\n                <ion-select-option value=\"3\"\r\n                  >Gastroenterology disorders</ion-select-option\r\n                >\r\n                <ion-select-option value=\"4\"\r\n                  >Dermatology disorders</ion-select-option\r\n                >\r\n                <ion-select-option value=\"5\"\r\n                  >Nephrology disorders</ion-select-option\r\n                >\r\n                <ion-select-option value=\"6\">Other</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n              <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n            </ion-item>\r\n            <div *ngIf=\"links.value === '1'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Diagnosis Name</ion-label> \r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n                          interface=\"popover\" placeholder=\"Select Option (*Required)\" required\r\n                          #diagnosisCtrl=\"ngModel\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n              <ion-select-option value='Uveitis'>Uveitis</ion-select-option>\r\n              <ion-select-option value='Anterior Uveitis'>Anterior Uveitis</ion-select-option>\r\n              <ion-select-option value='Intermediate Uveitis'>Intermediate Uveitis </ion-select-option>\r\n              <ion-select-option value='Posterior Uveitis'>Posterior Uveitis</ion-select-option>\r\n              <ion-select-option value='Panuveitis'>Panuveitis</ion-select-option>\r\n              <ion-select-option value='Scleritis'>Scleritis</ion-select-option>\r\n              <ion-select-option value='Orbital Inflammation'>Orbital Inflammation</ion-select-option>\r\n              <ion-select-option value='Ocular sarcoidosis'>Ocular sarcoidosis</ion-select-option>\r\n              <ion-select-option value='Inflammatory eye condition'>Inflammatory eye condition </ion-select-option>\r\n              <ion-select-option value='Cataract'>Cataract</ion-select-option>\r\n              <ion-select-option value='Aphakia (removed cataract)'>Aphakia (removed cataract)</ion-select-option>\r\n              <ion-select-option value='Pseudophakia (removed cataract and artificial lens in place'>Pseudophakia (removed cataract and artificial lens in place)</ion-select-option>\r\n              <ion-select-option value='Amblyopia'>Amblyopia</ion-select-option>\r\n              \r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n            <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n          </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '2'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Diagnosis Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.diagnosis\"\r\n                  name=\"diagnosis\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option (*Required)\"\r\n                  required\r\n                  #diagnosisCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Juvenile idiopathic arthritis (JIA)\"\r\n                    >Juvenile idiopathic arthritis (JIA)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Systemic JIA\"\r\n                    >Systemic JIA</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Polyarticular JIA, rheumatoid factor negative\"\r\n                    >Polyarticular JIA, rheumatoid factor\r\n                    negative</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Polyarticular JIA: rheumatoid factor positive \"\r\n                    >Polyarticular JIA: rheumatoid factor positive\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Oligoarticular arthritis\"\r\n                    >Oligoarticular arthritis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Enthesitis-related arthritis\"\r\n                    >Enthesitis-related arthritis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Psoriatic arthritis\"\r\n                    >Psoriatic arthritis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"JIA (type not known)\"\r\n                    >JIA (type not known)</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Arthritis associated with chronic disease\"\r\n                    >Arthritis associated with chronic\r\n                    disease</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Behçet’s\"\r\n                    >Behçet’s</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Scleroderma\"\r\n                    >Scleroderma</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Systemic sclerosis\"\r\n                    >Systemic sclerosis\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Localised scleroderma\"\r\n                    >Localised scleroderma\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Juvenile dermatomyositis\"\r\n                    >Juvenile dermatomyositis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Vasculitis\"\r\n                    >Vasculitis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Kawasaki disease\"\r\n                    >Kawasaki disease</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Polyarteritis nodosa\"\r\n                    >Polyarteritis nodosa</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Other vasculitis\"\r\n                    >Other vasculitis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Systemic lupus erythematosus\"\r\n                    >Systemic lupus erythematosus</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Sarcoidosis\"\r\n                    >Sarcoidosis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Blau syndrome\"\r\n                    >Blau syndrome</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Overlap connective tissue disease\"\r\n                    >Overlap connective tissue disease</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Chronic infantile neurological cutaneous and articular syndrome (CINCA)\"\r\n                    >Chronic infantile neurological cutaneous and articular\r\n                    syndrome (CINCA)</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Chronic recurrent multifocal osteomyelitis (CRMO)\"\r\n                    >Chronic recurrent multifocal osteomyelitis (CRMO)\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Periodic fever syndrome\"\r\n                    >Periodic fever syndrome</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Familial mediterranean fever (FMF)\"\r\n                    >Familial mediterranean fever (FMF)</ion-select-option\r\n                  >\r\n                  <ion-select-option\r\n                    value=\"Cryopyrin-Associated Periodic Syndrome (CAPS)\"\r\n                    >Cryopyrin-Associated Periodic Syndrome\r\n                    (CAPS)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Other periodic fever syndrome\"\r\n                    >Other periodic fever syndrome</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n                <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '3'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Diagnosis Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.diagnosis\"\r\n                  name=\"diagnosis\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option (*Required)\"\r\n                  required\r\n                  #diagnosisCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Autoimmune bowel disorder\"\r\n                    >Autoimmune bowel disorder</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Coeliac disease \"\r\n                    >Coeliac disease\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"Crohn’s\">Crohn’s</ion-select-option>\r\n                  <ion-select-option value=\"Colitis\">Colitis</ion-select-option>\r\n                  <ion-select-option value=\"Eosinophilic GI disorder\"\r\n                    >Eosinophilic GI disorder</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Oesophagitis\"\r\n                    >Oesophagitis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Pancreatitis\"\r\n                    >Pancreatitis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Inflammatory bowel disease\"\r\n                    >Inflammatory bowel disease</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n                <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '4'\">\r\n              <ion-item>\r\n                <ion-label position=\"stacked\">Diagnosis Name</ion-label>\r\n                <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n                <ion-select\r\n                  [(ngModel)]=\"data.diagnosis\"\r\n                  name=\"diagnosis\"\r\n                  interface=\"popover\"\r\n                  placeholder=\"Select Option (*Required)\"\r\n                  required\r\n                  #diagnosisCtrl=\"ngModel\"\r\n                  [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\"\r\n                >\r\n                  <ion-select-option value=\"Eczema\">Eczema</ion-select-option>\r\n                  <ion-select-option value=\"Psoriasis\"\r\n                    >Psoriasis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Scleroderma\"\r\n                    >Scleroderma</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Behçet’s disease\"\r\n                    >Behçet’s disease</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Connective tissue disorders\"\r\n                    >Connective tissue disorders</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Dermatomyositis\"\r\n                    >Dermatomyositis</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Systemic lupus erythematosus\"\r\n                    >Systemic lupus erythematosus</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Inflammatory skin condition \"\r\n                    >Inflammatory skin condition</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n                <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"links.value === '5'\">\r\n              <ion-item>\r\n            <ion-label position=\"stacked\">Diagnosis Name</ion-label> \r\n            <ion-icon class=\"red\" slot=\"start\" name=\"medkit\"></ion-icon>\r\n              <ion-select [(ngModel)]=\"data.diagnosis\" name=\"diagnosis\" \r\n              interface=\"popover\" placeholder=\"Select Option (*Required)\"\r\n              required #diagnosisCtrl=\"ngModel\"\r\n              [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">\r\n              <ion-select-option value='Chronic renal failure'>Chronic renal failure</ion-select-option>\r\n              <ion-select-option value='Lupus nephritis'>Lupus nephritis</ion-select-option>\r\n              <ion-select-option value='Polycystic kidney disease'>Polycystic kidney disease</ion-select-option>\r\n              <ion-select-option value='Nephritis'>Nephritis</ion-select-option>\r\n              <ion-select-option value='Focal segmental glomerulosclerosis (FSGS)'>Focal segmental glomerulosclerosis (FSGS)</ion-select-option>\r\n              <ion-select-option value='IgA nephropathy'>IgA nephropathy </ion-select-option>\r\n              <ion-select-option value='Kidney transplant patient'>Kidney transplant patient</ion-select-option>\r\n              <ion-select-option value='Membranoproliferative glomerulonephritis (MPGN)'>Membranoproliferative glomerulonephritis (MPGN)</ion-select-option>\r\n              <ion-select-option value='Chronic kidney disease'>Chronic kidney disease</ion-select-option>  \r\n              <ion-select-option value='Glomerulonephritis'>Glomerulonephritis</ion-select-option>\r\n              <ion-select-option value='Nephrotic syndrome'>Nephrotic syndrome</ion-select-option>\r\n              <ion-select-option value='Focal segmental glomerulosclerosis (FSGS)'>Focal segmental glomerulosclerosis (FSGS)</ion-select-option>\r\n              <ion-select-option value='Atypical HUS'>Atypical HUS</ion-select-option>\r\n              <ion-select-option value='Kidney replacement therapy: kidney transplant recipients'>Kidney replacement therapy: kidney transplant recipients</ion-select-option>\r\n              <ion-select-option value='Kidney replacement therapy: dialysis '>Kidney replacement therapy: dialysis </ion-select-option>\r\n            </ion-select>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n              <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n            </ion-item>\r\n          </div>  \r\n          <div *ngIf=\"links.value === '6'\">\r\n            <ion-item>\r\n            <ion-label position=\"stacked\">diagnosis Name</ion-label>\r\n            <ion-icon class=\"red\" slot=\"start\" name=\"pencil\"></ion-icon>\r\n            <ion-input placeholder=\"Write diagnosis name\" [(ngModel)]=\"data.diagnosis\"\r\n                      name=\"diagnosis\" required #diagnosisCtrl=\"ngModel\"></ion-input>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"!diagnosisCtrl.valid && diagnosisCtrl.touched\">\r\n              <ion-text color=\"danger\">*Diagnosis is required</ion-text>\r\n            </ion-item>\r\n          </div>  \r\n        </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Diagnosis Details</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"document-text\"\r\n                class=\"orange\"\r\n              ></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Details about diagnosis\"\r\n                [(ngModel)]=\"data.diagnosis_details\"\r\n                name=\"diagnosis_details\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Diagnosis Date</ion-label>\r\n              <ion-icon\r\n                slot=\"start\"\r\n                name=\"calendar-number\"\r\n                class=\"yellow\"\r\n              ></ion-icon>\r\n              <ion-datetime\r\n                displayFormat=\"DD MMMM YYYY\"\r\n                placeholder=\"Date of Diagnosis\"\r\n                [(ngModel)]=\"data.diagnosis_date\"\r\n                name=\"diagnosis_date\"\r\n              ></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Notes</ion-label>\r\n              <ion-icon slot=\"start\" name=\"pencil\" class=\"green\"></ion-icon>\r\n              <ion-textarea\r\n                type=\"text\"\r\n                placeholder=\"Notes\"\r\n                [(ngModel)]=\"data.notes\"\r\n                name=\"notes\"\r\n              ></ion-textarea>\r\n            </ion-item>\r\n            <div class=\"ion-margin-vertical ion-text-right\">\r\n              <ion-button\r\n                type=\"button\"\r\n                fill=\"outline\"\r\n                color=\"danger\"\r\n                shape=\"round\"\r\n                (click)=\"form.reset()\"\r\n                >Clear</ion-button\r\n              >\r\n              <ion-button\r\n                type=\"button\"\r\n                type=\"submit\"\r\n                value=\"submit\"\r\n                id=\"submit\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                [disabled]=\"!form.valid\"\r\n                >Submit</ion-button\r\n              >\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "f3ax":
/*!******************************************************************!*\
  !*** ./src/app/tab3/medical-history/add-entry/add-entry.page.ts ***!
  \******************************************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "dpzp");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "ZN0r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/







let AddEntryPage = class AddEntryPage {
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
            this.getData();
        });
    }
    ionViewDidLoad() {
        this.getData();
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        this._db.executeSql('SELECT * FROM medicalhistory ORDER BY rowid DESC', [])
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
    saveData() {
        this._db.executeSql('INSERT INTO medicalhistory VALUES(NULL,?,?,?,?)', [this.data.diagnosis, this.data.diagnosis_details, this.data.diagnosis_date, this.data.notes])
            .then(res => {
            this.closeModal();
        })
            .catch(e => alert("save data error" + e));
    }
    submitData(myForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            const alert = yield this._alertController.create({
                header: "Save this entry?",
                message: "Would you like to save this entry?",
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
            yield this.modalController.dismiss();
            this.getData();
        });
    }
};
AddEntryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"] }
];
AddEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-entry',
        template: _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddEntryPage);



/***/ }),

/***/ "lq1z":
/*!****************************************************************************!*\
  !*** ./src/app/tab3/medical-history/add-entry/add-entry-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "f3ax");




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



/***/ })

}]);
//# sourceMappingURL=default~add-entry-add-entry-module~medical-history-medical-history-module.js.map