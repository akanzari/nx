import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StatusBar } from 'ng-softilys/statusbar';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss'],
  providers: [HighlightService]
})
export class StatusBarComponent implements OnInit, AfterViewInit {

  color1: any = "#ccb581"
  color2: any = "#3AA99E"
  color3: any = "#e9595b"
  color4: any = "#494c56"
  color5: any = "#437f9f"
  color6: any = "#f2f2F2"
  nombreSub: number = 1;
  nombreSubList: StatusBar[] = [{ value: 100, color: '#ccb581 ' }];
  couleurOptions: any[] = [{ label: 'primary', value: 'progress-primary' }, { label: 'secondary', value: 'progress-secondary' }, { label: 'error', value: 'progress-error' }, { label: 'valid', value: 'progress-valid' }];
  /*  widthSubdivision: any[] = [];
   defaultValues: any[] = []; */
  somme: number = 100;
  firstCalcul: boolean = false;

  constructor(private fb: FormBuilder, 
    private highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  subdivision(event) {
    if (event.target.value !== null) {
      this.nombreSubList = new Array(this.nombreSub);
      /* this.widthSubdivision = [];
      this.defaultValues = []; */
      this.somme = 0;
      for (let i = 0; i < this.nombreSub; i++) {
        this.nombreSubList[i] = new StatusBar();
        this.nombreSubList[i].value = 0;
        this.nombreSubList[i].color = "#ffffff";
        /*   this.widthSubdivision.push(0);
          this.defaultValues.push(0); */
      }
    }
    if (event.target.value === '') {
      this.nombreSub = 1;
      this.nombreSubList = [{ value: 100, color: 'progress-primary' }];
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
    document.getElementById('tr1').style.height = '185px';
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
    document.getElementById('o2').style.height = '184px';
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

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-status-bar " + (this.nombreSubList ? "[data]=\"nombreSubList\"" : '')
      + "> &lt;/sof-status-bar>";
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return "\n nombreSubList=" + JSON.stringify(this.nombreSubList) + ";";
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
      import { SofStatusBarModule } from 'framework-front-softilys';
      imports : [SofStatusBarModule ];`
  }

}
