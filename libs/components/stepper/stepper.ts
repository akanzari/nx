import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

@Component({
  selector: 'sof-stepper',
  template: `
  <div class="row">
     <div class="col-12">
       <ng-content></ng-content>
     </div>
  </div>
  `,
  styleUrls: ['./stepper.scss']
})
export class SofStepper {}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ArchwizardModule
  ],
  declarations: [SofStepper],
  exports: [SofStepper]
})
export class SofStepperModule { }