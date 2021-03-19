import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFamilyPageRoutingModule } from './my-family-routing.module';

import { MyFamilyPage } from './my-family.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    MyFamilyPageRoutingModule,
  ],
  declarations: [MyFamilyPage]
})
export class MyFamilyPageModule {}
