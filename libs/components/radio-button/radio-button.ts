import { Component, OnInit, Input, forwardRef, AfterViewInit, Output, EventEmitter, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'sof-radio-button',
    templateUrl: './radio-button.html',
    styleUrls: ['./radio-button.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SofRadioButton),
            multi: true
        }
    ]
})
export class SofRadioButton implements ControlValueAccessor {

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

}

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [SofRadioButton],
    exports: [SofRadioButton]
})
export class SofRadioButtonModule { }