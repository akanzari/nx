import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofCalendarModule } from 'ng-softilys/calendar';

import { SharedModule } from '@showcase/shared';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    SharedModule,
    SofCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CalendarComponent
      },
    ])
  ],
  declarations: [CalendarComponent]
})
export class CalendarModule { }
