import { Component, OnInit, Input, forwardRef, HostBinding, Output, EventEmitter, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { isBoolean } from 'util';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-checkBox',
  template: `
  <div id="checkbox" *ngIf="!switch">
  <input id="inputcheckbox" *ngIf="(!isChechboxBoolean() && _value) || isChechboxBoolean()" type="checkbox"
    [value]="_value" (change)="check(_value)" [attr.checked]="isChecked(_value)? true : null" />
  <button id="buttoncheckbox"
    (click)="check(_value);  _value == true && onCheck.emit(); _value == false && unCheck.emit()"
    [disabled]="isdisabled">{{ isChechboxBoolean() ? '' : _value[bindLabel]}}<ng-content></ng-content></button>
</div>

<div id="checkbox" *ngIf="switch === 'Default'">
  <label class='switch'>
    <input id="inputcheckbox" *ngIf="(!isChechboxBoolean() && _value) || isChechboxBoolean()" type="checkbox"
      [value]="_value" (change)="check(_value);_value == true && onCheck.emit(); _value == false && unCheck.emit()"
      [attr.checked]="isChecked(_value)? true : null" />
    <span class="slider round" id="buttoncheckbox"></span>
  </label>
</div>
<div id="checkbox" *ngIf="switch === 'valid'">
  <label class='switch-valid'>
    <input id="inputcheckbox" *ngIf="(!isChechboxBoolean() && _value) || isChechboxBoolean()" type="checkbox"
      [value]="_value" (change)="check(_value);_value == true && onCheck.emit(); _value == false && unCheck.emit()"
      [attr.checked]="isChecked(_value)? true : null" />
    <span class="slider round" id="buttoncheckbox"></span>
  </label>
</div>
  `,
  styleUrls: ['./checkbox.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true
    }
  ]
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {
  
  @Output() onCheck = new EventEmitter();
  @Output() unCheck = new EventEmitter();
  @Input('value') _value;
  selectedItemsValues: any[] = [];
  disabled = null;
  @Input('bindLabel') bindLabel: any;
  @Input() bindValue: any;
  @Input() isdisabled: boolean = false;
  @Input() radioSwitch;
  //When true the sof-checkbox will bind a simple boolean in ngModel
  @Input() booleanValue: any = false;
  @Input() switch: any;
  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() {
    if (this.isChechboxBoolean()) {
      if (this._value != undefined && !isBoolean(this._value)) {
        throw new Error("You should provide boolean value in ngModel when using the attribute booleanValue = 'true'");
      }
    } else {
      if (this.checkValue()) {
        throw new Error("checkBox should contain attribute bindLabel!");
      }
    }
  }

  get value() {
    return this.isChechboxBoolean() ? this._value : this.selectedItemsValues;
  }

  set value(item) {
    if (this.isChechboxBoolean()) {
      this._value = !this._value;
      this.onChange(this._value);
      this.onTouched();
    } else {
      if (this.selectedItemsValues.indexOf(item) !== -1) {
        this.selectedItemsValues = this.selectedItemsValues.filter(element => item !== element);
      } else {
        this.selectedItemsValues.push(item);
      }
      this.onChange(this.selectedItemsValues);
      this.onTouched();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (this.isChechboxBoolean()) {
      if (value) {
        this._value = value;
      }
    } else {
      if (value) {
        this.selectedItemsValues = value;
      }
    }
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  isChechboxBoolean() {
    return this.booleanValue === true || this.booleanValue === "true";
  }

  isChecked(item) {
    if (this.isChechboxBoolean()) {
      return this._value;
    }
    return (!this.bindValue ? ((this.selectedItemsValues.indexOf(item) === -1) ? false : true) : ((this.selectedItemsValues.indexOf(item[this.bindValue]) === -1) ? false : true));
  }

  check(item) {
    if (this.isChechboxBoolean()) {
      this.value = item;
    } else {
      if (!this.bindValue) {
        this.value = item;
      } else {
        this.value = item[this.bindValue];
      }
    }
  }

  checkValue() {
    return !this.bindLabel;
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [CheckBoxComponent],
  exports: [CheckBoxComponent]
})
export class SofCheckBoxModule { }