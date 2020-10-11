import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@showcase/shared';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TypographyComponent
      },
    ])
  ],
  declarations: [TypographyComponent]
})
export class TypographyModule {}
