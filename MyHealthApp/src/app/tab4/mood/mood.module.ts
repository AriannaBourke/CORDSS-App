import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodPageRoutingModule } from './mood-routing.module';

import { MoodPage } from './mood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MoodPageRoutingModule
  ],
  declarations: [MoodPage]
})
export class MoodPageModule {}
