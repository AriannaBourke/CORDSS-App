import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab5Page } from './tab5.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page,
  },  {
    path: 'urgentplan-pdf',
    loadChildren: () => import('./urgentplan-pdf/urgentplan-pdf.module').then( m => m.UrgentplanPdfPageModule)
  },
  {
    path: 'medications-pdf',
    loadChildren: () => import('./medications-pdf/medications-pdf.module').then( m => m.MedicationsPdfPageModule)
  },
  {
    path: 'conditions-pdf',
    loadChildren: () => import('./conditions-pdf/conditions-pdf.module').then( m => m.ConditionsPdfPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab5PageRoutingModule {}
