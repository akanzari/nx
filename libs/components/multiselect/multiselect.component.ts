import { Component, OnInit, Input, forwardRef, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => { };

export const CUSTOM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelectComponent),
  multi: true
};
@Component({
  selector: 'sof-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [CUSTOM_MULTI_SELECT_CONTROL_VALUE_ACCESSOR],
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor, OnChanges {
  ngOnChanges(changes): void {
    if (changes["selected"]) {
      this.selectedItems = []
      this.value = []

      if (changes["checkboxValue"]) {
        console.log("checkboxValue" + this.checkboxValue)
        this.checkboxValue = false;
      };

    }



  }
  // change(){
  //   for(var i =0;i<this.options.length;i++)
  //   { if(!this.options[i].booleanValue){
  //     console.log("hello")
  //     this.checkboxValue = false;
  //   };

  //   }
  // }
  @Input() selectcheckbox: boolean = false;
  @Input() Load: boolean;
  @Input() appendTo: string;
  @Input() optionsBuffer: any[];
  @Input() bufferSize: number;
  @Input() loading: boolean;
  @Input() nbTotal: number;
  @Output() onScrollToEnd = new EventEmitter();
  input: String
  selectedItems = [];
  @Output() inputFromChild = new EventEmitter<any>();
  @Input() notFoundText: string;
  @Input() selected: boolean = false;
  @Input() options: any[];
  @Input() disabled: boolean;
  @Input() mode: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() bindValue: string;
  @Input() bindLabel: string;
  @Input() maxSelectedItems: number;
  @Input() hideSelected: boolean;
  @Input() clearable: string;
  @Input() nbItemsToShow = 0;
  @Input() bas: boolean = false;
  @Input() droite: boolean = false;
  @Input() positionTag: boolean = false;
  @Input() showTags: boolean = false;
  @Input() strings: boolean = false;
  @Input() TextItems: string;
  @Output('onSearch') search = new EventEmitter<any>();
  @Output('onChange') change = new EventEmitter<any>();
  @Output('onAdd') add = new EventEmitter<any>();
  @Output('onRemove') remove = new EventEmitter<any>();
  @Output('onClear') clear = new EventEmitter<any>();
  @Output('onFocus') focus = new EventEmitter<any>();
  @Output('onClose') close = new EventEmitter<any>();
  @Output('onOpen') open = new EventEmitter<any>();
  @Output('onBlur') blur = new EventEmitter<any>();
  @Output() onRemovetags = new EventEmitter();
  @Input() groupBy: string;
  selectAllVal: boolean;
  @Input() checkboxValue: boolean = false;
  data: any = { name: 'Sélectionner tout' };
  // The internal data model
  private innerValue: any = [];
  mono: any;

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  // use onTouchedCallback in Blur function
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;


  constructor() { }


  ngOnInit() {

    this.mono = document.querySelectorAll('#multiselect > div > span > span');
    for (let element of this.mono) {
      element.setAttribute('class', 'icone');
    }
  }

  scroll() {
    if (this.Load) {
      this.onScrollToEnd.emit()
    }
  }
  inputChange() {

    this.inputFromChild.emit(this.input)
  }
  selectAll() {
    this.checkboxValue = true;
    //this.selectAllVal=true;


    this.value = this.options.map(x => x);

    for (var i = 0; i < this.options.length; i++) {
      if (!this.strings) { this.options[i].booleanValue = true; }


    }

  }

  unselectAll() {
    this.checkboxValue = false;

    this.value = [];
    for (var i = 0; i < this.options.length; i++) {
      if (!this.strings) { this.options[i].booleanValue = false; }


    }

  }


  unselect() {
    this.checkboxValue = false;

  }
  select() {

    if (this.options.length == (this.value.length + 1)) {

      this.checkboxValue = true
    }
  }

  onRemove(event) {
    for (var i = 0; i < this.options.length; i++) {
      if (this.options[i] === event.value && !this.strings) {
        this.options[i].booleanValue = false;
        this.checkboxValue = false;
      }


    }



    this.remove.emit(event);
  }



  try0(item) {
    return (this.bindValue + "||" + this.bindLabel + "||" + item.name + "||" + item['name'] + "||" + item[this.bindLabel])
  }
  try(item) {

    if (this.strings) { return item; }

    return item[this.bindLabel];

  }
  clears(item) {

    this.value = this.value.filter(obj => obj !== item)

  }
  getRemovetags(item): any {

    this.onRemovetags.emit(item);
  }
  Removetags(item, i) {
    if (!this.strings) {
      item.booleanValue = false;
      this.checkboxValue = false;
    }
    this.selectedItems.splice(i, 1
    )
    this.getRemovetags(item);

  }

  get(value) {
    return value
  }

  onBlur(event) {
    this.blur.emit(event);
  }

  onClear() {
    this.unselectAll();
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

    for (var i = 0; i < this.options.length; i++) {
      if (this.options[i] === event.value && !this.strings) {
        this.options[i].booleanValue = false;
        this.checkboxValue = false;
      }
    }
    this.change.emit(event);
  }

  // Used to fix clearing search input after selecting item
  onAdd(event) {
    this.add.emit(event.length);
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
  trySearch(event) {
    this.inputFromChild.emit(event.term)
  }

}
