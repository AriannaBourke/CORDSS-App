//  This file is adapted from: Database -
// https://edupala.com/ionic-template-driven-form-validation/
// https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/
// https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
// https://devdactic.com/ionic-4-sqlite-queries/
// https://www.positronx.io/ionic-angular-modals-tutorial-passing-receiving-data/
// Camera: https://www.remotestack.io/ionic-image-picker-and-multiple-image-preview-tutorial/
// https://www.freakyjolly.com/ionic-native-camera-tutorial-example-application/ \\
// callNow(): https://www.techiediaries.com/ionic-cordova-phone-call/

import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from '@ionic/angular';
import { UrgentplanPdfPage } from './urgentplan-pdf/urgentplan-pdf.page';
import { ConditionsPdfPage } from './conditions-pdf/conditions-pdf.page';
import { MedicationsPdfPage } from './medications-pdf/medications-pdf.page';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {
  window: any;

  constructor(
    private callNumber: CallNumber,
    public modalController: ModalController
  ) {}

  CallNow(n: string) {
    this.callNumber
      .callNumber(n, true)
  }

  async openUPModal() {
    const modal = await this.modalController.create({
      component: UrgentplanPdfPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {});

    return await modal.present();
  }

  async openMedModal() {
    const modal = await this.modalController.create({
      component: MedicationsPdfPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {});

    return await modal.present();
  }

  async openCondModal() {
    const modal = await this.modalController.create({
      component: ConditionsPdfPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {});

    return await modal.present();
  }
}
