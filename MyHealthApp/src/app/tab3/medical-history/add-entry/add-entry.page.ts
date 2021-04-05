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
  public medicalhistory : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  data: any;
  isSubmitted = false;
  MedicalHistoryTable : string = 'CREATE TABLE IF NOT EXISTS medicalhistory (rowid INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT)'
 
  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite
            ) 
{ 
  this.data = {diagnosis: "", diagnosis_details: "", diagnosis_date: "", notes: ""};           
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
        this.closeModal()
      })
      .catch(e => alert("save data error" + e));
    }
      
    async submitData(myForm: NgForm) {
      this.isSubmitted = true;
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

    noSubmit(e) {
      e.preventDefault();
    }
    
  async closeModal() {
    await this.modalController.dismiss();
    this.getData();
  }
}