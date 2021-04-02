import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';


@Component({
  selector: 'app-thoughts-feelings',
  templateUrl: './thoughts-feelings.page.html',
  styleUrls: ['./thoughts-feelings.page.scss'],
})
export class ThoughtsFeelingsPage {
  public thoughtsfeelings : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  

  ThoughtsFeelingsTable : string =  'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'
  data = {note_name: "", photo: "", file: "", notes: ""};

    constructor(
                public modalController: ModalController,
                private _alertController: AlertController, 
                public _plat: Platform, 
                public _sql: SQLite,
              ) 

{
  this.thoughtsfeelings = [];
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
    await this._db.executeSql(this.ThoughtsFeelingsTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
  public getData() {
    this._db.executeSql('SELECT * FROM thoughtsfeelings ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.thoughtsfeelings = [];
      for(var i=0; i<res.rows.length; i++) {
        this.thoughtsfeelings.push({
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
    
  public saveData() {
    this._db.executeSql('INSERT INTO thoughtsfeelings VALUES(NULL,?,?,?,?)', [this.data.note_name, this.data.photo, this.data.file, this.data.notes])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM thoughtsfeelings WHERE rowid=?', [rowid])
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
