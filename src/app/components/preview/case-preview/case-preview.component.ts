import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/data/models/case/case.model';

@Component({
  selector: 'app-case-preview',
  templateUrl: './case-preview.component.html',
  styleUrls: ['./case-preview.component.scss'],
})
export class CasePreviewComponent implements OnInit {

  case: Case = new Case("Large main storage case", "Pelicase", 2, 5)

  constructor() { }

  ngOnInit() {}

}
