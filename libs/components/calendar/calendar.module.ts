import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SofCalendarComponent } from './calendar.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CalendarModule
    ],
    declarations: [SofCalendarComponent],
    exports: [SofCalendarComponent]
})
export class SofCalendarModule { }
