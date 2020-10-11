import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTreeModule } from 'ng-softilys/tree';

import { SharedModule } from '@showcase/shared';
import { TreeComponent } from './tree.component';

@NgModule({
  imports: [
    SharedModule,
    SofTreeModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TreeComponent
      },
    ])
  ],
  declarations: [TreeComponent]
})
export class TreeModule {}
