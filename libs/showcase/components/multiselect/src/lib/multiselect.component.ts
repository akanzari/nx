import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlTableConfig } from 'ng-softilys/table';
import { TranslateService } from '@ngx-translate/core';
import { HighlightService, OptionsService, DataService } from '@showcase/service';

@Component({
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [OptionsService, HighlightService, DataService]

})
export class MultiSelectComponent implements OnInit, AfterViewInit {

  selectcheckbox: boolean = false;
  selected: boolean = false;
  changed: any;
  checkboxValue: boolean = false;
  searching: any;
  Load: boolean; // activer Loading Data 
  input: string; // input du recherche
  optionsBuffer = []; // resultat des valeurs à afficher
  bufferSize = 10; // nombre d'éléments à charger
  loading = false; // activer spinner loading
  nbTotal: number; // nombre des éléments trouvé
  TextItems: string = "element"
  nbItemsToShow;
  position: string = 'En bas';
  bas: boolean = false;
  droite: boolean = false;
  showTags: boolean = false;
  strings: boolean = false;
  groupBy: string = "category";
  bindValue;
  bindLabel = "name";
  options: any[] = [{ name: 'Eric', age: '25', category: 'Masculin' }, { name: 'Alex', age: '30', category: 'Masculin', color: 'label-valid', booleanValue: false }, { name: 'Stefanie', age: '50', category: 'Feminin', color: 'label-default', booleanValue: false }];
  positionTag: boolean = false;
  //options2: any[]=["ERIC 25 ans","Alex 30 ans","Stefanie 50 ans"];
  selectedOption: any = 'option1';
  notFoundText = "No Items ";
  selectedItems: any[];
  columns: any[];
  tableConf: AlTableConfig = new AlTableConfig();
  events = [
    { event: "onOpen", description: "" },
    { event: "onClose", description: "" },
    { event: "onFocus", description: "Callback to invoke when monoselect receives focus." },
    { event: "onSearch", description: "" },
    { event: "onBlur", description: "Callback to invoke when multiselect loses focus." },
    { event: "onClear", description: "" },
    { event: "onAdd", description: "" },
    { event: "onRemove", description: "" },
    { event: "onChange", description: "Callback to invoke when value changes." },
    { event: "onClick", description: "Callback to invoke when component is clicked." }
  ];
  display = true;
  placeholder: string;
  clear: false;
  autoComplete: false;
  maxSelectedItems: false;
  hideSelected: false;
  disabled: false;
  onSearchCallBack: false;
  onAddCallBack: false;
  onChangeCallBack: false;

  hideSelectedData = { label: '', id: ' hideSelectedData ', value: 'iem' };
  labelOptions = [{ label: 'name', value: 'name' }, { label: 'age', value: 'age' }];
  autoCompleteMode = 'localData';
  getLocalautoCompleteString = `
    onSearch(value) {
      // Call an API with value as a filtred
      // then assign data to this.options
      console.log(value);
        if (value.startsWith('f')) {
           this.options = [{ label: 'filtred', value: 'filtred' }];
        }
    }
`;

  getOnAddString = `
    onAdd(event){
    console.log('added :' + event);
   }
        `;


  getOnChangeString = `
    onChange(event){
     console.log('changed :' + event);
    }
`;

  getOnSearchString = `
  onSearch(event){
    console.log('typing :' + event);
  }
`;

  constructor(private optionsService: OptionsService,
    @Inject(HighlightService) private readonly highlightService: HighlightService,
    private translate: TranslateService,
    private DataService: DataService) { }

  ngOnInit() {
    this.optionsService.getData().subscribe(data => {
      //this.options = data as any[];
    },
      (err: HttpErrorResponse) => {
        //   console.log(err.message);
      });
    this.columns = [
      { field: 'event', header: 'name' },
      { field: 'description', header: 'Description' }
    ];
    this.translate.stream('monoselect.name').subscribe(x => this.columns.find(y => y.field === 'event').header = x);
    // retourner nombre Total 
    this.nbTotal = this.DataService.getAllP();
    // retourner les 10 premier elements avec le webservices
    this.optionsBuffer = this.DataService.getDataPerpage(1, 10, null, this.input);
  }

  testDemo() {
    this.selectedItems = [];
    for (var i = 0; i < this.options.length; i++) {
      this.options[i].booleanValue = false;
      this.checkboxValue = false;
    }
  }

  getposition() {
    if (this.position === 'En bas') {
      this.positionTag = false;
    } else
      this.positionTag = true;
  }

  onScrollToEnd() {
    if (this.optionsBuffer.length <= this.nbTotal) {
      this.fetchMore();
    }
    return
  }

  onClear() {
    console.log("clear");
  }

  private fetchMore() {
    const len = this.optionsBuffer.length;
    let more = [];
    if (this.input) {
      more = this.DataService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, "name", this.input);// 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // this.input : critere de recherche
    } else {
      more = this.DataService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, null, null);
    }
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
      this.loading = false;
      this.optionsBuffer = this.optionsBuffer.concat(more);

    }, 1000)
  }

  recherche(event) {
    this.optionsBuffer = [];
    this.input = event;
    this.nbTotal = this.DataService.getAllP();
    if (event) {
      this.optionsBuffer = this.DataService.getDataPerpage(1, this.bufferSize, "name", event); // 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // event : critere de recherche 
    } else {
      this.optionsBuffer = this.DataService.getDataPerpage(1, this.bufferSize, null, null);
    }
  }

  onCheckBas() {
    this.droite = false;
  }

  onCheckDroite() {
    this.bas = false;
  }

  onRemovetags(event) { }

  onRemove(event) { }

  refresh() {
    if (this.bindValue === 'name' || this.bindValue === 'age') {
      // reset
      this.display = false;
      setTimeout(() => { this.display = true; });
    }
    if (this.bindLabel === 'name' || this.bindLabel === 'age') {
      // reset
      this.display = false;
      setTimeout(() => { this.display = true; });
    }
  }

  onchangeoptions() {
    if (this.strings) {
      this.options = [{ name: 'Eric', age: '25', category: 'Masculin', color: 'label-primary' }, { name: 'Alex', age: '30', category: 'Masculin', color: 'label-valid' }, { name: 'Stefanie', age: '50', category: 'Feminin', color: 'label-default' }]
    } else { this.options = ["ERIC 25 ans", "Alex 30 ans", "Khaled 26 ans travaille chez be-softilys la marque du groupe be-ys dédiée à l'édition et au développement logiciel "]; }
  }

  onSearch(value) {
    this.options = [{ name: 'Eric', age: '25', category: 'Masculin', color: 'label-primary' }, { name: 'Alex', age: '30', category: 'Masculin', color: 'label-valid' }, { name: 'Stefanie', age: '50', category: 'Feminin', color: 'label-default' }]
    if (value.startsWith('f')) {
      this.options = [{ name: 'filtred', age: 'filtred' }];
    }
  }

  onChange(e) { }

  try(item) {
    return item[this.bindLabel];
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
    document.getElementById('tr1').style.height = '316px';
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
    document.getElementById('o').style.height = '206px';
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
    document.getElementById('o2').style.height = '206px';
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

  getTsCode() {
    this.highlightService.highlightAll();
    return `
    options: any[] = [{age: '25', name: 'Eric',category:'masculin',color:'label-primary',booleanValue:false  }, \n {age: '30', name: 'Alex',category:'masculin',color:'label-valid',booleanValue:false  }, { age: '50', name: 'Stefanie',category:'feminin',color:'label-default',booleanValue:false }];
    Load:boolean; // enable data loading 
    input :string ; // search input
    optionsBuffer =[]; // result of the values ​​to display
    bufferSize = 10; // number of items to load
    loading = false; // enable spinner loading
    nbTotal: number; // number of elements found
    selectedItems: any;
    +
    (this.selectcheckbox ? ' [checkboxValue]=\"' +"checkboxValue"+ '\"'+'\n' : '')+
    
    notFoundText="No Items Found"; `+ "\n" +
      (this.selected ? "    groupBy:string='category';\n" : '') +
      (this.selectcheckbox ? " checkboxValue:boolean;  // initialize select All checkbox;\n" : '') +
      (this.autoCompleteMode.indexOf('remoteData') > -1 ? this.getLocalautoCompleteString : '') +
      (this.onAddCallBack ? this.getOnAddString : '') +
      (this.onChangeCallBack ? this.getOnChangeString : '') +
      (this.onSearchCallBack ? this.getOnSearchString : '') +
      (this.showTags ? "onRemovetags(event)" + "{" + "\n//Code to execute on remove item from tags...\n" + "}" : '')
      + `

      ngOnInit() {
       // return total number
        this.nbTotal=this.DataService.getAllP();
        // retourner les 10 premier elements avec le webservices
        this.optionsBuffer = this.DataService.getDataPerpage(1,10,null,this.input);
        
      }


      // this method uses the fetch method at each end of scroll

      onScrollToEnd() {
        if(this.optionsBuffer.length <= this.nbTotal && this.input==null)
        {this.fetchMore();
        }
        return
      }


      // uses the web service and concat the results

      private fetchMore() {
        const len = this.optionsBuffer.length;
        let more =[];
        if(this.input ){
           more = this.DataService.getDataPerpage((len/this.bufferSize)+1,this.bufferSize,"name",this.input );// 1 : start page , this.bufferSize : page size , "name" : bindlabel ,
           // this.input : Search criteria
        }else{
          more = this.DataService.getDataPerpage((len/this.bufferSize)+1,this.bufferSize,null,null);
        }
        this.loading = true;
        // using timeout here to simulate backend API delay
        setTimeout(() => {
            this.loading = false;
            this.optionsBuffer = this.optionsBuffer.concat(more);
            
        }, 1000)
      }


      
      // search method
      recherche(event){
        this.optionsBuffer=[];
        this.input=event;
      
        this.nbTotal=this.DataService.getAllP();
        if(event){
        this.optionsBuffer = this.DataService.getDataPerpage(1,this.bufferSize,"name",event); // 1 : start page , this.bufferSize : page size , "name" : bindlabel ,
        // this.input : Search criteria
        }else{
          this.optionsBuffer = this.DataService.getDataPerpage(1,this.bufferSize,null,null);
        }
      
      }
    
      `
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    // install ng-select
    Angular 6: npm install --save @ng-select/ng-select
    Angular 5: npm install --save @ng-select/ng-select@1.6.2
    // styles.scss
    @import "~@ng-select/ng-select/themes/default.theme.css";
    // app.module.ts
    import { SofMultiSelectModule } from 'framework-front-softilys';
    import : [ SofMultiSelectModule ];`
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return `\n&lt;sof-multi-select [options]="options" [(ngModel)]="selectedItems"  ` +
      (this.clear ? ' clearable=\"' + !this.clear + '\"' : '') +
      (this.autoComplete ? ' mode=\"' + 'autoComplete' + '\"' : '') +
      (this.bindLabel ? ' bindLabel=\"' + this.bindLabel + '\"' : '') +
      (this.bindValue ? ' bindValue=\"' + this.bindValue + '\"' : '') +
      (this.placeholder ? ' placeholder=\"' + this.placeholder + '\"' + '\n' : '') +
      (this.maxSelectedItems ? ' [maxSelectedItems]=\"' + this.maxSelectedItems + '\"' + '\n' : '') +
      (this.Load ? ' [Load]=\"' + this.Load + '\"' : '') +
      (this.selectcheckbox ? ' [selectcheckbox]=\"' + this.selectcheckbox + '\"' : '') +
      (this.selectcheckbox ? ' [checkboxValue]=\"' + "checkboxValue" + '\"' + '\n' : '') +
      (this.Load ? ' [nbTotal]=\"' + "nbTotal" + '\"' : '') +
      (this.Load ? ' [loading]=\"' + "loading" + '\"' : '') +
      (this.Load ? ' [bufferSize]=\"' + "bufferSize" + '\"' + '\n' : '') +
      (this.Load ? ' [optionsBuffer]=\"' + "optionsBuffer" + '\"' : '') +
      (this.Load ? ' (inputFromChild)=\"' + 'recherche($event)' + '\"' : '') +
      (this.Load ? ' (onScrollToEnd)=\"' + 'onScrollToEnd()' + '\"' + '\n' : '') +
      (this.hideSelected ? ' [hideSelected]=\"' + this.hideSelected + '\"' : '') +
      (this.disabled ? ' [disabled]=\"' + this.disabled + '\"' : '') +
      ((this.onSearchCallBack || (this.autoComplete && this.autoCompleteMode.indexOf('remoteData') > -1)) ? ' (onSearch)=\"' + 'onSearch($event)' + '\"' : '') +
      (this.onAddCallBack ? ' (onAdd)=\"' + 'onAdd($event)' + '\"' : '') +
      (this.notFoundText ? ' [notFoundText]=\"' + this.notFoundText + '\"' : '') +
      (this.nbItemsToShow ? ' [nbItemsToShow]=\"' + this.nbItemsToShow + '\"' : '') +
      (this.showTags ? ' [showTags]=\"' + this.showTags + '\"' + '\n' : '') +
      (this.showTags ? ' (onRemovetags)=\"' + 'onRemovetags()' + '\"' + '\n' : '') +
      (this.positionTag ? ' [positionTag]=\"' + this.positionTag + '\"' : '') +
      ' [groupBy]=\"' + "groupBy" + '\"' + '\n' +
      (this.selected ? ' [selected]=\"' + this.selected + '\"' + '\n' : '') +
      (this.strings ? ' [strings]=\"' + this.strings + '\"' : '') +
      (this.TextItems ? ' [TextItems]=\"' + this.TextItems + '\"' : '') +
      (this.onChangeCallBack ? ' (onChange)=\"' + 'onChange($event)' + '\"' : '') +
      `>\n&lt;/sof-multi-select>`;
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  onAdd() {}
}
