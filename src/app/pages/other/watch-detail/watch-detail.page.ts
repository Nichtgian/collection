import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Watch } from 'src/app/data/models/watch/watch.model';
import { WatchModelService } from 'src/app/data/services/model/watch-model.service';
import { SELECTION } from 'src/app/data/types/constants/selection.constant';

@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.page.html',
  styleUrls: ['./watch-detail.page.scss'],
})

export class WatchDetailPage implements OnInit {

  id: string = null;
  watch: Watch = null;
  placeholder: Watch = null;
  selection: object = SELECTION;

  constructor(private watchService: WatchModelService, private route: ActivatedRoute, public actionSheetController: ActionSheetController) {
    this.watch = new Watch("", "");
    this.placeholder = this.watchService.getPlaceholder();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
    });

    if (this.id == null || this.id == undefined) {

    }
    else {
      this.initialize();
    }
  }

  async initialize(): Promise<any> {
    this.watch = await this.watchService.get(this.id);
  }

  async openActionSheet(): Promise<any> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Settings', icon: 'build-outline', handler: () => {
          console.log('Settings clicked');
        }
      }, {
        text: 'Delete', icon: 'trash-outline', role: 'destructive', handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share', icon: 'share-outline', handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel', icon: 'close-outline', role: 'cancel', handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss();
  }

  async save(): Promise<any> {
    this.watchService.save();
  }

}
