import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms'
@Component({
  selector: 'app-my-family',
  templateUrl: './my-family.page.html',
  styleUrls: ['./my-family.page.scss'],
})
export class MyFamilyPage implements OnInit {
  familyForm: FormGroup;
  public family: Array<any> = [];


  constructor(private fb: FormBuilder, private _alertController: AlertController) {}

  async removeFamily(index) {
    const alert = await this._alertController.create({
      header: "Delete this person?",
      message: "Would you like to delete this person from your family page?",
      buttons: [
        {
          text:"Cancel"
        },
        {
          text:"Delete",
          handler: ()=> {
            this.getFamilyInfo().removeAt(index);
          }
        }
      ]
    });

    await alert.present();

  }




  ngOnInit() {
    this.familyForm = this.fb.group ({
      familyInfo: this.fb.array([this.familyInfo( )])


    });
  }

  familyInfo(){
    return this.fb.group({
      familyname: [''],
      familybirthday: [''],
      familyrelation: [''],
      familyemail: [''],
      familyphone: ['']
    });
  }

  getFamilyInfo(): FormArray{
    return this.familyForm.get('familyInfo') as FormArray;
  }


  addFamily() {
    this.getFamilyInfo().push(this.familyInfo());
  }

  onSubmit()
  {
    console.log("Submitted")
  }

  // removeFamily(index){
  //   this.getFamilyInfo().removeAt(index);

  // }




}
