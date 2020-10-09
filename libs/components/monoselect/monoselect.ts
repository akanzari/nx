import { Component, OnInit, Input, forwardRef, Output, EventEmitter, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MonoselectComponent),
  multi: true
};
@Component({
  selector: 'sof-monoselect',
  templateUrl: './monoselect.html',
  styleUrls: ['./monoselect.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MonoselectComponent implements OnInit, ControlValueAccessor {

  @Input() Load: boolean;
  @Input() optionsBuffer: any[];
  @Input() bufferSize: number;
  @Input() loading: boolean;
  @Input() nbTotal: number;
  @Input() options: any[];
  @Input() disabled: boolean;
  @Input() mode: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() bindValue: string;
  @Input() bindLabel: string;
  @Input() appendTo: string;
  @Input() clearable: string;
  @Input() notFoundText: string;
  @Output() inputFromChild = new EventEmitter<any>();
  @Output('onClick') click = new EventEmitter<any>();
  @Output('onSearch') search = new EventEmitter<any>();
  @Output('onChange') change = new EventEmitter<any>();
  @Output('onAdd') add = new EventEmitter<any>();
  @Output('onRemove') remove = new EventEmitter<any>();
  @Output('onClear') clear = new EventEmitter<any>();
  @Output('onFocus') focus = new EventEmitter<any>();
  @Output('onClose') close = new EventEmitter<any>();
  @Output('onOpen') open = new EventEmitter<any>();
  @Output('onBlur') blur = new EventEmitter<any>();
  @Output('onDelete') delete = new EventEmitter<any>();
  @Output() onScrollToEnd = new EventEmitter();
  input: String
  mono: any;

  // The internal data model
  private innerValue: any = [];

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  // use onTouchedCallback in Blur function
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  scroll() {
    if (this.Load) {
      this.onScrollToEnd.emit()
    }
  }

  ngOnInit() {
    this.mono = document.querySelectorAll('#monoselect > div > span.ng-arrow-wrapper > span');
    for (let element of this.mono) {
      element.setAttribute('class', 'icone');
    }
    // this.optionsBuffer = this.options.slice(0,this.bufferSize);
  }

  inputChange() {
    this.inputFromChild.emit(this.input)
  }

  onRemove(event) {
    this.remove.emit(event);
  }

  onBlur(event) {
    this.blur.emit(event);
  }

  onClear() {
    this.clear.emit();
  }

  onFocus(event) {
    this.focus.emit(event);
  }

  onOpen() {
    this.open.emit();
  }

  onClose() {
    this.close.emit();
  }

  onSearch(event) {
    this.search.emit(event);
  }

  onChange(event) {
    this.change.emit(event);
  }

  onAdd(event) {
    this.add.emit(event);
  }

  onClick(event) {
    this.click.emit(event);
  }

  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  trySearchmono(event) {
    this.inputFromChild.emit(event.term)
  }

}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgSelectModule
  ],
  declarations: [MonoselectComponent],
  exports: [MonoselectComponent]
})
export class SofMonoSelectModule { }