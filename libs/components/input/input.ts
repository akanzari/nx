// https://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InternationalPhoneNumberModule } from 'ng-phone-number';

const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'sof-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class InputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('sofInput', { read: ElementRef }) sofInput: ElementRef;

  @Input() focus: boolean;
  @Input() placeholder: string = '';
  @Input() type: string = "text";
  @Input() id: string = '';
  @Input() name: string = null;
  @Input() disabled: boolean = null;
  @Input() icon: string;
  @Input() maxlength: number;
  @Input() max: number;
  @Input() min: number;
  @Input() defaultCountry: string;

  // ChangeDetectorRef used to detect focus behaviour
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.focus) {
      this.cdRef.detectChanges();
      this.sofInput.nativeElement.focus();
    }
  }

  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  // use onTouchedCallback in Blur function
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.innerValue;
  };



  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


  getType() {
    if (this.type == "number" || this.type == "email") {
      return "text";
    } else {
      return this.type;
    }
  }
}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      InternationalPhoneNumberModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class SofInputModule { }