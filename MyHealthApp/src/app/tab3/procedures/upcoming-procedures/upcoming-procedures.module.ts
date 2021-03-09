import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingProceduresPageRoutingModule } from './upcoming-procedures-routing.module';

import { UpcomingProceduresPage } from './upcoming-procedures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpcomingProceduresPageRoutingModule
  ],
  declarations: [UpcomingProceduresPage]
})
export class UpcomingProceduresPageModule {}
