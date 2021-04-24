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
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  public appointments: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;
  isSubmitted = false;
  rowid: any;
  AppointmentsTable: string =
    'CREATE TABLE IF NOT EXISTS appointments (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT)';
  data = { date: '', doctor: '', place: '', description: '', questions: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite
  ) {
    this.rowid = navParams.get('rowid');
    this.appointments = [];
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
    await this._db.executeSql(this.AppointmentsTable, []);
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM appointments WHERE rowid=?', [rowid])
      .then((res) => {
        this.appointments = [];
        for (var i = 0; i < res.rows.length; i++) {
          this.appointments.push({
            rowid: res.rows.item(i).rowid,
            date: res.rows.item(i).date,
            doctor: res.rows.item(i).doctor,
            place: res.rows.item(i).place,
            description: res.rows.item(i).description,
            questions: res.rows.item(i).questions,
          });
        }
      })
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async update(rowid) {
    this.isSubmitted = true;
    const alert = await this._alertController.create({
      header: 'Update this entry?',
      message:
        'Would you like to update this entry in your appointments? <br/><br/>Note: if the date is in the past, the appointment will be placed in your past appointments!',
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
    if (this.data.date != '') {
      this._db
        .executeSql('UPDATE appointments SET date=? WHERE rowid=?', [
          this.data.date,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        })
    }
    if (this.data.doctor != '') {
      this._db
        .executeSql('UPDATE appointments SET doctor=? WHERE rowid=?', [
          this.data.doctor,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.place != '') {
      this._db
        .executeSql('UPDATE appointments SET place=? WHERE rowid=?', [
          this.data.place,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.description != '') {
      this._db
        .executeSql('UPDATE appointments SET description=? WHERE rowid=?', [
          this.data.description,
          rowid,
        ])
        .then((res) => {
          this.closeModal();
        });
    }
    if (this.data.questions != '') {
      this._db
        .executeSql('UPDATE appointments SET questions=? WHERE rowid=?', [
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
