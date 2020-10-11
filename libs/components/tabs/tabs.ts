import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

@Component({
  selector: 'sof-tabs',
  template: `
  <div class="row">
     <div class="col-12">
       <ng-content></ng-content>
     </div>
  </div>
  `,
  styleUrls: ['./tabs.scss']
})
export class SofTabs { }

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ArchwizardModule
  ],
  declarations: [SofTabs],
  exports: [SofTabs]
})
export class SofTabsModule { }