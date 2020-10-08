import { NgModule } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import { ToastComponent } from './toast.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      MatSnackBarModule
    ],
    declarations: [ToastComponent],
    exports: [ToastComponent]
})
export class SofToastModule { }
