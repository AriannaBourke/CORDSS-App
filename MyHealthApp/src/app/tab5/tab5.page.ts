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

    CallNow(n:string){
      this.callNumber.callNumber(n, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
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