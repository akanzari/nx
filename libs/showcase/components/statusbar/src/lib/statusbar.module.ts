import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SofStatusBarModule } from 'ng-softilys/statusbar';

import { SharedModule } from '@showcase/shared';
import { StatusBarComponent } from './statusbar.component';

@NgModule({
  imports: [
    SharedModule,
    SofStatusBarModule,
    ColorPickerModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StatusBarComponent
      },
    ])
  ],
  declarations: [StatusBarComponent]
})
export class StatusbarModule { }
