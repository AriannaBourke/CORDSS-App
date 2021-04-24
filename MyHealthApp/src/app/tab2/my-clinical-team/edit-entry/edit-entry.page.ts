//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  myProfileImage;
  public clinicalteam: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  ClinicalTeamTable: string =
    'CREATE TABLE IF NOT EXISTS clinicalteam (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, phone INT)';
  data = {
    name: '',
    role: '',
    clinic_name: '',
    email: '',
    phone: '',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
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
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM clinicalteam WHERE rowid=?', [rowid])
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
          });
        }
      })
      .catch((e) => alert('get data error' + e));
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async update(rowid) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Update this entry?',
      message: 'Would you like to update this entry in your clinical team?',
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
        .executeSql('UPDATE clinicalteam SET name=? WHERE rowid=?', [
          this.data.name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
        .catch((e) => alert('update error' + e));
    }
    if (this.data.role != '') {
      this._db
        .executeSql('UPDATE clinicalteam SET role=? WHERE rowid=?', [
          this.data.role,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.clinic_name != '') {
      this._db
        .executeSql('UPDATE clinicalteam SET clinic_name=? WHERE rowid=?', [
          this.data.clinic_name,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.email != '') {
      this._db
        .executeSql('UPDATE clinicalteam SET email=? WHERE rowid=?', [
          this.data.email,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.phone != '') {
      this._db
        .executeSql('UPDATE clinicalteam SET phone=? WHERE rowid=?', [
          this.data.phone,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
  }
}
