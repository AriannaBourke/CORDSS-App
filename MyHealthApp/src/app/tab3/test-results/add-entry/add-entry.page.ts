//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/

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
  public testresults: Array<any> = [];
  public pictures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  TestResultsTable: string =
    'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, notes TEXT)';
  data = { date: '', type: '',  notes: '' };
  PicturesTable: string =
    'CREATE TABLE IF NOT EXISTS pictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)';
  datapicture = { cardid: '', picture: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite,
    private camera: Camera
  ) {
    this.testresults = [];
    this.pictures = [];

    this._plat
      .ready()
      .then(() => {
        this._createDatabase();
      })
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
  }

  async _createDatabaseTables() {
    await this._db.executeSql(this.TestResultsTable, []);
    await this._db.executeSql(this.PicturesTable, []);

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
      .executeSql('SELECT * FROM testresults ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.testresults = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.testresults.push({
            rowid: res.rows.item(i).rowid,
            date: res.rows.item(i).date,
            type: res.rows.item(i).type,
            notes: res.rows.item(i).notes,
          });
        }
      })
  }

  public getDataPictures() {
    this._db
      .executeSql('SELECT * FROM pictures ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.pictures = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.pictures.push({
            rowid: res.rows.item(i).rowid,
            cardid: res.rows.item(i).cardid,
            picture: res.rows.item(i).picture,
          });
        }
      })
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO testresults VALUES(NULL,?,?,?)', [
        this.data.date,
        this.data.type,
        this.data.notes,
      ])
      .then((res) => {
        this.closeModal();
        this.saveDataPictures();
      })
  }

  public saveDataPictures() {
    if (this.testresults.length > 0) {
      this.row = this.testresults[0].rowid + 1;
    } 
    else {
      this.row = 1;
    }

    for (let i = 0; i < this.photos.length; i++) {
      this._db
        .executeSql('INSERT INTO pictures VALUES(NULL,?,?)', [
          this.row,
          this.photos[i],
        ])
        .then((res) => {
          this.getDataPictures();
        })
    }
  }

  async submitData() {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Save this entry?',
      message: 'Would you like to save this entry in your test results?',
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
