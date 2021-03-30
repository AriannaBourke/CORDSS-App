import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyClinicalTeamPageRoutingModule } from './my-clinical-team-routing.module';
import { MyClinicalTeamPage } from './my-clinical-team.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyClinicalTeamPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [MyClinicalTeamPage]
})
export class MyClinicalTeamPageModule {}
