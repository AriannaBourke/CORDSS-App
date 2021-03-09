import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestResultsPage } from './test-results.page';

const routes: Routes = [
  {
    path: '',
    component: TestResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestResultsPageRoutingModule {}
