import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTextAreaModule } from 'ng-softilys/textarea';

import { SharedModule } from '@showcase/shared';
import { TextAreaComponent } from './textarea.component';

@NgModule({
  imports: [
    SharedModule,
    SofTextAreaModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TextAreaComponent
      },
    ])
  ],
  declarations: [TextAreaComponent]
})
export class TextareaModule {}
