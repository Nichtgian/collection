import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { WatchDetailPage } from './watch-detail.page';
import { MultiselectComponent } from 'src/app/components/input/multiselect/multiselect.component';
import { AccordionComponent } from 'src/app/components/input/accordion/accordion.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: WatchDetailPage }])],
  declarations: [WatchDetailPage, MultiselectComponent, AccordionComponent]
})

export class WatchDetailPageModule {}
