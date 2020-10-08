import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { ModalComponent } from './modal.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        AngularDraggableModule
    ],
    declarations: [
        ModalComponent,
        FooterComponent
    ],
    exports: [
        ModalComponent,
        FooterComponent
    ]
})
export class SofModalModule { }
