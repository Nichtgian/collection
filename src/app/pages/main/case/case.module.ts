import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CasePage } from './case.page';
import { CasePreviewComponent } from 'src/app/components/preview/case-preview/case-preview.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: CasePage }])],
  declarations: [CasePage, CasePreviewComponent]
})

export class CasePageModule {}
