import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicInfoPage } from './basic-info.page';

const routes: Routes = [
  {
    path: '',
    component: BasicInfoPage
  },
  {
    path: 'add-entry',
    loadChildren: () => import('./add-entry/add-entry.module').then( m => m.AddEntryPageModule)
  },
  {
    path: 'edit-entry',
    loadChildren: () => import('./edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicInfoPageRoutingModule {}
