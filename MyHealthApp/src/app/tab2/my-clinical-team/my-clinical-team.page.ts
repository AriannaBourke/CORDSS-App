import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-my-clinical-team',
  templateUrl: './my-clinical-team.page.html',
  styleUrls: ['./my-clinical-team.page.scss'],
})
export class MyClinicalTeamPage implements OnInit {
  clinicalForm: FormGroup;
  myProfileImage;

  constructor(
    private fb: FormBuilder,
    private _camera: Camera,
    private _alertController: AlertController) { }

  async selectImageSource() {
    const cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this._camera.DestinationType.DATA_URL,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this._camera.PictureSourceType.CAMERA
    };

    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.SAVEDPHOTOALBUM
  };
    const alert = await this._alertController.create({
      header: "Select Source",
      message: "Pick a source for the picture of your clinical team member",
      buttons: [
        {
          text:"Camera",
          handler: ()=> {
            this._camera.getPicture(cameraOptions)
            .then((ImageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + ImageData;
            })

          }
        },
        {
          text:"Gallery",
          handler: ()=> {
            this._camera.getPicture(galleryOptions)
            .then((ImageData)=> {
              this.myProfileImage = "data:image/jpeg;base64," + ImageData;
            })

          }
        }
      ]
    });

    await alert.present();

  }

  async removeClinical(i) {
    const alert = await this._alertController.create({
      header: "Delete this person?",
      message: "Would you like to delete this person from your clinical team page?",
      buttons: [
        {
          text:"Cancel"
        },
        {
          text:"Delete",
          handler: ()=> {
            this.getClinicalInfo().removeAt(i);

          }
        }
      ]
    });

    await alert.present();

  }


  ngOnInit() {
    this.clinicalForm = this.fb.group ({
      clinicalInfo: this.fb.array([this.clinicalInfo( )])


    });
  }

  clinicalInfo(){
    return this.fb.group({
      clinicalname: [''],
      clinicalrole: [''],
      clinicname: [''],
      clinicalemail: [''],
      clinicalphone: ['']
    });
  }

  getClinicalInfo(): FormArray{
    return this.clinicalForm.get('clinicalInfo') as FormArray;
  }


  addClinical() {
    this.getClinicalInfo().push(this.clinicalInfo());
  }

  onSubmit() {
    console.log("submitted")
  }

  // removeClinical(index){
  //   this.getClinicalInfo().removeAt(index);

  // }

}
