import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'my-family',
    loadChildren: () => import('./my-family/my-family.module').then( m => m.MyFamilyPageModule)
  },
  {
    path: 'my-clinical-team',
    loadChildren: () => import('./my-clinical-team/my-clinical-team.module').then( m => m.MyClinicalTeamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
