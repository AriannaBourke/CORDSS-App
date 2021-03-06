import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicationsPdfPage } from './medications-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: MedicationsPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicationsPdfPageRoutingModule {}
