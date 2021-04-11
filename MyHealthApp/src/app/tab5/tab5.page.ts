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
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private callNumber: CallNumber,
    public modalController: ModalController,
    ) {}

  callNow(number) {
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  async openUPModal() {
    const modal = await this.modalController.create({
      component: UrgentplanPdfPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
    });

    return await modal.present();
  }

  async openMedModal() {
    const modal = await this.modalController.create({
      component: MedicationsPdfPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
    });

    return await modal.present();
  }

  async openCondModal() {
    const modal = await this.modalController.create({
      component: ConditionsPdfPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
    });

    return await modal.present();
  }
}