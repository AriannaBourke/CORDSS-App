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
  public mednotes : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  data: any;
  isSubmitted = false;

  MedNotesTable : string =  'CREATE TABLE IF NOT EXISTS mednotes (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'


  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 

{  
  this.data = {note_name: "", photo: "", file: "", notes: ""};          
  this.mednotes = [];
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
    await this._db.executeSql(this.MedNotesTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
      public getData() {
        this._db.executeSql('SELECT * FROM mednotes ORDER BY rowid DESC', <any>[])
        .then(res => {
          this.mednotes = [];
          for(var i=0; i<res.rows.length; i++) {
            this.mednotes.push({
              rowid:res.rows.item(i).rowid,
              note_name:res.rows.item(i).note_name,
              photo:res.rows.item(i).photo,
              file:res.rows.item(i).file,
              notes:res.rows.item(i).notes
            })
          }
        })
            .catch(e => alert('get data error' + e));
          }
    
  public saveData() {
    this._db.executeSql('INSERT INTO mednotes VALUES(NULL,?,?,?,?)', [this.data.note_name, this.data.photo, this.data.file, this.data.notes])
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