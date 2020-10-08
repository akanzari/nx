import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormStructureComponent } from "./form-structure.component";
import { SubFormComponent } from "./template/sub-form/sub-form.component";
import { FormButtonsComponent } from "./template/form-buttons/form-buttons.component";
import { LabelComponent } from "./template/label/label.component";
import { ItemComponent } from "./template/item/item.component";
import { ColumnsService } from "./template/service/columns.service";

@NgModule({
    imports: [CommonModule],
    declarations: [
        FormStructureComponent,
        SubFormComponent,
        FormButtonsComponent,
        LabelComponent,
        ItemComponent
    ],
    exports: [
        FormStructureComponent,
        SubFormComponent,
        FormButtonsComponent,
        LabelComponent,
        ItemComponent
    ],
    providers: [ColumnsService]
})
export class SofFormStructureModule { }