import { AfterViewInit, Directive, OnDestroy, Input, Output, EventEmitter, ElementRef, NgZone, HostListener } from '@angular/core';
import { SofDomHandler } from '@dom-library';

@Directive({
    selector: '[sof-drop]',
    providers: [SofDomHandler]
})
export class SofDropDirective implements AfterViewInit, OnDestroy {

    @Input('sof-drop') scope: string | string[];

    @Input() droppableDisabled: boolean;

    @Input() dropEffect: string;

    @Output() onDragEnter: EventEmitter<any> = new EventEmitter();

    @Output() onDragLeave: EventEmitter<any> = new EventEmitter();

    @Output() onDrop: EventEmitter<any> = new EventEmitter();

    constructor(public el: ElementRef, public domHandler: SofDomHandler, public zone: NgZone) { }

    dragOverListener: any;

    ngAfterViewInit() {
        if (!this.droppableDisabled) {
            this.bindDragOverListener();
        }
    }

    bindDragOverListener() {
        if (!this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.dragOverListener = this.dragOver.bind(this);
                this.el.nativeElement.addEventListener('dragover', this.dragOverListener);
            });
        }
    }

    unbindDragOverListener() {
        if (this.dragOverListener) {
            this.zone.runOutsideAngular(() => {
                this.el.nativeElement.removeEventListener('dragover', this.dragOverListener);
                this.dragOverListener = null;
            });
        }
    }

    dragOver(event) {
        event.preventDefault();
    }

    @HostListener('drop', ['$event'])
    drop(event) {
        if (this.allowDrop(event)) {
            event.preventDefault();
            this.onDrop.emit(event);
        }
    }

    @HostListener('dragenter', ['$event'])
    dragEnter(event) {
        event.preventDefault();

        if (this.dropEffect) {
            event.dataTransfer.dropEffect = this.dropEffect;
        }

        this.onDragEnter.emit(event);
    }

    @HostListener('dragleave', ['$event'])
    dragLeave(event) {
        event.preventDefault();

        this.onDragLeave.emit(event);
    }

    allowDrop(event): boolean {
        let dragScope = event.dataTransfer.getData('text');
        if (typeof (this.scope) == "string" && dragScope == this.scope) {
            return true;
        }
        else if (this.scope instanceof Array) {
            for (let j = 0; j < this.scope.length; j++) {
                if (dragScope == this.scope[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    ngOnDestroy() {
        this.unbindDragOverListener();
    }

}
