import { Component, OnInit, Output } from '@angular/core';
import { Input, EventEmitter } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'sof-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() nodes: any;
  @Input() options: TreeNode[];
  @Input() label = "name";
  @Output() onNodeSelect: EventEmitter<any> = new EventEmitter();
  @Output() onNodeUnSelect: EventEmitter<any> = new EventEmitter();

  isFilter: Boolean = true

  constructor() { }

  ngOnInit() { }

  select(event) {
    this.onNodeSelect.emit(event)
  }
}
