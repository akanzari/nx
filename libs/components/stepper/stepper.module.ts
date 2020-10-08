import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StepperComponent } from './stepper.component';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ArchwizardModule
    ],
    declarations: [StepperComponent],
    exports: [StepperComponent]
})
export class SofStepperModule { }