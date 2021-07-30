import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleLoadingStrategy } from './utils/lazy-loading/simple-loading.strategy';
import { ROUTES } from './data/types/constants/routes.constant';

@NgModule({
  providers: [SimpleLoadingStrategy],
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: SimpleLoadingStrategy })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
