import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HighlightService, DataService } from '@showcase/service';
import { AlTableConfig } from 'ng-softilys/table';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './monoselect.component.html',
  styleUrls: ['./monoselect.component.scss'],
  providers: [HighlightService, DataService]
})
export class MonoselectComponent implements OnInit, AfterViewInit {

  changed: any;
  searching: any;
  Load: boolean;
  input: string;
  optionsBuffer = [];
  bufferSize = 10;
  loading = false;
  numberOfItemsFromEndBeforeFetchingMore = 2;
  nbTotal: number;
  notFoundText = "no items found";
  disabled: false;
  bindValue;
  bindLabel = 'name';
  options: any[] = [
    { name: 'Eric', age: '25' },
    { name: 'Alex', age: '30' },
    { name: 'Stefanie', age: '50' },
    { name: ' Thomas', age: '25' },
    { name: 'Frederic', age: '30' },
    { name: 'Alonso', age: '30' },
    { name: 'Eric Alonso', age: '25' },
    { name: 'Celine Fratelli', age: '25' },
    { name: 'Xavi', age: '25' },
    { name: ' Thomas', age: '25' },
    { name: 'Eric Alonso', age: '25' },
    { name: 'Eric', age: '25' }];
  selectedOption: any = { name: 'Eric', age: '25' };
  selectedItemLocal: any;
  placeholder: string;
  clear: false;
  onSearchCallBack: false;
  display = true;
  selectedItemRemote: any;
  autoCompleteMode = 'localData';
  autoComplete: false;
  onAddCallBack: false;
  onChangeCallBack: false;
  labelOptions = [{ label: 'name', value: 'name' }, { label: 'age', value: 'age' }]
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
  getLocalautoCompleteString = `
    onSearch(value) {
    // Call an API with value as a filtred
    // then assign data to this.options
    console.log(value);
    if (value.startsWith('f')) {
      this.options = [{ name: 'filtred', age: 'filtred' }];
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


  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService,
    private translate: TranslateService,
    private DataService: DataService) { }

  ngOnInit() {
    this.columns = [
      { field: 'event', header: 'name' },
      { field: 'description', header: 'Description' }
    ];
    this.translate.stream('monoselect.name').subscribe(x => this.columns.find(y => y.field === 'event').header = x);
    this.nbTotal = this.DataService.getAllP();
    this.optionsBuffer = this.DataService.getDataPerpage(1, 10, null, this.input);
  }

  onScrollToEnd() {
    if (this.optionsBuffer.length <= this.nbTotal) {
      this.fetchMore();
    }
    return
  }

  private fetchMore() {
    const len = this.optionsBuffer.length;
    let more = [];
    if (this.input) {
      more = this.DataService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, "name", this.input);
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
      this.optionsBuffer = this.DataService.getDataPerpage(1, this.bufferSize, "name", event);
    } else {
      this.optionsBuffer = this.DataService.getDataPerpage(1, this.bufferSize, null, null);
    }
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

  onSearch(value) {
    // this.optionsBuffer = this.DataService.getDataPerpage((this.optionsBuffer.length/10)+1,10);
    // if (value.startsWith('f')) {
    //   this.optionsBuffer = [{ name: 'filtred', age: 'filtred' }];
    // }
    // this.input$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   switchMap(term => this.DataService.getDataPerpage((this.optionsBuffer.length/10)+1,10))
    // )
    //   .subscribe(data => {
    //     this.optionsBuffer = data.slice(0, this.bufferSize);
    //   })
  }

  onChange(e) { }

  onAdd(event) { }

  onClik(event) { }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return `\n&lt;sof-monoselect [(ngModel)]="selectedOption" [options]="options" ` +
      (this.autoComplete ? ' mode=\"' + 'autoComplete' + '\"' : '') +
      (this.clear ? ' clearable=\"' + !this.clear + '\"' : '') +
      (this.placeholder ? ' placeholder=\"' + this.placeholder + '\"' : '') +
      (this.bindLabel ? ' bindLabel=\"' + this.bindLabel + '\"' : '') +
      (this.bindValue ? ' bindValue=\"' + this.bindValue + '\"' : '') +
      (this.Load ? ' [Load]=\"' + this.Load + '\"' : '') +
      (this.Load ? ' [nbTotal]=\"' + "nbTotal" + '\"' : '') +
      (this.Load ? ' [loading]=\"' + "loading" + '\"' : '') +
      (this.Load ? ' [bufferSize]=\"' + "bufferSize" + '\"' : '') + " \n " +
      (this.Load ? ' [optionsBuffer]=\"' + "optionsBuffer" + '\"' : '') +
      (this.Load ? ' (inputFromChild)=\"' + 'recherche($event)' + '\"' : '') +
      (this.Load ? ' (onScrollToEnd)=\"' + 'onScrollToEnd()' + '\"' : '') +
      (this.disabled ? ' [disabled]=\"' + this.disabled + '\"' : '') +
      ((this.onSearchCallBack || (this.autoComplete && this.autoCompleteMode.indexOf('remoteData') > -1)) ? ' (onSearch)=\"' + 'onSearch($event)' + '\"' : '') +
      (this.onAddCallBack ? ' (onAdd)=\"' + 'onAdd($event)' + '\"' : '') +
      (this.onChangeCallBack ? ' (onChange)=\"' + 'onChange($event)' + '\"' : '') +
      `>\n&lt;/sof-monoselect>`;
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return `
    Load:boolean; // enable data loading 
    input :string ; // search input
    optionsBuffer =[]; // result of the values ​​to display
    bufferSize = 10; // number of items to load
    loading = false; // enable spinner loading
    nbTotal: number; // number of elements found
    options: any[] = [
      { name: 'Eric', age: '25' },
      { name: 'Alex', age: '30' },
      { name: 'Stefanie', age: '50' },
      { name: ' Thomas', age: '25' },
      { name: 'Frederic', age: '30' },
      { name: 'Alonso', age: '30' },
      { name: 'Eric Alonso', age: '25' },
      { name: 'Celine Fratelli', age: '25' },
      { name: 'Xavi', age: '25' },
      { name: ' Thomas', age: '25' },
      { name: 'Eric Alonso', age: '25' },
      { name: 'Eric', age: '25' }];


      ngOnInit() {
       // return total number 
        this.nbTotal=this.DataService.getAllP();
        // return the first 10 elements with the webservices
        this.optionsBuffer = this.DataService.getDataPerpage(1,10,null,this.input);
        
      }


      //this method uses the fetch method at each end of scroll

      onScrollToEnd() {
        if(this.optionsBuffer.length <= this.nbTotal && this.input==null)
        {this.fetchMore();
        }
        return
      }


      //  uses the web service and concat the results

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

    selectedOption: any;\n`+
      (this.autoCompleteMode.indexOf('remoteData') > -1 ? this.getLocalautoCompleteString : '') +
      (this.onAddCallBack ? this.getOnAddString : '') +
      (this.onChangeCallBack ? this.getOnChangeString : '') +
      (this.onSearchCallBack ? this.getOnSearchString : '');
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
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
    import { SofMonoSelectModule  } from 'framework-front-softilys';
    imports : [ SofMonoSelectModule ];`
  }
  
}
