import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-past-appointments',
  templateUrl: './past-appointments.page.html',
  styleUrls: ['./past-appointments.page.scss'],
})
export class PastAppointmentsPage implements OnInit {
  pageForm: FormGroup;
  constructor(private fb: FormBuilder,
    private _alertController: AlertController) {
  }

  async removeEntry(index) {
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
            this.getPageInfo().removeAt(index);

          }
        }
      ]
    });

    await alert.present();

  }

  ngOnInit() {
   this.pageForm = this.fb.group( {
    pageInfo: this.fb.array([this.pageInfo( )])



   })
  }

  pageInfo(){
    return this.fb.group({
      date:[''],
      doctor:[''],
      place:[''],
      description:[''],
      questions:['']

    });
  }

  getPageInfo(): FormArray{
    return this.pageForm.get('pageInfo') as FormArray;
  }


  addEntry() {
    this.getPageInfo().push(this.pageInfo());
  }

  onSubmit(){
    console.log("form submitted")
  }

}
