import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastMedicinesPage } from './past-medicines.page';

const routes: Routes = [
  {
    path: '',
    component: PastMedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastMedicinesPageRoutingModule {}
