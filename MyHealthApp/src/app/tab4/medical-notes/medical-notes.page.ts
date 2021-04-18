//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-medical-notes',
  templateUrl: './medical-notes.page.html',
  styleUrls: ['./medical-notes.page.scss'],
})
export class MedicalNotesPage {
  public mednotes : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;


  MedNotesTable : string =  'CREATE TABLE IF NOT EXISTS mednotes (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'
  data = {note_name: "", photo: "", file: "", notes: ""};
  isEnabled: any;

    constructor(
                public modalController: ModalController,
                private _alertController: AlertController,
                public _plat: Platform,
                public _sql: SQLite,
              )

{
  this.mednotes = [];
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
    await this._db.executeSql(this.MedNotesTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
        this.verifyDatabasePopulated();
      }

      ionViewWillEnter() {
        this.getData();
        this.verifyDatabasePopulated();
      }

  public getData() {
    this.verifyDatabasePopulated();
    this._db.executeSql('SELECT * FROM mednotes ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.mednotes = [];
      for(var i=0; i<res.rows.length; i++) {
        this.mednotes.push({
          rowid:res.rows.item(i).rowid,
          note_name:res.rows.item(i).note_name,
          photo:res.rows.item(i).photo,
          file:res.rows.item(i).file,
          notes:res.rows.item(i).notes
        })
      }
    })
        .catch(e => alert('get data error' + e));

      }

      verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM mednotes', <any>[])
        .then(res => {
          if(res.rows.length == 0) {
            this.isEnabled = true;
          }
          else {
            this.isEnabled = false;
          }
        })

      }

      noContent() {
        return !this.isEnabled;
      }

  public saveData() {
    this._db.executeSql('INSERT INTO mednotes VALUES(NULL,?,?,?,?)', [this.data.note_name, this.data.photo, this.data.file, this.data.notes])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }

  deleteData(rowid) {
      this._db.executeSql('DELETE FROM mednotes WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry?",
        buttons: [
          {
            text:"Cancel"
          },
          {
            text:"Delete",
            handler: ()=> {
              this.deleteData(rowid);

            }
          }
        ]
      });

      await alert.present();

    }

    async openModal() {
      const modal = await this.modalController.create({
        component: AddEntryPage,
        componentProps: {
        }
      });

      modal.onDidDismiss().then(() => {
        this.getData();
      });

      return await modal.present();
    }


    async viewModal(rowid) {
      const modal = await this.modalController.create({
        component: ViewEntryPage,
        componentProps: { 'rowid': rowid
        }
      });
      modal.onDidDismiss().then(() => {
        this.getData();
      });

      return await modal.present();
    }


    async editModal(rowid) {
      const modal = await this.modalController.create({
        component: EditEntryPage,
        componentProps: { 'rowid': rowid}
      });
      modal.onDidDismiss().then(()=>{
        this.getData();
      });
      return await modal.present();
    }

  }
