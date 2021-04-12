import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ModalController } from '@ionic/angular';
import {AddEntryPage } from './add-entry/add-entry.page';
import {EditEntryPage } from './edit-entry/edit-entry.page';
import {ViewEntryPage } from './view-entry/view-entry.page';


@Component({
  selector: 'app-past-appointments',
  templateUrl: './past-appointments.page.html',
  styleUrls: ['./past-appointments.page.scss'],
})
export class PastAppointmentsPage {
  public appointments : Array<any> = [];
  public isData          : boolean        = false;
  public storedData      : any            = null;
  private _db   : any;


  AppointmentsTable : string = 'CREATE TABLE IF NOT EXISTS appointments (rowid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT)'
  data = {date: "", doctor: "", place: "", description: "", questions: ""};
  now = new Date();
  today = this.now.toISOString();
  isEnabled: any;

    constructor(
                public modalController: ModalController,
                private _alertController: AlertController,
                public _plat: Platform,
                public _sql: SQLite,
              )

{
  this.appointments = [];
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
    await this._db.executeSql(this.AppointmentsTable, []);
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
    this._db.executeSql('SELECT * FROM appointments WHERE date < ? ORDER BY date DESC', [this.today])
    .then(res => {
      this.appointments = [];
      for(var i=0; i<res.rows.length; i++) {
        this.appointments.push({
          rowid:res.rows.item(i).rowid,
          date:res.rows.item(i).date,
          doctor:res.rows.item(i).doctor,
          place:res.rows.item(i).place,
          description:res.rows.item(i).description,
          questions:res.rows.item(i).questions,
        })
      }
    })
        .catch(e => alert('get data error' + e));
      }

      verifyDatabasePopulated() {
        this._db.executeSql('SELECT * FROM appointments WHERE data < ?', [this.today])
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
    this._db.executeSql('INSERT INTO appointments VALUES(NULL,?,?,?,?,?)', [this.data.date, this.data.doctor, this.data.place, this.data.description, this.data.questions])
    .then(res => {
        this.getData();
      })
      .catch(e => alert("save data error" + e));
    }

  deleteData(rowid) {
      this._db.executeSql('DELETE FROM appointments WHERE rowid=?', [rowid])
      .then(res => {
        this.getData();
      })
      .catch(e => alert('delete data error' + e));
    }

    async removeData(rowid) {
      const alert = await this._alertController.create({
        header: "Delete this entry?",
        message: "Would you like to delete this entry from your appointments?",
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

  }
