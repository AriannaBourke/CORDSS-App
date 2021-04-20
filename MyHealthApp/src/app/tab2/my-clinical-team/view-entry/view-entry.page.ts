//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// https://forum.ionicframework.com/t/how-to-disable-a-button-on-a-condition/39140/17
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/

import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {EditEntryPage } from '..//edit-entry/edit-entry.page';
import { CallNumber } from '@ionic-native/call-number/ngx';



@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  myProfileImage;
  public clinicalteam: Array<any> = [];
  public isData: boolean = false;
  public storedData: any = null;
  private _db: any;

  rowid: any;
  ClinicalTeamTable: string =
    'CREATE TABLE IF NOT EXISTS clinicalteam (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, phone INT, photo TEXT)';
  data = {
    name: '',
    role: '',
    clinic_name: '',
    email: '',
    phone: '',
    photo: '',
  };



  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
              private callNumber: CallNumber
            ) 
            {
              this.rowid=navParams.get('rowid')
              this.clinicalteam = [];
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
                await this._db.executeSql(this.ClinicalTeamTable, []);
                this.getData(this.rowid);
              }
                
              public getData(rowid) {
                this._db.executeSql('SELECT * FROM clinicalteam WHERE rowid=?', [rowid])
                .then(res => {
                  this.clinicalteam = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.clinicalteam.push({
                      rowid:res.rows.item(i).rowid,
                      name:res.rows.item(i).name,
                      role:res.rows.item(i).role,
                      clinic_name:res.rows.item(i).clinic_name,
                      email:res.rows.item(i).email,
                      phone:res.rows.item(i).phone,
                      photo:res.rows.item(i).photo,
                    })
                  }
                })
                    .catch(e => alert('get data error' + e));
                  }
            
              async closeModal() {
                await this.modalController.dismiss();
              }

              
  deleteData(rowid) {
    this._db
      .executeSql('DELETE FROM clinicalteam WHERE rowid=?', [rowid])
      .then((res) => {
        this.closeModal();
      })
      .catch((e) => alert('delete data error' + e));
  }

  async removeData(rowid) {
    const alert = await this._alertController.create({
      header: 'Delete this entry?',
      message: 'Would you like to delete this entry from your clinical team?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteData(rowid);
          },
        },
      ],
    });
  }


    async editModal(rowid) {
      const modal = await this.modalController.create({
        component: EditEntryPage,
        componentProps: { rowid: rowid },
      });
      modal.onDidDismiss().then(() => {
        this.getData(rowid);
      });
      return await modal.present();
    }

             

              call(){
                this.callNumber.callNumber(this.clinicalteam[0].phone, true)
               .then(() => console.log('Launched dialer!'))
               .catch(e => alert('Error launching dialer' + e));
               
              }
              
         
 
}
