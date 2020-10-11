import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@showcase/shared';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: InputComponent
      },
    ])
  ],
  declarations: [InputComponent]
})
export class InputModule {}
