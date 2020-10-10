import { Component, OnInit, HostBinding, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { ColumnsService } from '../service/columns.service';

@Component({
  selector: 'sof-sub-form',
  template: `
   <div>
     <div *ngIf="title != null" class="sub-form-title">{{title}}</div>
   </div>
   <div [class]="borderStyle">
     <div class="form-horizontal">
        <div class="form-group row">
            <ng-content></ng-content>
        </div>
     </div>
     <ng-content select="sof-form-buttons"></ng-content>
   </div>
  `,
  styles: [`
    .sub-form-title {
       font-size: 23px !important;
       font-size: 1.25em !important;
       font-weight: 300 !important;
       padding: 5px 0 !important;
       color: #363638 !important;
       width: 100% !important;
       clear: both !important;
       margin: 0 !important;
       text-transform: uppercase;
    }
    .marging-2 {
       margin: 1em !important;
    }
    .marging-flex {
       padding-right: 15px !important;
       padding-left: 15px !important;
    }
  `],
  providers: [ColumnsService]
})
export class SofSubForm implements OnInit {

  public columns: number = 1;

  @Output() columnChange = new EventEmitter();

  @Input() get column() { return this.columns }

  set column(column) {
    this.columns = column;
    this.columnChange.emit(this.columns);
    this.data.changeColumns(this.columns);
  }

  @Input() title: string;
  @Input() border: boolean = false;
  @Input() flexible: boolean = false;
  @HostBinding('class') public classes: String = '';

  constructor(private data: ColumnsService, private _host: ElementRef) { }

  ngOnInit() {
    this.data.changeColumns(this.columns);
    this.setWidth();
    this.data.currentColumns.subscribe(columns => {
      this.columns = columns;
      this.setWidth();
    });
  }

  setWidth() {
    switch (+this.columns) {
      case 0: this.classes = "col-lg-11 offset-lg-1";
        break;
      case 1: this.classes = "col-lg-9 offset-lg-1";
        break;
      default:
        this.classes = "col-12"
        break;
    }
  }

  get borderStyle() {
    switch (+this.columns) {
      case 0: return this.border == true ? "border padding-15 border-radius bg-white marging-2" : "padding-15 marging-2";
      default:
        return this.border == true ? "border padding-15 border-radius bg-white marging-2" : "marging-2";
    }
  }

}
