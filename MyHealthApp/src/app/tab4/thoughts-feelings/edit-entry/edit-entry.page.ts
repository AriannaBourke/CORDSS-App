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
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";


@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage {
  addphotos;
  photos;
  base64Image;
  myProfileImage;
  public thoughtsfeelings : Array<any> = [];
  public tfpictures : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  ThoughtsFeelingsTable : string =  'CREATE TABLE IF NOT EXISTS thoughtsfeelings (rowid INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo TEXT, notes TEXT)'
  data = {note_name: "", photo: "", notes: ""};
  tfPicturesTable : string = 'CREATE TABLE IF NOT EXISTS tfpictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)'
  datapicture = {cardid:"", picture: "" };


  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
              private camera : Camera,
              private alertCtrl: AlertController,

            ) 
            {
              this.rowid=navParams.get('rowid');        
              this.thoughtsfeelings = [];
              this.tfpictures =[];
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
                await this._db.executeSql(this.tfPicturesTable, []);

                this.getData(this.rowid);
                this.getDataPictures(this.rowid);

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
                      notes:res.rows.item(i).notes
                    })
                  }
                })
                    .catch(e => alert('get data error' + e));
               }

               
              public getDataPictures(rowid) {
                this.photos=[];
                this._db.executeSql('SELECT * FROM tfpictures WHERE cardid=?', [rowid])
                .then(res => {
                  this.tfpictures = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.tfpictures.push({
                      rowid:res.rows.item(i).rowid,
                      cardid:res.rows.item(i).cardid,
                      picture:res.rows.item(i).picture,
                      
                    })
                    this.photos[i]= res.rows.item(i).picture;
                  }
                })
                    .catch(e => alert('get data error' + e));
              }

              public saveDataPictures() {
                for(let i = 0; i<this.addphotos.length;i++) {
                this._db.executeSql('INSERT INTO tfpictures VALUES(NULL,?,?)', [this.rowid, this.addphotos[i]])
                .then(res => {
                    this.getDataPictures(this.rowid);
                  })
                  .catch(e => alert("save data error" + e));
                }
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

              noSubmit(e) {	
                e.preventDefault();	
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
              if(this.data.notes != ""){
                this._db.executeSql('UPDATE thoughtsfeelings SET notes=? WHERE rowid=?', [this.data.notes, rowid])
                .then(res => {
                  this.closeModal();
                })
              }
              this.closeModal();
          }

          ngOnInit() {
            this.photos = [];
          }
        
          takePhoto()
          {
            const options : CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              targetHeight: 200,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
              };
        
              this.camera.getPicture(options)
              .then((ImageData)=> {
                  this.addphotos=[];
                  this.base64Image = "data:image/jpeg;base64," + ImageData;
                  this.addphotos.push(this.base64Image);
                  this.addphotos.reverse();
                  this.saveDataPictures();
                })
              }
            
          
            deletePhoto(index) {
              const alert = this.alertCtrl.create({
                header: 'Sure you want to delete this photo? There is NO undo!',
                message: '',
                buttons: [
                  {
                    text: 'No',
                    handler: () => {
                      console.log('Disagree clicked');
                    }
                  }, 
                  {
                    text: 'Yes',
                    handler: () => {
                      console.log('Agree clicked');
                      this.photos.splice(index, 1);
                    }
                  }
                ]
              }).then(res => {
                res.present();
            });
          }
          
          deleteAll(){
            const alert = this.alertCtrl.create({
              header: 'Sure you want to delete this photo? There is NO undo!',
              message: '',
              buttons: [
                {
                  text: 'No',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                }, 
                {
                  text: 'Yes',
                  handler: () => {
                    console.log('Agree clicked');
                    this._db.executeSql('DELETE FROM tfpictures WHERE cardid=?', [this.rowid])
                .then(res => {
                  this.getDataPictures(this.rowid);
                  })
                }
                }
              ]
            }).then(res => {
              res.present();
          });
        }

}
