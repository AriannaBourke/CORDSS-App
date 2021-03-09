import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-mood',
  templateUrl: './mood.page.html',
  styleUrls: ['./mood.page.scss'],
})
export class MoodPage implements OnInit {
  moodForm: FormGroup;


  constructor(private fb: FormBuilder, private _alertController: AlertController) {}

  async removeMood(index) {
    const alert = await this._alertController.create({
      header: "Delete this entry?",
      message: "Would you like to delete this entry from your mood page?",
      buttons: [
        {
          text:"Cancel"
        },
        {
          text:"Delete",
          handler: ()=> {
            this.getMoodInfo().removeAt(index);
          }
        }
      ]
    });

    await alert.present();

  }




  ngOnInit() {
    this.moodForm = this.fb.group ({
      moodInfo: this.fb.array([this.moodInfo( )])


    });
  }

  moodInfo(){
    return this.fb.group({
      date: [''],
      notes: [''],
      happy: [''],
      independent: ['']
    });
  }

  getMoodInfo(): FormArray{
    return this.moodForm.get('moodInfo') as FormArray;
  }


  addMood() {
    this.getMoodInfo().push(this.moodInfo());
  }

  // removeMood(index){
  //   this.getMoodInfo().removeAt(index);

  // }




}
