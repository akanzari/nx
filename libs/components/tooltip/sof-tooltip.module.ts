import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SoftooltipDirective } from "./sof-tooltip.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [SoftooltipDirective],
    exports: [SoftooltipDirective]
})
export class SofTooltipModule { }