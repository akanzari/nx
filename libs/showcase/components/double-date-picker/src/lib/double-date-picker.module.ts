import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofDoubleDatePickerModule } from 'ng-softilys/double-date-picker';

import { SharedModule } from '@showcase/shared';
import { DoubleDatePickerComponent } from './double-date-picker.component';

@NgModule({
  imports: [
    SharedModule,
    SofDoubleDatePickerModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DoubleDatePickerComponent
      },
    ])
  ],
  declarations: [DoubleDatePickerComponent]
})
export class DoubleDatePickerModule {}
