import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalNotesPage } from './medical-notes.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalNotesPageRoutingModule {}
