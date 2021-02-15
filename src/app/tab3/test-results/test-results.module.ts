import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResultsPageRoutingModule } from './test-results-routing.module';

import { TestResultsPage } from './test-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestResultsPageRoutingModule
  ],
  declarations: [TestResultsPage]
})
export class TestResultsPageModule {}
