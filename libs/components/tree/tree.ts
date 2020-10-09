import { Component, OnInit, Output, NgModule } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';

@Component({
  selector: 'sof-tree',
  templateUrl: './tree.html',
  styleUrls: ['./tree.scss']
})
export class TreeComponent {
  
  @Input() nodes: any;
  @Input() options: TreeNode[];
  @Input() label = "name";
  @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
  @Output() onNodeUnSelect: EventEmitter<any> = new EventEmitter();

  isFilter: Boolean = true

  select(event) {
    this.onNodeSelect.emit(event)
  }

}

@NgModule({
  imports: [
    CommonModule,
    TreeModule
  ],
  declarations: [TreeComponent],
  exports: [TreeComponent]
})
export class SofTreeModule { }