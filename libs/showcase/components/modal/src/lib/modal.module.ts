import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofModalModule } from 'ng-softilys/modal';
import { SofCalendarModule } from 'ng-softilys/calendar';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';

import { SharedModule } from '@showcase/shared';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    SharedModule,
    SofModalModule,
    SofCheckBoxModule,
    SofCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ModalComponent
      },
    ])
  ],
  declarations: [ModalComponent]
})
export class ModalModule {}
