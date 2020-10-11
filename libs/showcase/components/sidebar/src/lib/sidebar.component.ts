import { Component, OnInit, Inject, AfterViewInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlTableConfig, ALTableButton } from 'ng-softilys/table';
import { HighlightService, IconService } from '@showcase/service';
import { SubMenu, SideBarMenu } from 'ng-softilys/sidebar';

@Component({
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [HighlightService, IconService]
})
export class SidebarComponent implements OnInit, AfterViewInit {

  testEspace: boolean;
  updated;
  updatedSB;
  rowData: SubMenu[] = [];
  showDialogUpdate = false;
  showDialogSubMenu = false;
  showDialogUpdateSB = false;
  Visible = true;
  submenushow: boolean = false;
  color = 'black';
  position = 'left';
  placeholder = '';
  inputValue;
  testComponentForm1;
  result;
  config = {};
  showDialog: Boolean = false;
  form: FormGroup;
  code: number;
  submenu: boolean;
  fragment: string;
  defaultlabel: string;
  routerLink: string;
  icon: string;
  show: boolean = false;
  selectedRows: SideBarMenu = new SideBarMenu();
  selectedRowsSB: SubMenu = new SubMenu();
  codeS: string;
  defaultLabelS: string;
  routerLinkS: string[] = [];
  iconS: string;
  fragmentS: string;
  codeM: string;
  listsubmenu: SubMenu[] = [];
  itemS: SubMenu = new SubMenu();
  Load: boolean; // activer Loading Data 
  input: string; // input du recherche
  optionsBuffer = []; // resultat des valeurs à afficher
  bufferSize = 10; // nombre d'éléments à charger
  loading = false; // activer spinner loading
  nbTotal: number; // nombre des éléments trouvé
  flat;
  item: SideBarMenu = new SideBarMenu();
  subMenuItems: SideBarMenu[] = [{
    code: '1',
    defaultLabel: 'Home ',
    listsubmenu: [{
      codeS: '1',
      defaultLabelS: 'Sous menu',
      iconS: 'home',
      routerLinkS: ['/'],
      fragmentS: 'home-anchor',
    }],
    icon: 'home',
    routerLink: ['/'],
    fragment: 'home-anchor',
    show: false
  },
  {
    code: '2',
    defaultLabel: 'Table',
    listsubmenu: [],
    icon: 'table',
    routerLink: ['table_demo'],
    fragment: 'search-anchor',
    show: false
  },
  {
    code: '3',
    defaultLabel: 'Interval',
    listsubmenu: [],
    icon: 'calendar',
    routerLink: ['interval_demo'],
    fragment: 'search-anchor',
    show: false
  },
  {
    code: '4',
    defaultLabel: 'Check-Box & Radio button',
    listsubmenu: [],
    icon: 'check_box',
    routerLink: ['check_box_demo'],
    fragment: 'search-anchor',
    show: false
  }
  ];

  columns: any[];
  columnsSB: any[];
  tableConf: AlTableConfig = new AlTableConfig();
  tableConfSB: AlTableConfig = new AlTableConfig();
  buttondelete: ALTableButton;
  buttondeleteSB: ALTableButton;
  buttonSousMenu: ALTableButton;
  buttoneditSB: ALTableButton;
  buttonedit: ALTableButton;

  buttonActiontype: string;

  constructor(private formBuilder: FormBuilder,
    @Inject(HighlightService) private readonly highlightService: HighlightService,
    private IconService: IconService) { }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.showDialog = false;
    this.showDialogUpdate = false;
    this.showDialogSubMenu = false;
    this.showDialogUpdateSB = false;
  }

  ngOnInit() {
    this.rowData = this.listsubmenu;
    this.highlightService.highlightAll();
    this.testComponentForm1 = this.formBuilder.group({
      group1: ['', Validators.required]
    });
    this.columns = [
      { field: 'code', header: 'Code' },
      { field: 'icon', header: 'Icon' },
      { field: 'defaultLabel', header: 'Default Label' },
      { field: 'fragment', header: "Fragment" },
      { field: 'routerLink', header: 'RouterLink' },
    ];
    this.columnsSB = [
      { field: 'codeS', header: 'Code' },
      { field: 'iconS', header: 'Icon' },
      { field: 'defaultLabelS', header: 'Default Label' },
      { field: 'fragmentS', header: "Fragment" },
      { field: 'routerLinkS', header: 'RouterLink' },
    ];
    this.tableConfSB.actionButtonsHeader = '';
    this.tableConfSB.actionButtonsPosition = 'end';
    this.tableConfSB.reorderableColumns = true;
    this.tableConf.actionButtonsHeader = '';
    this.tableConf.actionButtonsPosition = 'end';
    this.tableConf.reorderableColumns = true;
    this.tableConf.expandable = true;
    this.tableConf.pagination = true;
    this.tableConf.rowsPerPage = 5;
    this.tableConf.rowsPerPageOptions = [5, 10, 20, 30, 50];

    //Cette partie du code nous permet d'ajouter un bouton à tous les lignes du tableau
    this.buttondelete = new ALTableButton();
    this.buttondeleteSB = new ALTableButton();
    this.buttondeleteSB.action = "delete1";
    this.buttondelete.action = "delete";
    this.buttondeleteSB.icon = "icons icon-trash";
    this.buttondelete.title = "delete";
    this.buttondelete.icon = "icons icon-trash";
    this.buttondeleteSB.title = "delete";
    this.buttonSousMenu = new ALTableButton();
    this.buttonSousMenu.action = "sousmenu";
    this.buttonSousMenu.icon = "icons icon-list_ul";
    this.buttonSousMenu.title = "sous menu";
    this.buttonedit = new ALTableButton();
    this.buttonedit.action = "edit";
    this.buttonedit.icon = "icons icon-edit";
    this.buttonedit.title = "edit";
    this.buttoneditSB = new ALTableButton();
    this.buttoneditSB.action = "edit1";
    this.buttoneditSB.icon = "icons icon-edit";
    this.buttoneditSB.title = "edit";

    // display_condition est optionnelle
    this.tableConf.rowdataButtons.push(this.buttonedit);
    this.tableConf.rowdataButtons.push(this.buttondelete);
    this.tableConf.rowdataButtons.push(this.buttonSousMenu);
    this.tableConfSB.rowdataButtons.push(this.buttoneditSB);
    this.tableConfSB.rowdataButtons.push(this.buttondeleteSB);
    // retourner nombre Total 
    this.nbTotal = this.IconService.getAllP();
    // retourner les 10 premier elements avec le webservices
    this.optionsBuffer = this.IconService.getDataPerpage(1, 10, null, this.input);
  }


  // ce methode fait appel à la methode fetch à chaque fin de scroll
  onScrollToEnd() {
    if (this.optionsBuffer.length <= this.nbTotal && this.input == null) {
      this.fetchMore();
    }
    return
  }

  try() {
    if (document.getElementById('inputmono')) {
      document.getElementById('inputmono').setAttribute('placeholder', 'recherche')
      document.getElementById('inputmono').focus()
    }
  }

  // fait appel au web service et concatine les resultats
  private fetchMore() {
    const len = this.optionsBuffer.length;
    let more = [];
    if (this.input) {
      more = this.IconService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, "name", this.input);// 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // this.input : critere de recherche
    } else {
      more = this.IconService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, null, null);
    }
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
      this.loading = false;
      this.optionsBuffer = this.optionsBuffer.concat(more);

    }, 1000)
  }

  // methode de recherche 
  recherche(event) {
    this.optionsBuffer = [];
    this.input = event;
    this.nbTotal = this.IconService.getAllP();
    if (event) {
      this.optionsBuffer = this.IconService.getDataPerpage(1, this.bufferSize, "name", event); // 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // event : critere de recherche 
    } else {
      this.optionsBuffer = this.IconService.getDataPerpage(1, this.bufferSize, null, null);
    }
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-sidebar placeholder=\"" +
      (this.placeholder ? this.placeholder : "") + "\"" + " position=\"" +
      (this.position ? this.position : "") + "\"" + " color=\"" +
      (this.color ? this.color : "") + "\"" + " [data]=\"" + "subMenuItems\""
      + " [visible]=\"" + this.Visible + "\"> &lt;/sof-sidebar>";
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofSidebarModule } from 'framework-front-softilys';
    imports : [SofSidebarModule ];`
  }

  buttonAction(event) {
    this.buttonActiontype = event.action;
    if (event.action === 'expanded') {
      this.rowData = event.data.listsubmenu;
    }
    if (event.action === "delete1") {
      this.rowData.splice(this.rowData.indexOf(event.data), 1);
    }
    if (event.action === "edit1") {
      this.showDialogUpdateSB = !this.showDialogUpdateSB;
      this.updatedSB = event.data;
      this.selectedRowsSB = {
        codeS: event.data.codeS,
        defaultLabelS: event.data.defaultLabelS,
        iconS: event.data.iconS,
        routerLinkS: event.data.routerLinkS,
        fragmentS: event.data.fragmentS,
        codeM: event.data.codeM
      }
    }
    if (event.action === "delete") {
      this.subMenuItems.splice(this.subMenuItems.indexOf(event.data), 1);
    }
    if (event.action === "edit") {
      this.showDialogUpdate = !this.showDialogUpdate;
      this.updated = event.data;
      this.selectedRows = {
        code: event.data.code,
        defaultLabel: event.data.defaultLabel,
        icon: event.data.icon,
        routerLink: event.data.routerLink,
        fragment: event.data.fragment,
        listsubmenu: event.data.listsubmenu,
        show: event.data.show
      }
    }
    if (event.action === "sousmenu") {
      this.showDialogSubMenu = !this.showDialogSubMenu;
      this.codeM = event.data.code;
    }
  }

  buttonActionSB(event) {
    this.buttonActiontype = event.action;
    if (event.action === "delete1") {
      this.listsubmenu.splice(this.listsubmenu.indexOf(event.data.listsubmenu), 1);
    }
  }

  addSB() {
    let newI = {
      codeS: this.itemS.codeS,
      defaultLabelS: this.itemS.defaultLabelS,
      iconS: this.itemS.iconS,
      routerLinkS: this.itemS.routerLinkS,
      fragmentS: this.itemS.fragmentS,
      codeM: this.codeM
    }
    for (var i: number = 0; i < this.subMenuItems.length; i++) {
      if (this.subMenuItems[i].code == newI.codeM) {
        this.subMenuItems[i].listsubmenu.push(newI);
      }
    }
    this.itemS = new SubMenu();
    this.showDialogSubMenu = !this.showDialogSubMenu;
  }

  showDialogfn() {
    this.showDialog = true;
  }

  showDialogSM() {
    this.showDialogSubMenu = true;
  }

  getTsCode() {
    return "\n subMenuItems=" + JSON.stringify(this.subMenuItems);
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
    document.getElementById('o').style.height = '184px';
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
    document.getElementById('o2').style.height = '162px';
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

  testESpace(x) {
    if (x.replace(/\s/g, '').length) {
      this.testEspace = true;
    }
    else this.testEspace = false;
  }

  addnew() {
    let newItem = {
      code: this.item.code,
      defaultLabel: this.item.defaultLabel,
      listsubmenu: this.item.listsubmenu,
      icon: this.item.icon,
      routerLink: this.item.routerLink,
      fragment: this.item.fragment,
      show: false
    }
    this.subMenuItems.push(newItem);
    this.item = new SideBarMenu();
    this.showDialog = !this.showDialog;
  }

  Edit() {
    this.subMenuItems.splice(this.subMenuItems.indexOf(this.updated), 1);
    this.subMenuItems.push(this.selectedRows);
    this.showDialogUpdate = !this.showDialogUpdate;
  }

  EditSB() {
    this.rowData.splice(this.rowData.indexOf(this.updatedSB), 1);
    this.rowData.push(this.selectedRowsSB);
    this.showDialogUpdateSB = !this.showDialogUpdateSB;
  }

  showDialogfct() {
    this.showDialogUpdate = true;
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  methodToExecuteOnRowClick(event) { }

  onCheck() { }

}