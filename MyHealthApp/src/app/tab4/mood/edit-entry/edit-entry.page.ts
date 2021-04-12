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
  public mood : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  MoodTable : string = 'CREATE TABLE IF NOT EXISTS mood (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT)'
  data = {date: "", happy: "", independent: "", tired: "", productive: "", notes: ""};


  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 
            {
              this.rowid=navParams.get('rowid');        
              this.mood = [];
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
                await this._db.executeSql(this.MoodTable, []);
                this.getData(this.rowid);
              }

                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM mood WHERE rowid=?', [rowid])
                .then(res => {
                  this.mood = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.mood.push({
                      rowid:res.rows.item(i).rowid,
                      date:res.rows.item(i).date,
                      happy:res.rows.item(i).happy,
                      independent:res.rows.item(i).independent,
                      tired:res.rows.item(i).tired,
                      productive:res.rows.item(i).productive,
                      notes:res.rows.item(i).notes
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
                  message: "Would you like to update this entry?",
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
              if(this.data.date != "") {
                this._db.executeSql('UPDATE mood SET date=? WHERE rowid=?',[this.data.date, rowid])
                .then(res => {
                  this.closeModal();
                })
              .catch(e => alert('update error' + e));
              }
              if(this.data.happy != ""){
                this._db.executeSql('UPDATE mood SET happy=? WHERE rowid=?', [this.data.happy, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.independent != ""){
                this._db.executeSql('UPDATE mood SET independent=? WHERE rowid=?', [this.data.independent, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.tired != ""){
                this._db.executeSql('UPDATE mood SET tired=? WHERE rowid=?', [this.data.tired, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.productive != ""){
                this._db.executeSql('UPDATE mood SET productive=? WHERE rowid=?', [this.data.productive, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.notes != ""){
                this._db.executeSql('UPDATE mood SET notes=? WHERE rowid=?', [this.data.notes, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              this.closeModal();
          }

}
