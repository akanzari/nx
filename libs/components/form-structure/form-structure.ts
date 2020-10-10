import { Component, OnInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofSubForm } from './template/sub-form';
import { SofFormButtons } from './template/form-buttons';
import { SofFormLabel } from './template/form-label';
import { SofFormItem } from './template/form-item';
import { ColumnsService } from './service/columns.service';

@Component({
  selector: 'sof-form',
  templateUrl: './form-structure.html',
  styleUrls: ['./form-structure.scss']
})
export class SofFormStructure {

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
    SofFormStructure,
    SofSubForm,
    SofFormButtons,
    SofFormLabel,
    SofFormItem
  ],
  exports: [
    SofFormStructure,
    SofSubForm,
    SofFormButtons,
    SofFormLabel,
    SofFormItem
  ],
  providers: [ColumnsService]
})
export class SofFormStructureModule { }