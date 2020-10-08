import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SofDragDirective } from "./drag.directive";
import { SofDropDirective } from "./drop.directive";


@NgModule({
    imports: [CommonModule],
    declarations: [
        SofDragDirective,
        SofDropDirective
    ],
    exports: [
        SofDragDirective,
        SofDropDirective
    ]
})
export class SofDragDropModule { }