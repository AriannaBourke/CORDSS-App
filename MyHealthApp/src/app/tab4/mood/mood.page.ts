import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.page.html',
  styleUrls: ['./mood.page.scss'],
})
export class MoodPage {
  public mood : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  MoodTable : string = 'CREATE TABLE IF NOT EXISTS mood (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT)'
  data = {date: "", happy: "", independent: "", tired: "", productive: "", notes: ""};

  constructor(
              public modalController: ModalController,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite)
{
  this.mood = [];
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
    await this._db.executeSql(this.MoodTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
  public getData() {
    this._db.executeSql('SELECT * FROM mood ORDER BY date DESC', <any>[])
    .then(res => {
      this.mood = [];
      for(var i=0; i<res.rows.length; i++) {
        this.mood.push({
          rowid:res.rows.item(i).rowid,
          date:res.rows.item(i).date,
          happy:res.rows.item(i).happy,
          independent:res.rows.item(i).independent,
          tired:res.rows.item(i).tired,
          productive:res.rows.item(i).productive,
          notes:res.rows.item(i).notes
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }
    
  public saveData() {
    this._db.executeSql('INSERT INTO mood VALUES(NULL,?,?,?,?,?,?)', [this.data.date, this.data.happy, this.data.independent, this.data.tired, this.data.productive, this.data.notes]) 
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
      
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM mood WHERE rowid=?', [rowid])
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