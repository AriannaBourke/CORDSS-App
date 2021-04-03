import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  public medicines : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  MedicinesTable : string = 'CREATE TABLE IF NOT EXISTS medicine (rowid INTEGER PRIMARY KEY AUTOINCREMENT, medicinename TEXT, instructions TEXT, sideeffects TEXT, notes TEXT, activeflag TEXT)';
  data = {medicinename: "", instructions: "", sideeffects: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController,
              public _plat: Platform,
              public _sql: SQLite,
            )
            {
              this.rowid=navParams.get('rowid');
              this.medicines = [];
              this._plat
              .ready()
              .then(() =>

                {
                  this._createDatabase();
                })
                .catch(e => alert('create database error' + e));
              }

              public _createDatabase()
              {
                this._sql.create({
                  name: "database.db",
                  location: 'default'
                })
                .then((db: SQLiteObject) =>
                {
                  this._db = db;
                  this._createDatabaseTables();
                })
                .catch(e => alert('create tables error' + e));
              }

              async _createDatabaseTables() {
                await this._db.executeSql(this.MedicinesTable, []);
                this.getData(this.rowid);
              }


              public getData(rowid) {
                this._db.executeSql('SELECT * FROM medicine WHERE rowid=?', [rowid])
                .then(res => {
                  this.medicines = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.medicines.push({
                      rowid:res.rows.item(i).rowid,
                      medicinename:res.rows.item(i).medicinename,
                      instructions:res.rows.item(i).instructions,
                      sideeffects:res.rows.item(i).sideeffects,
                      notes:res.rows.item(i).notes,
                      activeflag:res.rows.item(i).activeflag
                    })
                  }
                })
                    .catch(e => alert('get data error' + e));
                  }


              async closeModal() {
                await this.modalController.dismiss();
              }


              async update(rowid) {
                const alert = await this._alertController.create({
                  header: "Update this entry?",
                  message: "Would you like to update this entry in your medicines?",
                  buttons: [
                    {
                      text:"Cancel"
                    },
                    {
                      text:"Save",
                      handler: ()=> {
                        this.updateSQL(rowid);

                      }
                    }
                  ]
                });
                await alert.present()
              }

              async updateSQL(rowid) {
                this._db.executeSql('UPDATE medicine SET medicinename=?, instructions=?, sideeffects=?, notes=? WHERE rowid=?',[this.data.medicinename, this.data.instructions, this.data.sideeffects, this.data.notes, rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('update error' + e));

            }

            async finishMedicine(rowid) {
              const alert = await this._alertController.create({
                header: "Have you finished taking this medicine?",
                message: "Would you like to move this medicine into your past medicines page?",
                buttons: [
                  {
                    text:"No"
                  },
                  {
                    text:"Yes",
                    handler: ()=> {
                     console.log("Medicine put into past")
                    }
                  }
                ]
              });

              await alert.present();

            }

}
