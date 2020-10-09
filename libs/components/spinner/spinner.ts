import { Component, OnInit, Input, NgModule } from '@angular/core';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sof-spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.scss']
})
export class SpinnerComponent {

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
  imports: [
    NgxSpinnerModule,
    CommonModule,
    FormsModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SofSpinnerModule { }