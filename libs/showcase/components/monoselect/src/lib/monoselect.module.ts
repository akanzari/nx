import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTableModule } from 'ng-softilys/table';
import { SofRadioButtonModule } from 'ng-softilys/radio-button';

import { SharedModule } from '@showcase/shared';
import { MonoselectComponent } from './monoselect.component';

@NgModule({
  imports: [
    SharedModule,
    SofTableModule,
    SofRadioButtonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MonoselectComponent
      },
    ])
  ],
  declarations: [MonoselectComponent]
})
export class MonoselectModule {}
