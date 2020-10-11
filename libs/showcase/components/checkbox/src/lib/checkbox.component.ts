import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [HighlightService]
})
export class CheckBoxComponent implements OnInit {

  switch: string;
  radioBindLabel: any;
  radioBindValue: any;
  displayRadio = true;
  radioButtonOptions = ['label', 'value'];
  radioDemoOptions = { label: 'vrai', value: true };
  bindlabel = "name";
  bindvalue;
  valueOptions = ['', 'name', 'age']
  dataBoolean: boolean = false;
  data: any = { name: 'name1', age: '20' };
  data1: any = { name: 'name2', age: '21' };
  data2: any = { name: 'name3', age: '22' };
  selectedItems: any[] = [];
  selectedboolean = false;
  errorMsg = 'Items Error Message'
  code;
  parentForm: FormGroup;
  isdisabled: boolean = false;
  testComponentForm1: FormGroup;
  selectedRadio1;
  switchcall: boolean = false;

  refresh() {
    this.displayRadio = false;
    setTimeout(() => {
      this.displayRadio = true;
    });
  }
  // try() {

  //   this.selectedboolean=false

  // }

  constructor(private formBuilder: FormBuilder, @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      'control1': ['',],
      'radioB': []
    });
  }

  getCheckBoxCode() {
    let tscode = '';
    tscode = tscode + "\n data: any = &#123; name:'name1',age:'20' &#125; ;\n" +
      " data1: any = &#123; name:'name2',age:'21' &#125; ;\n" +
      " data2: any = &#123; name:'name3',age:'22' &#125; ;\n" +
      " selectedItems: any[] = [];";
    this.highlightService.highlightAll();
    return tscode + "\n" + "\n" + "onCheck()" + "{" + "\n//Code to execute on checking the box ...\n" +
      "}" + "\n" + "\n" + "unCheck()" + "{" + "\n//Code to execute on unchecking the box ...\n" +
      "}";
  }

  getRadioCode() {
    let radioTscode = '';
    radioTscode = radioTscode + "\nradioDemoOptions = &#123; label: 'vrai', value: true &#125; ;";
    this.highlightService.highlightAll();
    return radioTscode + "\n" + "\n" + "onCheckRadio()" + "{" + "\n//Code to execute on checking..\n" +
      "}" + "\n" + "\n" + "unCheckRadio()" + "{" + "\n//Code to execute on unchecking..\n" +
      "}";
  }

  switchOff() {
    this.switch = '';
    this.switchcall = false
  }

  getHtmlCode() {
    let htmlCode = '';
    htmlCode = htmlCode + "\n&lt;div>\n" +
      "  &lt;sof-checkBox [value]=\"data\" bindLabel=\"" + this.bindlabel + "\"" + (this.bindvalue != '' && this.bindvalue != null ? (" \"bindValue=\"" + this.bindvalue + "\"") : '') + "(onCheck)=\"onCheck()\" (unCheck)=\"unCheck()\" [(ngModel)]=\"selectedItems\">&lt;/sof-checkBox>\n" +
      "  &lt;sof-checkBox [value]=\"data1\" bindLabel=\"" + this.bindlabel + "\"" + (this.bindvalue != '' && this.bindvalue != null ? (" \"bindValue=\"" + this.bindvalue + "\"") : '') + "(onCheck)=\"onCheck()\" (unCheck)=\"unCheck()\"  [(ngModel)]=\"selectedItems\">&lt;/sof-checkBox>\n" +
      "  &lt;sof-checkBox [value]=\"data2\" bindLabel=\"" + this.bindlabel + "\"" + (this.bindvalue != '' && this.bindvalue != null ? (" \"bindValue=\"" + this.bindvalue + "\"") : '') + " (onCheck)=\"onCheck()\" (unCheck)=\"unCheck()\" [(ngModel)]=\"selectedItems\">&lt;/sof-checkBox>\n" +
      "&lt;/div>"
    this.highlightService.highlightAll();
    return htmlCode;
  }

  getHtmlRadioCode() {
    let htmlRadio = '';
    htmlRadio = htmlRadio + "\n&lt;sof-radio-button  id='opt1' name='opt1' [(ngModel)]='selectedRadio1' (onCheckRadio)=\"onCheckRadio()\" (unCheckRadio)=\"unCheckRadio()\" data='Option1' [data]='radioDemoOptions' \n  bindValue='value'\n bindLabel='label' >&lt;/sof-radio-button> \n" +
      "&lt;sof-radio-button  id='opt2' name='opt1' [(ngModel)]='selectedRadio1' data='Option2'>&lt;/sof-radio-button> \n" +
      "&lt;sof-radio-button  id='opt3' name='opt1' [(ngModel)]='selectedRadio1' data='Disabled' [disabled]='true'>&lt;/sof-radio-button>";
    this.highlightService.highlightAll();
    return htmlRadio;
  }

  onChange($event) {
    if (this.bindvalue == '') {
      this.bindvalue = null;
    }
    this.selectedItems = [];
  }

  getPrerequis() {
    return `
    import { SofCheckBoxModule} from 'framework-front-softilys';
    imports : [SofCheckBoxModule];`
  }

  SelectAllPre() {
    let code = this.getPrerequis();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentts').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test11s';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('tr1s').style.height = '184px';
  }

  SelectAllPreRadio() {
    let code = this.getPrerequisRadioButton();
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
    let code = this.getHtmlRadioCode();
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
    document.getElementById('o').style.height = '228px';
  }


  SelectAllBC() {
    let code = this.gethtmlCheckBox();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentb').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test1b';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('ob').style.height = '184px';
  }

  SelectAllCheck() {
    let code = this.getHtmlCode();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentbc').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test1bc';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('obc').style.height = '272px';
  }

  SelectAllCheckTs() {
    let code = this.getCheckBoxCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parentycc').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test21cc';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o2cc').style.height = '228px';
  }

  SelectAllRadioTs() {
    let code = this.getRadioCode();
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

  getPrerequisRadioButton() {
    return `
    import { SofRadioButtonModule} from 'framework-front-softilys';
    imports : [SofRadioButtonModule];`
  }

  gethtmlCheckBox() {
    let html = '';
    html = html + "\n &lt;sof-checkBox booleanValue='true' (onCheck)=\"onCheck()\" (unCheck)=\"unCheck()\" [value]='selectedboolean' [(ngModel)]='selectedboolean' " +
      (this.switch ? " switch=\"" + this.switch + "\" " : "") + ">Label&lt;/sof-checkBox>";
    this.highlightService.highlightAll();
    return html;
  }

  onCheck() { }

  unCheck() { }

  onCheckRadio() { }

  unCheckRadio() { }
  
}
