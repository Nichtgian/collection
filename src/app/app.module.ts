import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Persistence local storage */
import { Drivers } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { TabsMenuComponent } from './components/menu/tabs-menu/tabs-menu.component';

@NgModule({
  declarations: [AppComponent, TabsMenuComponent],
  entryComponents: [],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), IonicStorageModule.forRoot({
    driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, /*Drivers.LocalStorage*/]
  })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ],
  bootstrap: [AppComponent],
})

export class AppModule {}
