import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnChanges, SimpleChanges, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-cards',
  template: `
  <div class="card card-bordered">
    <div class="card-header">
        <div class="card-actions card-icons">
            <ul>
                <li><a><i *ngIf="action1" (click)="onClick1.emit()" [class]="getTypeClass()"></i></a></li>
                <li><a><i *ngIf="action2" (click)="onClick2.emit()" [class]="getTypeClass2()"></i></a></li>
                <li><a><i *ngIf="action3" (click)="onClick3.emit()" [class]="getTypeClass3()"></i></a></li>
            </ul>
        </div>
        <h3 class="card-title"><i [class]="geticonClass()" aria-hidden="true" *ngIf="icone"></i>{{test}} <span
                [class]="getlbClass()" *ngIf="label"> {{cardLabel}}</span></h3>
    </div>
    <div class="card-body">
        <div id="alert" [class]="getalertClass()" *ngIf="alert" role="alert">
            <button type="button" class="close" aria-label="Close" (click)="closeAlert();init.emit()">
                <span aria-hidden="true">&times;</span>
            </button>
            {{messageAlert}}
        </div>
        <ng-content select="body">
        </ng-content>
    </div>
    <div class="card-footer" *ngIf="head">
        <ng-content select="footer"></ng-content>
    </div>
</div>
  `,
  styleUrls: ['./card.scss']
})
export class CardComponent implements OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.alertColor && changes.alertColor.currentValue != "error") {
      this.alert = true
    }
  }

  tab(x: number) {
    let tab = []
    if (x > 0) {
      for (let i = 0; i < x; i++) {
        tab.push(1)
      }
    }
    return tab
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

}

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class SofCardsModule { }