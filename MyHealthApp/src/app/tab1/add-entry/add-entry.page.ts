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
  public aboutme: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  data: any;
  isSubmitted = false;

  AboutMeTable: string =
    'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone TEXT, address TEXT, nhs_number TEXT, emergency_1_name TEXT, emergency_1_number TEXT, emergency_2_name TEXT, emergency_2_number TEXT, emergency_3_name TEXT, emergency_3_number TEXT)';

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.data = {
      name: '',
      birthday: '',
      about: '',
      email: '',
      phone: '',
      address: '',
      nhs_number: '',
      emergency_1_name: '',
      emergency_1_number: '',
      emergency_2_name: '',
      emergency_2_number: '',
      emergency_3_name: '',
      emergency_3_number: '',
    };

    this.aboutme = [];
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
    await this._db.executeSql(this.AboutMeTable, []);
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
      .executeSql('SELECT * FROM aboutme', <any>[])
      .then((res) => {
        this.aboutme = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.aboutme.push({
            rowid: res.rows.item(i).rowid,
            name: res.rows.item(i).name,
            birthday: res.rows.item(i).birthday,
            about: res.rows.item(i).about,
            email: res.rows.item(i).email,
            phone: res.rows.item(i).phone,
            address: res.rows.item(i).address,
            nhs_number: res.rows.item(i).nhs_number,
            emergency_1_name: res.rows.item(i).emergency_1_name,
            emergency_1_number: res.rows.item(i).emergency_1_number,
            emergency_2_name: res.rows.item(i).emergency_2_name,
            emergency_2_number: res.rows.item(i).emergency_2_number,
            emergency_3_name: res.rows.item(i).emergency_3_name,
            emergency_3_number: res.rows.item(i).emergency_3_number,
          });
        }
      })
  }

  public saveData() {
    this._db
      .executeSql(
        'INSERT INTO aboutme VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          this.data.name,
          this.data.birthday,
          this.data.about,
          this.data.email,
          this.data.phone,
          this.data.address,
          this.data.nhs_number,
          this.data.emergency_1_name,
          this.data.emergency_1_number,
          this.data.emergency_2_name,
          this.data.emergency_2_number,
          this.data.emergency_3_name,
          this.data.emergency_3_number,
        ]
      )
      .then((res) => {
        this.closeModal();
      })
  }

  async submitData(myForm: NgForm) {
    const alert = await this._alertController.create({
      header: 'Save this entry?',
      message: 'Would you like to save this entry into About Me?',
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
