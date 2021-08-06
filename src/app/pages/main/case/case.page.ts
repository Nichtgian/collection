import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Case } from 'src/app/data/models/case/case.model';
import { CaseModelService } from 'src/app/data/services/model/case-model.service';

@Component({
  selector: 'page-case',
  templateUrl: './case.page.html',
  styleUrls: ['./case.page.scss'],
})

export class CasePage implements OnInit {

  cases: Case[] = [];

  constructor(private caseService: CaseModelService, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.cases = this.caseService.getAll();
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Create', icon: 'add-outline', handler: () => {
          console.log('Add clicked');
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

}
