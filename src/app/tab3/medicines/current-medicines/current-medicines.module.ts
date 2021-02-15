import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentMedicinesPageRoutingModule } from './current-medicines-routing.module';

import { CurrentMedicinesPage } from './current-medicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentMedicinesPageRoutingModule
  ],
  declarations: [CurrentMedicinesPage]
})
export class CurrentMedicinesPageModule {}
