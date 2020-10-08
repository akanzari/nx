import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'sof-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() spinnerType: string;
  @Input() spinnerSize: string;
  @Input() spinnerColor: string;



  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {



  }

  // try() {
  //   this.spinner.hide();
  // }

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
