import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conditions-pdf',
  templateUrl: './conditions-pdf.page.html',
  styleUrls: ['./conditions-pdf.page.scss'],
})
export class ConditionsPdfPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

}
