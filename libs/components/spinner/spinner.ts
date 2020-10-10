import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sof-spinner',
  template: `
    <ngx-spinner  bdColor="rgba(4, 4, 4, 0.68)"  size={{spinnerSize}} [fullScreen]="false" [color]="getColor()" [type]="getType()"></ngx-spinner>
  `,
  styleUrls: ['./spinner.scss']
})
export class SofSpinner {

  @Input() spinnerType: string;
  @Input() spinnerSize: string;
  @Input() spinnerColor: string;

  constructor(private spinner: NgxSpinnerService) { }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  getColor() {
    if (this.spinnerColor === "primary")
      return '#d8c392';
    else if (this.spinnerColor === "secondary")
      return '#494c56';
    else if (this.spinnerColor === "default")
      return '#e0e0e0';
    else if (this.spinnerColor === "white")
      return '#ffffff';
  }

  getType() {
    if (this.spinnerType === "ball-scale-pulse")
      return 'ball-scale-pulse';
    else
      return 'ball-clip-rotate';
  }

}

@NgModule({
  imports: [NgxSpinnerModule, CommonModule, FormsModule],
  declarations: [SofSpinner],
  exports: [SofSpinner]
})
export class SofSpinnerModule { }