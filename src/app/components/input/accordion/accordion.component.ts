import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  @Input() title: string;
  @Input() isExpanded: boolean = false;
  isClosed: boolean = true;

  constructor() { }

  ngOnInit() {
    this.isClosed = !this.isExpanded;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.isClosed = !this.isExpanded;
  }

}
