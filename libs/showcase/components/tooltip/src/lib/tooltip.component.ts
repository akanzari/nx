import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  providers: [HighlightService]
})
export class TooltipComponent {

  text = "test";

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-button softooltip=\"" +
      (this.text ? this.text : "test") +
      "\">button&lt;/sof-button>";
  }

  getCssCode() {
    this.highlightService.highlightAll();
    return "\n .ng-tooltip { \n " +
      "position: absolute;\n" +
      "max-width: 150px;\n" +
      "font-size: 14px;\n" +
      "text-align: center;\n" +
      "color: #f8f8f2;\n" +
      "padding: 3px 8px;\n" +
      "background: #282a36;\n" +
      "border-radius: 4px;\n" +
      "z-index: 1000;\n" +
      "opacity: 0;\n" +
      "} \n" +
      ".ng-tooltip:after {\n" +
      " content: '' ; \n" +
      "  position: absolute;\n" +
      "  border-style: solid;\n" +
      "}\n" +
      ".ng-tooltip-top:after {\n" +
      " top: 100%;\n" +
      " left: 50%;\n" +
      " margin-left: -5px;\n" +
      " border-width: 5px;\n" +
      " border-color: black transparent transparent transparent;\n" +
      "}\n" +
      ".ng-tooltip-bottom:after {\n" +
      " bottom: 100%;\n" +
      " left: 50%;\n" +
      " margin-left: -5px;\n" +
      " border-width: 5px;\n" +
      " border-color: transparent transparent black transparent;\n" +
      "}\n" +
      ".ng-tooltip-left:after {\n" +
      " top: 50%;\n" +
      " left: 100%;\n" +
      " margin-top: -5px;\n" +
      " border-width: 5px;\n" +
      " border-color: transparent transparent transparent black;\n" +
      "}\n" +
      ".ng-tooltip-right:after {\n" +
      "top: 50%;\n" +
      " right: 100%;\n" +
      " margin-top: -5px;\n" +
      "border-width: 5px;\n" +
      "border-color: transparent black transparent transparent;\n" +
      "}\n" +
      ".ng-tooltip-show {\n" +
      "opacity: 1;\n" +
      "}\n"
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
    document.getElementById('o12').style.height = '1200px';
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

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofTooltipModule } from 'framework-front-softilys';
    imports : [SofTooltipModule ];`
  }

}