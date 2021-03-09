import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalNotesPageRoutingModule } from './medical-notes-routing.module';

import { MedicalNotesPage } from './medical-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MedicalNotesPageRoutingModule
  ],
  declarations: [MedicalNotesPage]
})
export class MedicalNotesPageModule {}
