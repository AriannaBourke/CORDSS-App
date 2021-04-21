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
  public medicalhistory: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  MedicalHistoryTable: string =
    'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)';
  data = {
    diagnosis: '',
    diagnosis_details: '',
    diagnosis_date: '',
    notes: '',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
    this.medicalhistory = [];
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
    await this._db.executeSql(this.MedicalHistoryTable, []);
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM medicalhistory WHERE rowid=?', [rowid])
      .then((res) => {
        this.medicalhistory = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.medicalhistory.push({
            rowid: res.rows.item(i).rowid,
            diagnosis: res.rows.item(i).diagnosis,
            diagnosis_details: res.rows.item(i).diagnosis_details,
            diagnosis_date: res.rows.item(i).diagnosis_date,
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
      message: 'Would you like to update this entry?',
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
    if (this.data.diagnosis != '') {
      this._db
        .executeSql('UPDATE medicalhistory SET date=? WHERE rowid=?', [
          this.data.diagnosis,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
        .catch((e) => alert('update error' + e));
    }
    if (this.data.diagnosis_details != '') {
      this._db
        .executeSql(
          'UPDATE medicalhistory SET diagnosis_details=? WHERE rowid=?',
          [this.data.diagnosis_details, rowid]
        )
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.diagnosis_date != '') {
      this._db
        .executeSql(
          'UPDATE medicalhistory SET diagnosis_date=? WHERE rowid=?',
          [this.data.diagnosis_date, rowid]
        )
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.notes != '') {
      this._db
        .executeSql('UPDATE medicalhistory SET notes=? WHERE rowid=?', [
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
