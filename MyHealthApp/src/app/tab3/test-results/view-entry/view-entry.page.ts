import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { EditEntryPage } from '..//edit-entry/edit-entry.page';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";



@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage {
  photos;
  base64Image;
  myProfileImage;
  public testresults : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  rowid: any;
  TestResultsTable : string = 'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, photo TEXT, files TEXT, notes TEXT)'
  data = {date: "", type: "", photo: "", files: "", notes: ""};

  constructor(private modalController: ModalController,
              private navParams: NavParams,
              private _alertController: AlertController, 
              public _plat: Platform, 
              public _sql: SQLite,
              private camera : Camera,
              private alertCtrl: AlertController,
            ) 
            {
              this.rowid=navParams.get('rowid')
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

              deleteData(rowid) {
                this._db.executeSql('DELETE FROM testresults WHERE rowid=?', [rowid])
                .then(res => {
                  this.closeModal();
                })
                .catch(e => alert('delete data error' + e));
              }
          
              async removeData(rowid) {
                const alert = await this._alertController.create({
                  header: "Delete this entry?",
                  message: "Would you like to delete this entry from your test results?",
                  buttons: [
                    {
                      text:"Cancel"
                    },
                    {
                      text:"Delete",
                      handler: ()=> {
                        this.deleteData(rowid);
                      }
                    }
                  ]
                });
            
                await alert.present();
            
              }

              async editModal(rowid) {
                const modal = await this.modalController.create({
                  component: EditEntryPage,
                  componentProps: { 'rowid': rowid}
                });
                modal.onDidDismiss().then(()=>{
                  this.getData(rowid);
                });
                return await modal.present();
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

