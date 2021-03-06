//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\

import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  myProfileImage;
  public clinicalteam: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  data: any;
  isSubmitted = false;
  ClinicalTeamTable: string =
    'CREATE TABLE IF NOT EXISTS clinicalteam (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, phone INT)';

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.data = {
      name: '',
      role: '',
      clinic_name: '',
      email: '',
      phone: '',
    };
    this.clinicalteam = [];
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
    this._db
      .executeSql('SELECT * FROM clinicalteam', <any>[])
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
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO clinicalteam VALUES(NULL,?,?,?,?,?)', [
        this.data.name,
        this.data.role,
        this.data.clinic_name,
        this.data.email,
        this.data.phone
      ])
      .then((res) => {
        this.closeModal();
      })
  }

  async submitData(myForm: NgForm) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Save this entry?',
      message: 'Would you like to save this entry in your clinical team?',
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
    await this.modalController.dismiss();
    this.getData();
  }
}
