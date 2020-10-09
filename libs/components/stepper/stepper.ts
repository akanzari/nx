import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

@Component({
  selector: 'sof-stepper',
  templateUrl: './stepper.html',
  styleUrls: ['./stepper.scss']
})
export class StepperComponent {}

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