import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { WatchPreviewComponent } from 'src/app/components/preview/watch-preview/watch-preview.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: HomePage }])],
  declarations: [HomePage, WatchPreviewComponent]
})

export class HomePageModule {}
