import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgentHealthPlanPageRoutingModule } from './urgent-health-plan-routing.module';

import { UrgentHealthPlanPage } from './urgent-health-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UrgentHealthPlanPageRoutingModule
  ],
  declarations: [UrgentHealthPlanPage]
})
export class UrgentHealthPlanPageModule {}
