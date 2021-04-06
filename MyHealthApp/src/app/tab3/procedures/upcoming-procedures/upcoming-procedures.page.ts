import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-upcoming-procedures',
  templateUrl: './upcoming-procedures.page.html',
  styleUrls: ['./upcoming-procedures.page.scss'],
})
export class UpcomingProceduresPage {
  public procedures : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  

  ProceduresTable : string =  'CREATE TABLE IF NOT EXISTS prodecures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)'
  data = {date: "", doctor: "", place: "", type: "", description: "", questions: ""};
  now = new Date();
  today = this.now.toISOString();
  
    constructor(
                public modalController: ModalController,
                private _alertController: AlertController, 
                public _plat: Platform, 
                public _sql: SQLite,
              ) 

{
  this.procedures = [];
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
    await this._db.executeSql(this.ProceduresTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
  public getData() {
    this._db.executeSql('SELECT * FROM procedures WHERE date > ? ORDER BY date DESC', [this.today])
    .then(res => {
      this.procedures = [];
      for(var i=0; i<res.rows.length; i++) {
        this.procedures.push({
          rowid:res.rows.item(i).rowid,
          date:res.rows.item(i).date,
          doctor:res.rows.item(i).doctor,
          place:res.rows.item(i).place,
          type:res.rows.item(i).type,
          description:res.rows.item(i).description,
          questions:res.rows.item(i).questions,
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }
    
  public saveData() {
    this._db.executeSql('INSERT INTO procedures VALUES(NULL,?,?,?,?,?,?)', [this.data.date, this.data.doctor, this.data.place, this.data.type, this.data.description, this.data.questions])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM procedures WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your procedures?",
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
