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
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import { AddEntryPage } from './add-entry/add-entry.page';
import { EditEntryPage } from './edit-entry/edit-entry.page';
import { ViewEntryPage } from './view-entry/view-entry.page';

@Component({
  selector: 'app-urgent-health-plan',
  templateUrl: './urgent-health-plan.page.html',
  styleUrls: ['./urgent-health-plan.page.scss'],
})
export class UrgentHealthPlanPage {
  nameID: string;
  myProfileImage: string;
  public aboutme: Array<any> = [];
  public aboutmepicture: Array<any> = [];
  public urgentplan: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  UrgentPlanTable: string =
    'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone TEXT, notes TEXT)';
  data = { type: '', instructions: '', phone: '', notes: '' };
  isEnabled: any;

  constructor(
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite,
    public modalController: ModalController
  ) {
    this.urgentplan = [];
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
    await this._db.executeSql(this.UrgentPlanTable, []);
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
      .executeSql('SELECT * FROM urgentplan ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.urgentplan = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.urgentplan.push({
            rowid: res.rows.item(i).rowid,
            type: res.rows.item(i).type,
            instructions: res.rows.item(i).instructions,
            phone: res.rows.item(i).phone,
            notes: res.rows.item(i).notes,
          });
        }
      })
  }

  verifyDatabasePopulated() {
    this._db.executeSql('SELECT * FROM urgentplan', <any>[]).then((res) => {
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
      .executeSql('INSERT INTO urgentplan VALUES(NULL,?,?,?,?)', [
        this.data.type,
        this.data.instructions,
        this.data.phone,
        this.data.notes,
      ])
      .then((res) => {
        this.getData();
      })
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM urgentplan WHERE rowid=?', [rowid])
      .then((res) => {
        this.getData();
      })
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message:
        'Would you like to delete this entry from your urgent health plan?',
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
    modal.onDidDismiss().then(() => {
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
