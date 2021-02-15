import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThoughtsFeelingsPageRoutingModule } from './thoughts-feelings-routing.module';

import { ThoughtsFeelingsPage } from './thoughts-feelings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThoughtsFeelingsPageRoutingModule
  ],
  declarations: [ThoughtsFeelingsPage]
})
export class ThoughtsFeelingsPageModule {}
