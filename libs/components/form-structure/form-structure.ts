import { Component, OnInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormComponent } from './template/sub-form/sub-form';
import { FormButtonsComponent } from './template/form-buttons/form-buttons';
import { LabelComponent } from './template/label/label';
import { ItemComponent } from './template/item/item';
import { ColumnsService } from './template/service/columns.service';

@Component({
  selector: 'sof-form',
  templateUrl: './form-structure.html',
  styleUrls: ['./form-structure.scss']
})
export class FormStructureComponent {

  @Input() columns: number = 1;
  @Input() title: string;
  @Input() border: boolean = false;

  get borderStyle() {
    return this.border ? "border padding-15 border-radius bg-white " : "";
  }

}

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