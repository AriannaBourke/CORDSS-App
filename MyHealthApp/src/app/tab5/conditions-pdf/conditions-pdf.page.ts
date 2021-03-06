// The functions createPDF() and downloadPDF() are adapted from:
// https://ionicacademy.com/create-pdf-files-ionic-pdfmake/
// https://github.com/CarlosNassif/pdfmake/tree/master/src/app/pdf-maker
//  This file is adapted from:
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import htmlToPdfmake from 'html-to-pdfmake';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-conditions-pdf',
  templateUrl: './conditions-pdf.page.html',
  styleUrls: ['./conditions-pdf.page.scss'],
})
export class ConditionsPdfPage {
  public medicalhistory: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  pdfObject = null;
  createButtonDisable: boolean = false;
  default: any;
  isEnabled: any;
  MedicalHistoryTable: string =
    'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)';
  data = {
    diagnosis: '',
    diagnosis_details: '',
    diagnosis_date: '',
    notes: '',
  };

  constructor(
    public navCtrl: NavController,
    private _plat: Platform,
    private file: File,
    private fileOpener: FileOpener,
    public _sql: SQLite,
    private _alertController: AlertController,
    public modalController: ModalController
  ) {
    this.default = '';
    this.medicalhistory = [];
    this._plat
      .ready()
      .then(() => {
        this._createDatabase();
      })
  }

  public _createDatabase() {
    this._sql
      .create({
        name: 'database.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        this._db = db;
        this._createDatabaseTables();
      })
  }

  async _createDatabaseTables() {
    await this._db.executeSql(this.MedicalHistoryTable, []);
    this.getData();
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  verifyDatabasePopulated() {
    this._db.executeSql('SELECT * FROM medicalhistory', <any>[]).then((res) => {
      if (res.rows.length == 0) {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    });
  }

  checkIsEnabled() {
    return this.isEnabled;
  }

  noContent() {
    return !this.isEnabled;
  }

  public getData() {
    this.verifyDatabasePopulated();
    this._db
      .executeSql('SELECT * FROM medicalhistory ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.medicalhistory = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.medicalhistory.push({
            rowid: res.rows.item(i).rowid,
            diagnosis: res.rows.item(i).diagnosis,
            diagnosis_details: res.rows.item(i).diagnosis_details,
            diagnosis_date: res.rows.item(i).diagnosis_date,
            notes: res.rows.item(i).notes,
          });
        }
      })
  }

  async createPDF() {
    const html = await htmlToPdfmake(
      document.getElementById('pdfcontent').innerHTML
    );
    let docDefinition = {
      content: [
        {
          text: 'My Conditions',
          fontSize: 30,
          alignment: 'center',
          bold: true,
          margin: [0, 15, 0, 15],
        },
        {
          text: new Date().toDateString(),
          alignment: 'right',
          margin: [0, 15, 0, 20],
        },
        html,
      ],
      footer: (currentPage) => {
        return {
          margin: 10,
          columns: [
            {
              text: currentPage.toString(),
            },
          ],
        };
      },
    };
    this.pdfObject = pdfMake.createPdf(docDefinition);
    this.pdfObject.getBase64((pdf) => {});

    setTimeout(() => {}, 1000);
    this.downloadPdf();
  }

  downloadPdf() {
    if (this._plat.is('cordova')) {
      this.pdfObject.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        this.file
          .writeFile(this.file.dataDirectory, 'Conditions.pdf', blob, {
            replace: true,
          })
          .then((fileEntry) => {
            this.fileOpener.open(
              this.file.dataDirectory + 'Conditions.pdf',
              'application/pdf'
            );
          });
      });
    } else {
      this.pdfObject.download();
    }
  }

  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}
