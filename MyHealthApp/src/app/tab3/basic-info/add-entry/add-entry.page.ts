//  This file is adapted from: Database -
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

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  public basicInfo: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  BasicInfoTable: string =
    'CREATE TABLE IF NOT EXISTS basicinfo (rowid INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, blood_pressure TEXT, allergies TEXT, notes TEXT)';
  data = {
    gender: '',
    height: '',
    weight: '',
    blood_pressure: '',
    allergies: '',
    notes: '',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.basicInfo = [];
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
    await this._db.executeSql(this.BasicInfoTable, []);
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
      .executeSql('SELECT * FROM basicinfo ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.basicInfo = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.basicInfo.push({
            rowid: res.rows.item(i).rowid,
            gender: res.rows.item(i).gender,
            height: res.rows.item(i).height,
            weight: res.rows.item(i).weight,
            blood_pressure: res.rows.item(i).blood_pressure,
            allergies: res.rows.item(i).allergies,
            notes: res.rows.item(i).notes,
          });
        }
      })
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO basicinfo VALUES(NULL,?,?,?,?,?,?)', [
        this.data.gender,
        this.data.height,
        this.data.weight,
        this.data.blood_pressure,
        this.data.allergies,
        this.data.notes,
      ])
      .then((res) => {
        this.closeModal();
      })
  }

  async submitData(form) {
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

  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}
