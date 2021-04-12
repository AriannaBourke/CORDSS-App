import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicationsPdfPageRoutingModule } from './medications-pdf-routing.module';

import { MedicationsPdfPage } from './medications-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicationsPdfPageRoutingModule
  ],
  declarations: [MedicationsPdfPage]
})
export class MedicationsPdfPageModule {}
