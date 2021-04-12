import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionsPdfPageRoutingModule } from './conditions-pdf-routing.module';

import { ConditionsPdfPage } from './conditions-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionsPdfPageRoutingModule
  ],
  declarations: [ConditionsPdfPage]
})
export class ConditionsPdfPageModule {}
