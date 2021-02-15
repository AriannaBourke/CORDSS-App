import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalNotesPageRoutingModule } from './medical-notes-routing.module';

import { MedicalNotesPage } from './medical-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalNotesPageRoutingModule
  ],
  declarations: [MedicalNotesPage]
})
export class MedicalNotesPageModule {}
