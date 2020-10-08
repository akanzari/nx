import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { CommonModule } from '@angular/common';
import {TreeModule} from 'primeng/tree';

@NgModule({
    imports: [
      CommonModule,
      TreeModule
    ],
    declarations: [TreeComponent],
    exports: [TreeComponent]
})
export class SofTreeModule { }
