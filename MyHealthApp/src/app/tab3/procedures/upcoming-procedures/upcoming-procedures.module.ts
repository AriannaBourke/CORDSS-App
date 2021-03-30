import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpcomingProceduresPageRoutingModule } from './upcoming-procedures-routing.module';
import { UpcomingProceduresPage } from './upcoming-procedures.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpcomingProceduresPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [UpcomingProceduresPage]
})
export class UpcomingProceduresPageModule {}
