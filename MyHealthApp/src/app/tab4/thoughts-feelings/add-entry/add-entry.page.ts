import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  public thoughtsfeelings : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  ThoughtsFeelingsTable : string =  'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'
  data = {note_name: "", photo: "", file: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite
            ) 
{            
  this.thoughtsfeelings = [];
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
    await this._db.executeSql(this.ThoughtsFeelingsTable, []);
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }
    
      ionViewWillEnter() {
        this.getData();
      }
    
      public getData() {
        this._db.executeSql('SELECT * FROM thoughtsfeelings ORDER BY rowid DESC', <any>[])
        .then(res => {
          this.thoughtsfeelings = [];
          for(var i=0; i<res.rows.length; i++) {
            this.thoughtsfeelings.push({
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
    this._db.executeSql('INSERT INTO thoughtsfeelings VALUES(NULL,?,?,?,?)', [this.data.note_name, this.data.photo, this.data.file, this.data.notes])
    .then(res => {
        this.closeModal()
      })
      .catch(e => alert("save data error" + e));
    }
      
    async submitData(rowid) {
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
