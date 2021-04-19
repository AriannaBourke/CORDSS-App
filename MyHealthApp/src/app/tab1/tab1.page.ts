//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/


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
  myProfileImage : string;
  public aboutme : Array<any> = [];
  public aboutmepicture: Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  default: any;
  AboutMeTable : string = 'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone INT, address TEXT, nhs_number INT, emergency_1_name TEXT, emergency_1_number TEXT, emergency_2_name TEXT, emergency_2_number TEXT, emergency_3_name TEXT, emergency_3_number TEXT)'
  data = {name: "", birthday: "", about: "", email: "", phone: "", address: "", nhs_number: "", emergency_1_name: "", emergency_1_number: "",  emergency_2_name: "", emergency_2_number: "",  emergency_3_name: "", emergency_3_number: ""};
  AboutMeTablePicture : string = 'CREATE TABLE IF NOT EXISTS aboutmepicture (rowid INTEGER PRIMARY KEY AUTOINCREMENT, picture TEXT)'
  datapicture = { picture: "" };
  
  isEnabled: any;

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
  this.aboutmepicture = [];
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
    await this._db.executeSql(this.AboutMeTablePicture, []);

    this.getData()
    this.getDataPicture();
  }

  ionViewDidLoad() {
        this.getData();
        this.getDataPicture();
      }

      ionViewWillEnter() {
        this.getData();
        this.getDataPicture();
      }

  verifyDatabasePopulated() {
    this._db.executeSql('SELECT * FROM aboutme', <any>[])
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
    this._db.executeSql('SELECT * FROM aboutme ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.aboutme = [];
      for(var i=0; i<res.rows.length; i++) {
        this.aboutme.push({
          rowid:res.rows.item(i).rowid,
          name:res.rows.item(i).name,
          birthday:res.rows.item(i).birthday,
          about:res.rows.item(i).about,      
          email:res.rows.item(i).email,
          phone:res.rows.item(i).phone,
          address:res.rows.item(i).address,
          nhs_number:res.rows.item(i).nhs_number,
          emergency_1_name:res.rows.item(i).emergency_1_name,
          emergency_1_number:res.rows.item(i).emergency_1_number,
          emergency_2_name:res.rows.item(i).emergency_2_name,
          emergency_2_number:res.rows.item(i).emergency_2_number,
          emergency_3_name:res.rows.item(i).emergency_3_name,
          emergency_3_number:res.rows.item(i).emergency_3_number

        })
      }
    })
        .catch(e => alert('get data error' + JSON.stringify(e)));
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
          console.log(this.aboutmepicture[0].picture);
          this.myProfileImage=this.aboutmepicture[res.rows.length-1].picture;
        })
       
      
            // .catch(e => alert('get data error' + e));
          }

  public saveData() {
    this._db.executeSql('INSERT INTO aboutme VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)', [this.data.name, this.data.birthday, this.data.about, this.data.email,
       this.data.phone, this.data.address, this.data.nhs_number, this.data.emergency_1_name, this.data.emergency_1_number, this.data.emergency_2_name, this.data.emergency_2_number, this.data.emergency_3_name, this.data.emergency_3_number ])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }

    public saveDataPicture() {
      this._db.executeSql('INSERT INTO aboutmepicture VALUES(NULL, ?)', [this.datapicture.picture])
      .then(res => {
          this.getDataPicture();
        })
        .catch(e => alert("save data error" + e.message));
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
              this.datapicture.picture = this.myProfileImage.toString(); 
              this.saveDataPicture();
              console.log(this.myProfileImage)
            })

          }
        },
        {
          text:"Gallery",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((ImageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + ImageData;
              this.datapicture.picture = this.myProfileImage.toString(); 
              this.saveDataPicture();
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
