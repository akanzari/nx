import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTooltipModule } from 'ng-softilys/tooltip';

import { SharedModule } from '@showcase/shared';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    SharedModule,
    SofTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TooltipComponent
      },
    ])
  ],
  declarations: [TooltipComponent]
})
export class TooltipModule {}
