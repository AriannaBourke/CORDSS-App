//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17

import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";



@Component({
  selector: 'app-medical-notes',
  templateUrl: './medical-notes.page.html',
  styleUrls: ['./medical-notes.page.scss'],
})
export class MedicalNotesPage {
  photos;
  base64Image;
  myProfileImage : string;
  nameID : string;
  public aboutme : Array<any> = [];
  public aboutmepicture: Array<any> = [];
  public mednotes : Array<any> = [];
  public medpictures : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  MedNotesTable : string =  'CREATE TABLE IF NOT EXISTS mednotes (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'
  data = {note_name: "", photo: "", file: "", notes: ""};
  MedPicturesTable : string = 'CREATE TABLE IF NOT EXISTS medpictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)'
  datapicture = {cardid:"", picture: "" };

  isEnabled: any;

    constructor(
                public modalController: ModalController,
                private _alertController: AlertController,
                public _plat: Platform,
                public _sql: SQLite,
                private camera : Camera,
                private alertCtrl: AlertController,
  
              )

{
  this.mednotes = [];
  this.medpictures =[];
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
    await this._db.executeSql(this.MedPicturesTable, []);

    this.getData()
    this.getData1();
    this.getDataPicture();
    this.getDataPictures();
  }

  ionViewDidLoad() {
        this.getData();
        this.getData1();
        this.getDataPicture();
        this.getDataPictures();
      }

      ionViewWillEnter() {
        this.getData();
        this.getData1();
        this.getDataPicture();
        this.getDataPictures();
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
          notes:res.rows.item(i).notes
        })
      }
    })
        .catch(e => alert('get data error' + e));

      }

      public getDataPictures() {
        this.verifyDatabasePopulatedPictures()
        this._db.executeSql('SELECT * FROM medpictures ORDER BY rowid DESC', <any>[])
        .then(res => {
          this.medpictures = [];
          for(var i=0; i<res.rows.length; i++) {
            this.medpictures.push({
              rowid:res.rows.item(i).rowid,
              cardid:res.rows.item(i).cardid,
              picture:res.rows.item(i).picture,
              
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

      verifyDatabasePopulatedPictures() {
        this._db.executeSql('SELECT * FROM medpictures', <any>[])
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
    this._db.executeSql('INSERT INTO mednotes VALUES(NULL,?,?,?)', [this.data.note_name, this.data.photo, this.data.notes])
    .then(res => {
        this.getData();
        this.saveDataPictures();
      })
      .catch(e => alert("save data error" + e));
    }

    public saveDataPictures() {
      for(let i = 0; i<this.photos.length;i++) {
      this._db.executeSql('INSERT INTO medpictures VALUES(NULL,?,?)', [this.mednotes[this.mednotes.length-1].rowid, this.photos[i]])
      .then(res => {
          this.getDataPictures();
        })
        .catch(e => alert("save data error" + e));
      }
    }


  editData(rowid) {
    console.log("added data"), {
      rowid: rowid
    }
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


    
    ngOnInit() {
      this.photos = [];
    }
  
    takePhoto()
    {
      const options : CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
        };
  
        this.camera.getPicture(options)
        .then((ImageData)=> {
            this.base64Image = "data:image/jpeg;base64," + ImageData;
            this.photos.push(this.base64Image);
            this.photos.reverse();
          })
        }
      
    
      deletePhoto(index) {
        const alert = this.alertCtrl.create({
          header: 'Sure you want to delete this photo? There is NO undo!',
          message: '',
          buttons: [
            {
              text: 'No',
              handler: () => {
                console.log('Disagree clicked');
              }
            }, 
            {
              text: 'Yes',
              handler: () => {
                console.log('Agree clicked');
                this.photos.splice(index, 1);
              }
            }
          ]
        }).then(res => {
          res.present();
      });
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
          if (this.aboutmepicture.length>0) {
          console.log(this.aboutmepicture[0].picture);
          this.myProfileImage=this.aboutmepicture[res.rows.length-1].picture;
        }
       
      })


          .catch(e => alert('get data error' + e));
        }

        
        public getData1() {
          this.verifyDatabasePopulated();
          this._db.executeSql('SELECT name FROM aboutme ORDER BY rowid DESC', <any>[])
          .then(res => {
            this.aboutme = [];
            for(var i=0; i<res.rows.length; i++) {
              this.aboutme.push({
                rowid:res.rows.item(i).rowid,
                name:res.rows.item(i).name
      
              })
            }
            if (this.aboutme.length>0) {
            this.nameID=this.aboutme[res.rows.length-1].name;
            }
          })
              .catch(e => alert('get data error' + e.message));
            }
  }
