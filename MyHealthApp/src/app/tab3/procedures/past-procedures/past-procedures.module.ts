import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastProceduresPageRoutingModule } from './past-procedures-routing.module';

import { PastProceduresPage } from './past-procedures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PastProceduresPageRoutingModule
  ],
  declarations: [PastProceduresPage]
})
export class PastProceduresPageModule {}
