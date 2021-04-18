//  This file is adapted from: Database - 
// https://edupala.com/ionic-template-driven-form-validation/ 
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/ 
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app 
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17

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
  public myfamily : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  MyFamilyTable : string = 'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone INT)'
  data = {name: "", birthday: "", relation: "", email: "", phone: ""};


  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
            ) 
            {
              this.rowid=navParams.get('rowid');        
              this.myfamily = [];
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
                await this._db.executeSql(this.MyFamilyTable, []);
                this.getData(this.rowid);
              }

                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM myfamily WHERE rowid=?',[rowid])
                .then(res => {
                  this.myfamily = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.myfamily.push({
                      rowid:res.rows.item(i).rowid,
                      name:res.rows.item(i).name,
                      birthday:res.rows.item(i).birthday,
                      relation:res.rows.item(i).relation,
                      email:res.rows.item(i).email,
                      phone:res.rows.item(i).phone
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
              if(this.data.name != "") {
                this._db.executeSql('UPDATE myfamily SET name=? WHERE rowid=?',[this.data.name, rowid])
                .then(res => {
                  this.closeModal();
                })
              .catch(e => alert('update error' + e));
              }
              if(this.data.birthday != ""){
                this._db.executeSql('UPDATE myfamily SET birthday=? WHERE rowid=?', [this.data.birthday, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.relation != ""){
                this._db.executeSql('UPDATE myfamily SET relation=? WHERE rowid=?', [this.data.relation, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.email != ""){
                this._db.executeSql('UPDATE myfamily SET email=? WHERE rowid=?', [this.data.email, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              if(this.data.phone != ""){
                this._db.executeSql('UPDATE myfamily SET phone=? WHERE rowid=?', [this.data.phone, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              this.closeModal();
          }
          
}
