import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofNavbarModule } from 'ng-softilys/navbar';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';
import { MdlNavbarModule } from 'ng-softilys/mdl-navbar';

import { SharedModule } from '@showcase/shared';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    SharedModule,
    SofNavbarModule,
    SofCheckBoxModule,
    MdlNavbarModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: NavbarComponent
      },
    ])
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule {}
