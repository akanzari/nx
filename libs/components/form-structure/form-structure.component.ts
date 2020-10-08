import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sof-form',
  templateUrl: './form-structure.component.html',
  styleUrls: ['./form-structure.component.scss']
})
export class FormStructureComponent implements OnInit {

  @Input() columns: number = 1;
  @Input() title: string;
  @Input() border: boolean = false;

  ngOnInit() {
  }

  get borderStyle() {
    return this.border ? "border padding-15 border-radius bg-white " : "";
  }
}
