import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Watch } from 'src/app/data/models/watch/watch.model';
import { StorageService } from 'src/app/data/providers/storage.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  searchActive: boolean = false;
  watchesByBrand: any = [
    { name: "tudor", watches: [
      new Watch("tudor", "bb chrono")
    ]}
  ]

  constructor(private storageService: StorageService, private router: Router) {
  }

  ngOnInit() {
    const firstLoad: boolean = this.storageService.isFirstLoad();
    console.log("firstLoad: " + firstLoad);
    
    if (firstLoad) {
      this.storageService.setFirstLoad();
      //this.router.navigate(['welcome']);
    }
  }

  toggleSearch(): void {
    console.log("search");
    this.searchActive = !this.searchActive;
  }

  toggleFilter(): void {
    console.log("filter");
  }

  toggleSettings(): void {
    console.log("settings");
  }

  filterCategory(category: string): void {
    console.log(category);
  }
}
