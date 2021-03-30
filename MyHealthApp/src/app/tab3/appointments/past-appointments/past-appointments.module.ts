import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PastAppointmentsPageRoutingModule } from './past-appointments-routing.module';
import { PastAppointmentsPage } from './past-appointments.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PastAppointmentsPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [PastAppointmentsPage]
})
export class PastAppointmentsPageModule {}
