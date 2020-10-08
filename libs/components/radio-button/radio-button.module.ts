import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RadioButtonComponent } from "./radio-button.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [RadioButtonComponent],
    exports: [RadioButtonComponent]
})
export class SofRadioButtonModule { }