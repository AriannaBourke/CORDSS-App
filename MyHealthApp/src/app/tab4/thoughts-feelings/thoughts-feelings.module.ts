import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThoughtsFeelingsPageRoutingModule } from './thoughts-feelings-routing.module';
import { ThoughtsFeelingsPage } from './thoughts-feelings.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThoughtsFeelingsPageRoutingModule,
    AddEntryPageModule,
    ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [ThoughtsFeelingsPage]
})
export class ThoughtsFeelingsPageModule {}
