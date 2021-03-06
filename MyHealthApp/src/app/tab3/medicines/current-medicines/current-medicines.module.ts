import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrentMedicinesPageRoutingModule } from './current-medicines-routing.module';
import { CurrentMedicinesPage } from './current-medicines.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CurrentMedicinesPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [CurrentMedicinesPage]
})
export class CurrentMedicinesPageModule {}
