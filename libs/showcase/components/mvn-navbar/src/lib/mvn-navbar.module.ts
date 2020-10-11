import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdlNavbarModule } from 'ng-softilys/mdl-navbar';

import { SharedModule } from '@showcase/shared';
import { MvnNavbarComponent } from './mvn-navbar.component';

@NgModule({
  imports: [
    SharedModule,
    MdlNavbarModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MvnNavbarComponent
      },
    ])
  ],
  declarations: [MvnNavbarComponent]
})
export class MvnNavbarModule {}
