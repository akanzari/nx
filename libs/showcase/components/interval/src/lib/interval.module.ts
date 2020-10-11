import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofIntervalModule } from 'ng-softilys/interval';

import { SharedModule } from '@showcase/shared';
import { IntervalComponent } from './interval.component';

@NgModule({
  imports: [
    SharedModule,
    SofIntervalModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IntervalComponent
      },
    ])
  ],
  declarations: [IntervalComponent]
})
export class IntervalModule {}
