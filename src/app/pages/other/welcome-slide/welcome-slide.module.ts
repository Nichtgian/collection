import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomeSlidePage } from './welcome-slide.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild([{ path: '', component: WelcomeSlidePage }])],
  declarations: [WelcomeSlidePage]
})

export class WelcomeSlidePageModule {}
