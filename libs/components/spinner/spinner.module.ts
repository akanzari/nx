import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    NgxSpinnerModule,
    CommonModule,
    FormsModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SofSpinnerModule { }
