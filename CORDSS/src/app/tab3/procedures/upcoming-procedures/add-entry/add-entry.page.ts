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
  public procedures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  ProceduresTable: string =
    'CREATE TABLE IF NOT EXISTS procedures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)';
  data = {
    date: '',
    doctor: '',
    place: '',
    type: '',
    description: '',
    questions: '',
  };
  now = new Date();
  today = this.now.toISOString();

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.procedures = [];
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
    await this._db.executeSql(this.ProceduresTable, []);
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
      .executeSql(
        'SELECT * FROM procedures WHERE date > ? ORDER BY date DESC',
        [this.today]
      )
      .then((res) => {
        this.procedures = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.procedures.push({
            rowid: res.rows.item(i).rowid,
            date: res.rows.item(i).date,
            doctor: res.rows.item(i).doctor,
            place: res.rows.item(i).place,
            type: res.rows.item(i).type,
            description: res.rows.item(i).description,
            questions: res.rows.item(i).questions,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO procedures VALUES(NULL,?,?,?,?,?,?)', [
        this.data.date,
        this.data.doctor,
        this.data.place,
        this.data.type,
        this.data.description,
        this.data.questions,
      ])
      .then((res) => {
        this.closeModal();
      })
      .catch((e) => alert('save data error' + e));
  }

  async submitData(myForm: NgForm) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Save this entry?',
      message:
        'Would you like to save this entry in your procedures? <br/><br/>Note: if the date is in the past, the procedure will be placed in your past procedures!',
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