import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Watch } from 'src/app/data/models/watch/watch.model';
import { WatchModelService } from 'src/app/data/services/model/watch-model.service';
import { KeyValueStorageService } from 'src/app/data/services/storage/key-value.storage.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  searchActive: boolean = false;
  watchesByBrand: Object = {};

  constructor(private storageService: KeyValueStorageService, private watchService: WatchModelService, private router: Router, public actionSheetController: ActionSheetController, public navCtrl: NavController) {
  }

  ngOnInit() {
    const firstLoad: boolean = this.storageService.isFirstLoad();
    console.log("firstLoad: " + firstLoad);
    
    if (firstLoad) {
      this.storageService.setFirstLoad();
      //this.router.navigate(['welcome']);
    }

    this.watchesByBrand = this.watchService.getAllGroupByBrand();
  }

  toggleSearch(): void {
    this.searchActive = !this.searchActive;
  }

  filterCategory(category: string): void {
    const brandWatches = this.watchService.getAllGroupByBrand();
    const filtered = {};

    if (category == "all") {
      this.watchesByBrand = brandWatches;
      return;
    }

    Object.entries(brandWatches).forEach(([brand, watches]) => {
      watches.forEach((watch) => {
        if (category == "marked" && watch.isMarked || category != "marked" && watch.model == category) {
            if (filtered[brand] == undefined) {
              filtered[brand] = [watch];
            }
            else {
              filtered[brand].push(watch);
            }
        }  
      });
    });

    this.watchesByBrand = filtered;
  }
  
  search(target: string): void {
    target = target.toLowerCase();
    const brandWatches = this.watchService.getAllGroupByBrand();
    const filtered = {};

    Object.entries(brandWatches).forEach(([brand, watches]) => {
      if (brand.toLowerCase().includes(target)) {
        filtered[brand] = watches;
      }
      else {
        watches.forEach((watch) => {
          console.log(watch);
          if (watch.model.toLowerCase().includes(target)) {
              if (filtered[brand] == undefined) {
                filtered[brand] = [watch];
              }
              else {
                filtered[brand].push(watch);
              }
          }  
        });
      }
    });

    this.watchesByBrand = filtered;
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Create', icon: 'add-outline', handler: () => {
          console.log('Add clicked');
          this.navigateDetail();
        }
      }, {
        text: 'Cancel', icon: 'close-outline', role: 'cancel', handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss().then((alertData) => {
      if (alertData.role == "cancel") {
        //value = null
      }
    });
  }

  navigateDetail() {
    const options: NavigationExtras = {
        queryParams: {
            id: null
        }
    };

    this.navCtrl.navigateForward(['/watch-detail'], options);
  }
}
