import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';
import { LocaleService } from 'ngx-daterangepicker-material';

@Component({
  templateUrl: './double-date-picker.component.html',
  providers: [HighlightService, LocaleService]
})
export class DoubleDatePickerComponent {

  disable: boolean = false;
  label: String = ' to '
  Row: Boolean;
  position: string;
  interval: { startDate: Date, endDate: Date }

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  catchInterval(interval) {
    this.interval = interval;
  }

  SelectHTMLCode() {
    this.highlightService.highlightAll();
    return "\n&lt;!--to change the date picker's postition, change the position's value to up or down--> \n" + `&lt;sof-double-date-picker [label]="` +
      + this.label + (this.disable ? ' disable=\"' + this.disable + '\"' : '') + ` (getInterval)="catchInterval($event)" [position]="position">\n&lt;/sof-double-date-picker>`
  }

  getTSCode() {
    return `\nlabel:String="Choisir votre intervalle"
    \ninterval : {
      startDate:Date,
      endDate:Date
     }
      \ncatchInterval(interval) {
        this.interval=interval;
    }
    \n // add reset() with a button if you want to reset field value.

    \n reset(){

      this.interval.endDate=null;
      this.interval.startDate=null;
     }`
  }


  getPrerequis() {
    return `\nnpm install ngx-daterangepicker-material --save\nnpm install --save moment ngx-moment\nimport { SofDoubleDatePickerModule } from 'framework-front-softilys';\nimports : [SofDoubleDatePickerModule ];`
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
