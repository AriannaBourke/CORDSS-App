import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
