import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MonoselectComponent } from './monoselect.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule
    ],
    declarations: [MonoselectComponent],
    exports: [MonoselectComponent]
})
export class SofMonoSelectModule { }
