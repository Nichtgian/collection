import { Component, Input, OnInit } from '@angular/core';
import { Watch } from 'src/app/data/models/watch/watch.model';

@Component({
  selector: 'app-watch-preview',
  templateUrl: './watch-preview.component.html',
  styleUrls: ['./watch-preview.component.scss'],
})

export class WatchPreviewComponent implements OnInit {
  @Input() watch: Watch;
  showToggleLume: boolean = false;
  showPrimaryAsset: boolean = true;
  showLumeAsset: boolean = false;

  constructor() {}

  ngOnInit() {
    console.log(this.watch);
    if (this.watch.lumeshotAsset != null) {
      this.showToggleLume = true;
    }
  }

  toggleAsset() {
    this.showPrimaryAsset = !this.showPrimaryAsset;
    this.showLumeAsset = !this.showLumeAsset;

    console.log(this.showPrimaryAsset + " " + this.showLumeAsset)
  }

  toggleMarked() {
    this.watch.isMarked = !this.watch.isMarked;
  }

}
