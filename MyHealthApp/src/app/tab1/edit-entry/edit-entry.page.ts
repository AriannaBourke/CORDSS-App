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
  public aboutme : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  AboutMeTable : string = 'CREATE TABLE IF NOT EXISTS aboutme (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, about TEXT, email TEXT, phone TEXT, address TEXT, nhs_number TEXT, emergency_1_name, emergency_1_number, emergency_2_name, emergency_2_number, emergency_3_name, emergency_3_number)'
  data = {name: "", birthday: "", about: "", email: "", phone: "", address:"", nhs_number: "", emergency_1_name:"", emergency_1_number:"", emergency_2_name:"", emergency_2_number:"", emergency_3_name:"", emergency_3_number:""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController,
              public _plat: Platform,
              public _sql: SQLite,
            )
            {
              this.rowid=navParams.get('rowid');
              this.aboutme = [];
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
                await this._db.executeSql(this.AboutMeTable, []);
                this.getData(this.rowid);
              }


              public getData(rowid) {
                this._db.executeSql('SELECT * FROM aboutme WHERE rowid=?', [rowid])
                .then(res => {
                  this.aboutme = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.aboutme.push({
                      rowid:res.rows.item(i).rowid,
                      name:res.rows.item(i).name,
                      birthday:res.rows.item(i).birthday,
                      about:res.rows.item(i).about,
                      email:res.rows.item(i).email,
                      phone:res.rows.item(i).phone,
                      address:res.rows.item(i).address,
                      nhs_number:res.rows.item(i).nhs_number,
                      emergency_1_name:res.rows.item(i).emergency_1_name,
                      emergency_1_number:res.rows.item(i).emergency_1_number,
                      emergency_2_name:res.rows.item(i).emergency_2_name,
                      emergency_2_number:res.rows.item(i).emergency_2_number,
                      emergency_3_name:res.rows.item(i).emergency_3_name,
                      emergency_3_number:res.rows.item(i).emergency_3_number
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
                  header: "Update About Me?",
                  message: "Would you like to update your About Me page?",
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
                this._db.executeSql('UPDATE aboutme SET name=?, birthday=?, about=?, email=?, phone=?, address=?, nhs_number=?, emergency_1_name=?, emergency_1_number=?, emergency_2_name=?, emergency_2_number=?, emergency_3_name=?, emergency_3_number=? WHERE rowid=?', [this.data.name, this.data.birthday, this.data.about, this.data.email, this.data.phone,  this.data.nhs_number,  this.data.emergency_1_name, this.data.emergency_1_number, this.data.emergency_2_name, this.data.emergency_2_number, this.data.emergency_3_name, this.data.emergency_3_number, rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('update error' + e));

            }

}
