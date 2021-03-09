import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-past-medicines',
  templateUrl: './past-medicines.page.html',
  styleUrls: ['./past-medicines.page.scss'],
})
export class PastMedicinesPage implements OnInit {
  medicineForm: FormGroup;

  constructor(private fb: FormBuilder, private _alertController: AlertController) {}

  async removeMedicine(index) {
    const alert = await this._alertController.create({
      header: "Delete this medicine?",
      message: "Would you like to delete this medicine from your past medicines?",
      buttons: [
        {
          text:"Cancel"
        },
        {
          text:"Delete",
          handler: ()=> {
            this.getMedicineInfo().removeAt(index);
          }
        }
      ]
    });

    await alert.present();

  }




  ngOnInit() {
    this.medicineForm = this.fb.group ({
      medicineInfo: this.fb.array([this.medicineInfo( )])


    });
  }

  medicineInfo(){
    return this.fb.group({
      medicinename: [''],
      instructions: [''],
      sideeffects: [''],
      notes: ['']
    });
  }

  getMedicineInfo(): FormArray{
    return this.medicineForm.get('medicineInfo') as FormArray;
  }


  addMedicine() {
    this.getMedicineInfo().push(this.medicineInfo());
  }

  onSubmit() {
    console.log("submitted")
  }

  // removeMedicine(index){
  //   this.getMedicineInfo().removeAt(index);

  // }

}

