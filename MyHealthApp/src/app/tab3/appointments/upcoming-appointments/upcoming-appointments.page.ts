//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17
// Date(), toISOString():
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import { AddEntryPage } from './add-entry/add-entry.page';
import { EditEntryPage } from './edit-entry/edit-entry.page';
import { ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.page.html',
  styleUrls: ['./upcoming-appointments.page.scss'],
})
export class UpcomingAppointmentsPage {
  myProfileImage: string;
  nameID: string;
  public aboutme: Array<any> = [];
  public aboutmepicture: Array<any> = [];
  public appointments: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  AppointmentsTable: string =
    'CREATE TABLE IF NOT EXISTS appointments (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT)';
  data = { date: '', doctor: '', place: '', description: '', questions: '' };
  now = new Date();
  today = this.now.toISOString();
  isEnabled: any;

  constructor(
    public modalController: ModalController,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.appointments = [];
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
    await this._db.executeSql(this.AppointmentsTable, []);
    this.getData();
    this.getData1();
    this.getDataPicture();
  }

  ionViewDidLoad() {
    this.getData();
    this.getData1();
    this.getDataPicture();
  }

  ionViewWillEnter() {
    this.getData();
    this.getData1();
    this.getDataPicture();
  }

  public getData() {
    this.verifyDatabasePopulated();
    this._db
      .executeSql(
        'SELECT * FROM appointments WHERE date > ? ORDER BY date DESC',
        [this.today]
      )
      .then((res) => {
        this.appointments = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.appointments.push({
            rowid: res.rows.item(i).rowid,
            date: res.rows.item(i).date,
            doctor: res.rows.item(i).doctor,
            place: res.rows.item(i).place,
            description: res.rows.item(i).description,
            questions: res.rows.item(i).questions,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  verifyDatabasePopulated() {
    this._db
      .executeSql('SELECT * FROM appointments WHERE date > ?', [this.today])
      .then((res) => {
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
      .executeSql('INSERT INTO appointments VALUES(NULL,?,?,?,?,?)', [
        this.data.date,
        this.data.doctor,
        this.data.place,
        this.data.description,
        this.data.questions,
      ])
      .then((res) => {
        this.getData();
      })
      .catch((e) => alert('save data error' + e));
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM appointments WHERE rowid=?', [rowid])
      .then((res) => {
        this.getData();
      })
      .catch((e) => alert('delete data error' + e));
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry from your appointments?',
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
          console.log(this.aboutmepicture[0].picture);
          this.myProfileImage = this.aboutmepicture[
            res.rows.length - 1
          ].picture;
        }
      })

      .catch((e) => alert('get data error' + e));
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
      .catch((e) => alert('get data error' + e.message));
  }
}
