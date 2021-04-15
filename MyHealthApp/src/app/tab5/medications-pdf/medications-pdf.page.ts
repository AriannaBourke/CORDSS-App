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
  selector: 'app-medications-pdf',
  templateUrl: './medications-pdf.page.html',
  styleUrls: ['./medications-pdf.page.scss'],
})

export class MedicationsPdfPage {
  public medicines : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  pdfObject = null;
  createButtonDisable: boolean = false;
  default: any;
  isEnabled: any;
  MedicinesTable : string = 'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)'
  data = {medicinename: "", instructions: "", sideeffects: "", notes: ""};

  constructor(public navCtrl: NavController,
   private _plat: Platform, 
   private file: File, 
   private fileOpener: FileOpener,
   public _sql: SQLite,
   private _alertController: AlertController,
   public modalController: ModalController

  ) {  
    this.default = "";
    this.medicines = [];
      this._plat
      .ready()
      .then(() => 
    
        {
          this._createDatabase();
        })
        .catch(e => alert('create database error' + e));
      }
    
      public _createDatabase()
      {
        this._sql.create({
          name: "database.db",
          location: 'default'
        })
        .then((db: SQLiteObject) =>
        {
          this._db = db;
          this._createDatabaseTables();
        })
        .catch(e => alert('create tables error' + e));
      }
      
      async _createDatabaseTables() {
        await this._db.executeSql(this.MedicinesTable, []);
        this.getData()
      }
    
      ionViewDidLoad() {
            this.getData();
          }
        
          ionViewWillEnter() {
            this.getData();
          }

          verifyDatabasePopulated() {
            this._db.executeSql('SELECT * FROM medicine', <any>[])
            .then(res => {
              if(res.rows.length == 0) {
                this.isEnabled = true;
              }
              else {
                this.isEnabled = false;
              }
            })
        
          }
        
          checkIsEnabled() {
            return !this.isEnabled;
          }
        
          noContent() {
            return !this.isEnabled;
          }
        
          public getData() {
            this.verifyDatabasePopulated();
            this._db.executeSql('SELECT * FROM medicine ORDER BY activeflag="No"', <any>[])
            .then(res => {
              this.medicines = [];
              for(var i=0; i<res.rows.length; i++) {
                this.medicines.push({
                  rowid:res.rows.item(i).rowid,
                  medicinename:res.rows.item(i).medicinename,
                  instructions:res.rows.item(i).instructions,
                  sideeffects:res.rows.item(i).sideeffects,
                  notes:res.rows.item(i).notes,
                  activeflag:res.rows.item(i).activeflag
                })
              }
            })
                .catch(e => alert('get data error' + e));
              }


  async createPDF() {
    this.createButtonDisable = true;
    const html = await htmlToPdfmake(
      document.getElementById('pdfcontent').innerHTML
    );
    console.log('html:', html);
    let docDefinition = {
      content: [
      { text: 'Medicines', fontSize: 30, alignment: 'center', bold: true, margin: [0, 15, 0, 15] },
      { text: new Date().toDateString(), alignment: 'right', margin: [0, 15, 0, 20] }, 
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
    this.pdfObject.getBase64((pdf) => {
      console.log(`pdf:`, typeof pdf);
      console.log(pdf);
    });

    setTimeout(() => {
      this.createButtonDisable = false;
    }, 1000);
    this.downloadPdf();
  }

      downloadPdf() {
    if (this._plat.is('cordova')) {
      this.pdfObject.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
        this.file.writeFile(this.file.dataDirectory, 'Medicines.pdf', blob, { replace: true }).then(fileEntry => {
          this.fileOpener.open(this.file.dataDirectory + 'Medicines.pdf', 'application/pdf');
        })
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
