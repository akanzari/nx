import { Component, OnInit, Input, NgModule } from '@angular/core';
import { StatusBar } from './model/statusBarModel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sof-status-bar',
  templateUrl: './statusbar.html',
  styleUrls: ['./statusbar.scss']
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

@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [StatusBarComponent],
  exports: [StatusBarComponent]
})
export class SofStatusBarModule { }