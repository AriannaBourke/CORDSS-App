//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

import { Component, OnInit } from '@angular/core';
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
  public procedures: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  ProceduresTable: string =
    'CREATE TABLE IF NOT EXISTS procedures(rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, type TEXT, description TEXT, questions TEXT)';
  data = {
    date: '',
    doctor: '',
    place: '',
    type: '',
    description: '',
    questions: '',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
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
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM procedures WHERE rowid=?', [rowid])
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

  async closeModal() {
    await this.modalController.dismiss();
  }

  async update(rowid) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Update this entry?',
      message:
        'Would you like to update this entry in your procedures? <br/><br/>Note: if the date is in the past, the procedure will be placed in your past procedures!',
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
    if (this.data.date != '') {
      this._db
        .executeSql('UPDATE procedures SET date=? WHERE rowid=?', [
          this.data.date,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
        .catch((e) => alert('update error' + e));
    }
    if (this.data.doctor != '') {
      this._db
        .executeSql('UPDATE procedures SET doctor=? WHERE rowid=?', [
          this.data.doctor,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.place != '') {
      this._db
        .executeSql('UPDATE procedures SET place=? WHERE rowid=?', [
          this.data.place,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.description != '') {
      this._db
        .executeSql('UPDATE procedures SET description=? WHERE rowid=?', [
          this.data.description,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.questions != '') {
      this._db
        .executeSql('UPDATE procedures SET questions=? WHERE rowid=?', [
          this.data.questions,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    this.closeModal();
  }
}
