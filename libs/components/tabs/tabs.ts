import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss']
})
export class TabsComponent { }

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ArchwizardModule
  ],
  declarations: [TabsComponent],
  exports: [TabsComponent]
})
export class SofTabsModule { }