import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  providers: [HighlightService]
})
export class IconComponent {

  icon_name: string;
  icon_colour: string;
  icon_size: number;

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n&lt;i class=\"icons icon-" +
      (this.icon_name ? this.icon_name + " " : "") + (this.icon_colour ? this.icon_colour + " " : "") +
      (this.icon_size ? this.icon_size : "") +
      "\">&lt;/i>";
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
