import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ArchwizardModule } from 'angular-archwizard';
import { SofButtonModule } from 'ng-softilys/button';
import { SofCardContainerModule } from 'ng-softilys/card-container';
import { SofFormStructureModule } from 'ng-softilys/form-structure';
import { SofInputModule } from 'ng-softilys/input';
import { SofStepperModule } from 'ng-softilys/stepper';
import { SofMonoSelectModule } from 'ng-softilys/monoselect';
import { SofRadioButtonModule } from 'ng-softilys/radio-button';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SofCardContainerModule,
    SofButtonModule,
    SofInputModule,
    SofMonoSelectModule,
    SofFormStructureModule,
    SofRadioButtonModule,
    SofStepperModule,
    ArchwizardModule
  ]
})
export class SharedModule { }
