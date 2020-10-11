import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTableModule } from 'ng-softilys/table';
import { SofMultiSelectModule } from 'ng-softilys/multiselect';

import { SharedModule } from '@showcase/shared';
import { MultiSelectComponent } from './multiselect.component';

@NgModule({
  imports: [
    SharedModule,
    SofTableModule,
    SofMultiSelectModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MultiSelectComponent
      },
    ])
  ],
  declarations: [MultiSelectComponent]
})
export class MultiselectModule {}
