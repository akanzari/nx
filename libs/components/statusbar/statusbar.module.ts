import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from './statusbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [StatusBarComponent],
    exports: [StatusBarComponent]
})
export class SofStatusBarModule { }
