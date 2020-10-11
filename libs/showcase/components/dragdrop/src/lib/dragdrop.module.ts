import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTableModule } from 'ng-softilys/table';
import { SofDragDropModule } from 'ng-softilys/dragdrop';
import { SofRadioButtonModule } from 'ng-softilys/radio-button';

import { SharedModule } from '@showcase/shared';
import { DragDropComponent } from './dragdrop.component';

@NgModule({
  imports: [
    SharedModule,
    SofTableModule,
    SofDragDropModule,
    SofRadioButtonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DragDropComponent
      },
    ])
  ],
  declarations: [DragDropComponent]
})
export class DragdropModule { }
