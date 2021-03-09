import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingProceduresPage } from './upcoming-procedures.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingProceduresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingProceduresPageRoutingModule {}
