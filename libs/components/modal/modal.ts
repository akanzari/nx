
import { AngularDraggableDirective, AngularDraggableModule } from 'angular2-draggable';
import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SofModalFooter } from './template/footer';

@Component({
  selector: 'sof-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  animations: [
    trigger('modal', [
      state('top-display', style({ opacity: 1 })),
      state('top-hide', style({ opacity: 0 })),
      state('right-display', style({ opacity: 1 })),
      state('right-hide', style({ opacity: 0 })),
      transition('top-hide <=> top-display', animate('400ms linear')),
      transition('right-hide <=> right-display', animate('400ms linear'))
    ])
  ]
})
export class SofModal implements OnInit {

  @Input() drag: boolean = false;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() position: String = "top";
  @Input() title: String = "";
  @Input() selectedOption: String;
  @Output() closeMethode = new EventEmitter();
  fullScreen: boolean = false;
  startposition: String;

  constructor() { }

  ngOnInit() {
    this.startposition = this.position;
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  get_position() {
    switch (this.position) {
      case "top":
        return "modal-top";
      case "center":
      case "full":
        return "modal-center";
      case "sidebar":
        return "modal-large";
      default:
        return "modal-top";
    }
  }

  get_Visibility() {
    if (this.position == "sidebar") {
      return this.visible ? 'right-display' : 'right-hide';
    } else {
      return this.visible ? 'top-display' : 'top-hide';
    }
  }

  get_size() {
    switch (this.position) {
      case "full":
        return "modal-full"

      default:
        return "";
    }
  }

  headerButton() {
    return this.position == 'full' ? false : true;
  }

  getsidebarcontent() {
    return (this.position == 'sidebar') ? "py-3" : "pyfit";
  }

  position_right() {
    return (this.position == 'sidebar') ? "right" : "";
  }

  toggleFull() {
    this.fullScreen = !this.fullScreen;
    this.position = this.fullScreen ? "full" : this.startposition;
  }

  onReset(block1: AngularDraggableDirective) {
    block1.resetPosition();
  }

}

@NgModule({
  imports: [
    CommonModule,
    AngularDraggableModule
  ],
  declarations: [
    SofModal,
    SofModalFooter
  ],
  exports: [
    SofModal,
    SofModalFooter
  ]
})
export class SofModalModule { }