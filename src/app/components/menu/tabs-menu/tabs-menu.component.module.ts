import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../../data/types/constants/routes.constant';

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
  })
  
export class TabsMenuComponentModule {}