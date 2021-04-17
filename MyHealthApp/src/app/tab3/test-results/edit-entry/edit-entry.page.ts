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
  photos;
  base64Image;
  myProfileImage;
  public testresults : Array<any> = [];
  public pictures : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;
  isSubmitted = false;
  rowid: any;
  TestResultsTable : string = 'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, photo TEXT, files TEXT, notes TEXT)'
  data = {date: "", type: "", photo: "", files: "", notes: ""};
  PicturesTable : string = 'CREATE TABLE IF NOT EXISTS pictures (rowid INTEGER PRIMARY KEY AUTOINCREMENT, cardid INTEGER, picture TEXT)'
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
              this.testresults = [];
              this.pictures =[];
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
                await this._db.executeSql(this.PicturesTable, []);

                this.getData(this.rowid);
                this.getDataPictures(this.rowid);


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

              public getDataPictures(rowid) {
                this._db.executeSql('SELECT * FROM pictures WHERE cardid=?', [rowid])
                .then(res => {
                  this.pictures = [];
                  for(var i=0; i<res.rows.length; i++) {
                    this.pictures.push({
                      rowid:res.rows.item(i).rowid,
                      cardid:res.rows.item(i).cardid,
                      picture:res.rows.item(i).picture,
                      
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

              async updatepictures(rowid) {
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
                        this.updateSQLpictures(rowid);
            
                      }
                    }
                  ]
                });
                await alert.present()
              }

              noSubmitpictures(e) {
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


          async updateSQLpictures(rowid) {
            if(this.datapicture.cardid != "") {
              this._db.executeSql('UPDATE pictures SET cardid=? WHERE rowid=?',[this.datapicture.cardid, rowid])
              .then(res => {
                this.closeModal();
              })
            .catch(e => alert('update error' + e));
            }
            if(this.datapicture.picture != ""){
              this._db.executeSql('UPDATE pictures SET picture=? WHERE rowid=?', [this.datapicture.picture, rowid])
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
                  this.base64Image = "data:image/jpeg;base64," + ImageData;
                  this.photos.push(this.base64Image);
                  this.photos.reverse();
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
          
}
