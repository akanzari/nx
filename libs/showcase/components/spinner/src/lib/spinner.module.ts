import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofSpinnerModule } from 'ng-softilys/spinner';

import { SharedModule } from '@showcase/shared';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [
    SharedModule,
    SofSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SpinnerComponent
      },
    ])
  ],
  declarations: [SpinnerComponent]
})
export class SpinnerModule {}
