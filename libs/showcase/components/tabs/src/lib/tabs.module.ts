import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofTabsModule } from 'ng-softilys/tabs';

import { SharedModule } from '@showcase/shared';
import { TabsComponent } from './tabs.component';

@NgModule({
  imports: [
    SharedModule,
    SofTabsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TabsComponent
      },
    ])
  ],
  declarations: [TabsComponent]
})
export class TabsModule {}
