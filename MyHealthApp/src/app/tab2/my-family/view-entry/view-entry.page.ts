//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { EditEntryPage } from '..//edit-entry/edit-entry.page';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  public myfamily: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  rowid: any;
  MyFamilyTable: string =
    'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone TEXT)';
  data = { name: '', birthday: '', relation: '', email: '', phone: '' };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _alertController: AlertController,
    public _plat: Platform,
    public _sql: SQLite,
    private callNumber: CallNumber
  ) {
    this.rowid = navParams.get('rowid');
    this.myfamily = [];
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
    await this._db.executeSql(this.MyFamilyTable, []);
    this.getData(this.rowid);
  }

  public getData(rowid) {
    this._db
      .executeSql('SELECT * FROM myfamily WHERE rowid=?', [rowid])
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
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM myfamily WHERE rowid=?', [rowid])
      .then((res) => {
        this.closeModal();
      })
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry?',
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
  }

              async editModal(rowid) {
                const modal = await this.modalController.create({
                  component: EditEntryPage,
                  componentProps: { rowid : rowid}
                });
                modal.onDidDismiss().then(()=>{
                  this.getData(rowid);
                });
                return await modal.present();
              }


              call(){
                this.callNumber.callNumber(this.myfamily[0].phone, true)

              }

            }
