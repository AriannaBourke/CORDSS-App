import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'medical-notes',
    loadChildren: () => import('./medical-notes/medical-notes.module').then( m => m.MedicalNotesPageModule)
  },
  {
    path: 'thoughts-feelings',
    loadChildren: () => import('./thoughts-feelings/thoughts-feelings.module').then( m => m.ThoughtsFeelingsPageModule)
  },
  {
    path: 'mood',
    loadChildren: () => import('./mood/mood.module').then( m => m.MoodPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
