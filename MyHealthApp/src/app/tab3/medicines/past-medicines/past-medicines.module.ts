import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastMedicinesPageRoutingModule } from './past-medicines-routing.module';

import { PastMedicinesPage } from './past-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PastMedicinesPageRoutingModule
  ],
  declarations: [PastMedicinesPage]
})
export class PastMedicinesPageModule {}
