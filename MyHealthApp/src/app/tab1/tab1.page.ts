import { Component } from '@angular/core';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myProfileImage;
  public aboutme : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  
  default: any;
  AboutMeTable : string = 'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, email TEXT, phone INT, address TEXT, nhs_number INT, notes TEXT, emergency_name TEXT, emergency_phone INT)'
  data = {name: "", birthday: "", email: "", phone: "", address: "", 
  nhs_number: "", notes: "", emergency_name: "", emergency_phone: ""};


  constructor(
    private _camera: Camera,
    private callNumber: CallNumber,
    public modalController: ModalController,
    private _alertController: AlertController, 
    public _plat: Platform, 
    public _sql: SQLite,)

{
  this.default = "";
  this.aboutme = [];
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
    await this._db.executeSql(this.AboutMeTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
  public getData() {
    this._db.executeSql('SELECT * FROM aboutme', <any>[])
    .then(res => {
      this.aboutme = [];
      for(var i=0; i<res.rows.length; i++) {
        this.aboutme.push({
          rowid:res.rows.item(i).rowid,
          name:res.rows.item(i).name,
          birthday:res.rows.item(i).birthday,
          email:res.rows.item(i).email,
          phone:res.rows.item(i).phone,
          address:res.rows.item(i).address,
          nhs_number:res.rows.item(i).nhs_number,
          notes:res.rows.item(i).notes,
          emergency_name:res.rows.item(i).emergency_name,
          emergency_phone:res.rows.item(i).emergency_phone,

        })
      }
    })
        .catch(e => alert('get data error' + e));
      }
    
  public saveData() {
    this._db.executeSql('INSERT INTO aboutme VALUES(NULL,?,?,?,?,?,?,?,?,?)', [this.data.name, this.data.birthday, this.data.email,
       this.data.phone, this.data.address, this.data.nhs_number, this.data.notes, this.data.emergency_name, this.data.emergency_phone ])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM aboutme WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your profile?",
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

  async selectImageSource() {
    const cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.DATA_URL,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
  };
    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for your avatar",
      buttons: [
        {
          text:"Camera",
          handler: ()=> {
            this._camera.getPicture(cameraOptions)
            .then((ImageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + ImageData;
            })

          }
        },
        {
          text:"Gallery",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((ImageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + ImageData;
            })

          }
        }
      ]
    });

    await alert.present();

  };

  callNow(number) {
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }



}