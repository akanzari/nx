import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sof-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.alertColor && changes.alertColor.currentValue != "error") {


      this.alert = true

    }
  }
  @Input() test: string;
  @Input() head: Boolean;
  @Input() label: Boolean;
  @Input() cardLabel: string;
  @Input() lbColor: string;
  @Input() icone: Boolean;
  @Input() Texticon: string;
  @Input() action1: Boolean;
  @Input() action2: Boolean;
  @Input() action3: Boolean;
  @Input() nbrbuttons: number;
  @Input() Type1: string;
  @Input() Type2: string;
  @Input() Type3: string;
  @Input() types: any[];
  @Input() alert: Boolean = false;
  @Input() alertColor: string;
  @Output() onClick1 = new EventEmitter();
  @Output() onClick2 = new EventEmitter();
  @Output() onClick3 = new EventEmitter();
  @Output() init = new EventEmitter();

  @Input() messageAlert: string;

  tab(x: number) {
    let tab = []
    if (x > 0) {
      for (let i = 0; i < x; i++) {
        tab.push(1)
      }
    }
    return tab
  }

  ngAfterViewInit() {

  }

  getlbClass() {
    return "label label-" + this.lbColor;
  }
  getalertClass() {
    return "alert alert-" + this.alertColor;
  }
  geticonClass() {
    return "icons color-primary icon-" + this.Texticon;
  }
  getTypeClass() {
    return "icons color-text icon-" + this.Type1;
  }
  getTypeClass2() {
    return "icons color-text icon-" + this.Type2;
  }
  getTypeClass3() {
    return "icons color-text icon-" + this.Type3;
  }

  closeAlert() {
    this.alert = false;


  }

  constructor() { }

  ngOnInit() {

  }

}
