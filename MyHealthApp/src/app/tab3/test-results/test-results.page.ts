import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";



@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.page.html',
  styleUrls: ['./test-results.page.scss'],
})
export class TestResultsPage {
  photos;
  base64Image;
  myProfileImage;
  public testresults : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  TestResultsTable : string = 'CREATE TABLE IF NOT EXISTS testresults (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, type TEXT, photo TEXT, files TEXT, notes TEXT)'
  data = {date: "", type: "", photo: "", files: "", notes: ""};
  isEnabled: any;

  constructor(private _alertController: AlertController,
              public modalController: ModalController,
              public _plat: Platform,
              public _sql: SQLite,
              private camera : Camera,
              private alertCtrl: AlertController,
              )
{
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
    this.getData()
  }

  ionViewDidLoad() {
        this.getData();
      }

      ionViewWillEnter() {
        this.getData();
      }

  public getData() {
    this.verifyDatabasePopulated()
    this._db.executeSql('SELECT * FROM testresults ORDER BY rowid DESC', <any>[])
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

      verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM testresults', <any>[])
        .then(res => {
          if(res.rows.length == 0) {
            this.isEnabled = true;
          }
          else {
            this.isEnabled = false;
          }
        })

      }

      noContent() {
        return !this.isEnabled;
      }

  public saveData() {
    this._db.executeSql('INSERT INTO testresults VALUES(NULL,?,?,?,?,?)', [this.data.date, this.data.type, this.data.photo, this.data.files, this.data.notes])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }


  editData(rowid) {
    console.log("added data"), {
      rowid: rowid
    }
  }

  deleteData(rowid) {
      this._db.executeSql('DELETE FROM testresults WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
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

    async openModal() {
      const modal = await this.modalController.create({
        component: AddEntryPage,
        componentProps: {
        }
      });

      modal.onDidDismiss().then((dataReturned) => {
        this.getData();
      });

      return await modal.present();
    }


    async viewModal(rowid) {
      const modal = await this.modalController.create({
        component: ViewEntryPage,
        componentProps: { 'rowid': rowid
        }
      });
      modal.onDidDismiss().then(() => {
        this.getData();
      });

      return await modal.present();
    }


    async editModal(rowid) {
      const modal = await this.modalController.create({
        component: EditEntryPage,
        componentProps: { 'rowid': rowid}
      });
      modal.onDidDismiss().then(()=>{
        this.getData();
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
