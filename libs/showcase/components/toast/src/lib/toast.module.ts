import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofToastModule } from 'ng-softilys/toast';

import { SharedModule } from '@showcase/shared';
import { ToastComponent } from './toast.component';

@NgModule({
  imports: [
    SharedModule,
    SofToastModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ToastComponent
      },
    ])
  ],
  declarations: [ToastComponent]
})
export class ToastModule {}
