import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  public basicInfo : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  BasicInfoTable : string = 'CREATE TABLE IF NOT EXISTS basicinfo (rowid INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, blood_pressure TEXT, allergies TEXT, notes TEXT)'
  data = {gender: "", height: "", weight: "", blood_pressure: "", allergies: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController,
              public _plat: Platform,
              public _sql: SQLite
            )
{
  this.basicInfo = [];
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
    await this._db.executeSql(this.BasicInfoTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }

      ionViewWillEnter() {
        this.getData();
      }

      public getData() {
        this._db.executeSql('SELECT * FROM basicinfo ORDER BY rowid DESC', <any>[])
        .then(res => {
          this.basicInfo = [];
          for(var i=0; i<res.rows.length; i++) {
            this.basicInfo.push({
              rowid:res.rows.item(i).rowid,
              gender:res.rows.item(i).gender,
              height:res.rows.item(i).height,
              weight:res.rows.item(i).weight,
              blood_pressure:res.rows.item(i).blood_pressure,
              allergies:res.rows.item(i).allergies,
              notes:res.rows.item(i).notes,
                })
          }
        })
            .catch(e => alert('get data error' + e));
          }

  public saveData() {
    this._db.executeSql('INSERT INTO basicinfo VALUES(NULL,?,?,?,?,?,?)', [this.data.gender, this.data.height, this.data.weight, this.data.blood_pressure, this.data.allergies, this.data.notes ])
    .then(res => {
        this.closeModal()
      })
      .catch(e => alert("save data error" + e));
    }

    async submitData(form) {
      const alert = await this._alertController.create({
        header: "Save this entry?",
        message: "Would you like to save this entry?",
        buttons: [
          {
            text:"Cancel"
          },
          {
            text:"save",
            handler: ()=> {
              this.saveData();

            }
          }
        ]
      });

      await alert.present();
    }


  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}
