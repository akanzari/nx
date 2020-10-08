import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SidebarComponent } from "./sidebar.component";
import { LayoutService } from "../service/layout.service";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        RouterModule
    ],
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    providers: [LayoutService]
})
export class SofSidebarModule { }