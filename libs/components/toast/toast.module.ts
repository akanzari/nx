import { NgModule } from '@angular/core';
import { ToastComponent } from './toast.component';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
      CommonModule,
      MatSnackBarModule
    ],
    declarations: [ToastComponent],
    exports: [ToastComponent]
})
export class SofToastModule { }
