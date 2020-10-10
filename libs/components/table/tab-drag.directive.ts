import {Directive,OnDestroy,AfterViewInit,ElementRef,HostListener,Input,Output,EventEmitter,NgZone,NgModule} from '@angular/core';
import {SofDomHandler} from 'ng-softilys/dom';

@Directive({
  selector: '[tab-drag]',
  providers: [SofDomHandler]
})
export class TabDragDirective implements AfterViewInit, OnDestroy {
    
  @Input('tab-drag') scope: string;

  @Input() draggableDisabled: boolean;
      
  @Input() dragEffect: string;
  
  @Input() dragHandle: string;
  
  @Output() onDragStart: EventEmitter<any> = new EventEmitter();
  
  @Output() onDragEnd: EventEmitter<any> = new EventEmitter();
  
  @Output() onDrag: EventEmitter<any> = new EventEmitter();
  
  handle: any;

  dragListener: any;

  mouseDownListener: any;

  mouseUpListener: any;
      
  constructor(public el: ElementRef, public domHandler: SofDomHandler, public zone: NgZone) {}
  
  ngAfterViewInit() {
      if (!this.draggableDisabled) {
          this.el.nativeElement.draggable = true;
          this.bindMouseListeners();
      }
  }

  bindDragListener() {
      if (!this.dragListener) {
          this.zone.runOutsideAngular(() => {
              this.dragListener = this.drag.bind(this);
              this.el.nativeElement.addEventListener('drag', this.dragListener);
          });
      }
  }

  unbindDragListener() {
      if (this.dragListener) {
          this.zone.runOutsideAngular(() => {
              this.el.nativeElement.removeEventListener('drag', this.dragListener);
              this.dragListener = null;
          });
      }
  }

  bindMouseListeners() {
      if (!this.mouseDownListener && !this.mouseUpListener) {
          this.zone.runOutsideAngular(() => {
              this.mouseDownListener = this.mousedown.bind(this);
              this.mouseUpListener = this.mouseup.bind(this);
              this.el.nativeElement.addEventListener('mousedown', this.mouseDownListener);
              this.el.nativeElement.addEventListener('mouseup', this.mouseUpListener);
          });
      }
  }

  unbindMouseListeners() {
      if (this.mouseDownListener && this.mouseUpListener) {
          this.zone.runOutsideAngular(() => {
              this.el.nativeElement.removeEventListener('mousedown', this.mouseDownListener);
              this.el.nativeElement.removeEventListener('mouseup', this.mouseUpListener);
              this.mouseDownListener = null;
              this.mouseUpListener = null;
          });
      }
  }

  drag(event) {
      this.onDrag.emit(event);
  }

  @HostListener('dragstart', ['$event']) 
  dragStart(event) {
      if(this.allowDrag()) {
          if(this.dragEffect) {
              event.dataTransfer.effectAllowed = this.dragEffect;
          }
          event.dataTransfer.setData('text', this.scope);
          
          this.onDragStart.emit(event);

          this.bindDragListener();
      }
      else {
          event.preventDefault();
      }
  }

  @HostListener('dragend', ['$event']) 
  dragEnd(event) {
      this.onDragEnd.emit(event);
      this.unbindDragListener();
  }
  
  mousedown(event) {
      this.handle = event.target;
  }

  mouseup(event) {
      this.handle = null;
  }
  
  allowDrag() : boolean {
      if(this.dragHandle && this.handle)
          return this.domHandler.matches(this.handle, this.dragHandle);
      else
          return true;
  }

  ngOnDestroy() {
      this.unbindDragListener();
      this.unbindMouseListeners();
  }
}

@NgModule({
    imports: [],
    declarations: [TabDragDirective],
    exports: [TabDragDirective]
  })
  export class TabDragModule { }
