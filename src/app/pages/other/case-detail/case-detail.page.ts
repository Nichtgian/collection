import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Case } from 'src/app/data/models/case/case.model';
import { Layer } from 'src/app/data/models/case/layer.model';
import { CaseModelService } from 'src/app/data/services/model/case-model.service';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.page.html',
  styleUrls: ['./case-detail.page.scss'],
})

export class CaseDetailPage implements OnInit {
  
  id: string = null;
  case: Case;
  layer: Layer;

  constructor(private caseService: CaseModelService, private route: ActivatedRoute, public actionSheetController: ActionSheetController) {}

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
    this.case = await this.caseService.get(this.id);
    this.layer = this.case.layers[0];
  }
  
  async openActionSheet() {
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
    const { role } = await actionSheet.onDidDismiss();
  }

  async save(): Promise<any> {
    this.caseService.save();
  }

  switchLayer(layerTitle: string): void {
    this.layer = this.case.layers.find(x => x.title == layerTitle);
  }
}
