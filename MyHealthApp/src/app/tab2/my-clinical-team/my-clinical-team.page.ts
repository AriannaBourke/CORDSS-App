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
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import { AddEntryPage } from './add-entry/add-entry.page';
import { EditEntryPage } from './edit-entry/edit-entry.page';
import { ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-my-clinical-team',
  templateUrl: './my-clinical-team.page.html',
  styleUrls: ['./my-clinical-team.page.scss'],
})
export class MyClinicalTeamPage {
  photos;
  base64Image;
  myProfileImage;
  public clinicalteam: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  ClinicalTeamTable: string =
    'CREATE TABLE IF NOT EXISTS clinicalteam (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, phone INT, photo TEXT)';
  data = {
    name: '',
    role: '',
    clinic_name: '',
    email: '',
    phone: '',
    photo: '',
  };
  isEnabled: any;

  constructor(
    private camera: Camera,
    private alertCtrl: AlertController,
    private _camera: Camera,
    private _alertController: AlertController,
    public modalController: ModalController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.clinicalteam = [];
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
    await this._db.executeSql(this.ClinicalTeamTable, []);
    this.getData();
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  public getData() {
    this.verifyDatabasePopulated();
    this._db
      .executeSql('SELECT * FROM clinicalteam  ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.clinicalteam = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.clinicalteam.push({
            rowid: res.rows.item(i).rowid,
            name: res.rows.item(i).name,
            role: res.rows.item(i).role,
            clinic_name: res.rows.item(i).clinic_name,
            email: res.rows.item(i).email,
            phone: res.rows.item(i).phone,
            photo: res.rows.item(i).photo,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  verifyDatabasePopulated() {
    this._db.executeSql('SELECT * FROM clinicalteam', <any>[]).then((res) => {
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
      .executeSql('INSERT INTO clinicalteam VALUES(NULL,?,?,?,?,?,?)', [
        this.data.name,
        this.data.role,
        this.data.clinic_name,
        this.data.email,
        this.data.phone,
        this.data.photo,
      ])
      .then((res) => {
        this.getData();
      })
      .catch((e) => alert('save data error' + e));
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM clinicalteam WHERE rowid=?', [rowid])
      .then((res) => {
        this.getData();
      })
      .catch((e) => alert('delete data error' + e));
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry from your clinical team?',
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
      sourceType: this._camera.PictureSourceType.CAMERA,
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM,
    };
    const alert = await this._alertController.create({
      header: 'Select Source',
      message: 'Pick a source for the picture of your clinical team member',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this._camera.getPicture(cameraOptions).then((ImageData) => {
              this.myProfileImage = 'data:image/jpeg;base64,' + ImageData;
            });
          },
        },
        {
          text: 'Gallery',
          handler: () => {
            this._camera.getPicture(galleryOptions).then((ImageData) => {
              this.myProfileImage = 'data:image/jpeg;base64,' + ImageData;
            });
          },
        },
      ],
    });

    await alert.present();
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
    const alert = this.alertCtrl
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
}
