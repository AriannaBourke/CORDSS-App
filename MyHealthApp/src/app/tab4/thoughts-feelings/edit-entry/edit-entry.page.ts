import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  public thoughtsfeelings : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  ThoughtsFeelingsTable : string =  'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, file TEXT, notes TEXT)'
  data = {note_name: "", photo: "", file: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 
            {
              this.rowid=navParams.get('rowid');        
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
                this.getData(this.rowid);
              }

              public getData(rowid) {
                this._db.executeSql('SELECT * FROM thoughtsfeelings WHERE rowid=?', [rowid])
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
                 
            
              async closeModal() {
                await this.modalController.dismiss();
              }


              async update(rowid) {
                this.isSubmitted = true;
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
              if(this.data.note_name != "") {
                this._db.executeSql('UPDATE thoughtsfeelings SET note_name=? WHERE rowid=?',[this.data.note_name, rowid])
                .then(res => {
                  this.closeModal();
                })
              .catch(e => alert('update error' + e));
              }
              if(this.data.photo != ""){
                this._db.executeSql('UPDATE thoughtsfeelings SET photo=? WHERE rowid=?', [this.data.photo, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.file != ""){
                this._db.executeSql('UPDATE thoughtsfeelings SET file=? WHERE rowid=?', [this.data.file, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.notes != ""){
                this._db.executeSql('UPDATE thoughtsfeelings SET notes=? WHERE rowid=?', [this.data.notes, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              this.closeModal();
          }
          
}
