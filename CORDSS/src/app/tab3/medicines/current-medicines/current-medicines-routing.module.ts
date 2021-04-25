import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentMedicinesPage } from './current-medicines.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentMedicinesPage
  },
  {
    path: 'add-entry',
    loadChildren: () => import('./add-entry/add-entry.module').then( m => m.AddEntryPageModule)
  },
  {
    path: 'edit-entry',
    loadChildren: () => import('./edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
  },
  {
    path: 'view-entry',
    loadChildren: () => import('./view-entry/view-entry.module').then( m => m.ViewEntryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentMedicinesPageRoutingModule {}
