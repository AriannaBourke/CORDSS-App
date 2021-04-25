import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'add-entry',
    loadChildren: () => import('./add-entry/add-entry.module').then( m => m.AddEntryPageModule)
  },
  {
    path: 'edit-entry',
    loadChildren: () => import('./edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
