import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesPage } from './medicines.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesPage
  },
  {
    path: 'past-medicines',
    loadChildren: () => import('./past-medicines/past-medicines.module').then( m => m.PastMedicinesPageModule)
  },
  {
    path: 'current-medicines',
    loadChildren: () => import('./current-medicines/current-medicines.module').then( m => m.CurrentMedicinesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesPageRoutingModule {}
