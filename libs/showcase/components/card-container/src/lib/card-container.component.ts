import { Component, OnInit, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
  providers: [HighlightService]
})
export class CardContainerComponent implements OnInit {

  isContentDisplayed: boolean = false;

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofBrowserAnimationsModule } from '@angular/platform-browser/animations'; 
    import { SofCardContainerModule } from 'framework-front-softilys' ; `
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return " \n&lt;sof-card title=\"Titre\" " +
      (this.isContentDisplayed ? " [isContentDisplayed]=\"true\"  " : "") +
      ">" + "Tapping on the keyboard Alt&+ and Alt&- you can open and close the card container\"" + "&lt;/sof-card>";
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

}
