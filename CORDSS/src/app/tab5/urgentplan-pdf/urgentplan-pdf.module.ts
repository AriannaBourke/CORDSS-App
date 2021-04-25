import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgentplanPdfPageRoutingModule } from './urgentplan-pdf-routing.module';

import { UrgentplanPdfPage } from './urgentplan-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgentplanPdfPageRoutingModule
  ],
  declarations: [UrgentplanPdfPage]
})
export class UrgentplanPdfPageModule {}
