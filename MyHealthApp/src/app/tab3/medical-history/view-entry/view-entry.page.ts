import { Component, OnInit } from '@angular/core';
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
  public medicalhistory : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  MedicalHistoryTable : string = 'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)'
  data = {diagnosis: "", diagnosis_details: "", diagnosis_date: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite
            ) 
            {
              this.rowid=navParams.get('rowid')
              this.medicalhistory = [];
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
                await this._db.executeSql(this.MedicalHistoryTable, []);
                this.getData(this.rowid);
              }
                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM medicalhistory WHERE rowid=?', [rowid])
                .then(res => {
                  this.medicalhistory = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.medicalhistory.push({
                      rowid:res.rows.item(i).rowid,
                      diagnosis:res.rows.item(i).diagnosis,
                      diagnosis_details:res.rows.item(i).diagnosis_details,
                      diagnosis_date:res.rows.item(i).diagnosis_date,
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
                this._db.executeSql('DELETE FROM medicalhistory WHERE rowid=?', [rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('delete data error' + e));
              }
          
              async removeData(rowid) {
                const alert = await this._alertController.create({
                  header: "Delete this entry?",
                  message: "Would you like to delete this entry?",
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

