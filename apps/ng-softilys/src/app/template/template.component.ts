import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'ng-softilys/api';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(public ls: LayoutService) { }

  ngOnInit(): void {
  }

}
