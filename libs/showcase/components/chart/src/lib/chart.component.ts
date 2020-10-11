import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';
import { FormBuilder } from '@angular/forms';
import { SofChart } from 'ng-softilys/chart';
import { StatusBar } from 'ng-softilys/statusbar';

@Component({
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [HighlightService]
})
export class ChartComponent implements OnInit {

  @ViewChild('chart', { read: SofChart }) chart: SofChart;

  color1: any = "#ccb581"
  color2: any = "#3AA99E"
  color3: any = "#e9595b"
  color4: any = "#494c56"
  color5: any = "#437f9f"
  color6: any = "#f2f2F2"
  options: any;
  displaylegend: boolean;
  mixte: boolean = false;
  nombreSub: number = 3;
  nombreSubList: StatusBar[] = [{ value: 100, color: '#ccb581 ' }, { value: 100, color: '#3AA99E ' }, { value: 100, color: '#e9595b ' }];
  couleurOptions: any[] = [{ label: 'primary', value: 'progress-primary' }, { label: 'secondary', value: 'progress-secondary' }, { label: 'error', value: 'progress-error' }, { label: 'valid', value: 'progress-valid' }];
  /*  widthSubdivision: any[] = [];
   defaultValues: any[] = []; */
  somme: number = 100;
  firstCalcul: boolean = false;

  type = 'pie'
  nbSubdivision = 3
  colors = ["#baa365", "#494c56", "#e9595b", "#3AA99E", "#f2f2F2", "#ffffff"]

  data: any
  sub1 = { value: 0, tag: "", predefinedColor: "autre", freeColor: "#ab9d3f" }
  sub2 = { value: 0, tag: "", predefinedColor: "autre", freeColor: "#ab9d3f" }
  sub3 = { value: 0, tag: "", predefinedColor: "autre", freeColor: "#ab9d3f" }
  sub = { value: 1, tag: "", predefinedColor: "autre", freeColor: "#ab9d3f" }

  subDivisions = []

  constructor(private fb: FormBuilder, @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.highlightAll();
    this.data = {
      labels: ['subdivision 0', 'subdivision 1', 'subdivision 2'],
      datasets: [
        {
          label: 'My Dataset',
          data: [30, 40, 30],
          backgroundColor: [
            "primary",
            "valid",
            "error"
          ]
        }
      ]
    }
    this.sub1.value = 30;
    this.sub1.tag = 'subdivision 1'
    this.sub1.freeColor = "#ccb581"
    this.sub2.value = 40;
    this.sub2.tag = 'subdivision 2'
    this.sub2.freeColor = "#3AA99E"
    this.sub3.value = 30;
    this.sub3.tag = 'subdivision 3'
    this.sub3.freeColor = "#e9595b"
    this.subDivisions = [this.sub1, this.sub2, this.sub3];
    this.options = {
      legend: {
        position: 'bottom',
        display: this.displaylegend
      }
    };
  }

  changedisplay() {
    console.log(this.options)
    this.options = {
      legend: {
        position: 'bottom',
        display: this.displaylegend
      }
    }
  }

  subdivision(event) {
    if (event.target.value !== null) {
      this.nombreSubList = new Array(this.nombreSub);
      /* this.widthSubdivision = [];
      this.defaultValues = []; */
      this.somme = 0;
      for (let i = 0; i < this.nombreSub; i++) {
        this.nombreSubList[i] = new StatusBar();
        this.nombreSubList[i].value = 0;
        this.nombreSubList[i].color = "#ffffff";
        /*   this.widthSubdivision.push(0);
          this.defaultValues.push(0); */
      }
    }
    if (event.target.value === '') {
      this.nombreSub = 1;
      this.nombreSubList = [{ value: 100, color: 'progress-primary' }];
    }
  }

  onTypeChange() {
    this.subDivisions = [this.sub1, this.sub2, this.sub3]
    if (this.type == 'pie' || this.type == 'doughnut' || this.type == 'polarArea') {
      this.data = {
        labels: ['subdivision 0', 'subdivision 1', 'subdivision 2'],
        datasets: [
          {
            label: 'My Dataset',
            data: [30, 40, 30],
            backgroundColor: [
              "primary",
              "valid",
              "error"
            ]
          }
        ]
      }
    }
    if (this.type == 'radar') {
      setTimeout(() => {
        this.data = {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
        };
      }, 100)
    }
    if (this.type == "bar" && this.mixte) {
      setTimeout(() => {
        this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              type: 'line',
              label: 'First Dataset',
              data: [0, 65, 59, 80, 81, 56, 55, 40],
              fill: true,
              // borderColor: '#4bc0c0',
              // backgroundColor: '#4bc0c0',
              backgroundColor: [
                'rgba(75,192,192, 0.2)',

              ],
              borderColor: [
                'rgba(75,192,192,1)',
              ],
            },
            {
              type: 'bar',
              label: 'My First dataset',
              backgroundColor: [
                'rgba(228,192,192, 0.2)',
              ],
              borderColor: [
                'rgba(75,192,192,1)',
              ],
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        }
      }, 500)
    }
    if (this.type == "bar") {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            backgroundColor: [
              'rgba(228,192,192, 0.2)',

            ],
            borderColor: [
              'rgba(75,192,192,1)',
            ],
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }
    if (this.type == "line") {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'primary'
          }
        ]
      }
    }
    this.reDrawChart()
  }

  reDrawChart() {
    setTimeout(() => {
      this.chart && this.chart.reDraw()
    }, 100);
  }


  onChange() {
    this.subDivisions = []
    let labelss = []
    for (let i = 0; i < this.nbSubdivision; i++) {
      this.subDivisions.push({ value: 10, tag: "subdivision " + i, predefinedColor: "autre", freeColor: this.colors[i % 6] })
    }
    this.reorderData()
  }

  reorderData() {
    setTimeout(() => {
      this.data.datasets[0].data = []
      this.data.datasets[0].backgroundColor = []
      this.data.labels = []
      for (let x of this.subDivisions) {
        this.data.labels.push(x.tag)
        this.data.datasets[0].data.push(x.value)
        this.data.datasets[0].backgroundColor.push(x.predefinedColor === 'autre' ? x.freeColor : x.predefinedColor)
      }
    }, 100);
  }

  getPrerequis() {
    if (this.type == 'statusBar') {
      this.highlightService.highlightAll();
      return `
      import { SofStatusBarModule } from 'framework-front-softilys';
      imports : [SofStatusBarModule ];`
    }
    let res = "\n// Dans le fichier angular.json, ajouter:\n"
    res += '    "scripts": ["../webapp/node_modules/chart.js/dist/Chart.js"]\n\n\n//Dans app.module.ts, ajouter:\n'
    res += "    import {SofChartModule} from 'framework-front-softilys';\n    import : [SofChartModule];"
    return res
  }

  getHtmlCode() {
    if (this.type == 'statusBar') {
      this.highlightService.highlightAll();
      return "\n &lt;sof-status-bar " + (this.nombreSubList ? "[data]=\"nombreSubList\"" : '')
        + "> &lt;/sof-status-bar>";
    }
    this.highlightService.highlightAll();
    return '\n&lt!--This button is used to redraw the chart.  You may not use this button and use the function reDrawChart() somewhere else -->' +
      '\n&lt;sof-button bgColor="primary" [width]="100" (click)="reDrawChart()">Draw&lt;/sof-button>' + '\n &lt;sof-chart #chart type=' + JSON.stringify(this.type) +
      ' [datas]="data"  [displaylegend]="' + (this.displaylegend) + '" >&lt;/sof-chart>'
  }

  getData() {
    let res = ''
    Object.keys(this.data).forEach(key => {
      res += this.data[key]
    });
    return res
  }

  getTsCode() {
    if (this.type == 'statusBar') {
      this.highlightService.highlightAll();
      return "\n nombreSubList=" + JSON.stringify(this.nombreSubList) + ";";
    }
    if (this.mixte) {
      return `\n data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {type: 'line',
    label: 'First Dataset',
    data: [0,65, 59, 80, 81, 56, 55, 40],
    fill: true,
    // borderColor: '#4bc0c0',
    // backgroundColor: '#4bc0c0',
    backgroundColor: [
      'rgba(75,192,192, 0.2)',
  
  ],
  borderColor: [
      'rgba(75,192,192,1)',
     
  ],
    
  },
      {
        type: 'bar',
          label: 'My First dataset',
          backgroundColor: [
            'rgba(228,192,192, 0.2)',
        
        ],
        borderColor: [
            'rgba(75,192,192,1)',
           
        ],
          data: [65, 59, 80, 81, 56, 55, 40]
      }
     
  ]
}  }`
    }
    let datas = { labels: this.data.labels, datasets: this.data.datasets }
    // let pieData=JSON.stringify(this.data).normalize()
    return "\n@ViewChild('chart', { read: SofChart }) chart: SofChart;" +
      "\n\ndisplaylegend:boolean=" + (this.displaylegend) + ";" +
      "\n\ndata={\n    labels:" + JSON.stringify(datas.labels) + ",\n    datasets:" + JSON.stringify(datas.datasets, ['label', 'data', 'backgroundColor', 'hoverBackgroundColor', 'borderColor', 'pointBackgroundColor', 'pointBorderColor', 'pointHoverBackgroundColor', 'pointHoverBorderColor']) + "\n}" +
      "\n\nreDrawChart(){\n   setTimeout(() => {this.chart.reDraw()}, 100);\n  }" + '\n\n' +
      '//implement it in ngOnInit() : \n' +
      ' this.options = { \n' +

      ' legend: {\n' +
      'position: "bottom",\n' +
      'display:this.displaylegend \n' +
      '},\n' +
      'scales: {\n' +
      'yAxes: [{\n' +
      'ticks: {\n' +
      'beginAtZero: true\n' +
      ' }\n' +
      '}]\n' +
      '}}; \n';
  }

  SelectAllPre(): void {}

  SelectAll(): void {}

  SelectAllTs(): void {}

}
