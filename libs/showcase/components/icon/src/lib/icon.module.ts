import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@showcase/shared';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: IconComponent
      },
    ])
  ],
  declarations: [IconComponent]
})
export class IconModule {}
