import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, forwardRef, NgModule } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextAreaComponent),
  multi: true
};

@Component({
  selector: 'sof-text-area',
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {

  @ViewChild('sofArea', { read: ElementRef }) sofInput: ElementRef;

  @Input() focus: boolean;
  @Input() cols: number;
  @Input() rows: number;
  @Input() placeholder: string = '';

  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later providesd
  //by the Control Value Accessor
  // use onTouchedCallback in Blur function
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    if (this.focus) {
      this.cdRef.detectChanges();
      this.sofInput.nativeElement.focus();
    }
  }

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

@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [TextAreaComponent],
  exports: [TextAreaComponent]
})
export class SofTextAreaModule { }