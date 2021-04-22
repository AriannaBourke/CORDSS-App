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

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  public mood: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  MoodTable: string =
    'CREATE TABLE IF NOT EXISTS mood (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT)';
  data = {
    date: '',
    happy: '',
    independent: '',
    tired: '',
    productive: '',
    notes: '',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.mood = [];
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
    await this._db.executeSql(this.MoodTable, []);
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
      .executeSql('SELECT * FROM mood ORDER BY rowid DESC', <any>[])
      .then((res) => {
        this.mood = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.mood.push({
            rowid: res.rows.item(i).rowid,
            date: res.rows.item(i).date,
            happy: res.rows.item(i).happy,
            independent: res.rows.item(i).independent,
            tired: res.rows.item(i).tired,
            productive: res.rows.item(i).productive,
            notes: res.rows.item(i).notes,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO mood VALUES(NULL,?,?,?,?,?,?)', [
        this.data.date,
        this.data.happy,
        this.data.independent,
        this.data.tired,
        this.data.productive,
        this.data.notes,
      ])
      .then((res) => {
        this.closeModal();
      })
      .catch((e) => alert('save data error' + e));
  }

  async submitData(rowid) {
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

  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}
