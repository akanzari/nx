import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextAreaComponent } from './text-area.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [TextAreaComponent],
    exports: [TextAreaComponent]
})
export class SofTextAreaModule { }
