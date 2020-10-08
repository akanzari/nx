import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InternationalPhoneNumberModule } from 'ng-phone-number';
import { InputComponent } from './input.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InternationalPhoneNumberModule
    ],
    declarations: [InputComponent],
    exports: [InputComponent]
})
export class SofInputModule { }
