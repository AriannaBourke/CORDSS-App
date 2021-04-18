//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ 
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17

import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';



@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage {
  myProfileImage : string;
  public aboutmepicture: Array<any> = [];
  public basicInfo : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  BasicInfoTable : string = 'CREATE TABLE IF NOT EXISTS basicinfo (rowid INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, blood_pressure TEXT, allergies TEXT, notes TEXT)'
  data = {gender: "", height: "", weight: "", blood_pressure: "", allergies: "", notes: ""};
  isEnabled: any;


  constructor(private _alertController: AlertController,
              public modalController: ModalController,
              public _plat: Platform,
              public _sql: SQLite)
{
  this.basicInfo = [];
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
    await this._db.executeSql(this.BasicInfoTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
        this.getDataPicture();
      }

      ionViewWillEnter() {
        this.getData();
        this.getDataPicture();
      }

  public getData() {
    this.verifyDatabasePopulated()
    this._db.executeSql('SELECT * FROM basicinfo ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.basicInfo = [];
      for(var i=0; i<res.rows.length; i++) {
        this.basicInfo.push({
          rowid:res.rows.item(i).rowid,
          gender:res.rows.item(i).gender,
          height:res.rows.item(i).height,
          weight:res.rows.item(i).weight,
          blood_pressure:res.rows.item(i).blood_pressure,
          allergies:res.rows.item(i).allergies,
          notes:res.rows.item(i).notes,
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }

      verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM basicinfo', <any>[])
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

      checkIsEnabled() {
        return !this.isEnabled;
      }

  public saveData() {
    this._db.executeSql('INSERT INTO basicinfo VALUES(NULL,?,?,?,?,?,?)', [this.data.gender, this.data.height, this.data.weight, this.data.blood_pressure, this.data.allergies, this.data.notes ])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }



  deleteData(rowid) {
      this._db.executeSql('DELETE FROM basicinfo WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your basic info?",
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

      modal.onDidDismiss().then((dataReturned) => {
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

    public getDataPicture() {
      this._db.executeSql('SELECT * FROM aboutmepicture', <any>[])
      .then(res => {
        this.aboutmepicture = [];
        for(var i=0; i<res.rows.length; i++) {
          this.aboutmepicture.push({
            rowid:res.rows.item(i).rowid,
            picture:res.rows.item(i).picture,
  
          })
        }
        console.log('hey maria');
        console.log(this.aboutmepicture[0].picture);
        this.myProfileImage=this.aboutmepicture[res.rows.length-1].picture;
      })
     
    
          .catch(e => alert('get data error' + e));
        }
}
