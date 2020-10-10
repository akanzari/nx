import { Component, OnInit, Input, SimpleChanges, ViewChild, OnChanges, NgModule } from '@angular/core';
import { UIChart, ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-chart',
  template: `<p-chart #chart [type]="type" [data]="data0" [options]="options">Redessiner</p-chart>`
})
export class SofChart implements OnInit, OnChanges {

  @ViewChild('chart', { read: UIChart }) chart: UIChart;

  @Input() type;
  @Input() displaylegend;
  @Input() datas;
  @Input() options: any;

  data0: any

  ngOnInit() {
    this.data0 = this.datas
    this.reorder()
    this.options;
  }

  ngOnChanges() {
    this.data0 = this.datas
    this.reorder()
  }

  public reDraw() {
    this.data0 = this.datas
    this.reorder()
  }

  reorder() {
    let newData = { labels: this.datas.labels, datasets: this.datas.datasets }
    for (let i = 0; i < newData['datasets'].length; i++) {
      for (let colorRole of ['backgroundColor', 'hoverBackgroundColor', 'borderColor', 'pointBackgroundColor', 'pointBorderColor', 'pointHoverBackgroundColor', 'pointHoverBorderColor']) {
        newData['datasets'][i]['colorRole'] = []
      }
    }
    let j = 0
    for (let dataSet of this.datas.datasets) {
      for (let colorRole of ['backgroundColor', 'hoverBackgroundColor', 'borderColor', 'pointBackgroundColor', 'pointBorderColor', 'pointHoverBackgroundColor', 'pointHoverBorderColor']) {
        if (dataSet[colorRole]) {
          let newColors;
          if ((typeof dataSet[colorRole]) === 'string') {
            newColors = dataSet[colorRole]
            if (newColors === 'primary') {
              newColors = "#baa365"
            }
            if (newColors === 'secondary') {
              newColors = "#494c56"
            }
            if (newColors === 'error') {
              newColors = "#e9595b"
            }
            if (newColors === 'valid') {
              newColors = "#3AA99E"
            }
            if (newColors === 'default') {
              newColors = "#f2f2F2"
            }
            if (newColors === 'white') {
              newColors = "#ffffff"
            }
          }
          else {
            newColors = []
            for (let color of dataSet[colorRole]) {
              let test = true
              if (color === "primary") {
                newColors.push("#baa365")
                test = false
              }
              if (color === "secondary") {
                newColors.push("#494c56")
                test = false
              }
              if (color === "error") {
                newColors.push("#e9595b")
                test = false
              }
              if (color === "valid") {
                newColors.push("#3AA99E")
                test = false
              }
              if (color === "default") {
                newColors.push("#f2f2F2")
                test = false
              }
              if (color === "white") {
                newColors.push("#ffffff")
                test = false
              }
              if (test) {
                newColors.push(color)
              }
            }
          }
          newData['datasets'][j][colorRole] = newColors
        }
      }
      j++
    }
    this.data0 = {
      labels: newData['labels'],
      datasets: newData['datasets']
    }
  }

}

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [SofChart],
  exports: [SofChart]
})
export class SofChartModule { }