import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.page.html',
  styleUrls: ['./medical-history.page.scss'],
})

export class MedicalHistoryPage {
  public medicalhistory : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  MedicalHistoryTable : string = 'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)'
  data = {diagnosis: "", diagnosis_details: "", diagnosis_date: "", notes: ""};

  constructor(private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite)
{
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
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
  public getData() {
    this._db.executeSql('SELECT * FROM medicalhistory ORDER BY rowid DESC', <any>[])
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
    
  public saveData() {
    this._db.executeSql('INSERT INTO medicalhistory VALUES(NULL,?,?,?,?)', [this.data.diagnosis, this.data.diagnosis_details, this.data.diagnosis_date, this.data.notes])
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
      this._db.executeSql('DELETE FROM medicalhistory WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your medical history?",
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