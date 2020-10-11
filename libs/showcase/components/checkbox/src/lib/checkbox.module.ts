import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';

import { SharedModule } from '@showcase/shared';
import { CheckBoxComponent } from './checkbox.component';

@NgModule({
  imports: [
    SharedModule,
    SofCheckBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CheckBoxComponent
      },
    ])
  ],
  declarations: [CheckBoxComponent]
})
export class CheckboxModule {}
