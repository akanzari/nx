import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofUploadModule } from 'ng-softilys/upload';

import { SharedModule } from '@showcase/shared';
import { UpdateComponent } from './upload.component';

@NgModule({
  imports: [
    SharedModule,
    SofUploadModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UpdateComponent
      },
    ])
  ],
  declarations: [UpdateComponent]
})
export class UploadModule {}
