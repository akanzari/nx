import { Component, OnInit, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [HighlightService]
})
export class CalendarComponent implements OnInit {

  id;

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return " \n&lt;sof-calendar (onBlur)=" + "getNext()" + ">&lt;/sof-calendar>";
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofCalendarModule } from 'framework-front-softilys';
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    imports : [SofCalendarModule, BrowserAnimationsModule];
    `
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
    document.getElementById('o2').style.height = "426px";
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return "\nsetFocusSubElement(idTagParent,subElementTag) " + "{\n" +
      " setTimeout(() => " + "{\n" +
      "if (document.getElementById(idTagParent).getElementsByTagName(subElementTag) !== null) " + "{\n" +
      "let inputField: HTMLElement = <HTMLElement>document.getElementById(idTagParent).getElementsByTagName(subElementTag)[1]" + ";\ninputField && inputField.focus()" + ";\n \n" +
      "  }\n" +
      "}, 100)" + ";}\n \n \n" +
      " getNext()" + "{\n "
      + "this.setFocusSubElement('dsdsd', 'input')" + ";\n" +
      "};"
  }

  setFocusSubElement(idTagParent, subElementTag) {
    setTimeout(() => {
      if (document.getElementById(idTagParent).getElementsByTagName(subElementTag) !== null) {
        let inputField: HTMLElement = <HTMLElement>document.getElementById(idTagParent).getElementsByTagName(subElementTag)[1];
        inputField && inputField.focus();
      }
    }, 100);
  }

  getNext() {
    this.setFocusSubElement('dsdsd', 'input');
  }

}
