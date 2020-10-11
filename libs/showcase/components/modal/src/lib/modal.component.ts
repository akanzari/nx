import { Component, Inject, AfterViewInit, HostListener } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [HighlightService]
})
export class ModalComponent implements AfterViewInit {

  drag: Boolean = false;
  echap: Boolean = false;
  showDialog: Boolean = false;
  selectedOption = 'top';
  selected = '';
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

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  @HostListener('document:keydown.escape', ['$event']) public onKeydownHandler(event: KeyboardEvent) {
    if (this.echap == true) {
      this.showDialog = false;
    }
  }

  display1() {
    this.showDialog = !this.showDialog;
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
    document.getElementById('o').style.height = '360px';
  }

  SelectAllTs() {
    let code = this.getTSCode();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenty').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test21';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o2').style.height = '163px';
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

  onChange() {
    if ((this.selectedOption === 'full' || (this.selectedOption === 'sidebar'))) {
      this.drag = false;
    }
  }

  onCheck() {
    if ((this.selectedOption === 'full') || (this.selectedOption === 'sidebar')) {
      this.drag = false;
    }
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return '\n &lt;!--if you want to move the modal,change the drag value to true --> \n  &lt;sof-modal [(visible)]="showDialog"' +
      (this.selectedOption ? ' position=\"' + this.selectedOption + '\"' : '') +
      ' title="Title" (closeMethode)="onNotify()" [drag]="drag">\n' +
      '    ............&lt;br/>\n' +
      '    &lt;sof-modal-footer>\n' +
      '      &lt;button type="button" class="btn btn-primary">\n' +
      '            button\n' +
      '      &lt;/button>\n' +
      '      &lt;button type="button" class="btn btn-default" (click)="showDialog = !showDialog">Close&lt;/button>\n' +
      '    &lt;/sof-modal-footer>\n' +
      '&lt;/sof-modal>';
  }

  getPrerequis() {
    return `
    //installer angualar2-draggable

    npm install angular2-draggable --save


    // Dans le fichier angular.json, ajouter:

    "styles": [
      ...
     "node_modules/angular2-draggable/css/resizable.min.css"
  ]
    
  //Dans app.module.ts, ajouter:
    
    import { SofModalModule } from 'framework-front-softilys';
    import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  imports: [
    ...,
      SofModalModule,
      AngularDraggableModule
  ],
})
export class AppModule { 
    
    
    


    `
  }

  getTSCode() {
    this.highlightService.highlightAll();
    return `\n showDialog:Boolean = false;` + "\n" + (this.drag ? ` drag:Boolean = true;` + "\n" : "drag:Boolean = false") + "\n" + (this.echap ? "\n" + `\n  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
      this.showDialog =false;
  }`+ "\n" : "") + "  onNotify()" + "{" + "\n\t//code to  execute when closing the modal ... \n" +

      "\t}";

  }


  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  onNotify() { }

  getNext() { }

}
