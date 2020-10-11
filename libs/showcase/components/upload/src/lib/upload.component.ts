import { Component, Inject, AfterViewInit } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [HighlightService]
})
export class UpdateComponent implements AfterViewInit {

  maxSize: number;
  manualUpload = false;
  Visible = false;
  placeholder = "Glisser votre fichier içi !! ...";
  error = "Invalid selected file(s)";

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

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

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-upload maxSize=\"" +
      (this.maxSize ? this.maxSize : "1000") + "\"" + " [visibility]=\"" +
      (this.Visible ? this.Visible : "false") + "\"" + " placeholder=\"" +
      (this.placeholder ? this.placeholder : "Glisser Votre fichier içi") + "\"" + " error=\"" + (this.error ? this.error : "Invalid selected file(s)") + "\"" + " [manualUpload]=\"" +
      (this.manualUpload ? this.manualUpload : "false") + "\"> &lt;/sof-upload>";
  }

  getTsCode() { }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
  import { SofUploadModule } from 'framework-front-softilys';
  imports : [SofUploadModule ];`
  }

}
