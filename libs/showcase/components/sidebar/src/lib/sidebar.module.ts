import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofSidebarModule } from 'ng-softilys/sidebar';
import { SofModalModule } from 'ng-softilys/modal';
import { SofTableModule } from 'ng-softilys/table';

import { SharedModule } from '@showcase/shared';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    SofSidebarModule,
    SofModalModule,
    SofTableModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SidebarComponent
      },
    ])
  ],
  declarations: [SidebarComponent]
})
export class SidebarModule {}
