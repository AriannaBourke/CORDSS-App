// The functions createPDF() and downloadPDF() are adapted from:
// https://ionicacademy.com/create-pdf-files-ionic-pdfmake/ 
// https://github.com/CarlosNassif/pdfmake/tree/master/src/app/pdf-maker 

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
  selector: 'app-urgentplan-pdf',
  templateUrl: './urgentplan-pdf.page.html',
  styleUrls: ['./urgentplan-pdf.page.scss'],
})

  export class UrgentplanPdfPage {
    public urgentplan : Array<any> = [];
    public isData          : boolean        = false;
    public storedData      : any            = null;
    private _db   : any;
    pdfObject = null;
    createButtonDisable: boolean = false;
    default: any;
    isEnabled: any;
    UrgentPlanTable : string = 'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone INT, notes TEXT)'
    data = {type: "", instructions: "", phone: "", notes: ""};

    constructor(public navCtrl: NavController,
     private _plat: Platform, 
     private file: File, 
     private fileOpener: FileOpener,
     public _sql: SQLite,
     private _alertController: AlertController,
     public modalController: ModalController

    ) {  
      this.default = "";
      this.urgentplan = [];
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
          await this._db.executeSql(this.UrgentPlanTable, []);
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
              return this.isEnabled;
            }
          
            noContent() {
              return !this.isEnabled;
          }
          
        public getData() {
          this.verifyDatabasePopulated();
          this._db.executeSql('SELECT * FROM urgentplan ORDER BY rowid DESC', <any>[])
          .then(res => {
            this.urgentplan = [];
            for(var i=0; i<res.rows.length; i++) {
              this.urgentplan.push({
                rowid:res.rows.item(i).rowid,
                type:res.rows.item(i).type,
                instructions:res.rows.item(i).instructions,
                phone:res.rows.item(i).phone,
                notes:res.rows.item(i).notes
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
        { text: 'Urgent Health Plan', fontSize: 30, alignment: 'center', bold: true, margin: [0, 15, 0, 15] },
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
          this.file.writeFile(this.file.dataDirectory, 'UrgentPlan.pdf', blob, { replace: true }).then(fileEntry => {
            this.fileOpener.open(this.file.dataDirectory + 'UrgentPlan.pdf', 'application/pdf');
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
