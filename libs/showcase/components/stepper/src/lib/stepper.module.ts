import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';

import { SharedModule } from '@showcase/shared';
import { StepperComponent } from './stepper.component';

@NgModule({
  imports: [
    SharedModule,
    MatStepperModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StepperComponent
      },
    ])
  ],
  declarations: [StepperComponent]
})
export class StepperModule { }
