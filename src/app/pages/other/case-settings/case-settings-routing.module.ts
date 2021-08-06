import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseSettingsPage } from './case-settings.page';

const routes: Routes = [
  {
    path: '',
    component: CaseSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseSettingsPageRoutingModule {}
