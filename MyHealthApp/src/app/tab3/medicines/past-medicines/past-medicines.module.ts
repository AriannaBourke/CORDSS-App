import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PastMedicinesPageRoutingModule } from './past-medicines-routing.module';
import { PastMedicinesPage } from './past-medicines.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PastMedicinesPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [PastMedicinesPage]
})
export class PastMedicinesPageModule {}
