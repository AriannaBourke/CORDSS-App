import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyFamilyPageRoutingModule } from './my-family-routing.module';
import { MyFamilyPage } from './my-family.page';
import { AddEntryPageModule } from './add-entry/add-entry.module';
// import { ViewEntryPageModule } from './view-entry/view-entry.module';
import { EditEntryPageModule } from './edit-entry/edit-entry.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    MyFamilyPageRoutingModule,
    AddEntryPageModule,
    // ViewEntryPageModule,
    EditEntryPageModule
  ],
  declarations: [MyFamilyPage]
})
export class MyFamilyPageModule {}
