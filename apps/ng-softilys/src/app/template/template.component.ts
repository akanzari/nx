import { Component } from '@angular/core';
import { LayoutService } from 'ng-softilys/api';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  constructor(public ls: LayoutService) { }

}
