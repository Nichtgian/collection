import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Case } from 'src/app/data/models/case/case.model';

@Component({
  selector: 'app-case-preview',
  templateUrl: './case-preview.component.html',
  styleUrls: ['./case-preview.component.scss'],
})
export class CasePreviewComponent implements OnInit {
  
  @Input() case: Case;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  toggleMarked() {
    this.case.isMarked = !this.case.isMarked;
  }

  navigateDetail() {
    const options: NavigationExtras = {
        queryParams: {
            id: this.case.id
        }
    };

    this.navCtrl.navigateForward(['/case-detail'], options);
  }

}
