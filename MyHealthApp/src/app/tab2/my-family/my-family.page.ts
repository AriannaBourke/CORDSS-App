import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page'; 
import {ViewEntryPage } from './view-entry/view-entry.page';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-my-family',
  templateUrl: './my-family.page.html',
  styleUrls: ['./my-family.page.scss'],
})
export class MyFamilyPage {
  images: any;
  options: any;
  public myfamily : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;

  MyFamilyTable : string = 'CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY, name TEXT, birthday INTEGER, relation TEXT, email TEXT, phone INT)'
  data = {name: "", birthday: "", relation: "", email: "", phone: ""};

  constructor(
    private imagePicker: ImagePicker,
    private _alertController: AlertController,
    public modalController: ModalController, 
    public _plat: Platform, 
    public _sql: SQLite) 

    {
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
        this.getData()
      }
    
      ionViewDidLoad() {
            this.getData();
          }
        
          ionViewWillEnter() {
            this.getData();
          }
        
      public getData() {
        this._db.executeSql('SELECT * FROM myfamily', <any>[])
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
        
      public saveData() {
        this._db.executeSql('INSERT INTO myfamily VALUES(NULL,?,?,?,?,?)', [this.data.name, this.data.birthday, this.data.relation, this.data.email, this.data.phone])
        .then(res => {
            this.getData();
          })
          .catch(e => alert("save data error" + e));
        }
        
      deleteData(rowid) {
          this._db.executeSql('DELETE FROM myfamily WHERE rowid=?', [rowid])
          .then(res => {
            this.getData();
          })
          .catch(e => alert('delete data error' + e));
        }
    
        async removeData(rowid) {
          const alert = await this._alertController.create({
            header: "Delete this entry?",
            message: "Would you like to delete this entry?",
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

        getPictures() {
          this.options = {
            targetHeight: 200,
            correctOrientation: true,
            width: 200,
            quality: 100,
            outputType: 1
          };
          
          this.images = [];
      
          this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
              this.images.push('data:image/jpeg;base64,' + results[i]);
            }
          }, (error) => {
            alert(error);
          });
        }

        // getPictures() {
        //   this.imageResponse = [];
        //   this.imagePicker.getPictures(this.options).then((results) => {
        //     for (var i = 0; i < results.length; i++) {
        //       this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
        //     }
        //   }, (err) => {
        //     alert(err);
        //   });
        // }
          // this.imagePicker.getPictures(this.options).then((results)=>{
          //   for(var interval = 0;interval<results.length;interval++) 
          //   {
          //     let filename = results[interval].substring(results[interval].lastIndexof('/')+1);
          //     let path = results[interval].substring(0,results[interval].lastIndexof('/')+1)
          //     this.file.readAsDataURL(path,filename).then((base64string)=>{
          //       this.images.push(base64string);
          //     })
          //   }
          // }
          // )
       
      
      
        //   this.imagePicker.getPictures({
        //     maximumImagesCount: 5,
        //     outputType: 1
        //   }).then(selectedImg => {
        //     selectedImg.forEach(i => this.images.push("data:image/jpeg;base64," + i));
        //   })
        // }

        }


      
