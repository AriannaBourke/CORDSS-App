//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NgForm } from '@angular/forms';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  row;
  photos;
  base64Image;
  myProfileImage;
  public thoughtsfeelings: Array<any> = [];
  public tfpictures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  ThoughtsFeelingsTable: string =
    'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, notes TEXT)';
  data = { note_name: '', notes: '' };
  tfPicturesTable: string =
    'CREATE TABLE IF NOT EXISTS tfpictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)';
  datapicture = { cardid: '', picture: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite,
    private camera: Camera
  ) {
    this.thoughtsfeelings = [];
    this.tfpictures = [];

    this._plat
      .ready()
      .then(() => {
        this._createDatabase();
      })
      .catch((e) => alert('create database error' + e));
  }

  public _createDatabase() {
    this._sql
      .create({
        name: 'database.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        this._db = db;
        this._createDatabaseTables();
      })
      .catch((e) => alert('create tables error' + e));
  }

  async _createDatabaseTables() {
    await this._db.executeSql(this.ThoughtsFeelingsTable, []);
    await this._db.executeSql(this.tfPicturesTable, []);

    this.getData();
    this.getDataPictures();
  }

  ionViewDidLoad() {
    this.getData();
    this.getDataPictures();
  }

  ionViewWillEnter() {
    this.getData();
    this.getDataPictures();
  }

  public getData() {
    this._db
      .executeSql('SELECT * FROM thoughtsfeelings ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.thoughtsfeelings = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.thoughtsfeelings.push({
            rowid: res.rows.item(i).rowid,
            note_name: res.rows.item(i).note_name,
            notes: res.rows.item(i).notes,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  public getDataPictures() {
    this._db
      .executeSql('SELECT * FROM tfpictures ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.tfpictures = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.tfpictures.push({
            rowid: res.rows.item(i).rowid,
            cardid: res.rows.item(i).cardid,
            picture: res.rows.item(i).picture,
          });

          console.log('doulefkei');
          console.log(this.tfpictures[0]);
          console.log(this.tfpictures[1]);
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO thoughtsfeelings VALUES(NULL,?,?)', [
        this.data.note_name,
        this.data.notes,
      ])
      .then((res) => {
        this.closeModal();
      })
      .catch((e) => alert('save data error' + e));
  }

    public saveDataPictures() {
      if (this.thoughtsfeelings.length>0){
        this.row = this.thoughtsfeelings[0].rowid+1 ;
      }
      else{
        this.row = 1 ;
      }
      for(let i = 0; i<this.photos.length;i++) {
      this._db.executeSql('INSERT INTO tfpictures VALUES(NULL,?,?)', [this.row, this.photos[i]])
      .then(res => {
          this.getDataPictures();
        })
        .catch((e) => alert('save data error' + e));
    }
  }

  async submitData() {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Save this entry?',
      message: 'Would you like to save this entry?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'save',
          handler: () => {
            this.saveData();
          },
        },
      ],
    });

    await alert.present();
  }

  noSubmit(e) {
    e.preventDefault();
  }

  async closeModal() {
    this.getData();
    await this.modalController.dismiss();
  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    };

    this.camera.getPicture(options).then((ImageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + ImageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    });
  }

  deletePhoto(index) {
    const alert = this._alertController
      .create({
        header: 'Sure you want to delete this photo? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            },
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              this.photos.splice(index, 1);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
