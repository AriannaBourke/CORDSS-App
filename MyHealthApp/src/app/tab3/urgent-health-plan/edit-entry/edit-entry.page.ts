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
  public urgentplan: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  UrgentPlanTable: string =
    'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone TEXT, notes TEXT)';
  data = { type: '', instructions: '', phone: '', notes: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
    this.urgentplan = [];
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
    await this._db.executeSql(this.UrgentPlanTable, []);
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM urgentplan WHERE rowid=?', [rowid])
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
      .catch((e) => alert('get data error' + e));
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async update(rowid) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Update this entry?',
      message:
        'Would you like to update this entry in your urgent health plan?',
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
    if (this.data.type != '') {
      this._db
        .executeSql('UPDATE urgentplan SET type=? WHERE rowid=?', [
          this.data.type,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
        .catch((e) => alert('update error' + e));
    }
    if (this.data.instructions != '') {
      this._db
        .executeSql('UPDATE urgentplan SET instructions=? WHERE rowid=?', [
          this.data.instructions,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.phone != '') {
      this._db
        .executeSql('UPDATE urgentplan SET phone=? WHERE rowid=?', [
          this.data.phone,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.notes != '') {
      this._db
        .executeSql('UPDATE urgentplan SET notes=? WHERE rowid=?', [
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
