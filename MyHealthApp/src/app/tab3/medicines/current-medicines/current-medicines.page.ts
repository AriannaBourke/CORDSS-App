import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-current-medicines',
  templateUrl: './current-medicines.page.html',
  styleUrls: ['./current-medicines.page.scss'],
})
export class CurrentMedicinesPage implements OnInit {
  medicineForm: FormGroup;

  constructor(private fb: FormBuilder, private _alertController: AlertController) {}

  async removeMedicine(index) {
    const alert = await this._alertController.create({
      header: "Delete this medicine?",
      message: "Would you like to delete this medicine from your current medicines?",
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

  async finishMedicine(index) {
    const alert = await this._alertController.create({
      header: "Have you finished taking this medicine?",
      message: "Would you like to move this medicine into your past medicines page?",
      buttons: [
        {
          text:"No"
        },
        {
          text:"Yes",
          handler: ()=> {
           console.log("Medicine put into past")
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
