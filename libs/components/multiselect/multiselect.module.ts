import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiSelectComponent } from './multiselect.component';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgSelectModule,
        SofCheckBoxModule
    ],
    declarations: [ MultiSelectComponent],
    exports: [MultiSelectComponent]
})
export class SofMultiSelectModule { }
