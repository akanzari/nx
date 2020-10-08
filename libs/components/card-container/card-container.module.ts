import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardContainerComponent } from "./card-container.component";

@NgModule({
    imports: [CommonModule],
    declarations: [CardContainerComponent],
    exports: [CardContainerComponent]
})
export class SofCardContainerModule { }