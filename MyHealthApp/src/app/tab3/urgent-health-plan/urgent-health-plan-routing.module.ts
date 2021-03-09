import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgentHealthPlanPage } from './urgent-health-plan.page';

const routes: Routes = [
  {
    path: '',
    component: UrgentHealthPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgentHealthPlanPageRoutingModule {}
