import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {EditEntryPage } from '..//edit-entry/edit-entry.page';


@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  public urgentplan : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  UrgentPlanTable : string = 'CREATE TABLE IF NOT EXISTS urgentplan (rowid INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, instructions TEXT, phone INT, notes TEXT)'
  data = {type: "", instructions: "", phone: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite
            ) 
            {
              this.rowid=navParams.get('rowid')
              this.urgentplan = [];
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
                await this._db.executeSql(this.UrgentPlanTable, []);
                this.getData(this.rowid);
              }
                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM urgentplan WHERE rowid=?', [rowid])
                .then(res => {
                  this.urgentplan = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.urgentplan.push({
                      rowid:res.rows.item(i).rowid,
                      type:res.rows.item(i).type,
                      instructions:res.rows.item(i).instructions,
                      phone:res.rows.item(i).phone,
                      notes:res.rows.item(i).notes
                    })
                  }
                })
                    .catch(e => alert('get data error' + e));
                  }
                 
            
              async closeModal() {
                await this.modalController.dismiss();
              }

              deleteData(rowid) {
                this._db.executeSql('DELETE FROM urgentplan WHERE rowid=?', [rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('delete data error' + e));
              }
          
              async removeData(rowid) {
                const alert = await this._alertController.create({
                  header: "Delete this entry?",
                  message: "Would you like to delete this entry from your urgent health plan?",
                  buttons: [
                    {
                      text:"Cancel"
                    },
                    {
                      text:"Delete",
                      handler: ()=> {
                        this.deleteData(rowid);
                      }
                    }
                  ]
                });
            
                await alert.present();
            
              }

              async editModal(rowid) {
                const modal = await this.modalController.create({
                  component: EditEntryPage,
                  componentProps: { 'rowid': rowid}
                });
                modal.onDidDismiss().then(()=>{
                  this.getData(rowid);
                });
                return await modal.present();
              }
              
            }
