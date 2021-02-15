import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsPage } from './appointments.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsPage
  },
  {
    path: 'upcoming-appointments',
    loadChildren: () => import('./upcoming-appointments/upcoming-appointments.module').then( m => m.UpcomingAppointmentsPageModule)
  },
  {
    path: 'past-appointments',
    loadChildren: () => import('./past-appointments/past-appointments.module').then( m => m.PastAppointmentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsPageRoutingModule {}
