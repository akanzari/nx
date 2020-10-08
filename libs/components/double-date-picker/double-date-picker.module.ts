import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofDoubleDatePickerComponent } from './double-date-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd
  ],
  declarations: [SofDoubleDatePickerComponent],
  exports: [SofDoubleDatePickerComponent]
})
export class SofDoubleDatePickerModule { }
