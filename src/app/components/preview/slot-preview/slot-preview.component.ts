import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Watch } from 'src/app/data/models/watch/watch.model';

@Component({
  selector: 'app-slot-preview',
  templateUrl: './slot-preview.component.html',
  styleUrls: ['./slot-preview.component.scss'],
})
export class SlotPreviewComponent implements OnInit {

  @Input() watchId: string = null;
  watch: Watch = null;
  
  showToggleLume: boolean = false;
  showPrimaryAsset: boolean = true;
  showLumeAsset: boolean = false;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    if (this.watch.lumeshotAsset != null) {
      this.showToggleLume = true;
    }
  }

  toggleAsset() {
    this.showPrimaryAsset = !this.showPrimaryAsset;
    this.showLumeAsset = !this.showLumeAsset;
  }

  toggleMarked() {
    this.watch.isMarked = !this.watch.isMarked;
  }

  navigateDetail() {
    const options: NavigationExtras = {
        queryParams: {
            id: this.watch.id
        }
    };

    this.navCtrl.navigateForward(['/watch-detail'], options);
  }

}
