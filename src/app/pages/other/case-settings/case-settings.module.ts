import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseSettingsPageRoutingModule } from './case-settings-routing.module';

import { CaseSettingsPage } from './case-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseSettingsPageRoutingModule
  ],
  declarations: [CaseSettingsPage]
})
export class CaseSettingsPageModule {}
