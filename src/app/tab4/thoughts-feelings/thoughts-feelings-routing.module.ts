import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtsFeelingsPage } from './thoughts-feelings.page';

const routes: Routes = [
  {
    path: '',
    component: ThoughtsFeelingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThoughtsFeelingsPageRoutingModule {}
