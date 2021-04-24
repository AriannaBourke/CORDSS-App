//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  public aboutme: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  rowid: any;
  AboutMeTable: string =
    'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone TEXT, address TEXT, nhs_number TEXT, emergency_1_name TEXT, emergency_1_number TEXT, emergency_2_name TEXT, emergency_2_number TEXT, emergency_3_name TEXT, emergency_3_number TEXT)';
  data = {
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

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
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
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM aboutme WHERE rowid=?', [rowid])
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

  async closeModal() {
    await this.modalController.dismiss();
  }

  async update(rowid) {
    const alert = await this._alertController.create({
      header: 'Update About Me?',
      message: 'Would you like to update your About Me page?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: () => {
            this.updateSQL(rowid);
          },
        },
      ],
    });
    await alert.present();
  }

  async updateSQL(rowid) {
    if (this.data.name != '') {
      this._db
        .executeSql('UPDATE aboutme SET name=? WHERE rowid=?', [
          this.data.name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
    }
    if (this.data.birthday != '') {
      this._db
        .executeSql('UPDATE aboutme SET birthday=? WHERE rowid=?', [
          this.data.birthday,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.about != '') {
      this._db
        .executeSql('UPDATE aboutme SET about=? WHERE rowid=?', [
          this.data.about,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.email != '') {
      this._db
        .executeSql('UPDATE aboutme SET email=? WHERE rowid=?', [
          this.data.email,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.phone != '') {
      this._db
        .executeSql('UPDATE aboutme SET phone=? WHERE rowid=?', [
          this.data.phone,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.address != '') {
      this._db
        .executeSql('UPDATE aboutme SET address=? WHERE rowid=?', [
          this.data.address,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.nhs_number != '') {
      this._db
        .executeSql('UPDATE aboutme SET nhs_number=? WHERE rowid=?', [
          this.data.nhs_number,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_1_name != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_1_name=? WHERE rowid=?', [
          this.data.emergency_1_name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_1_number != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_1_number=? WHERE rowid=?', [
          this.data.emergency_1_number,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_2_name != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_2_name=? WHERE rowid=?', [
          this.data.emergency_2_name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_2_number != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_2_number=? WHERE rowid=?', [
          this.data.emergency_2_number,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_3_name != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_3_name=? WHERE rowid=?', [
          this.data.emergency_3_name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.emergency_3_number != '') {
      this._db
        .executeSql('UPDATE aboutme SET emergency_3_number=? WHERE rowid=?', [
          this.data.emergency_3_number,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    this.closeModal();
  }
}
