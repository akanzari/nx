import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { UpperCasePipe, JsonPipe } from '@angular/common';
import { AlTableConfig, ALTableButton } from 'ng-softilys/table';
import { DisplayPipe } from './display.pipe';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'primeng/table';
import { HighlightService, DataService } from '@showcase/service';
import { Validators } from '@angular/forms';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [HighlightService, DataService]
})
export class TableComponent implements OnInit, AfterViewInit {

  strings: boolean = false;
  bdg: any = "carre";
  testpillule: boolean = false
  pill: boolean = false;
  colorRow: boolean = false;
  colorField: boolean = false;
  buttonpop1: string = "Ajouter";
  buttonpop2: string = "Close";
  buttonAdd: string = "";
  kh = this.disabled_Condetion;
  nbItemsToShowT: number = 3;
  zebrure = false;
  fix: boolean = false;
  retour_ligne: boolean = false;
  var: string = 'Ajout dans le tableau';
  modal: string = 'Ajout avec modal';
  dynamique: boolean = false;
  ColObString: string;
  tableRef: Boolean;
  expandable: false;
  resize: boolean = false;
  reorder: boolean = false;
  filterByColumns: boolean = false;
  checkboxCellStyle = false;
  checkboxRowStyle = false;
  displayTable = true;
  customRow = false;
  BadgeSize = false;
  BadgeSizeWidth: string;
  persons: any[];
  pers: any = {};
  columns: any[];
  actionB: boolean = false;
  EditMultiColonne: boolean = false;
  editLabel: string = "Editer";
  buttonadd: string = "Ajouter";
  saveLabel: string = "Sauvegarder";
  cancelLabel: string = "Annuler"
  globalFilter: string = "Global Filter"
  condition: string = "Italienne"
  colCondition: string = "firstName"
  pays = ["", "Tunisie", "Marroc", "Algérie"];
  paysObj = [{ nameP: '' }, { nameP: 'Tunisie' }, { nameP: 'Marroc' }, { nameP: 'Algérie' }];
  rowData: any;
  selectedRows: any[] = [];
  tableConf: AlTableConfig = new AlTableConfig();
  buttonView: ALTableButton;
  buttonEdit: ALTableButton;
  rowdataButtons: ALTableButton[] = [];
  buttonActiontype: string;
  clickedActionData: string;
  buttonadded: boolean = false;
  sub: boolean = false;
  value: any;
  pipe: boolean = true;
  Row: Boolean = false;
  subfiels: any[] = [
    { field: 'adresse', header: 'Ville', subfields: 'ville', width: '', filter: 'INPUT' },
    { field: 'adresse', header: 'Code Postale', subfields: 'codePostale', width: '', filter: 'INPUT' }
  ];
  tableButtonAction: ALTableButton;
  uppercasePipe = new UpperCasePipe();
  JsonPipe = new JsonPipe();
  fields: boolean = true;
  totalElements;
  isinput: boolean = false;
  isProgress: boolean = false;
  testScrollBar: boolean = false;
  lockColumns;
  boldTxt = " bold"
  headerpop: string = "Ajouter Personne" + this.boldTxt.toUpperCase().bold();
  lockedColumns = [];
  options = ["", "singer", "v"];
  nationalité = ["", "Tunisie,Algérienne", "Algérienne", "Italienne", "Tunisienne,Algerienne"];
  nationalitéObj: any[] = [{ name: '' }, { name: 'Tunisienne, Algerienne' }, { name: 'Algerienne' }, { name: 'Francaise' }, { name: 'Italienne' }, { name: 'Francaise, Tunisienne' }];
  loading = false;
  src: any;
  numberOfRowsPerPage: boolean
  editCol: string;
  x: any[]
  element: string = "name";
  showMultiSelect: boolean = false
  showImage: boolean = false;
  showSelect: boolean = false
  showcheckBox: boolean = false;
  showLien: boolean = false;
  showradio: boolean = false;
  radioDemoOptionsTab = [{ label: 'vrai', value: 'true' }, { label: 'faux', value: 'false' }, { label: 'non applicalble', value: ' ' }];
  typeTable: string = "statique";
  selectedRow: any = null

  constructor(private dataservice: DataService,
    private translate: TranslateService,
    @Inject(HighlightService) private readonly highlightService: HighlightService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    this.getnbItemsToShowT();
    this.totalElements = this.dataservice.gettotalelement();
    this.persons = this.dataservice.getAllDtata();
    this.columns = [
      { field: 'name', header: 'Nom', width: '', disabled: true, editCell: false, filter: this.filterByColumns ? 'INPUT' : null, pattern: [Validators.pattern(/^([^0-9]*)$/), Validators.required],/*  filterDefaultValue: 'Marsaoui' */ },
      { field: 'firstName', header: 'Prénom', width: '10', disabled: true, filter: this.filterByColumns ? 'INPUT' : null },
      {
        field: 'job', header: 'Profession', condition: 'teacher', defaultvalonAdd: "Singer", disabledOnAdd: true, colCondition: 'name', validatiorCondition: [Validators.required, Validators.maxLength(200)], type: '', disabled: null, validation: this.validInput,
        filter: 'SELECT', filterOptions: this.options, width: '15'
      },
      { field: 'birthDate', header: 'Date d\'anniversaire', disabled: null, type: 'date', filter: 'DATE', format: 'dd/MM/yyyy', width: '20', time: false },
      {
        field: 'language', header: "Langue", closecondition: 'English', closecolCondition: 'job', condition: 'Spanish', colCondition: 'tel', disabled: null, filter: this.filterByColumns ? 'INPUT' : null, /* filterDefaultValue: 'Arabic',  */
        cellStyle: this.checkboxCellStyle ? this.cellColorCondition : null, width: '30'
      },
      { field: 'tel', width: '25', disabled: true, validatiorCondition: [Validators.required, Validators.maxLength(200)], header: '', type: 'icon', iconName: 'icon-phone' }
    ];
    this.tableConf.pagination = false;
    this.tableConf.editRow = false;
    this.tableConf.addRow = false;
    this.tableConf.editCellCol = false;
    this.tableConf.pop = false;
    this.tableConf.badge = false;
    this.tableConf.rowsPerPage = 5;
    this.tableConf.rowsPerPageOptions = [5, 10, 20, 30, 50];
    this.tableConf.reorderableColumns = true;
    this.tableConf.checkboxSelection = false;
    this.tableConf.globalFilter = false;
    this.tableConf.showTotalDataNumber = false;
    this.tableConf.totalDataMessage = "personnes trouvées";
    this.tableConf.defaultSortedColumns = "name";
    this.tableConf.sortedColumns = false;
    this.tableConf.reorderable = false;
    this.tableConf.rowStyle = this.checkboxRowStyle ? this.lineColorCondition : null;
    this.tableConf.actionButtonsPosition = 'end';
    this.tableConf.actionButtonsHeader = 'Actions';
    this.buttonView = new ALTableButton();
    this.buttonView.action = "display";
    this.buttonView.icon = "icons icon-eye";
    this.buttonView.title = "display";
    this.buttonView.display_condition = this.display_Condetion;
    this.buttonView.disabled_condition = this.disabled_Condetion;
    this.rowdataButtons.push(this.buttonView);
    this.buttonView = new ALTableButton();
    this.buttonView.action = "display";
    this.buttonView.icon = "icons icon-basket";
    this.buttonView.title = "shop";
    this.buttonView.display_condition = this.display_Condetion;
    this.buttonView.disabled_condition = this.disabled_Condetion;
    this.rowdataButtons.push(this.buttonView);
    this.buttonView = new ALTableButton();
    this.buttonView.action = "display";
    this.buttonView.icon = "icons icon-calendar";
    this.buttonView.title = "calender";
    this.buttonView.display_condition = this.display_Condetion;
    this.buttonView.disabled_condition = this.disabled_Condetion;
    this.rowdataButtons.push(this.buttonView);
  }

  TitleIconChanger(event) {
    if (event.bttn.icon === "icons icon-basket") {
      if (event.rowData['language'] === "Frensh") {
        event.bttn.title = "magasin"
      }
      else if (event.rowData['language'] === "Spanish") { event.bttn.title = "negozio" }
      else { event.bttn.title = "shop" }
    }
  }

  badgeColorCondition(fieldValue): string {
    if (fieldValue > 30) {
      return 'error'
    }
    return 'valid';
  }

  onCheck1() {
    this.lockedColumns.length = 0;
  }

  getResultradio(event) { }

  getnbItemsToShowT() {
    this.nbItemsToShowT = this.nbItemsToShowT
  }

  test($event) { }

  enpandAndReorderable() { }

  getSelectColumns() {
    if (this.showSelect) {
      this.columns.splice(2, 0, {
        field: 'pays', header: 'pays', disabled: true, filterOptions3: this.paysObj, type: 'select', width: '', options: [{ nameP: 'Tunisie' }, { nameP: 'Marroc' }, { nameP: 'Algérie' }], job: "teacher", pays: [{ nameP: 'Francaise' }, { nameP: 'Italienne' }, { nameP: 'Tunisienne' }, { nameP: 'Algerienne' }], validation: null, ObjectMono: true, bindValue: 'nameP',
        bindLabel: 'nameP'
      })
      this.columns.splice(3, 0, { field: 'paysString', header: 'paysString', filterOptions4: this.pays, type: 'select', width: '', options: ['Tunisie', 'Marroc'], validation: null })
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'select')
    }
  }

  uncheckEdit() {
    this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
    this.ColObString = null;
  }

  getEditCelCol(type?: string) {
    if (this.tableConf.editRow) {
      if (type === 'string') {
        this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
        this.columns.splice(5, 0, { field: 'nationalityString', header: 'nationalitéString', type: 'multi-select', width: '', disabled: null, condition: 'Italienne', colCondition: 'firstName', options: ['Tunisienne', 'Algerienne', 'Francaise', 'Italienne'], strings: true });
      }
      else {
        this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
        this.columns.splice(6, 0, { field: 'nationality', header: 'nationalité', type: 'multi-select', width: '', disabled: null, condition: { name: 'Italienne', pays: 'italie ', id: true }, colCondition: 'firstName', options: [{ name: 'Tunisienne', pays: 'tun', id: true }, { name: 'Algerienne', pays: 'alg', id: true }, { name: 'Francaise', pays: 'france', id: false }, { name: 'Italienne', pays: 'italie ', id: true }], bindlabelmultiselect: 'name' },)
      }
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
    }
  }

  changeMS() {
    setTimeout(() => {
    }, 20);
    this.getMultiSelectColumns()
  }

  getMultiSelectColumns() {
    if (this.showMultiSelect) {
      this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
      this.columns.splice(5, 0, { field: 'nationalityString', disabled: 'true', header: 'nationalitéString', type: 'multi-select', width: '', options: ['Tunisienne', 'Algerienne', 'Francaise', 'Italienne'], strings: true, filterOptions2: this.nationalité });
      this.columns.splice(6, 0, { field: 'nationality', header: 'nationalité', type: 'multi-select', filterOptions5: this.nationalitéObj, width: '', options: [{ name: 'Tunisienne' }, { name: 'Algerienne' }, { name: 'Francaise' }, { name: 'Italienne' }], bindlabelmultiselect: 'name' },)
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'multi-select')
    }
  }

  getImageColumns() {
    if (this.showImage) {
      this.columns.splice(0, 0, { field: 'photo', header: 'Photo', type: 'img', width: '' })
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'img')
    }
  }

  getcheckBoxColumns() {
    if (this.showcheckBox) {
      this.columns.splice(1, 0, { field: 'married', disabled: true, pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' })
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'checkbox')
    }
  }

  getLienColumns() {
    if (this.showLien) {
      this.columns.splice(0, 0, { field: 'lien', header: 'Lien', type: 'lien', width: '' })
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'lien')
    }
  }

  getradio() {
    this.columns = this.columns.filter(obj => obj.type !== 'radio-edit')
    this.editCol = ''
    if (this.showradio) {
      this.columns.splice(this.columns.length, 0, { field: 'radio', header: 'Validation', type: 'radio', width: '' })
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'radio')
    }
  }

  looseBadgeColumns() {
    this.columns = this.columns.filter(obj => obj.type !== 'badge');
  }

  getBadgeColumns() {
    if (this.tableConf.badge === true) {
      if (this.bdg == "pillule") {
        this.bdg = "";
        this.columns = this.columns.filter(obj => obj.type !== 'badge')
        this.columns.splice(4, 0, { field: 'age', header: 'Age', type: 'badge', typeBadge: 'pillule', widthBadge: this.BadgeSizeWidth, colorLigne: this.tableConf.badge && this.colorRow ? this.badgeColorConditionRowData : "valid", color: this.tableConf.badge && this.colorField ? this.badgeColorCondition : null, pipe: this.uppercasePipe })
        this.testpillule = true
      } else if (this.bdg == "carre") {
        this.bdg = "";
        this.columns = this.columns.filter(obj => obj.type !== 'badge')
        this.columns.splice(4, 0, { field: 'age', header: 'Age', type: 'badge', widthBadge: this.BadgeSizeWidth, colorLigne: this.tableConf.badge && this.colorRow ? this.badgeColorConditionRowData : "valid", color: this.tableConf.badge && this.colorField ? this.badgeColorCondition : null, pipe: this.uppercasePipe })
        this.testpillule = false
      }
    }
    else {
      this.columns = this.columns.filter(obj => obj.type !== 'badge')
    }
  }

  getMultiColumns() {
    if (this.testScrollBar === true) {
      this.columns = [
        { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' },
        { field: 'name', header: 'Nom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        { field: 'firstName', header: 'Prénom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        {
          field: 'job', header: 'Profession', type: '', validation: this.validInput,
          filter: 'SELECT', filterOptions: this.options, width: ''
        },
        { field: 'birthDate', header: 'Date d\'anniversaire', type: 'date', filter: 'DATE', format: 'dd/MM/yyyy', width: '', time: false },
        {
          field: 'language', header: "Langue", filter: this.filterByColumns ? 'INPUT' : null, filterDefaultValue: 'arab',
          cellStyle: this.checkboxCellStyle ? this.cellColorCondition : null, width: ''
        },
        { field: 'firstName', header: 'Prénom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        { field: 'name', header: 'Nom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        { field: 'firstName', header: 'Prénom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        {
          field: 'job', header: 'Profession', type: '', validation: this.validInput,
          filter: 'SELECT', filterOptions: this.options, width: ''
        },
        { field: 'firstName', header: 'Prénom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
      ];
    }
    else {
      this.columns = [
        { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' },
        { field: 'name', header: 'Nom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        { field: 'firstName', header: 'Prénom', width: '', filter: this.filterByColumns ? 'INPUT' : null },
        {
          field: 'job', header: 'Profession', type: '', validation: this.validInput,
          filter: 'SELECT', filterOptions: this.options, width: ''
        },
        { field: 'birthDate', header: 'Date d\'anniversaire', type: 'date', filter: 'DATE', format: 'dd/MM/yyyy', width: '', time: false },
        {
          field: 'language', header: "Langue", filter: this.filterByColumns ? 'INPUT' : null, filterDefaultValue: 'arab',
          cellStyle: this.checkboxCellStyle ? this.cellColorCondition : null, width: ''
        }
      ];
    }
  }

  getRef(event: Table) {
    event.reset();
  }

  RowMode() {
    if (this.Row == false) {
      this.tableConf.var = ''
      this.tableConf.pop = false;
      this.tableConf.addRow = false;
      this.tableConf.addDyn = false;
    }
    if (this.Row) {
      this.tableConf.var = 'Ajout dans le tableau'
      this.tableConf.addRow = true;
    }
  }

  rowmethode() {
    this.refreshTable();
    this.typeTable = 'statique';
    this.tableConf.var = '';
    this.tableConf.var = 'Ajout dans le tableau';
    this.tableConf.addRow = true;
    this.tableConf.addDyn = false;
    this.tableConf.pop = false;
  }

  dynamicmethode() {
    this.refreshTable();
    this.typeTable = 'dynamique';
    this.tableConf.var = 'Ajout dynamique';
    this.tableConf.addRow = false;
    this.tableConf.addDyn = true;
    this.tableConf.pop = false;
  }

  popmethode() {
    this.refreshTable();
    this.typeTable = 'modal';
    this.tableConf.var = 'Ajout avec modal';
    this.tableConf.pop = true;
    this.tableConf.addDyn = false;
    this.tableConf.addRow = false;
  }

  SelectAllPre() {
    let code = this.getPrerequis();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentt').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test11';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('tr1').style.height = '184px';
  }

  SelectAll() {
    let code = this.getHtmlCode();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parent').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test1';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    if (this.expandable)
      document.getElementById('o').style.height = '620px';
    else document.getElementById('o').style.height = '184px';
  }

  SelectAllTs() {
    let code = this.getTsCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenty').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test21';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o2').style.height = '1000px';
  }

  SelectAllCss() {
    let code = this.getCssCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentxy').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test321';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o12').style.height = '206px';
  }

  str2DOMElement(html) {
    var frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    var el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
  }

  refreshAddLigne() {
    this.persons = [];
    this.persons = [...this.dataservice.getAllDtata()];
  }

  refreshTable() {
    if (this.filterByColumns) {
      this.retour_ligne = true;
    }
    this.refreshAddLigne();
    this.displayTable = false;
    setTimeout(() => {
      // Force change detection by changing data of table
      // When cell style is activated
      this.columns.filter(e => e.field === 'language').map(e => e.cellStyle = this.checkboxCellStyle ? this.cellColorCondition : null);
      this.columns.filter(e => e.field === 'language').map(e => e.filter = this.filterByColumns ? 'INPUT' : null);
      this.columns.filter(e => e.field === 'name').map(e => e.filter = this.filterByColumns ? 'INPUT' : null);
      this.columns.filter(e => e.field === 'firstName').map(e => e.filter = this.filterByColumns ? 'INPUT' : null);
      this.tableConf.rowStyle = this.checkboxRowStyle ? this.lineColorCondition : null;
      this.tableConf.expandable = this.expandable;
      this.tableConf.resizable = this.resize;
      this.displayTable = true;
    });
    console.log(this.columns)
  }

  cellColorCondition(fieldValue): string {
    return fieldValue === 'Arabic' ? 'badge badge-medium badge-large ' : null;
  }

  badgeColorConditionRowData(obj): string {
    if (obj.name === "Garsia") {
      return 'error'
    }
    return 'valid';
  }

  lineColorCondition(rowData): string {
    return rowData.language === 'Frensh' ? 'native-language' : null;
  }

  setButtons() {
    if (this.tableConf.rowdataButtons.length === 0) {
      this.tableConf.rowdataButtons.push(... this.rowdataButtons)
    } else {
      this.tableConf.rowdataButtons = [];
      this.buttonActiontype = '';
      this.clickedActionData = '';
    }
    this.buttonadded = !this.buttonadded;
  }

  try0(event) { }

  // clearPreviousEvent(){
  //   if(this.previousEvent) {
  //     this.buttonActiontype = this.previousEvent.action;
  //     this.clickedActionData = this.previousEvent.data.name;
  //     if (this.previousEvent.action === "expanded") {
  //       this.rowData = this.previousEvent.data;
  //     }
  //   }

  // }

  buttonAction(event) {
    this.buttonActiontype = event.action;
    this.clickedActionData = event.data.name;
    if (event.action === "expanded") {
      this.rowData = event.data;
    }
  }

  onEditRow(event) { }

  onCheckAll() {
    console.log("check")
  }

  unCheckAll() {
    console.log("uncheck")
  }

  setSubfields() {
    if (this.sub) {
      this.columns.push(...this.subfiels);
    } else {
      this.columns = this.columns.filter(element => this.subfiels.indexOf(element) === -1);
    }
  }

  setPipe() {
    if (this.pipe && this.fields) {
      this.columns[1].pipe = this.uppercasePipe;
    } else if (this.pipe && !this.fields) {
      this.columns[0].pipe = new DisplayPipe();
    } else {
      this.columns[1].pipe = null;
    }
    this.pipe = !this.pipe;
  }

  setfields() {
    if (this.fields && !this.isinput) {
      this.columns = [
        { field: ['name', 'firstName'], fields: true, header: 'Nom & Prénom', pipe: null, width: '' },
        { field: 'job', header: 'Profession', type: '', validation: null, width: '' },
        { field: 'birthDate', type: 'date', header: "Date d'anniversaire", width: '', time: false }
      ];
      this.isinput = false;
    } else if (this.fields && this.isinput) {
      this.columns = [
        { field: ['name', 'firstName'], fields: true, header: 'Nom & Prénom', pipe: null, width: '' },
        { field: 'job', header: 'Profession', type: 'input', validation: null, width: '', disabled: '' },
        { field: 'birthDate', type: 'date', header: "Date d'anniversaire", width: '', time: false }
      ];
      this.isinput = false;
    }
    else if (!this.fields && this.isinput) {
      this.columns = [
        { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' },
        { field: 'name', header: 'Nom', pipe: null, width: '' },
        { field: 'firstName', header: 'Prénom', width: '' },
        { field: 'job', header: 'Profession', type: 'input', validation: this.validInput, width: '' },
        { field: 'birthDate', type: 'date', header: "Date d'anniversaire", width: '', time: false }
      ]
      this.isinput = true;
    }
    else if (!this.fields && !this.isinput) {
      this.columns = [
        { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' },
        { field: 'name', header: 'Nom', pipe: null, width: '' },
        { field: 'firstName', header: 'Prénom', width: '' },
        { field: 'job', header: 'Profession', type: '', validation: null, width: '' },
        { field: 'birthDate', type: 'date', header: "Date d'anniversaire", width: '', time: false }
      ];
      this.isinput = false;
    }
    else {
      this.columns = [
        { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox', width: '' },
        { field: 'name', header: 'Nom', pipe: null, width: '' },
        { field: 'firstName', header: 'Prénom', width: '' },
        { field: 'job', header: 'Profession', type: '', validation: null, width: '' },
        { field: 'birthDate', type: 'date', header: "Date d'anniversaire", width: '', time: false }
      ];
      this.isinput = false;
    }
    if (this.isProgress) {
      this.columns.push({ field: 'language', header: 'Langue', type: 'progress-bar', width: '' });
    } else {
      this.columns.push({ field: 'language', header: 'Langue', type: '', width: '' });
    }
    if (this.sub) {
      this.columns.push(...this.subfiels);
    }
    this.fields = !this.fields;
    if (!this.pipe) {
      this.pipe = !this.pipe;
      this.setPipe();
    }
    if (this.resize) {

      this.setWidth();
    }
    this.tableConf.lockColumns = (this.columns.length <= 4 && this.lockColumns) ? false : this.fix;
  }

  loadData(event) {
    if (this.tableConf.lazy && this.tableConf.globalFilter && event.globalFilter) {
      return;
    }
    var page: number = event.first / event.rows;
    this.loading = true;
    this.persons = this.dataservice.getPageData(page, event.rows);
    /* setTimeout(() => {
       if (this.dataservice) {
         this.persons = this.dataservice.getPageData(page, (event.first + event.rows));
         this.loading = false;
       }
     }, 500);*/
  }

  methodToExecuteOnRowClick(event) {
    //code to execute  when clicking a row here
    //the argument "event" contains the row data 
  }

  setLazy() {
    this.tableConf.lazy = !this.tableConf.lazy;
  }

  /*
  setLazy() {
    if (this.tableConf.lazy) {
      this.tableConf.pagination = true;
      setTimeout(() => {
        this.refreshTable();
      }, 500);
      else {
        setTimeout(() => {
           this.refreshTable();
           }, 500);
        }
      }
  */

  resetEditSelect() {
    this.showSelect = false
    this.editCol = '';
    this.isinput = false;
    var i = null;
    let cols = [];
    this.columns = this.columns.filter(obj => obj.type !== 'select')
    cols.push(... this.columns);
    for (var j = 0; j < cols.length; j++) {
      if (cols[j].field === 'job') {
        i = j;
      }
    };
    cols[i] = { field: 'job', header: 'Profession', type: '', validation: null };
    this.columns = cols;
  }

  setInput() {
    if (this.editCol === 'Edit Radio') {
      var i = null;
      let cols = [];
      cols.push(... this.columns);
      for (var j = 0; j < cols.length; j++) {
        if (cols[j].field === 'job') {
          i = j;
        }
      };
      this.showSelect = true
      cols[i] = { field: 'job', header: 'Profession', type: '', validation: null };
      this.isinput = false;
      this.columns = cols;
      this.columns = this.columns.filter(obj => obj.type !== 'select')
      this.columns.splice(this.columns.length, 0, { field: 'radio', header: 'Validation-edit', type: 'radio-edit', width: '' })
    }
    if (this.editCol === 'Edit Input') {
      this.columns = this.columns.filter(obj => obj.type !== 'radio-edit')
      var i = null;
      let cols = [];
      cols.push(... this.columns);
      for (var j = 0; j < cols.length; j++) {
        if (cols[j].field === 'job') {
          i = j;
        }
      };
      this.showSelect = false
      this.isinput = true;
      cols[i] = { field: 'job', header: 'profession', type: 'input', validation: null };
      this.columns = cols;
      this.columns = this.columns.filter(obj => obj.type !== 'select')
    }
    if (this.editCol === 'Edit Select') {
      this.columns = this.columns.filter(obj => obj.type !== 'radio-edit')
      this.columns = this.columns.filter(obj => obj.type !== 'select')
      var i = null;
      let cols = [];
      cols.push(... this.columns);
      for (var j = 0; j < cols.length; j++) {
        if (cols[j].field === 'job') {
          i = j;
        }
      };
      this.showSelect = true
      cols[i] = { field: 'job', header: 'Profession', type: '', validation: null };
      this.isinput = false;
      this.columns = cols;
      this.getSelectColumns()
      this.columns = this.columns.filter(obj => obj.field !== 'pays')
    }
  }

  cancelMono() {
    this.columns = this.columns.filter(obj => obj.type !== 'radio-edit')
    this.showSelect = false;
  }

  setProgress() {
    var i = null;
    let cols = [];
    this.persons = this.dataservice.getAllDtataProgress();
    cols.push(... this.columns);
    for (var j = 0; j < cols.length; j++) {
      if (cols[j].field === 'language') {
        i = j;
      }
    };
    if (cols[i]['type'] === 'progress-bar') {
      cols[i] = { field: 'language', header: 'Langue', type: '', filter: 'INPUT' };
      this.persons = this.dataservice.getAllDtata();
    }
    else {
      cols[i] = { field: 'language', header: 'Langue', type: 'progress-bar' };
    }
    this.columns = cols;
  }

  setWidth() {
    this.retour_ligne = true;
    this.refreshTable();
    var i = null;
    let cols = [];
    cols.push(... this.columns);
    if (this.resize) {
      for (var j = 0; j < cols.length; j++) {
        if (cols[j].field === 'job') {
          cols[j].width = '20%'
        }
        if (cols[j].field === 'birthDate') {
          cols[j].width = '5%'
        }
        if (cols[j].field === 'name') {
          cols[j].width = '25%'
        }
      };
    }
    else {
      for (var j = 0; j < cols.length; j++) {
        cols[j].width = ''
      }
    }
    this.columns = cols;
  }

  validInput(val) {
    if (val) {
      if (val[0].toUpperCase() === val[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  uncheckRetour() {
    this.retour_ligne = true;
  }

  getHtmlCode() {
    const tableRefHtmlCode = this.tableRef ? ' (TableRef)="getRef($event)"' : '';
    const filterByColumns = this.filterByColumns || this.resize || this.retour_ligne ? '[retour_ligne]="true"' : '';
    const customFooter = this.customRow ? `
    &lt;ng-container *ngIf="customRow" ngProjectAs="footer">
      &lt;td>&lt;/td>
      &lt;td colspan="3">custom&lt;/td>
      &lt;td>row&lt;/td>
    &lt;/ng-container>\n ` : '';

    const savingRow = ' (onSavingRow)="saveRow($event)" '

    const modalHtmlCode = this.tableConf.pop ? `
  &lt;body>
  &lt;div class="ui-g-12"> 
  &lt;div class="ui-g-4"> 
    &lt;label id ="nom" for="vin">NOM 
    &lt;/label>
    &lt;/div>
      &lt;div class="ui-g-8">
      &lt;div class="ui-g-4">
              &lt;label id="prenom" for="year">Prénom
              &lt;/label>
      &lt;/div>
      &lt;div class="ui-g-8">
              &lt;input pInputText id="firstName" [(ngModel)]="pers.firstName" />
      &lt;/div>
      &lt;/div>
      &lt;div class="ui-g-12">
      &lt;div class="ui-g-4">
      &lt;label id="pro" for="brand">Profession
      &lt;/label>
      &lt;/div>
      &lt;div class="ui-g-8">
      &lt;input pInputText id="job"  [(ngModel)]="pers.job"/>
      &lt;/div>       
    &lt;/div>
    &lt;div class="ui-g-12">
    &lt;div class="ui-g-4">
    &lt;label id="langue" for="color">Langue
              &lt;/label>
    &lt;/div>       
    &lt;div class="ui-g-8">
    &lt;input id= "language" pInputText   [(ngModel)]="pers.language"/>
    &lt;/div>  
  
&lt;/div>
&lt;/body>
` : '';

    const expandableHtmlCode1 = this.expandable ? `
    &lt;ng-container  ngProjectAs="expandableContent"> 
        &lt;td [attr.colspan]="columns.length +`: '';
    let num = ''
    if (this.expandable) {
      num = '1';
      if (this.actionB || this.tableConf.checkboxSelection) {
        num = '2'
      }
      if (this.actionB && this.tableConf.checkboxSelection) {
        num = '3'
      }
    }
    const expandableHtmlCode2 = this.expandable ? `"> 
            &lt;div class="ui-g ui-fluid" style="font-size:16px;padding:20px"> 
              &lt;div class="ui-g-12 ui-md-9" style="margin-left:30%"> 
                &lt;div class="ui-g">
                  &lt;div class="ui-g-12">
                          &lt;b>Profession:&lt;/b> {{rowData.job}}
                  &lt;/div>
                  &lt;div class="ui-g-12">
                          &lt;b>Marié(e):&lt;/b> {{rowData.married}}
                  &lt;/div>
                  &lt;div class="ui-g-12">
                          &lt;b>Date d'anniversaire:&lt;/b> {{rowData.birthDate}}
                  &lt;/div>
                  &lt;div class="ui-g-12">
                          &lt;b>Langue:&lt;/b> {{rowData.language}}
                  &lt;/div>       
                &lt;/div>
              &lt;/div>
            &lt;/div>
        &lt;/td>
    &lt;/ng-container>
` : '';


    let htmlbegin = " \n &lt;sof-table [(data)]=\"persons\" (onRowClick)=\"methodToExecuteOnRowClick($event)\" [src]=\"src\" (onCheck)=\"onCheck()\" [(columnsOrdered)]=\"columns\"" + " (onEditRow)=\"onEditRow($event)\"\n " + "(filter)=\"filterValue($event)\"" + (this.actionB ? "(TitleIconChanger)=\"TitleIconChanger($event)\"" : "") + ((this.showradio || (this.editCol === 'Edit Select')) ? "(getResultradio)='getResultradio($event)' " : '') +
      (this.expandable ? "dataKey='name' " : '') +
      ((this.tableConf.editRow || this.tableConf.editCell) ? " (onSavingRow)=saveRow($event) " : " ") +
      (this.tableConf.pop ? " [headerpop]=\"headerpop\" " + " (onClick)=\"onPopClick()\" " + "[buttonpop1]=\"buttonpop1\" " + "\n" + "[buttonpop2]=\"buttonpop2\" " : '') + (this.expandable ? "dataKey='name' " : '') +

      (this.tableConf.checkboxSelection ? " \n[(selectedRows)]=\"selectedRows\" " : "") +
      " [zebrure]=\"" +
      (this.zebrure ? this.zebrure : "false") + "\" "
      + " [fix]=\"" +
      (this.fix ? this.fix : "false") + "\" " +
      (this.tableConf.addDyn ? '[typeTable]="typeTable"' : "") +
      (this.numberOfRowsPerPage ? " (getRowsPerPage)=\"catchNumberOfRowsPerPage($event)\" " : "") +
      (this.tableConf.lockColumns ? " [(lockedColumns)]=\"lockedColumns\" " : "") +
      (this.editCol != '' ? " [(editCol)]=\"editCol\" " : "") + "\n" +
      (this.buttonadded ? "  [(config)]=\"tableConf\" [totalElements] =\"persons.length\" " : "[(config)]=\"tableConf\" [totalElements] =\"persons.length\"")
      + ((this.showradio || (this.editCol === 'Edit Radio')) ? "\n[radioDemoOptionsTab]='radioDemoOptionsTab'" : "\n")
      + (this.tableConf.editCellCol ? "[condition]=\"condition\" [colCondition]=\"colCondition\" " : "");
    let htmlend = ">" + expandableHtmlCode1 + num + expandableHtmlCode2 + customFooter + modalHtmlCode + "\n&lt;/sof-table>";
    if (this.tableConf.checkboxSelection) {
      htmlbegin = htmlbegin + " (onCheckAll)=\"onCheckAll()\" "
      htmlbegin = htmlbegin + " (unCheckAll)=\"unCheckAll()\" "
    }

    if (this.tableConf.addRow) {
      htmlbegin = htmlbegin + "\n[buttonAdd]=\"buttonAdd\" ";
    }
    if (this.buttonadded || this.expandable) {
      htmlbegin = htmlbegin + " \n(buttonClick)=\"buttonAction($event)\" ";
    }

    if (this.tableConf.lazy) {
      htmlbegin = htmlbegin + " (onLazyLoad)=\"loadData($event)\" \n [loading]=\"loading\"";
    }
    if (this.showMultiSelect) {


      htmlbegin = htmlbegin + " [nbItemsToShowT]=\"nbItemsToShowT\"";
    }
    htmlbegin += filterByColumns;
    if (this.tableConf.editRow || this.tableConf.addRow) {
      htmlbegin = htmlbegin + " [editLabel]=\"editLabel\" [saveLabel]=\"saveLabel\" [cancelLabel]=\"cancelLabel\"";
    }
    if (this.tableConf.addRow) {
      htmlbegin = htmlbegin + " [buttonadd]=\"buttonadd\" ";
    }
    if (this.tableConf.globalFilter) {
      htmlbegin = htmlbegin + " [globalFilter]=\"globalFilter\"";
    }

    // if (this.showSelect && this.ObjectMono) {
    //   htmlbegin = htmlbegin + " [ObjectMono]=\"ObjectMono\" \n";

    //   htmlbegin = htmlbegin + " [bindLabel]=\"bindLabel\"";
    //   htmlbegin = htmlbegin + " [bindValue]=\"bindValue\"";

    // }
    //if (this.tableConf)

    if (this.tableRef) {
      htmlbegin += tableRefHtmlCode;
    }
    this.highlightService.highlightAll();
    return htmlbegin + htmlend;
  }

  getTsCode() {
    const tableRefTsCode = this.tableRef ? `

// import { Table } from 'primeng/table';
getRef(event: Table) {
console.log(event);

// Yous can acces to all p-table's attributes and functions
event.reset();
  }` : '';
    const FilterDate = this.filterByColumns ? ',filterDefaultValue: \'1970-09-02\' ' : '';
    const FilterInput = this.filterByColumns ? ',filterDefaultValue: \'arab\' ' : '';
    const buttonActions = this.buttonadded ? `\nthis.tableConf.actionButtonsHeader = \'\';
    this.tableConf.actionButtonsPosition = \'end\';'` : '';
    const expandableRowTsCode = this.expandable ? '\nthis.tableConf.expandable = true;' : null;
    const resizableColumnTsCode = this.resize ? '\nthis.tableConf.resizable = true;' : null;
    const reorderableRowTsCode = this.reorder ? '\nthis.tableConf.reorderable = true;' : null;
    const ediRowTsCode = this.tableConf.editRow ? '\nthis.tableConf.editRow = true;' : null;
    const addRowTsCode = this.tableConf.addRow ? '\nthis.tableConf.addRow = true;' : null;
    const popTsCode = this.tableConf.pop ? '\nthis.tableConf.pop = true;' : null;
    const editCellTsCoode = this.tableConf.editCell ? '\nthis.tableConf.editCell = true;' : null;
    const badgeTsCode = this.tableConf.badge ? '\nthis.tableConf.badge = true;' : null;
    const filterByColumn = this.filterByColumns ? ', filter : \'INPUT\'' : '';
    const filterByColumnn = this.filterByColumns ? ', filter : \'DATE\'  ' : '';
    const lockButtonCode = this.tableConf.lock_buttons ? '\nthis.tableConf.lock_buttons = true;' : null;
    const buttonsContextualOverviewCode = this.tableConf.buttons_contextual_overview ?
      '\nthis.tableConf.buttons_contextual_overview = true;' : null;
    const rowClickEventTSCode = '\nmethodToExecuteOnRowClick(event) {\n\t//code to execute  when clicking a row here\n\t//the argument "event" contains the row data\n}\n  '

    let tsbegincode = "\nimport { AlTableConfig } from 'framework-front-softilys';\n" +
      "persons: any[];\n" +
      "columns: any[];\n" +
      "src: any;\n" +

      (this.tableConf.editRow ? "" : "") +
      (this.tableConf.addDyn ? "typeTable : string ='dynamique',\n" : "") +
      (this.tableConf.editRow ? "editLabel: string=" + "\"Editer\" " + ";\n" : "") +
      (this.tableConf.addRow ? "buttonadd: string=" + "\"Ajouter\" " + "; //to add a tooltip \n" : "") +
      (this.tableConf.editRow || this.tableConf.addRow ? "saveLabel: string=" + "\"Sauvegarder\" " + ";\n" : "") +
      (this.tableConf.editRow || this.tableConf.addRow ? "cancelLabel: string=" + "\"Annuler\" " + ";\n" : "") +
      (this.tableConf.globalFilter ? "globalFilter: string=" + "\"Global Filter\" " + ";\n" : "") +
      ((this.showradio || (this.editCol === 'Edit Radio')) ? "radioDemoOptionsTab = [{label: 'vrai', value: 'true'},{label: 'faux', value: 'false'},{label: 'non applicalble', value: ' '}];\n" : "") +
      (this.expandable ? "rowData : any;\n" : "") +
      (this.tableConf.pop ? "buttonpop1: string=" + "\"Ajouter\" " + ";\n" : "") +
      (this.tableConf.addRow ? "buttonAdd: string=" + "\"\" " + "; //To add a name to the button \n" : "") +

      (this.tableConf.pop ? "buttonpop2: string=" + "\"Close\" " + ";\n" : "") +
      (this.tableConf.pop ? " boldTxt=' bold'" + ";\n" + "headerpop: string=" + "\"Ajouter Personne\"+ this.boldTxt.toUpperCase().bold() //If you need to bold a part of your title use boldTxt and add .toUpperCase().bold() to your title" + ";\n" : "") +
      "selectedRows: any[] = [];\n" +
      "tableConf: AlTableConfig = new AlTableConfig();\n";


    if (this.pipe && !this.fields) {
      tsbegincode = tsbegincode + "\/*\n" +
        "*DisplayPipe est une pipe qu'on a implémentée pour transformer l'affichage par défaut du groupe du champ à afficher et la méthode transform de cette pipe est définie comme suite:\n" +
        "*       transform(value: any, args?: any): any {\n" +
        "*          let t = '';\n" +
        "*          if (value) {\n" +
        "*            value.forEach(element => {\n" +
        "*              if (value.indexOf(element) < value.length - 1) {\n" +
        "*                t = t + element + ' '\n" +
        "*              } else {\n" +
        "*                t = t + element;\n" +
        "*              }\n" +
        "*              });\n" +
        "*            }\n" +
        "*          return t;\n" +
        "*        }\n" +
        "*/\n"
      tsbegincode = tsbegincode + "displayPipe = new DisplayPipe();\n";
    }
    let pipedfield = '';
    if (this.pipe && this.fields && !this.sub) {
      pipedfield =
        "   { field: 'tel', width: '' , header: ''," + (this.tableConf.editRow ? "disabled: true ,validatiorCondition:[Validators.required,Validators.maxLength(200)]," : "") + "type:'icon',iconName:'icon-phone'},\n" +
        (this.showImage ? "   { field: 'photo', header: 'Photo', type: 'img', width:''" + (this.resize ? ", width: '15%' " : "") + " },\n" : "") +
        (this.showLien ? "   { field: 'lien', header: 'Lien', type: 'lien', width:''" + (this.resize ? ", width: '15%' " : "") + " }, " : "") +
        (this.tableConf.badge ? "   { field: 'age', header: 'Age', type: 'badge'" + (this.testpillule ? ", typeBadge: 'pillule'" : "") + (this.BadgeSize ? ", widthBadge: '" + this.BadgeSizeWidth + "'" : "") + (this.colorRow ? ", colorLigne: this.badgeColorConditionRowData, pipe : this.uppercasePipe" : "") + (this.colorField ? ", color:this.badgeColorCondition, pipe : this.uppercasePipe" : "") + (this.resize ? ", width: '30%' " : "") + "},\n" : "") +
        (this.showSelect ? "   { field: 'pays', header: 'pays', type: 'select', options:[{ nameP: 'Tunisie'},{ nameP: 'Marroc'},{nameP:'Algérie'}] , width:''" + (this.resize ? ", width: '15%' " : "") + ", ObjectMono:true, bindValue:'nameP', \n  bindLabel:'nameP' }, //ObjectMono,bindValue,bindLabel: in order to use a list of objects  \n" : "") +
        (this.showSelect ? "   { field: 'paysString', header: 'paysString', type: 'select', options:['Tunisie','Algérie'], width:''" + (this.resize ? ", width: '15%' " : "") + " },\n" : "") +
        (this.showMultiSelect ? "   { field: 'nationalityString', header: 'nationalitéString',type: 'multi-select', width: '' " + (this.tableConf.editCellCol ? ", editCell:true , condition:'Italienne',colCondition:'name'" : "") + ", \n options:['Tunisienne', 'Algerienne']," + "strings:true" + " }, //strings: in order to use a string list \n" : "") +
        (this.showcheckBox ? "   { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox' " + (this.resize ? ", width: '10%' " : "") + "},\n" : "") +
        "   { field: 'name', header: 'Nom', width: ''" + (this.tableConf.editRow ? ",disabled: true" : "") + ",pattern:[Validators.pattern(/^([^0-9]*)$/),Validators.required] " + filterByColumn + " " + (this.resize ? ", width: '15%' " : "") + "},\n" +
        (this.showMultiSelect ? "   { field: 'nationality', header: 'nationalité',type: 'multi-select', width: '',options:[{ name: 'Tunisienne'}, { name: 'Algerienne'}, { name: 'Francaise'}, { name: 'Italienne'}]," + "\n" + "bindlabelmultiselect:'name'}" + " },\n" : "") +
        "   { field: 'firstName', header: 'Prénom'" + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '15%' " : "") + " },\n";
    } else if (!this.pipe && this.fields && this.sub) {
      pipedfield =
        "   { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox' " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'name', header: 'Nom' " + (this.tableConf.editRow ? ",disabled: true" : "") + filterByColumn + " " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'firstName', header: 'Prénom'" + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '10%' " : "") + " },\n";
    } else if (this.tableConf.badge && this.pipe && this.fields && !this.sub) {
      pipedfield =
        "   { field: 'photo', header: 'Photo', type: 'img', width:''" + (this.resize ? ", width: '15%' " : "") + " },\n" +
        "   { field: 'lien', header: 'Lien', type: 'lien', width:''" +
        "   { field: 'pays', header: 'pays', type: 'select', options:[{ nameP: 'Tunisie'},{ nameP: 'Marroc'},{nameP:'Algérie'}], width:''" + (this.resize ? ", width: '15%' " : "") + " },\n" +
        "   { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox' " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'name', header: 'Nom' " + (this.tableConf.editRow ? ",disabled: true" : "") + filterByColumn + " " + (this.resize ? ", width: '15%' " : "") + "},\n" +
        "   { field: 'firstName', header: 'Prénom'" + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '15%' " : "") + " },\n";

    }
    else if (this.pipe && this.fields && this.sub) {
      pipedfield =
        "   { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox' " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'name', header: 'Nom' " + (this.tableConf.editRow ? ",disabled: true" : "") + filterByColumn + " " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'firstName', header: 'Prénom'" + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '10%' " : "") + " },\n";
    }
    else if (this.pipe && !this.fields && this.sub) {
      pipedfield = "   { fields: ['name', 'firstName'], header: 'Nom & Prénom' " + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '20%' " : "") + " },\n";
    } else if (this.pipe && !this.fields && !this.sub) {
      pipedfield = "   { fields: ['name', 'firstName'], header: 'Nom & Prénom' " + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '30%' " : "") + " },\n";
    } else if (!this.pipe && !this.fields && this.sub) {

      pipedfield = "   { fields: ['name', 'firstName'], header: 'Nom & Prénom', pipe : this.displayPipe " + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '20%' " : "") + "},\n"
    }
    else if (!this.pipe && !this.fields && !this.sub) {

      pipedfield = "   { fields: ['name', 'firstName'], header: 'Nom & Prénom', pipe : this.displayPipe " + (this.tableConf.editRow ? ",disabled: true" : "") + (this.resize ? ", width: '30%' " : "") + "},\n"
    }
    else {
      tsbegincode = tsbegincode + "uppercasePipe = new UpperCasePipe();\n";
      pipedfield = "   { field: 'married', pipe: null, header: 'Marié(e)', type: 'checkbox' " + (this.resize ? ", width: '10%' " : "") + " },\n" +
        "   { field: 'name', header: 'Nom' " + (this.tableConf.editRow ? ",disabled: true,validatiorCondition: [Validators.required,Validators.maxLength(200)], " : "") + filterByColumn + ", pipe : this.uppercasePipe " + (this.resize ? ", width: '15%' " : "") + "},\n" +
        "   { field: 'firstName', header: 'Prénom' " + (this.tableConf.editRow ? ",disabled: true,validatiorCondition: [Validators.required,Validators.maxLength(200)], " : "") + (this.resize ? ", width: '15%' " : "") + " },\n"
    }

    let inputfield = "   { field: 'job', header: 'Profession' " + (this.tableConf.addRow ? ", defaultvalonAdd:\"Singer\",disabledOnAdd:true " : "") + (this.tableConf.editRow ? ",disabled: null,validatiorCondition: [Validators.required,Validators.maxLength(200)], " : "") + (this.resize ? ", width: '30%' " : "") + "},\n";
    if (this.isinput) {
      inputfield = "   { field: 'job', header: 'Profession'" + (this.tableConf.addRow ? ",defaultvalonAdd:\"Singer\",disabledOnAdd:true " : "") + ", type: 'input', disabled:'' , validation: this.validInput " + (this.tableConf.editRow ? ",disabled: null,validatiorCondition: [Validators.required,Validators.maxLength(200)], " : "") + (this.resize ? ", width: '30%' " : "") + "},\n";
    }

    let editColObSt = ""
    if (this.tableConf.editRow) {
      if (this.ColObString === 'Edition List Objet') {
        editColObSt = " { field: 'nationality', header: 'nationalité',type: 'multi-select', width: '',disabled:null, condition:{ name: 'Italienne'},colCondition:'firstName',options:[{ name: 'Tunisienne'}, { name: 'Algerienne'}, { name: 'Francaise'}, { name: 'Italienne'}],bindlabelmultiselect:'name'} \n"
      } else {
        editColObSt = "{ field: 'nationalityString', header: 'nationalitéString',type: 'multi-select', width: '',disabled:null ,condition:'Italienne',colCondition:'firstName',options:['Tunisienne','Algerienne','Francaise','Italienne'],strings:true} \n"
      }
    }

    let radiofield = ""
    if (this.editCol === 'Edit Radio') {
      radiofield = "   { field: 'radio', header: 'Validation-edit', type: 'radio-edit', width:'' },\n"
    }


    if (this.buttonadded) {
      tsbegincode = tsbegincode + "\nbuttonView: ALTableButton;\n";
    }
    let tscode = "\nngOnInit() {\n";
    if (!this.tableConf.lazy) {
      tscode = tscode + "/*dataservice is a service which must be implemented to provide data to the table*/\nthis.persons = this.dataservice.getAllDtata();\n";
    }

    let cellStyle = this.checkboxCellStyle ? ', cellStyle: this.cellColorCondition' : '';
    if (!this.sub && !this.fields) {
      tscode = tscode + 'this.columns = [\n' +
        pipedfield +
        inputfield +
        radiofield +
        editColObSt +

        "   { field: 'birthDate{ field: 'birthDate', header: \"Date d'anniversaire\" " + (this.tableConf.editRow ? ",disabled: null," : "") + filterByColumnn + cellStyle + ' ' + FilterDate + (this.resize ? ", width: '20%' " : "") + "},\n" +
        "   { field: 'language', header: 'Langue' " + (this.tableConf.editRow ? " ,closecondition:'English',closecolCondition:'job' ,condition:'Spanish',colCondition:'tel', disabled: null" : "") + filterByColumn + cellStyle + ' ' + FilterInput + (this.resize ? ", width: '20%' " : "") + (this.isProgress ? ", type:'progress-bar'" : " , type: ''") + " }\n" + (this.showradio ? "  ,{ field: 'radio', header: 'validation'}\n" : "") +
        "];"
    } else if (!this.sub && this.fields) {
      tscode = tscode + 'this.columns = [\n' +
        pipedfield +
        inputfield +
        radiofield +
        editColObSt +

        "   { field: 'birthDate', header: \"Date d'anniversaire\" " + (this.tableConf.editRow ? ",disabled: null," : "") + filterByColumnn + cellStyle + ' ' + FilterDate + (this.resize ? ", width: '20%' " : "") + ", type: 'date',time:false}, //if you want to use datetime format, replace time: false in time: true \n" +
        "   { field: 'language', header: 'Langue' " + (this.tableConf.editRow ? " ,closecondition:'English',closecolCondition:'job' ,condition:'Spanish',colCondition:'tel', disabled: null" : "") + filterByColumn + cellStyle + ' ' + FilterInput + (this.resize ? ", width: '10%' " : "") + (this.isProgress ? ", type:'progress-bar'" : " , type: ''") + " }\n" + (this.showradio ? "  ,{ field: 'radio', header: 'validation'}\n" : "") +
        "];"
    }
    else if (this.sub && !this.fields) {
      tscode = tscode + "\nthis.columns = [\n" +
        pipedfield +
        inputfield +
        radiofield +
        editColObSt +

        "   { field: 'birthDate', header: \"Date d'anniversaire\" " + (this.tableConf.editRow ? ",disabled: null," : "") + (this.resize ? ", width: '20%' " : "") + "},\n" +
        "   { field: 'language', header: 'Langue'" + (this.tableConf.editRow ? " ,closecondition:'English',closecolCondition:'job' ,condition:'Spanish',colCondition:'tel', disabled: null" : "") + filterByColumn + cellStyle + (this.resize ? ", width: '10%' " : "") + (this.isProgress ? ", type:'progress-bar'" : ", type: ''") + " },\n" +
        "   { field: 'adresse', header: 'Ville', subfields: 'ville' " + (this.resize ? ", width: '10%' " : "") + "},\n" +
        "   { field: 'adresse', header: 'Code Postale', subfields: 'codePostale' " + (this.resize ? ", width: '10%' " : "") + "}\n" + (this.showradio ? " , { field: 'radio', header: 'validation'}\n" : "") +
        "];"
    }

    else {
      tscode = tscode + "\nthis.columns = [\n" +
        pipedfield +
        inputfield +
        radiofield +
        editColObSt +

        "   { field: 'birthDate', header: \"Date d'anniversaire\" " + (this.tableConf.editRow ? ",disabled: null," : "") + filterByColumnn + cellStyle + ' ' + FilterDate + (this.resize ? ", width: '20%' " : "") + "},\n" +
        "   { field: 'language', header: 'Langue'" + (this.tableConf.editRow ? " ,closecondition:'English',closecolCondition:'job' ,condition:'Spanish',colCondition:'tel', disabled: null" : "") + filterByColumn + cellStyle + ' ' + FilterInput + (this.resize ? ", width: '10%' " : "") + (this.isProgress ? ", type:'progress-bar'" : " , type: ''") + " },\n" +
        "   { field: 'adresse', header: 'Ville', subfields: 'ville' " + (this.resize ? ", width: '5%' " : "") + "},\n" +
        "   { field: 'adresse', header: 'Code Postale', subfields: 'codePostale' " + (this.resize ? ", width: '5%' " : "") + "}\n" + (this.showradio ? "  ,{ field: 'radio', header: 'validation'}\n" : "") +
        "];"
    }



    if (this.tableConf.pagination) {
      tscode = tscode + '\n\nthis.tableConf.pagination = ' + this.tableConf.pagination + ';\n' +
        'this.tableConf.rowsPerPage = ' + this.tableConf.rowsPerPage + ';\n' +
        'this.tableConf.rowsPerPageOptions = [5, 10, 20, 30, 50];';
    }


    if (lockButtonCode) {
      tscode += lockButtonCode;
    }

    if (buttonActions) {
      tscode += buttonActions;
    }


    if (this.expandable) {
      tscode += expandableRowTsCode;
    }

    if (this.tableConf.editRow) {
      tscode += ediRowTsCode;
    }

    if (this.tableConf.editCell) {
      tscode += editCellTsCoode;
    }

    if (this.tableConf.editCell || this.tableConf.editRow) {
      tscode += "\nsaveRow(rowData) {\n\t//TODO ..\n}\n"
    }

    if (this.tableConf.addRow) {
      tscode += addRowTsCode;
    }
    if (this.tableConf.pop) {
      tscode += popTsCode;
    }
    if (this.tableConf.badge) {
      tscode += badgeTsCode;
      tsbegincode = tsbegincode + "uppercasePipe = new UpperCasePipe();\n";
    }
    if (this.resize) {
      tscode += resizableColumnTsCode;
    }
    if (this.reorder) {
      tscode += reorderableRowTsCode;
    }
    if (buttonsContextualOverviewCode) {
      tscode = tscode + buttonsContextualOverviewCode;
    }

    if (this.tableConf.lazy) {
      tscode = tscode + "\nthis.tableConf.lazy = true;";
    }
    if (this.tableConf.reorderableColumns) {
      tscode = tscode + '\nthis.tableConf.reorderableColumns = true';
    }
    if (this.tableConf.lockColumns) {
      tscode = tscode + '\nthis.tableConf.lockColumns = true';
    }
    if (this.tableConf.checkboxSelection) {
      tscode = tscode + '\nthis.tableConf.checkboxSelection = true;';
      tscode = tscode + '\nthis.tableConf.selectionMode = "' + this.tableConf.selectionMode + '";';
      tscode += "\n //method to execute when Selectable multiple is true or false ..\n"

      tscode += "\n onCheckAll() {\n\t//TODO ..\n}\n"
      tscode += "\n unCheckAll() {\n\t//TODO ..\n}\n"
    }
    if (this.tableConf.globalFilter) {
      tscode = tscode + '\nthis.tableConf.globalFilter = true;';
    }
    if (this.tableConf.reorderable) {
      tscode = tscode + '\nthis.tableConf.reorderable = true;';
    }
    if (this.tableConf.showTotalDataNumber) {
      tscode = tscode + '\nthis.tableConf.showTotalDataNumber = true;' + '\nthis.tableConf.totalDataMessage = \"' + this.tableConf.totalDataMessage + '\";';
    }

    if (this.checkboxRowStyle) {
      tscode = tscode + '\nthis.tableConf.rowStyle = this.lineColorCondition() ';
    }

    if (this.tableRef) {
      tscode += tableRefTsCode;
    }

    if (this.tableConf.sortedColumns) {
      tscode = tscode + '\nthis.tableConf.sortedColumns = true;';
      if (this.tableConf.defaultSortedColumns) {
        tscode = tscode + '\nthis.tableConf.defaultSortedColumns = \"' + this.tableConf.defaultSortedColumns + '\";';
      }
    }
    tscode = tsbegincode + tscode;

    if (this.buttonadded) {
      tscode = tscode + '\n\n//this part of code allows to add a button action on every row of the table\nthis.buttonView = new ALTableButton();\n' +
        'this.buttonView.action = "display";\n' +
        'this.buttonView.icon = "icons icon-eye";\n' +
        'this.buttonView.title = "display";\n' +
        'this.buttonView.disabled_condition = this.disabled_Condetion;\n' +
        "// display_condition is optional\n" +
        "this.buttonView.display_condition = this.display_Condetion;\n" +
        "this.tableConf.rowdataButtons.push(this.buttonView);\n}\n" +

        "this.buttonView = new ALTableButton();\n" +
        "this.buttonView.action = \"display\";\n" +
        "this.buttonView.icon = \"icons icon-basket\";\n" +
        "this.buttonView.title = \"shop\";\n" +
        "this.buttonView.display_condition = this.display_Condetion;\n" +
        "this.buttonView.disabled_condition = this.disabled_Condetion;\n" +
        "this.rowdataButtons.push(this.buttonView);\n" +


        "\nbuttonAction(event) {\n" +
        "  this.buttonActiontype = event.action;\n" +
        (this.expandable ? ("  if(event.action==='expanded'){\n" +
          "   this.rowData = event.data;\n" +
          "  }\n") : "") +


        "}\n" +
        "// Making a condition on displaying the button \n" +
        "display_Condetion(rowdata){\n" +
        " return rowdata.job != 'touristic guide';\n" +
        "}\n" +
        "// making a condition on disabling displaying the buttons \n" +
        ",disabled_Condetion(rowdata){\n" +
        " return rowdata.job == 'teacher';\n" +
        "}\n" +

        (this.actionB ? "//this method is used to change an icon title basing on a column value in a row (by giving the icon's name)  \nTitleIconChanger(event){\n if (event.bttn.icon===\"icons icon-basket\"){ \nif(event.rowData['language']===\"Frensh\"){\n event.bttn.title=\"magasin\" \n }\n else if (event.rowData['language']===\"Spanish\") {event.bttn.title=\"negozio\"}\n else{event.bttn.title=\"shop\"}\n }" : "")
    } else if (this.expandable) {

      tscode = tscode + "\n}\n" + "\nbuttonAction(event) {\n" +
        "  this.buttonActiontype = event.action;\n" +
        (this.expandable ? ("  if(event.action==='expanded'){\n" +
          "    this.rowData = event.data;\n" +
          "  }\n") : "") +


        "}\n";
    } else if (this.tableConf.pop) {

      tscode = tscode + "\n}\n" + "\nonPopClick() {\n" +
        " this.persons.unshift(this.pers);" +
        " this.pers={};\n" +
        "}\n";
    }

    if (this.isinput) {
      tscode = tscode + "\n\nvalidInput(val, rowdata) {\n" +
        "  if (val) {\n" +
        "    if (val[0].toUpperCase() === val[0]) {\n" +
        "      return true;\n" +
        "    } else {\n" +
        "      return false;\n" +
        "    }\n" +
        "  } else {\n" +
        "    return true;\n" +
        "  }\n" +
        "}";

    }

    if (this.tableConf.lazy) {
      tscode = tscode + "\n\nloadData(event) {\n" +
        "var page: number = event.first / event.rows;\n" +
        "this.persons = this.dataservice.getPageDtata(page, event.rows);\n" +
        "}";
    }

    if (this.numberOfRowsPerPage) {
      tscode = tscode + `\n
catchNumberOfRowsPerPage(event) {
  //event contains number of rows per page...
}
      `;
    }



    if (this.checkboxCellStyle) {
      tscode = tscode + `\n
cellColorCondition(fieldValue): string {
  return fieldValue == "Arabic" ? 'native-language' : null;
}
      `;
    }
    if (this.tableConf.badge) {

      if (this.colorField) {
        tscode = tscode + `\n
    badgeColorCondition(fieldValue): string {
        if(fieldValue>30){
            return 'error'
          }
           return 'valid';
        }
      `;
      }
      if (this.colorRow) {
        tscode = tscode + `\n
  badgeColorConditionRowData(obj):string{
   
    if(obj.name==="Garsia"){
      return 'error'
    }
     return 'valid';
   
    } `

      }

    }


    if (this.checkboxRowStyle) {
      tscode = tscode + `\n
lineColorCondition(rowData): string {
  console.log(rowData);
  return rowData.language == "Frensh" ? 'native-language' : null;
}
      `;
    }


    this.highlightService.highlightAll();
    return tscode + "\n" + "\n" +
      (this.showcheckBox ? "onCheck()" + "{\n // code to execute on checking the box" + "\n }" + "\n" : "") +
      (this.tableConf.editRow ? "onEditRow(event)" + "{\n // code to execute  when clicking on edit row & the argument event contains the row data " + "\n}" : "") +
      (this.filterByColumns ? "{\n // code to execute to get the value of input filter " + "\n" +
        "filterValue(event)" + "{\n // to do... " + "\n}" : "") +


      "}" + rowClickEventTSCode + ((this.showradio || (this.editCol === 'Edit Select')) ? '  \n getResultradio(event) {\n\t//code to execute  when clicking a radio-button or Select on Edit mode here\n\t//the argument "event" contains the row data\n}\n  ' : "");

  }

  getCssCode() {
    let cssCode = '';
    if (this.checkboxCellStyle || this.checkboxRowStyle || (this.checkboxCellStyle && this.checkboxRowStyle)) {
      cssCode = cssCode + "\n /deep/ .native-language { \n" +
        "background-color: #aed5ff  !important; \n }";
    }
    this.highlightService.highlightAll();
    return cssCode;
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
  import { SofTableModule } from 'framework-front-softilys';
  imports : [SofTableModule ];`
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  display_Condetion(rowdata) {
    return rowdata.job != 'touristic guide';
  }

  disabled_Condetion(rowdata) {
    return rowdata.job == 'teacher';
  }

  selectionMode() {
    if (this.tableConf.checkboxSelection === false) {
      this.tableConf.selectionMode = '';
    }
    else {
      this.tableConf.selectionMode = 'single';
    }
  }

  onPopClick() {
    this.persons.unshift(this.pers);
    this.pers = {};
  }

  onCheck() { }

  catchNbRowsPerPage(event) {
    //
  }

  saveRow(rowData) { }

  onCheckbdg() {
    this.bdg = "carre";
    this.BadgeSize = false;
    this.BadgeSizeWidth = "";
  }

  onCheckColorRow() {
    this.colorRow = true;
  }
  onCheckColorColonne() {
    this.colorField = true;
  }

  onCheckbdg1() {
    if (this.colorField === true || this.colorRow === true) {
      this.colorField = false;
      this.colorRow = false;

    };
  }

  filterValue(event) { }

}