//  This file is adapted from:
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/

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
  public testresults : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  TestResultsTable : string = 'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, photo TEXT, files TEXT, notes TEXT)'
  data = {date: "", type: "", photo: "", files: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 
            {
              this.rowid=navParams.get('rowid');        
              this.testresults = [];
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
                await this._db.executeSql(this.TestResultsTable, []);
                this.getData(this.rowid);
              }

                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM testresults WHERE rowid=?', [rowid])
                .then(res => {
                  this.testresults = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.testresults.push({
                      rowid:res.rows.item(i).rowid,
                      date:res.rows.item(i).date,
                      type:res.rows.item(i).type,
                      photo:res.rows.item(i).photo,
                      files:res.rows.item(i).files,
                      notes:res.rows.item(i).notes,
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
                  message: "Would you like to update this entry in your test results?",
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

              noSubmit(e) {
                e.preventDefault();
              }


            async updateSQL(rowid) {
              if(this.data.date != "") {
                this._db.executeSql('UPDATE testresults SET date=? WHERE rowid=?',[this.data.date, rowid])
                .then(res => {
                  this.closeModal();
                })
              .catch(e => alert('update error' + e));
              }
              if(this.data.type != ""){
                this._db.executeSql('UPDATE testresults SET doctor=? WHERE rowid=?', [this.data.type, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.photo != ""){
                this._db.executeSql('UPDATE testresults SET place=? WHERE rowid=?', [this.data.photo, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.files != ""){
                this._db.executeSql('UPDATE testresults SET description=? WHERE rowid=?', [this.data.files, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.notes != ""){
                this._db.executeSql('UPDATE testresults SET questions=? WHERE rowid=?', [this.data.notes, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              this.closeModal();
          }
          
}
