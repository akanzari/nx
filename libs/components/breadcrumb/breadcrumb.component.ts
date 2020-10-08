import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sof-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() iconSize: string;
  @Input() breadstyle: string;
  constructor() { }

  ngOnInit() {

  }

}
