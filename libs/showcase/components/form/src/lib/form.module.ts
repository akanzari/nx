import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@showcase/shared';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FormComponent
      },
    ])
  ],
  declarations: [FormComponent]
})
export class FormModule {}
