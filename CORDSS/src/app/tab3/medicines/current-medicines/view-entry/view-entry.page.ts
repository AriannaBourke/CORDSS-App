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
import { EditEntryPage } from '..//edit-entry/edit-entry.page';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  public medicines: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

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
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM medicine WHERE rowid=?', [rowid])
      .then((res) => {
        this.closeModal();
      })
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry from your medicines?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteData(rowid);
          },
        },
      ],
    });

    await alert.present();
  }

  async editModal(rowid) {
    const modal = await this.modalController.create({
      component: EditEntryPage,
      componentProps: { rowid: rowid },
    });
    modal.onDidDismiss().then(() => {
      this.getData(rowid);
    });
    return await modal.present();
  }
}
