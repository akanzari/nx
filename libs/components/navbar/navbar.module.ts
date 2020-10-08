import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar.component'
import { SofFormStructureModule } from '../form-structure/form-structure.module';
import { SofCheckBoxModule } from '../checkbox/checkbox.module';
import { SofInputModule } from '../input/input.module';
import { SofButtonModule } from '../button/button.module';

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
