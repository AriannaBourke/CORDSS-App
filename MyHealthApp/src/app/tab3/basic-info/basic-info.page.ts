import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage {
  public basicinfo : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  BasicInfoTable : string = 'CREATE TABLE IF NOT EXISTS basicinfo (rowid INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, bloodpressure TEXT, allergies TEXT, notes TEXT)'
  data = {gender: "", height: "", weight: "", bloodpressure: "", allergies: "", notes: ""};

  constructor(private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite)
{
  this.basicinfo = [];
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
      this.basicinfo = [];
      for(var i=0; i<res.rows.length; i++) {
        this.basicinfo.push({
          rowid:res.rows.item(i).rowid,
          gender:res.rows.item(i).gender,
          height:res.rows.item(i).height,
          weight:res.rows.item(i).weight,
          bloodpressure:res.rows.item(i).bloodpressure,
          allergies:res.rows.item(i).allergies,
          notes:res.rows.item(i).notes,
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }
    
  public saveData() {
    this._db.executeSql('INSERT INTO basicinfo VALUES(NULL,?,?,?,?,?,?)', [this.data.gender, this.data.height, this.data.weight, this.data.bloodpressure, this.data.allergies, this.data.notes ]) 
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }
      
    
  editData(rowid) {
    console.log("added data"), {
      rowid: rowid
    }
  }
    
  deleteData(rowid) {
      this._db.executeSql('DELETE FROM basicinfo WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your basic info?",
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
}