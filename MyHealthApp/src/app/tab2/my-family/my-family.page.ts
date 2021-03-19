import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
// import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'
// import { DatabaseService } from '../../services/database.service'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-my-family',
  templateUrl: './my-family.page.html',
  styleUrls: ['./my-family.page.scss'],
})
export class MyFamilyPage {
  public myfamily: any = [];

  data = {name: "", birthday: "", relation: "", email: "", phone: ""};


  constructor(private _alertController: AlertController, private _plat: Platform, private _sql: SQLite) {
    this._plat.ready().then(() => {
      this.getData();
    }).catch(e => console.log(e));
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this._sql.create({
      name: 'database.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS family(rowid INTEGER PRIMARY KEY, name TEXT, birthday DATETIME, relation TEXT, email TEXT, phone INT)', <any>[])
      .then(res => console.log('Executed SQL')) // alert works
      .catch(e => alert(e));
      db.executeSql('SELECT * FROM family ORDER BY rowid DESC', <any>[])
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
    }).catch(e => console.log(e));
  }

  saveData() {
    this._sql.create({
      name: "database.db",
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO family VALUES(NULL,?,?,?,?,?)', [this.data.name, this.data.birthday, this.data.relation, this.data.email, this.data.phone])
      .then(res => {
        alert("result:" + res);
        this.getData();
      })
      .catch(e => alert("error 1" + e));
    })
    .catch(e => alert("error 2" + e));
  }

  editData(rowid) {
    console.log("added data"), {
      rowid: rowid
    }
  }

  deleteData(rowid) {
    this._sql.create({
      name: 'database.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM family WHERE rowid=?', [rowid])
      .then(res => {
        alert(res);
        this.getData();
      })
      .catch(e => alert(e));
    }).catch(e => alert(e));

  }

}
