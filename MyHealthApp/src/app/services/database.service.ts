import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _db: any;
  public aboutme: Array<any>;
  public myfamily: Array<any>;
  public myclinicalteam: Array<any>;
  public basicinfo: Array<any>;
  public urgenthealthplan: Array<any>;
  public appointments: Array<any>;
  public procedures: Array<any>;
  public mood: Array<any>;
  public thoughtsfeelings: Array<any>;
  public mednotes: Array<any>;

  data = {rowid: "", name: "", birthday: "", relation: "", email: "", phone: ""};

  constructor(private _plat: Platform, private _sql: SQLite)
  {
    this.aboutme = [];
    this.myfamily = [];
    this.myclinicalteam = [];
    this.basicinfo = [];
    this.urgenthealthplan = [];
    this.appointments = [];
    this.procedures = [];
    this.mood = [];
    this.thoughtsfeelings = [];
    this.mednotes = [];
    this._plat
    .ready()
    .then(() =>
    {
      this._createDatabase();
    });
  }

  private _createDatabase(): void
  {
    this._sql.create({
      name: "myHealthApp.db",
      location: 'default'
    })
    .then((db: SQLiteObject) =>
    {
      this._db = db;
      this._createDatabaseTables();
    })
    .catch((err: any) =>
    {
      console.error('Unable to open database: ', err);
    })
  }

  private _createDatabaseTables(): void
  {
    this.createAboutMeTable();
    this.createMyFamilyTable();
    this.createMyClinicalTeamTable();
    this.createBasicInfoTable();
    this.createUrgentHealthPlanTable();
    this.createAppointmentsTable();
    this.createTestResultsTable();
    this.createMedicalHistoryTable();
    this.createMedicinesTable();
    this.createProceduresTable();
    this.createMedNotesTable();
    this.createThoughtsFeelingsTable();
    this.createMoodTable();
  }

  public createAboutMeTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS aboutme (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, notes TEXT, email TEXT, telephone NUMERIC, address TEXT, nhs_number NUMERIC, emergency_name TEXT, emergency_number NUMERIC, emergency2_name TEXT, emergency2_number NUMERIC, emergency3_name TEXT, emergency3_number NUMERIC, photo BLOB', <any>[])
    .then((data: any) =>
    {
      console.log("aboutme table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMyFamilyTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS myfamily (rowid INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthday TEXT, relation TEXT, email TEXT, phone NUMERIC', <any>[])
    .then((data: any) =>
    {
      console.log("myfamily table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMyClinicalTeamTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS myclinicalteam (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, role TEXT, clinic_name TEXT, email TEXT, telephone NUMERIC, photo BLOB', <any>[])
    .then((data: any) =>
    {
      console.log("myclinicalteam table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createBasicInfoTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS basicinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, gender TEXT, height TEXT, weight TEXT, allergies TEXT, blood_pressure NUMERIC, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("basicinfo table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createUrgentHealthPlanTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS urgenthealthplan (id INTEGER PRIMARY KEY AUTOINCREMENT, emergency_type TEXT, instructions TEXT, telephone NUMERIC, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("urgenthealthplan table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createAppointmentsTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS appointments (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("appointments table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createProceduresTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS procedures (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, doctor TEXT, place TEXT, description TEXT, questions TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("procedures table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createTestResultsTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS testresults (id INTEGER PRIMARY KEY AUTOINCREMENT, test_type TEXT, photo BLOB, files BLOB, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("testresults table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMedicalHistoryTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS medicalhistory (id INTEGER PRIMARY KEY AUTOINCREMENT, diagnosis TEXT, diagnosis_details TEXT, diagnosis_date TEXT, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("medicalhistory table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMedicinesTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS medicines (id INTEGER PRIMARY KEY AUTOINCREMENT, medicine_name TEXT, instructions TEXT, side_effects TEXT, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("medicines table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMedNotesTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS mednotes (id INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo BLOB, file BLOB, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("mednotes table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createThoughtsFeelingsTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS thoughtsfeelings (id INTEGER PRIMARY KEY AUTOINCREMENT, note_name TEXT, photo BLOB, file BLOB, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("thoughtsfeelings table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public createMoodTable(): void
  {
    this._db.executeSql('CREATE TABLE IF NOT EXISTS mood (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, happy INTEGER, independent INTEGER, tired INTEGER, productive INTEGER, notes TEXT', <any>[])
    .then((data: any) =>
    {
      console.log("mood table created");
    })
    .catch((error: any) =>
    {
      console.log("Error: " + JSON.stringify(error.err));
    });
  }

  public insertMyFamily() {
    this._db.executeSql('INSERT INTO myfamily (name, birthday, relation, email, phone) VALUES (?, ?, ?, ?, ?)', [this.data.name, this.data.birthday, this.data.relation, this.data.email, this.data.phone])
    .then(id =>
      {
        console.log("inserted into myfamily", id);
        this.fetchMyFamily();
      }, error => {
        console.log("insert error: ", error);
      });
  }

  // FETCH
  public fetchMyFamily() {
    this._db.executeSql("SELECT * FROM myfamily", {})
    .then(res =>
      {
        this.myfamily = [];
        for(var i=0; i<res.rows.length; i++) {
          this.myfamily.push({
            rowid:res.rows.item(i).rowid,
            name:res.rows.item(i).name,
            birthday:res.rows.item(i).birthday,
            relation:res.rows.item(i).relation,
            email:res.rows.item(i).email,
            phone:res.rows.item(i).phone
          });
        }
      })
      .catch(e => console.log(e));
  }

  // REMOVE
  public removeMyFamily() {
    this._db.executeSql("DELETE FROM myfamily WHERE rowid=?", [this.data.rowid])
    .then(res =>
      {
        console.log(res);
        this.fetchMyFamily();
      })
      .catch(e => console.log(e));
    }



}
