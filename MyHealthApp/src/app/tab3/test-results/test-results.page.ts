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
import { AddEntryPage } from './add-entry/add-entry.page';
import { EditEntryPage } from './edit-entry/edit-entry.page';
import { ViewEntryPage } from './view-entry/view-entry.page';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.page.html',
  styleUrls: ['./test-results.page.scss'],
})
export class TestResultsPage {
  photos;
  base64Image;
  myProfileImage: string;
  nameID: string;
  public aboutme: Array<any> = [];
  public aboutmepicture: Array<any> = [];
  public testresults: Array<any> = [];
  public pictures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  TestResultsTable: string =
    'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, notes TEXT)';
  data = { date: '', type: '', notes: '' };
  PicturesTable: string =
    'CREATE TABLE IF NOT EXISTS pictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)';
  datapicture = { cardid: '', picture: '' };
  isEnabled: any;

  constructor(
    private _alertController: AlertController,
    public modalController: ModalController,
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
    this._db.executeSql('SELECT * FROM pictures ORDER BY rowid DESC', <any>[])
    .then(res => {
      this.pictures = [];
      for(var i=0; i<res.rows.length; i++) {
        this.pictures.push({
          rowid:res.rows.item(i).rowid,
          cardid:res.rows.item(i).cardid,
          picture:res.rows.item(i).picture,

        })
      }
    })
      }

  verifyDatabasePopulated() {
    this._db.executeSql('SELECT * FROM testresults', <any>[]).then((res) => {
      if (res.rows.length == 0) {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    });
  }

  noContent() {
    return !this.isEnabled;
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO testresults VALUES(NULL,?,?,?)', [
        this.data.date,
        this.data.type,
        this.data.notes,
      ])
      .then((res) => {
        this.getData();
        this.saveDataPictures();
      })
  }

  public saveDataPictures() {
    for (let i = 0; i < this.photos.length; i++) {
      this._db
        .executeSql('INSERT INTO pictures VALUES(NULL,?,?)', [
          this.testresults[this.testresults.length - 1].rowid,
          this.photos[i],
        ])
        .then((res) => {
          this.getDataPictures();
        })
    }
  }


  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM testresults WHERE rowid=?', [rowid])
      .then((res) => {
        this.getData();
      })
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry from your test results?',
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

  async openModal() {
    const modal = await this.modalController.create({
      component: AddEntryPage,
      componentProps: {},
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.getData();
      this.getDataPictures();
    });
    return await modal.present();
  }

  async viewModal(rowid) {
    const modal = await this.modalController.create({
      component: ViewEntryPage,
      componentProps: { rowid: rowid },
    });
    modal.onDidDismiss().then(() => {
      this.getData();
      this.getDataPictures();
    });
    return await modal.present();
  }

  async editModal(rowid) {
    const modal = await this.modalController.create({
      component: EditEntryPage,
      componentProps: { rowid: rowid },
    });
    modal.onDidDismiss().then(() => {
      this.getData();
      this.getDataPictures();
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
            },
          },
          {
            text: 'Yes',
            handler: () => {
              this.photos.splice(index, 1);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  public getDataPicture() {
    this._db
      .executeSql('SELECT * FROM aboutmepicture', <any>[])
      .then((res) => {
        this.aboutmepicture = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.aboutmepicture.push({
            rowid: res.rows.item(i).rowid,
            picture: res.rows.item(i).picture,
          });
        }
        if (this.aboutmepicture.length > 0) {
          this.myProfileImage = this.aboutmepicture[
            res.rows.length - 1
          ].picture;
        }
      })

  }

  public getData1() {
    this.verifyDatabasePopulated();
    this._db
      .executeSql('SELECT name FROM aboutme ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.aboutme = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.aboutme.push({
            rowid: res.rows.item(i).rowid,
            name: res.rows.item(i).name,
          });
        }
        if (this.aboutme.length > 0) {
          this.nameID = this.aboutme[res.rows.length - 1].name;
        }
      })
  }
}
