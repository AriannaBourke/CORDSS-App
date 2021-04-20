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
  public myfamily: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  data: any;
  isSubmitted = false;
  MyFamilyTable: string =
    'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone INT)';

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.data = { name: '', birthday: '', relation: '', email: '', phone: '' };
    this.myfamily = [];
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
    await this._db.executeSql(this.MyFamilyTable, []);
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
      .executeSql('SELECT * FROM myfamily', <any>[])
      .then((res) => {
        this.myfamily = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.myfamily.push({
            rowid: res.rows.item(i).rowid,
            name: res.rows.item(i).name,
            birthday: res.rows.item(i).birthday,
            relation: res.rows.item(i).relation,
            email: res.rows.item(i).email,
            phone: res.rows.item(i).phone,
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  public saveData() {
    this._db
      .executeSql('INSERT INTO myfamily VALUES(NULL,?,?,?,?,?)', [
        this.data.name,
        this.data.birthday,
        this.data.relation,
        this.data.email,
        this.data.phone,
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

  noSubmit(e) {
    e.preventDefault();
  }

  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}
