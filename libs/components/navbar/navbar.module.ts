import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component'
import { SofFormStructureModule } from 'ng-softilys/form-structure';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';
import { SofInputModule } from 'ng-softilys/input';
import { SofButtonModule } from 'ng-softilys/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SofFormStructureModule,
        SofInputModule,
        SofButtonModule,
        SofCheckBoxModule
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class SofNavbarModule { }
