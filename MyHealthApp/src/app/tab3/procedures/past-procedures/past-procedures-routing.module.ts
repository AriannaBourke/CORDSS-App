import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastProceduresPage } from './past-procedures.page';

const routes: Routes = [
  {
    path: '',
    component: PastProceduresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastProceduresPageRoutingModule {}
