import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFamilyPage } from './my-family.page';

const routes: Routes = [
  {
    path: '',
    component: MyFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFamilyPageRoutingModule {}
