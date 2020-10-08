import { Component, OnInit, Input, forwardRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'sof-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioButtonComponent),
            multi: true
        }
    ]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor, AfterViewInit {

    ngAfterViewInit() {


    }


    @Input() groupName: string;
    @Input() id;
    @Input() data;
    @Input() disabled: boolean;
    @Input() bindLabel: string;
    @Input() bindValue: string;
    @Output() onCheckRadio = new EventEmitter();
    @Output() unCheckRadio = new EventEmitter();
    @Input('selected') _selected;

    onChange: any = () => { };
    onTouched: any = () => { };

    get selected() {

        return this._selected;
    }

    set selected(val) {

        this._selected = val;
        this.onChange(val);
        this.onTouched();

    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {


        if (value) {
            this._selected = value;

        }
    }

    constructor() { }
    ngOnInit() {

    }

}
