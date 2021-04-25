import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgentplanPdfPage } from './urgentplan-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: UrgentplanPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgentplanPdfPageRoutingModule {}
