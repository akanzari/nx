import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from 'primeng/calendar';
import { IntervalComponent } from "./interval.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CalendarModule
    ],
    declarations: [IntervalComponent],
    exports: [IntervalComponent]
})
export class SofIntervalModule { }