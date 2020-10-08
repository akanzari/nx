import { Component, OnInit, Input } from '@angular/core';
import { StatusBar } from './model/statusBarModel';

@Component({
  selector: 'sof-status-bar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusBarComponent implements OnInit {
  // @Input() progressColor;
  // @Input() Value;
  @Input() data: StatusBar[];
  public somme: number = 0;
  public firstCalcul: boolean = false;
  // @Input()
  // widthSubdivision: number;
  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.data.length; i++) {
      this.somme += this.data[i].value;
    }
  }
  // getColor() {
  //   if (this.progressColor === 'progress-primary')
  //     return 'progress-primary';
  //   else if (this.progressColor === 'progress-secondary')
  //     return 'progress-secondary';
  //   else if (this.progressColor === 'progress-error')
  //     return 'progress-error';
  //   else if (this.progressColor === 'progress-valid')
  //     return 'progress-valid';
  // }


  getWidth(value) {
    return ((value / this.getSomme()) * 100)

  }
  getColor(Color) {
    return Color;
  }
  getSomme() {
    this.somme = 0;
    for (let i = 0; i < this.data.length; i++) {
      this.somme = this.somme + parseInt(this.data[i].value.toString());
    }
    return this.somme;
  }
}
