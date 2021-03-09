import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingAppointmentsPageRoutingModule } from './upcoming-appointments-routing.module';

import { UpcomingAppointmentsPage } from './upcoming-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpcomingAppointmentsPageRoutingModule
  ],
  declarations: [UpcomingAppointmentsPage]
})
export class UpcomingAppointmentsPageModule {}
