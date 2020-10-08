import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, forwardRef } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true
};
@Component({
  selector: 'sof-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {


  @ViewChild('sofArea', { read: ElementRef }) sofInput: ElementRef;

  @Input() focus: boolean;
  @Input() cols: number;
  @Input() rows: number;
  @Input() placeholder: string = '';

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

}
