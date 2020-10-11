import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTableModule } from 'ng-softilys/table';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';

import { SharedModule } from '@showcase/shared';
import { TableComponent } from './table.component';
import { DisplayPipe } from './display.pipe';

@NgModule({
  imports: [
    SharedModule,
    SofTableModule,
    SofCheckBoxModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TableComponent
      },
    ])
  ],
  declarations: [TableComponent, DisplayPipe]
})
export class TableModule {}
