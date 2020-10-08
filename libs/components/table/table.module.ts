import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';

import { TableComponent } from './table.component';
import { TabDragModule } from './tab-drag.directive';
import { SelectableRow } from './navigation.directive';

import { SofCheckBoxModule } from 'ng-softilys/checkbox';
import { SofStatusBarModule } from 'ng-softilys/statusbar';
import { SofCalendarModule } from 'ng-softilys/calendar';
import { SofTooltipModule } from 'ng-softilys/tooltip';
import { SofButtonModule } from 'ng-softilys/button';
import { SofCardsModule } from 'ng-softilys/card';
import { SofModalModule } from 'ng-softilys/modal';
import {SofMultiSelectModule} from 'ng-softilys/multiselect'
import { SofMonoSelectModule } from 'ng-softilys/monoselect';
import { SofRadioButtonModule} from 'ng-softilys/radio-button';

@NgModule({
    imports: [
        SofRadioButtonModule,
        SofMonoSelectModule,
        SofMultiSelectModule,
        SofCheckBoxModule,
        CommonModule,
        FormsModule,
        NgSelectModule,
        TableModule,
        ReactiveFormsModule,
        CalendarModule,
        TabDragModule,
        SofTooltipModule,
        SofStatusBarModule,
        SofButtonModule,
        SofCardsModule,
        DialogModule,
        SofModalModule,
        RouterModule
    ],
    declarations: [
        TableComponent,
        SelectableRow
    ],
    exports: [TableComponent ]
})
export class SofTableModule { }