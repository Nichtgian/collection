import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CaseDetailPage } from './case-detail.page';
import { SlotPreviewComponent } from 'src/app/components/preview/slot-preview/slot-preview.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: CaseDetailPage }])],
  declarations: [CaseDetailPage, SlotPreviewComponent]
})

export class CaseDetailPageModule {}
