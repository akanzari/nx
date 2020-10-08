import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { TableComponent } from './table.component';
import { TabDragModule } from './tab-drag.directive';
import { SelectableRow } from './navigation.directive';
import { SofCheckBoxModule } from '../check-box/check-box.module';
import { CalendarModule } from 'primeng/primeng';
import { SofStatusBarModule } from '../status-bar/status-bar.module';
import { SofCalendarModule } from '../sof-calendar/sof-calendar.module';
import { SofTooltipModule } from '../sof-tooltip/sof-tooltip.module';
import { SofButtonModule } from '../button/button.module';
import { SofCardsModule } from '../card/card.module';
import {DialogModule} from 'primeng/dialog';
import { SofModalModule } from '../modal/modal.module';
import {SofMultiSelectModule} from '../multi-select/multi-select.module'
import { NgSelectModule } from '@ng-select/ng-select';
import { SofMonoSelectModule } from '../monoselect/monoselect.module';
import {TooltipModule} from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { SofRadioButtonModule} from '../radio-button/radio-button.module';




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