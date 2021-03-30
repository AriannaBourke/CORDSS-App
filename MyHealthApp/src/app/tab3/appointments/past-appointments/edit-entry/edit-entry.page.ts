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
  public appointments : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  AppointmentsTable : string = 'CREATE TABLE IF NOT EXISTS appointments (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT)'
  data = {date: "", doctor: "", place: "", description: "", questions: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 
            {
              this.rowid=navParams.get('rowid');        
              this.appointments = [];
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
                await this._db.executeSql(this.AppointmentsTable, []);
                this.getData(this.rowid);
              }

                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM appointments WHERE rowid=?', [rowid])
                .then(res => {
                  this.appointments = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.appointments.push({
                      rowid:res.rows.item(i).rowid,
                      date:res.rows.item(i).date,
                      doctor:res.rows.item(i).doctor,
                      place:res.rows.item(i).place,
                      description:res.rows.item(i).description,
                      questions:res.rows.item(i).questions,
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
                  message: "Would you like to update this entry in your appointments?",
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
                this._db.executeSql('UPDATE appointments SET date=?, doctor=?, place=?, description=?, questions=? WHERE rowid=?', [this.data.date, this.data.doctor, this.data.place, this.data.description, this.data.questions, rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('update error' + e));
              
            }
          
}
