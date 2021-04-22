//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

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
  public medicines: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  MedicinesTable: string =
    'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)';
  data = { medicinename: '', instructions: '', sideeffects: '', notes: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
    this.medicines = [];
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
    await this._db.executeSql(this.MedicinesTable, []);
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM medicine WHERE rowid=?', [rowid])
      .then((res) => {
        this.medicines = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.medicines.push({
            rowid: res.rows.item(i).rowid,
            medicinename: res.rows.item(i).medicinename,
            instructions: res.rows.item(i).instructions,
            sideeffects: res.rows.item(i).sideeffects,
            notes: res.rows.item(i).notes,
            activeflag: res.rows.item(i).activeflag,
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
      message: 'Would you like to update this entry in your medicines?',
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

  noSubmit(e) {
    e.preventDefault();
  }

  async updateSQL(rowid) {
    if (this.data.medicinename != '') {
      this._db
        .executeSql('UPDATE medicine SET medicinename=? WHERE rowid=?', [
          this.data.medicinename,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
        .catch((e) => alert('update error' + e));
    }
    if (this.data.instructions != '') {
      this._db
        .executeSql('UPDATE medicine SET instructions=? WHERE rowid=?', [
          this.data.instructions,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.sideeffects != '') {
      this._db
        .executeSql('UPDATE medicine SET sideeffects=? WHERE rowid=?', [
          this.data.sideeffects,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.notes != '') {
      this._db
        .executeSql('UPDATE medicine SET notes=? WHERE rowid=?', [
          this.data.notes,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    this.closeModal();
  }
}
