import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceduresPage } from './procedures.page';

const routes: Routes = [
  {
    path: '',
    component: ProceduresPage
  },
  {
    path: 'past-procedures',
    loadChildren: () => import('./past-procedures/past-procedures.module').then( m => m.PastProceduresPageModule)
  },
  {
    path: 'upcoming-procedures',
    loadChildren: () => import('./upcoming-procedures/upcoming-procedures.module').then( m => m.UpcomingProceduresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceduresPageRoutingModule {}
