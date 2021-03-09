import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyClinicalTeamPageRoutingModule } from './my-clinical-team-routing.module';

import { MyClinicalTeamPage } from './my-clinical-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyClinicalTeamPageRoutingModule
  ],
  declarations: [MyClinicalTeamPage]
})
export class MyClinicalTeamPageModule {}
