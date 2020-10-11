import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './textarea.component.html',
  providers: [HighlightService]
})
export class TextAreaComponent implements OnInit, AfterViewInit {

  cols: number;
  rows: number;
  placeholder: string;
  focus1: boolean;
  pureText: boolean = false;

  parentForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      pureText: new FormControl('', Validators.pattern(/^([^0-9]*)$/)),//Validators.pattern(/^-{0,1}[0-9]+e{0,1}\.{0,1}[0-9]*$/)
    })
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
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

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
import { SofTextAreaModule } from 'framework-front-softilys';
imports : [SofTextAreaModule ];`
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

  getHtmlCode() {
    this.highlightService.highlightAll();
    let x =
      (this.pureText ? '\n<sof-form [formGroup]="parentForm">\n\t<sof-form-item [valid] ="pureText ? parentForm.controls.pureText.valid : true"  errorMsg="saisir que du texte">\n\t\t<sof-text-area formControlName="pureText" ' : '\n<sof-text-area')
      + ((this.placeholder == '' || !this.placeholder) ? '' : ' [placeholder]="' + this.placeholder + '"')
      + (this.focus1 ? ' [focus]="true"' : "")
      + (this.cols ? ' [cols]=' + this.cols : "")
      + (this.rows ? ' [rows]=' + this.rows : "")
      + ">"
      + (this.pureText ? '\n\t\t<sof-text-area>\n\t</sof-form-item>\n</sof-form>' : '\n</sof-text-area>')
    var regex = /</gi;
    x = x.replace(regex, "&lt;")
    // return (this.pureText ? '<sof-form-item  [valid] ="pureText ? parentForm.controls.pureText.valid : true"  errorMsg="saisir que du texte"&lt\n<sof-text-area formControlName="pureText" ':'<sof-text-area')
    return x
  }

  getTSCode() {
    let tscode = ''
      + (this.pureText ? '\nparentForm: FormGroup\nngOnInit(){\n\tthis.parentForm = this.formBuilder.group({\n\tpureText : new FormControl("",Validators.pattern(/^([^0-9]*)$/))})\n}' : '');
    this.highlightService.highlightAll();
    return tscode;
  }

}
