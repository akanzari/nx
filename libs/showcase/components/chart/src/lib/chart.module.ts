import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SofChartModule } from 'ng-softilys/chart';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';
import { SofStatusBarModule } from 'ng-softilys/statusbar';

import { SharedModule } from '@showcase/shared';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    SharedModule,
    SofChartModule,
    SofCheckBoxModule,
    SofStatusBarModule,
    ColorPickerModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ChartComponent
      },
    ])
  ],
  declarations: [ChartComponent]
})
export class ChartModule { }
