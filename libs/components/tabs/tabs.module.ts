import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { TabsComponent } from './tabs.component';

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