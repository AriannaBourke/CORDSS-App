import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionsPdfPage } from './conditions-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionsPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionsPdfPageRoutingModule {}
