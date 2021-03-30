import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-current-medicines',
  templateUrl: './current-medicines.page.html',
  styleUrls: ['./current-medicines.page.scss'],
})
export class CurrentMedicinesPage {
  public medicines : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  MedicinesTable : string = 'CREATE TABLE IF NOT EXISTS medicines (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT)'
  data = {medicinename: "", instructions: "", sideeffects: "", notes: ""};

  constructor(
              public modalController: ModalController,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite)
{
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
    
  public getData() {
    this._db.executeSql('SELECT * FROM medicines ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.medicines = [];
      for(var i=0; i<res.rows.length; i++) {
        this.medicines.push({
          rowid:res.rows.item(i).rowid,
          medicinename:res.rows.item(i).medicinename,
          instructions:res.rows.item(i).instructions,
          sideeffects:res.rows.item(i).sideeffects,
          notes:res.rows.item(i).notes
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }
    
  public saveData() {
    this._db.executeSql('INSERT INTO medicines VALUES(NULL,?,?,?,?)', [this.data.medicinename, this.data.instructions, this.data.sideeffects, this.data.notes]) 
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
      
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM medicines WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your medicines?",
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

    
  async finishMedicine(index) {
    const alert = await this._alertController.create({
      header: "Have you finished taking this medicine?",
      message: "Would you like to move this medicine into your past medicines page?",
      buttons: [
        {
          text:"No"
        },
        {
          text:"Yes",
          handler: ()=> {
           console.log("Medicine put into past")
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