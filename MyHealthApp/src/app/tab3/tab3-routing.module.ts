import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'basic-info',
    loadChildren: () => import('./basic-info/basic-info.module').then( m => m.BasicInfoPageModule)
  },
  {
    path: 'medical-history',
    loadChildren: () => import('./medical-history/medical-history.module').then( m => m.MedicalHistoryPageModule)
  },
  {
    path: 'medicines',
    loadChildren: () => import('./medicines/medicines.module').then( m => m.MedicinesPageModule)
  },
  {
    path: 'test-results',
    loadChildren: () => import('./test-results/test-results.module').then( m => m.TestResultsPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then( m => m.AppointmentsPageModule)
  },
  {
    path: 'procedures',
    loadChildren: () => import('./procedures/procedures.module').then( m => m.ProceduresPageModule)
  },  {
    path: 'urgent-health-plan',
    loadChildren: () => import('./urgent-health-plan/urgent-health-plan.module').then( m => m.UrgentHealthPlanPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
