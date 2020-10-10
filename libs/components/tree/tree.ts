import { Component, OnInit, Output, NgModule } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';

@Component({
  selector: 'sof-tree',
  template: `
   <p-tree [value]="nodes" (onNodeExpand)="select($event)">
      <ng-template let-node pTemplate="default">
          {{node[label]}}
      </ng-template>
   </p-tree>
  `,
  styleUrls: ['./tree.scss']
})
export class SofTree {
  
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
  declarations: [SofTree],
  exports: [SofTree]
})
export class SofTreeModule { }