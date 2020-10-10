import { Component, OnInit, HostBinding, Input, AfterViewInit } from '@angular/core';
import { ColumnsService } from '../service/columns.service';

@Component({
  selector: 'sof-form-item',
  template: `
   <ng-content> </ng-content>
   <p *ngIf="!valid">
       <i class="icons icon-cancel color-error"></i>
       <small class="color-error">{{errorMsg ? errorMsg : "error !"}}</small>
   </p>
  `,
  styles: [`
    p[id='message'] {
      visibility: hidden;
      position: fixed !important;
      display: contents;
    }

    p[id='message'].valid-touched {
      visibility: visible;
      position: fixed !important;
      display: contents;
    }
  `]
})
export class SofFormItem implements OnInit {

  @Input() columns: number = 1;
  @Input() valid: boolean = true;
  @Input() errorMsg: string;
  @HostBinding('class') public itemClasses: String = '';

  constructor(private data: ColumnsService) { }

  ngOnInit() {
    this.data.currentColumns.subscribe(columns => {
      this.setColumns(columns);
    })
  }

  setColumns(columns) {
    this.columns = columns;
    switch (+this.columns) {
      case 0: this.itemClasses = this.itemClasses = "col-md-11";
        break;
      case 1: this.itemClasses = "col-md-9";
        break;
      case 2: this.itemClasses = "col-sm-12 col-md-4 col-lg-4 col-xl-4";
        break;
      case 3: this.itemClasses = "col-sm-12 col-md-2 col-lg-2 col-xl-2";
        break;
      case 4: this.itemClasses = "col-sm-12 col-md-2 col-lg-2 col-xl-2";
        break;
      case 6: this.itemClasses = "col-sm-12 col-md-2 col-lg-2 col-xl-1";
        break;
      default:
        this.itemClasses = "col-md-9";
        break;
    }
  }

}
