import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgentHealthPlanPage } from './urgent-health-plan.page';

const routes: Routes = [
  {
    path: '',
    component: UrgentHealthPlanPage
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
export class UrgentHealthPlanPageRoutingModule {}
