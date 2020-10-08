import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, Pipe, ElementRef, AfterViewInit, ChangeDetectorRef, ɵConsole } from '@angular/core';
import { AlTableButtonEvent } from './model/AlTableButtonEvent';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlTableConfig } from './model/config';
import { Table } from 'primeng/table';
import { FilterUtils } from 'primeng/utils';
import { DatePipe } from '@angular/common';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { ALTableButton } from './model/ALTableButton';
import * as _ from "lodash";

export enum FilterTypes {
  INPUT = 'INPUT', SELECT = 'SELECT', DATE = 'DATE'
}
@Component({
  selector: 'sof-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [DatePipe],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]

})
export class TableComponent implements OnInit {

  /*   definie dans data.service.ts avec l'attribut language
    nombreSubList=[{"value":"40","color":"progress-secondary"},{"value":"20","color":"progress-error"},{"value":"40","color":"progress-valid"}]; */





  loadLazy: boolean = false;

  BackColor: any;
  x: Date;
  showedit: boolean = false;
  showAction: boolean = false;
  displayDialog: boolean = false;
  displayPop: boolean = false;
  notFoundText: string = "No element found"
  buttonEdit: ALTableButton;
  rowData;
  CreatForm;
  addData: any[] = [];
  dataEditRow: any;
  editRowAction: boolean = false;

  @ViewChild('dt1') dt1: Table;
  lockedcolumnsInt: any[] = [];
  button: ALTableButton;
  filterTypes = FilterTypes;
  @Input() filterByColumns: Boolean = false;
  @Input() checkboxCellStyle: boolean
  @Input() resizable: boolean;
  @Input() nbItemsToShowT: number;
  @Output() lockedColumnsChange = new EventEmitter();
  @Input() reorderable: boolean;
  @Input() dataKey: string;
  @Input() zebrure: boolean;
  @Input() src: string;
  @Input() element: any;
  @Input() pays: any;
  @Input() showradio: boolean;
  @Input() radioDemoOptionsTab;
  @Input() typeTable: string = "statique";
  @Input() buttonpop1: string;
  @Input() buttonpop2: string;
  @Input() buttonAdd: string;
  @Input() bindlabelmultiselect: string;
  @Input() headerpop: string;
  @Input() dragDrop: boolean = false;
  @Input() droppable: boolean = false;
  @Input() rowDragged: boolean = false;
  @Output() onClick = new EventEmitter();
  @Output() onCheck = new EventEmitter();
  @Output() TitleIconChanger = new EventEmitter();
  @Output() getResultradio = new EventEmitter();
  @Output() onRowClick = new EventEmitter();
  @Output() onSavingRow = new EventEmitter();
  @Output() onEditRow = new EventEmitter();
  @Output() onCheckAll = new EventEmitter();
  @Output() unCheckAll = new EventEmitter();
  @Output() filter = new EventEmitter();
  @Input() message;
  @Input() fix: boolean;
  @Input() var: string = 'Ajout dans le tableau';
  @Input() modal: string = 'Ajout avec modal';
  @Input() dynamique: boolean = false;
  @Input() retour_ligne: boolean = false;
  @Input() colorRow: boolean;
  @Input() colorField: boolean;
  @Input() strings: boolean = false;
  @Input() editCol: string = "";
  @Input() editLabel: string;
  @Input() buttonadd: string;
  @Input() saveLabel: string;
  @Input() cancelLabel: string;
  @Input() globalFilter: string;
  @Input() Row: Boolean = false;
  disableCheckTable: boolean = false;
  @Input() icon: boolean = true;
  columnsDrag: any[] = [];
  ColorBadge;
  test: boolean = true;
  test2: boolean = true;
  foundElment: boolean = false;
  foundElment2: boolean = false


  isSingleClick: Boolean = true;
  ref: any;



  onRowOneClick(event) {
    this.isSingleClick = true;


    setTimeout(() => {
      if (this.isSingleClick) {



        this.onRowClick.emit(event)
      }
    }, 250)


  }
  /*  onCheckRadio(){
    console.log(this.radioDemoOptionsTab)
    for(var i:number=1;i<this.radioDemoOptionsTab.length;i++){
   
     this.radioDemoOptionsTab[i].value=false;
     console.log("xxx"+this.radioDemoOptionsTab[i])
     }
    
 
   } */




  // cellEdit:boolean=false
  // cellEditRowIndex:number= -1
  // field:String=""

  onRowDoubleClicks(rowData, rowIndex, field) {

    // editCellAction(rowData,field, rowIndex)
    // this.cellEdit=true
    // this.isSingleClick = false;
    // this.cellEditRowIndex = rowIndex;
    // this.field=field;

  }




  @Input() get lockedColumns() {
    return this.lockedcolumnsInt;
  }

  set lockedColumns(lockcol) {
    this.lockedcolumnsInt = lockcol;
    this.lockedColumnsChange.emit(this.lockedcolumnsInt);
  }
  data: any[];
  datasource: any[];

  @Output() dataTableChange = new EventEmitter();
  @Output() TableRef = new EventEmitter();

  @Input('data') get dataTable() {
    return this.data;
  }

  set dataTable(data) {
    this.data = data;
    this.dataTableChange.emit(this.data);
  }

  @Input() config: AlTableConfig;
  @Input() condition;
  @Input() colCondition;
  @Output() columnsOrderedChange: EventEmitter<any> = new EventEmitter();

  @Output() selectedRowsChange: EventEmitter<any> = new EventEmitter();

  //@Input() loading : boolean;

  columns: any[];

  selectedItems: any[];

  browser = "";
  globalfilter = "";
  tableSelectedRows: any[];
  editInput: boolean = false;
  showadd: boolean = false;
  editIndex: number = -1;
  disablecheck: boolean = false;
  rowcheck: boolean = false;
  tableForm: FormGroup;
  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

  @Input()
  totalElements: number;

  @Output()
  parentFormChange = new EventEmitter();
  @Input()
  get parentForm() {
    return this.tableForm;
  }

  set parentForm(tableForm) {
    this.tableForm = tableForm;
    this.parentFormChange.emit(this.tableForm);
  }
  @Output() onDragStart = new EventEmitter();
  @Output() onDragEnd = new EventEmitter();
  @Output() getRowsPerPage = new EventEmitter();

  screenWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
  // @ViewChild('inpuutFilter', { read: ElementRef }) inpuutFilter: ElementRef;
  constructor(private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef,
    private datepipe: DatePipe) {
    this.onResize();
  }



  ngOnChanges() {
    //  this.cdRef.detectChanges();

    //   document.getElementById("inpuutFilter") && document.getElementById("inpuutFilter").dispatchEvent(new Event('input'));


    if (this.typeTable === 'dynamique') {

      this.showlignToAdd();
    }

  }

  ngOnInit() {


    this.datepipe.transform(this.x, "31/12/9999");
    // this.setFocusSubElement("rowIndex0")

    FilterUtils['myFilter'] = (value, filter): boolean => {
      let x1 = this.getFormatedValue('dd/MM/yyyy', value);
      let x2 = this.getFormatedValue('dd/MM/yyyy', filter);
      return x1 == x2;

    }



    setTimeout(() => {
      if (this.columns) {
        for (var i: number = 1; i < this.columns.length; i++) {

          this.columnsDrag.push(this.columns[i])
        }
      }

    }, 1000);


    this.CreatForm = new FormGroup({
      photo: new FormControl(),
      name: new FormControl(),
      firstName: new FormControl(),
      job: new FormControl(),
      pays: new FormControl(),
      language: new FormControl(),
      birthDate: new FormControl(),
      married: new FormControl(),
      nationality: new FormControl(),
      radio: new FormControl(),
      paysString: new FormControl(),

    });

    this.TableRef.emit(this.dt1);


    const elem: any = document.documentElement;
    if (!elem.requestFullscreen && !elem.webkitRequestFullScreen && !elem.mozRequestFullScreen)
      this.browser = "IE";
    if (!this.tableForm) {
      this.parentForm = this.formBuilder.group({});
    }


    if (this.config.lockColumns && this.columns.length <= 4) {
      this.config.lockColumns = false;
      // this.fix =false;
    }

    this.datasource = this.data;
    this.cdRef.detectChanges();

  }

  setRadioControls() {
    for (let i = 0; i < this.totalElements; i++) {
      if (this.data != undefined) {
        if (Object.keys(this.parentForm.controls).indexOf('radio|' + i) === -1) {
          this.parentForm.addControl('radio|' + i, new FormControl(this.data[i]['radio']));

        }
      }
    }


  }
  colorligne() {

    if (this.zebrure === true)
      return "zebrure page";
    else if (this.config.pagination && this.config.showTotalDataNumber || this.checkboxCellStyle)
      return "page";
    else return "";
  }




  getFormatedValue(colDateFormat, value) {
    return colDateFormat ? this.datepipe.transform(value, colDateFormat) : value;
  }




  getMargin() {
    if (!this.config.pagination)
      return "10px";
    else return "-2%";
  }
  setControls(columns: any[]) {

    if (!this.tableForm) {
      this.parentForm = this.formBuilder.group({});
    }

    if (columns && this.data) {

      for (var j = 0; j < columns.length; j++) {


        if (columns[j].type === 'input' || columns[j].type === 'select' || columns[j].type === 'multi-select') {

          for (var i = 0; i < this.data.length; i++) {

            if (Object.keys(this.parentForm.controls).indexOf(columns[j].field + '|' + i) === -1) {

              if (columns[j].validation) {

                this.parentForm.addControl(columns[j].field + '|' + i, new FormControl(this.data[i][columns[j].field], this.inputControl.bind(this)));
              } else {

                this.parentForm.addControl(columns[j].field + '|' + i, new FormControl(this.data[i][columns[j].field]));
              }
            } else {

              if (columns[j].validation) {

                this.parentForm.controls[columns[j].field + '|' + i] = new FormControl(this.data[i][columns[j].field], this.inputControl.bind(this));
              }
            }
          }
        }
        if (columns[j].type === 'radio' || columns[j].type === 'radio-edit') {
          this.setRadioControls();
        }
      };
    }

  }
  setControlsCellEdit(index, field) {


    this.parentForm = this.formBuilder.group({});

    this.parentForm.addControl('editCell', new FormControl(this.data[index][field], this.inputControl.bind(this)));




  }

  print(rowData, field, rowIndex) {
    return rowData[field]
  }

  setControlsEdit(columns: any[], index) {
    if (!this.tableForm) {
      this.parentForm = this.formBuilder.group({});
    }

    if (columns && this.data) {
      for (var j = 0; j < columns.length; j++) {
        if (Object.keys(this.parentForm.controls).indexOf(columns[j].field + '|' + index) === -1) {
          if (columns[j].pattern) {
            this.parentForm.addControl(columns[j].field + '|' + index, new FormControl(this.data[index][columns[j].field], this.columns[j].pattern));
          } else {
            this.parentForm.addControl(columns[j].field + '|' + index, new FormControl(this.data[index][columns[j].field]));
          }
        } else {
          if (columns[j].validation) {
            this.parentForm.controls[columns[j].field + '|' + index] = new FormControl(this.data[index][columns[j].field], this.inputControl.bind(this));
          }
        }

      }

    }
  }

  @Input()
  get columnsOrdered() {
    return this.columns;
  }

  set columnsOrdered(columns) {
    this.setControls(columns);
    this.columns = columns
    this.columnsOrderedChange.emit(columns);
  }


  @Input()
  get selectedRows() {
    return this.tableSelectedRows;
  }

  set selectedRows(rows) {
    this.tableSelectedRows = rows;
    this.selectedRowsChange.emit(rows);
  }

  onRowSelect(event) {
    this.selectedRowsChange.emit(this.selectedRows);

  }

  onRowUnselect(event) {
    this.selectedRowsChange.emit(this.selectedRows);

  }

  getRowdata(subfields, field, rowData) {
    let fields: String[] = subfields.split('.');

    let data = rowData[field];
    if (data) {
      fields.forEach(element => {
        data = data[element.toString()];
      });
      return data;
    }

    return "";
  }









  getField(subfields, field, rowData) {
    let fields: String = subfields;
    let data = rowData[field];
    if (data) {

      return subfields;
    }

    return "";
  }


  getPipedData(pipe, data) {

    if (pipe) {
      return pipe.transform(data);
    } else { return data; }
  }

  inputChange() {

    this.dataTableChange.emit(this.data);
  }

  returnDate() {

    return this.variablee
  }


  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  triggerActionFunction(action, rowData) {
    let event: AlTableButtonEvent = new AlTableButtonEvent();
    event.action = action;
    event.data = rowData;
    this.buttonClick.emit(event);
    // if(action=="expanded") {
    //   this.selectedRowsChange.emit(rowData);
    // }

  }
  clonedCars: { [s: string]: any; } = {};


  getWidth(x) {
    return 'width:' + x + '!important;';
  }
  getRowDataEdit(rowData): any {

    this.onEditRow.emit(rowData)
  }
  editLigneAction(rowData, i) {
    this.disableCheckTable = true
    this.getRowDataEdit(rowData);
    this.variablee = rowData.birthDate
    if (this.editIndex != -1) {
      this.cancelLigneAction(this.editIndex);
    }
    this.editInput = true;
    this.editIndex = i;
    this.dataEditRow = JSON.parse(JSON.stringify(rowData));
    this.setControlsEdit(this.columns, i);
    this.cdRef.detectChanges();
  }

  // try(rowIndex,editIndex,editRow) {
  //   if (!editRow) {
  //     false
  //   }
  //   else {
  //     if ((rowIndex==-1)&&(editIndex==0) || rowIndex==editIndex) {
  //       return true
  //     }
  //     else return false
  //   }
  // }

  getConfig(editCell) {

    return (editCell)
  }

  editCellIndex: number = -1
  editCellInput: Boolean = false
  editCellField: string = ''


  variablee


  editCellAction(index, field, modif) {

    this.variablee = this.data[index][field]
    if (this.config.editCell || modif) {
      if (this.editCellIndex != -1) {
        this.quitLastCell(this.data[index])
      }

      this.isSingleClick = false;
      this.editCellField = field
      this.editCellInput = true
      this.editCellIndex = index

      this.setControlsCellEdit(index, field)
      this.cdRef.detectChanges();
      this.cellEditTemplate && this.cellEditTemplate.nativeElement.focus();
      if (this.lastCellIndex > -1) {
        this.data[this.lastCellIndex][this.lastCellField] = this.lastCellValue
      }

    }
  }

  @ViewChild('cellEditTemplate', { read: ElementRef }) cellEditTemplate: ElementRef;
  @ViewChild('inputFilter', { read: ElementRef }) inputFilter: ElementRef;

  onBlurCell(rowData) {

    this.quitLastCell(rowData)
  }
  lastCellIndex;
  lastCellField;
  lastCellValue;

  quitLastCell(rowData) {
    this.onSavingRow.emit(rowData)
    this.lastCellIndex = this.editCellIndex;
    this.lastCellField = this.editCellField;
    this.lastCellValue = this.data[this.editCellIndex][this.editCellField]
    this.editCellInput = false;
    this.editCellIndex = -1;
    this.editCellField = ''
  }

  openDISABLED(event, col, i) {
    let columnEdit: any;
    columnEdit = this.columns.filter(obj => obj.field === col)


    //open condition disable false
    if (columnEdit[0].colCondition) {

      if (typeof event[col][0] === 'object') {


        let keys = Object.keys(columnEdit[0].condition);
        event[col].forEach(element => {


          keys.forEach(key => {
            if (element[key] == columnEdit[0].condition[key]) {
              this.test = this.test && true;
            } else {
              this.test = false && this.test
            }

          });

          if (this.test === true) { this.foundElment = true }
          this.test = true;

        });
      }


      if ((event[col].includes(columnEdit[0].condition)) || (this.foundElment === true)) {
        let columnEdit2: any;
        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].colCondition)


        columnEdit2[0].disabled = null;
        if (columnEdit2[0].validatiorCondition) {
          this.parentForm.get('' + columnEdit2[0].field + '|' + i).setValidators(columnEdit2[0].validatiorCondition);
        }
        columnEdit2[0].pattern = [Validators.required];

      }

      else {

        let columnEdit2: any;
        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].colCondition)
        let x = this.data[i][columnEdit2[0].field]

        this.parentForm.get('' + columnEdit2[0].field + '|' + i).reset();
        this.parentForm.get('' + columnEdit2[0].field + '|' + i).setValue(x);

        columnEdit2[0].disabled = true
        columnEdit2[0].pattern = null;
      }

      this.test = true;
      this.foundElment = false;
    }

    //close

    if (columnEdit[0].closecolCondition) {


      if (typeof event[col][0] === 'object') {

        let keys = Object.keys(columnEdit[0].closecondition);
        event[col].forEach(element => {


          keys.forEach(key => {
            if (element[key] == columnEdit[0].closecondition[key]) {
              this.test2 = this.test2 && true;
            } else {
              this.test2 = false && this.test2
            }

          });

          if (this.test2 === true) { this.foundElment2 = true }
          this.test2 = true;

        });
      }

      if ((event[col].includes(columnEdit[0].closecondition)) || (this.foundElment2 === true)) {
        let columnEdit2: any;
        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].closecolCondition)
        let x = this.data[i][columnEdit2[0].field]

        this.parentForm.get('' + columnEdit2[0].field + '|' + i).reset();
        this.parentForm.get('' + columnEdit2[0].field + '|' + i).setValue(x);

        columnEdit2[0].disabled = true
        columnEdit2[0].pattern = null;
      }

      else {


        let columnEdit2: any;
        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].closecolCondition)
        let x = this.data[i][columnEdit2[0].field]
        if (columnEdit2[0].validatiorCondition) {
          this.parentForm.controls['' + columnEdit2[0].field + '|' + i].setValidators(columnEdit2[0].validatiorCondition);
        }

        columnEdit2[0].pattern = [Validators.required];
        this.parentForm.get('' + columnEdit2[0].field + '|' + i).setValue(x);
        columnEdit2[0].disabled = null;


      }

      this.test2 = true;
      this.foundElment2 = false;
    }

  }





  INOpen(event, col, i) {

    let columnEdit: any;
    columnEdit = this.columns.filter(obj => obj.field === col)

    if ((!columnEdit[0].colCondition) || (!columnEdit[0].closecolCondition)) {

      return (columnEdit[0].disabled)
    }

  }


  openIN(event, index, col) {

    let columnEdit: any;
    columnEdit = this.columns.filter(obj => obj.field === col)

    if (columnEdit[0].colCondition) {
      let columnEdit2: any;
      if (event[col].includes(columnEdit[0].condition)) {

        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].colCondition)
        columnEdit2[0].editCell = true;
        this.editCellAction(index, columnEdit[0].colCondition, true)
      } else {
        let columnEdit2: any;
        columnEdit2 = this.columns.filter(obj => obj.field === columnEdit[0].colCondition)
        columnEdit2[0].editCell = false
      }
    }


  }
  saveLigneAction(i, rowData) {

    this.disableCheckTable = false;
    this.showadd = false;
    this.onSavingRow.emit(rowData);
    this.showAction = false;
    this.editIndex = -1;
    this.editInput = false;
    this.rowcheck = true;
    this.disablecheck = false;


  }
  cancelLigneAction(i) {
    this.disableCheckTable = false;
    this.data[i] = this.dataEditRow;
    this.editInput = false;
    this.editIndex = -1;
    this.disablecheck = false;

  }


  filterGlobalLazy(event) {

    if (this.config.lazy) {
      this.loadLazy = true;
      this.data = this.datasource;
      this.config.lazy = false;
    }
    this.dt1.filterGlobal(event.target.value, 'contains');

    this.getTotalFilterElements();

    if (this.loadLazy) {
      setTimeout(() => {
        if (event.target.value == null || event.target.value == "") {
          this.dt1.filteredValue = null;
        }
        this.config.lazy = true;

      }, 100);

    }

  }
  filterInput(event, x, y, z) {


    if (this.config.lazy) {
      this.loadLazy = true;
      this.data = this.datasource;
      this.config.lazy = false;
    }
    FilterUtils['myFilter2'] = (value, filter): boolean => {

      let x1 = this.getPipedData(y, value).toUpperCase();

      let x2 = filter.toUpperCase();
      //   this.filter.emit(filter);

      return x1.includes(x2);
    }
    // z : valeur de col.subfild dans le cas ou on cherche avec sous champs
    if (z != undefined) {
      let x3 = x.toString();
      let x4 = z.toString();
      let x5 = x3 + '.' + x4;
      this.dt1.filter(event.target.value, x5, 'myFilter2')
    } else
      this.dt1.filter(event.target.value, x, 'myFilter2')

    this.getTotalFilterElements();

    if (this.loadLazy) {
      setTimeout(() => {
        if (event.target.value == null || event.target.value == "") {
          this.dt1.filteredValue = null;
        }
        this.config.lazy = true;

      }, 100);

    }

  }
  filterDate(event, x) {

    if (this.config.lazy) {
      this.loadLazy = true;
      this.data = this.datasource;
      this.config.lazy = false;
    }
    this.dt1.filter(event.target.value, x, 'myFilter');

    this.getTotalFilterElements();

    if (this.loadLazy) {
      setTimeout(() => {
        if (event.target.value == null || event.target.value == "") {
          this.dt1.filteredValue = null;
        }
        this.config.lazy = true;

      }, 100);

    }

  }
  filterSelect(event, x, y) {

    if (this.config.lazy) {
      this.loadLazy = true;
      this.data = this.datasource;
      this.config.lazy = false;
    }
    this.dt1.filter(this.getPipedData(y, event.target.value), x, 'equals')

    this.getTotalFilterElements();

    if (this.loadLazy) {
      setTimeout(() => {
        if (event.target.value == null || event.target.value == "") {
          this.dt1.filteredValue = null;
        }
        this.config.lazy = true;

      }, 100);

    }

  }



  filterLazy(value, field, criteria) {

    let loadLazy: boolean = false;
    if (this.config.lazy) {
      loadLazy = true;
      this.data = this.datasource;
      this.config.lazy = false;
    }
    this.dt1.filter(value, field, criteria);
    if (this.totalElements) {
      this.getTotalFilterElements();
    }
    if (loadLazy) {
      setTimeout(() => {
        if (value == null || value == "") {
          this.dt1.filteredValue = null;
        }
        this.config.lazy = true;

      }, 100);

    }

  }
  TitleChanger(rowData, bttn): any {
    this.TitleIconChanger.emit({ rowData, bttn })
    return bttn.title

  }


  getResultradio1(rowData): any {
    this.getResultradio.emit(rowData);

  }


  getDataFromFields(fields, rowData) {
    let t = [];
    fields.forEach(element => {
      t.unshift(rowData[element]);
    });
    return t;
  }


  onLazyLoadFunction(event) {

    this.onLazyLoad.emit(event);
  }

  /*
   
onLazyLoadFunction(event) {
    this.loading = true;
    setTimeout(() => {
      if (this.datasource) {
          this.data = this.datasource.slice(event.first, (event.first + event.rows));
          this.loading = false;
      }
  }, 500);
    //this.getTotalFilterElements();

}*/

  onHeaderCheckboxToggle() {
    this.selectedRowsChange.emit(this.selectedRows);
  }

  inputControl(formcontrol: FormControl) {
    var controlName: any;
    var returnValue;
    Object.keys(this.parentForm.controls).forEach(field => {
      const control = this.parentForm.get(field);
      if (control instanceof FormControl) {

        if (control === formcontrol) {
          controlName = field.split("|");

          this.columns.forEach(element => {

            if (element.type === 'input' || element.type === 'select' || element.type === 'multi-select' || element.type === 'radio') {
              if (element.validation === null || element.validation === undefined) {
                returnValue = { isError: false };
              } else if (!element.validation(formcontrol.value, this.data[parseInt(controlName[1])])) {

                returnValue = { isError: false };
              } else {
                returnValue = null;
              }
            }
          });
        }
      }
    });
    return returnValue;
  }

  dragStart(data, rowIndex) {

    let x = 'rowIndex' + rowIndex
    this.setFocusSubElement(x, 'span')
    this.onDragStart.emit(data);
    // this.rowDragged=true;
  }

  dragEnd(event, rowIndex) {
    this.onDragEnd.emit(event);
    let x = 'rowIndex' + rowIndex
    this.setFocusSubElement2(x, 'span')
    //this.rowDragged=false;
  }

  islock(column) {
    return (this.lockedColumns.indexOf(column) != -1) ? true : false;
  }

  getTotalFilterElements() {


    setTimeout(() => {
      if (this.dt1.filteredValue) {
        this.totalElements = this.dt1.filteredValue.length;

      }

      else
        this.totalElements = this.data.length;

    }, this.loadLazy ? 200 : 300);
  }



  sort() {

    setTimeout(() => {
      this.confusion = "sort"
    }, 20);

  }

  confusion = ""


  lockColumn(i) {

    this.confusion = "lock"
    setTimeout(() => {


      if (this.confusion == "lock") {

        if (this.fix === true) {

          let index = this.lockedColumns.indexOf(this.columnsOrdered[i]);
          if (index != -1) {



            this.lockedColumns = [...this.lockedColumns.filter(element => element !== this.lockedColumns[index])];

            let col = [...this.columnsOrdered.filter(element => this.lockedColumns.indexOf(element) == -1)];
            this.columnsOrdered = [...this.lockedColumns, ...col];

          } else {


            if (this.lockedColumns.length == 4) {

              this.lockedColumns = [...this.lockedColumns.filter(element => element !== this.lockedColumns[3])];
            }

            this.lockedColumns = [...this.lockedColumns, this.columnsOrdered[i]];
            let col = [...this.columnsOrdered.filter(element => this.lockedColumns.indexOf(element) == -1)];
            this.columnsOrdered = [...this.lockedColumns, ...col];
          }
        }

      }




    }, 40);
















  }

  getstyle(column) {

    if (this.fix === true) {
      let s = null;
      if (this.columnsOrdered.indexOf(column) < this.lockedColumns.length) {
        switch (this.lockedColumns.indexOf(column)) {
          case 0:
            {
              if (this.config.checkboxSelection) {
                s = this.config.expandable ? { 'left': '60px' } : { 'left': '30px' };
              } else { s = this.config.expandable ? { 'left': '30px' } : { 'left': '0px' }; }
            }
            break;
          case 1:
            {
              if (this.config.checkboxSelection) {
                s = this.config.expandable ? { 'left': '210px' } : { 'left': '180px' };
              } else { s = this.config.expandable ? { 'left': '180px' } : { 'left': '150px' }; }
            }
            break;
          case 2:
            {
              if (this.config.checkboxSelection) {
                s = this.config.expandable ? { 'left': '360px' } : { 'left': '330px' };
              } else { s = this.config.expandable ? { 'left': '330px' } : { 'left': '300px' }; }
            }
            break;
          case 3:
            {
              if (this.config.checkboxSelection) {
                s = this.config.expandable ? { 'left': '510px' } : { 'left': '480px' };
              } else { s = this.config.expandable ? { 'left': '480px' } : { 'left': '450px' }; }
            }

            break;
          default:
            s = null;
            break;
        }
      }
      return s;
    }



  }
  getStyleLocked(i) {
    let index = this.lockedColumns.indexOf(this.columnsOrdered[i]);
    if (index != -1 && this.fix === true) {
      this.BackColor = "#f2f2F2 ";
    } else {
      this.BackColor = " white";

    }
    return this.BackColor
  }

  getstyleExpand() {
    return this.lockedColumns.length > 0 && this.config.expandable ? (this.config.checkboxSelection ? { 'left': '30px' } : { 'left': '0px' }) : null;
  }

  retour() {
    if (this.retour_ligne == true) {

      return ({ 'white-space': 'initial', 'display': 'contents' })
    }
  }

  buttonToDisplay(rowData) {
    var buttonsDisplayNumber = 0;
    this.config.rowdataButtons.forEach(element => {
      if (element.display_condition) {
        if (element.display_condition(rowData)) {
          buttonsDisplayNumber++;
        }
      } else {
        buttonsDisplayNumber++;
      }
    });
    return buttonsDisplayNumber != 0;
  }
  onRowEditInit(data) {
    this.editRowAction = true;



  }

  buttonAction(event) {
    if (event.action === "saveRow") {


    }
    if (event.action === "cancelRow") {

    }
    if (event.action === "editRow") {

    }

  }

  showligne() {
    setTimeout(() => {
      this.showlignToAdd();
    }, 10);
  }

  showlignToAdd() {
    for (let col of this.columns) {
      if (col.pattern) {
        let formControlName = col.field + '|' + 0
        this.parentForm.reset(formControlName)
      }
    }
    this.nbItemsToShowT = this.nbItemsToShowT;
    this.disableCheckTable = true;
    this.disablecheck = true;
    this.showadd = true;
    this.showedit = true;
    this.showAction = true;
    this.editIndex = 0;
    let emptyRow: any;
    let h = '{'
    for (let col of this.columnsOrdered) {
      h += '"' + col.field + '":"0",'
    }
    h = h.substr(0, h.length - 1)
    h += '}'
    emptyRow = JSON.parse(h);
    this.displayDialog = true;
    let x: string;
    this.data.unshift(JSON.parse(JSON.stringify(emptyRow)));
    for (var j = 0; j < this.columns.length; j++) {
      this.data[0][this.columns[j].field] = null;


      if (Object.keys(this.parentForm.controls).indexOf(this.columns[j].field + '|' + (0)) === -1) {
        if (this.columns[j].pattern) {
          this.parentForm.addControl(this.columns[j].field + '|' + (0), new FormControl(this.data[(0)][this.columns[j].field], this.columns[j].pattern));
        } else {
          this.parentForm.addControl(this.columns[j].field + '|' + (0), new FormControl(this.data[(0)][this.columns[j].field]));
        }
      } else {
        if (this.columns[j].validation) {
          this.parentForm.controls[this.columns[j].field + '|' + (0)] = new FormControl(this.data[(0)][this.columns[j].field], this.inputControl.bind(this));

        }
      }

      this.setRadioControls();

      for (let col of this.columns) {
        if (col.pattern) {
          let formControlName = col.field + '|' + 0
          this.parentForm.reset(formControlName)
        }
      };
      //document.getElementById("rowIndex0").setAttribute("style","background-color:red");

    }
  }
  save(rowData) {
    this.disableCheckTable = false;
    this.onSavingRow.emit(rowData)
    this.showedit = false;
    this.showAction = false;
    this.editIndex = -1;
    this.displayDialog = false;
    this.showadd = false;
    this.disablecheck = false;
    this.rowcheck = true;
    this.totalElements++

    document.getElementById('td0').setAttribute('value', 'false')

  }
  cancel() {
    this.disableCheckTable = false;
    this.showadd = false;
    this.showedit = false;
    this.editIndex = -1;
    this.data.splice(0, 1)
    this.displayDialog = false;
    this.showAction = false;

  }
  // TypeBadge(x){
  //   if(x=='pillule'){
  //     return 'border-radius: 500px !important;'
  //   }else
  //   return'border-radius: 3px !important;'
  // }

  CssBadge(color) {

    return 'badge badge-' + color;
  }

  showPop() {
    this.displayPop = true;
  }

  savePop() {


  }
  cancelPop() {
    this.displayPop = false;
    this.totalElements++;
  }
  afficherListeObjet(s, x, y) {


    if (x && s) {

      let list = "";
      for (let i of x) {
        list = list + i + ", ";
      }


      list = list.slice(0, list.length - 2)


      return (list)
    }
    if (x && !s) {
      let list = "";
      for (let i of x) {
        list = list + i[y] + ", ";

      }


      list = list.slice(0, list.length - 2)


      return (list)
    }

    return "";
  }

  catchPaginationDetails(event) {
    this.getRowsPerPage.emit(event.rows)
  }


  isValidRow(rowIndex) {
    let val = false
    for (let col of this.columns) {

      if (col.pattern) {
        let formControlName = col.field + '|' + rowIndex
        if (!this.parentForm.controls[formControlName].valid) {
          val = true
        }
      }
    }
    return val

  }
  getData(field): any {

    if (field === "01/01/1970") {

      return "jj/mm/aaaa";
    } else
      return field;

  }


  getpaddingAll(col) {
    let pad;
    if ((this.filterByColumns && (col.filter != "SELECT" && col.filter != "INPUT" && col.filter != "DATE") && col.type != 'multi-select' && col.type != 'select') || (this.filterByColumns && col.ObjectMono) || (this.filterByColumns && !col.strings && col.type === 'multi-select')) {
      pad = '43px';
    } else {
      pad = '0px';
    }
    return pad;

  }

  setFocusSubElement(idTagParent, subElementTag) {

    setTimeout(() => {
      let tr: HTMLElement = <HTMLElement>document.getElementById(idTagParent);
      for (var i: number = 0; i < this.columns.length; i++) {
        let sp: HTMLElement = <HTMLElement>document.getElementById(idTagParent).getElementsByTagName(subElementTag)[i];
        sp.style.color = "#fafafa";
      }


      tr.style.backgroundColor = "#fafafa"
    }, 0);
  }
  setFocusSubElement2(idTagParent, subElementTag) {

    setTimeout(() => {
      let tr: HTMLElement = <HTMLElement>document.getElementById(idTagParent);
      for (var i: number = 0; i < this.columns.length; i++) {
        let sp: HTMLElement = <HTMLElement>document.getElementById(idTagParent).getElementsByTagName(subElementTag)[i];
        sp.style.color = "#76777b";
      }
      tr.style.backgroundColor = "white"

    }, 100);
  }



  checkspaces(x) {
    if (!x.replace(/\s/g, '').length) {
      return false
    }
    return true
  }
  selectRow(event) {
    if (event.target.classList.length == 3) {
      this.unCheckAll.emit()
    }
    else {
      this.onCheckAll.emit()
    }

  }
}
