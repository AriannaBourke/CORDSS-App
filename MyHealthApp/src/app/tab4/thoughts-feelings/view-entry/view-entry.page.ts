//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { EditEntryPage } from '..//edit-entry/edit-entry.page';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  photos;
  base64Image;
  myProfileImage;
  public thoughtsfeelings: Array<any> = [];
  public tfpictures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  rowid: any;
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
    private camera: Camera,
  ) {
    this.rowid = navParams.get('rowid');
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

    this.getData(this.rowid);
    this.getDataPictures(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM thoughtsfeelings WHERE rowid=?', [rowid])
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

  public getDataPictures(rowid) {
    this._db
      .executeSql('SELECT * FROM tfpictures WHERE cardid=?', [rowid])
      .then((res) => {
        this.tfpictures = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.tfpictures.push({
            rowid: res.rows.item(i).rowid,
            cardid: res.rows.item(i).cardid,
            picture: res.rows.item(i).picture,
          });
          this.photos[i] = res.rows.item(i).picture;
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM thoughtsfeelings WHERE rowid=?', [rowid])
      .then((res) => {
        this.closeModal();
      })
      .catch((e) => alert('delete data error' + e));
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteData(rowid);
          },
        },
      ],
    });

    await alert.present();
  }

  async editModal(rowid) {
    const modal = await this.modalController.create({
      component: EditEntryPage,
      componentProps: { rowid: rowid },
    });
    modal.onDidDismiss().then(() => {
      this.getData(rowid);
    });
    return await modal.present();
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
