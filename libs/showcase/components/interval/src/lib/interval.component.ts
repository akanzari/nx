import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Interval } from 'ng-softilys/interval';
import { HighlightService } from '@showcase/service';
import { MessageService, Message } from 'primeng/api';

@Component({
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
  providers: [HighlightService, MessageService]

})
export class IntervalComponent implements OnInit, AfterViewInit {

  //simple interval properties
  interval: Interval = new Interval();
  intervall = "intervall";
  interval1 = 'interval1';
  //form interval properties
  parentForm: FormGroup;
  validationMsgs: Message[];
  intervalData: Interval = new Interval();
  date_fin = "au";
  date_deb = "du";

  constructor(private formBuilder: FormBuilder, 
    private messageService: MessageService, 
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      trainingName: ['', Validators.required]
    });
  }

  submit() { }

  btnClick() { }

  getIntervalValid() {
    if (this.parentForm.controls.trainingPeriodendDate && this.parentForm.controls.trainingPeriodbeginDate) {
      if (this.parentForm.controls.trainingPeriodendDate.value && this.parentForm.controls.trainingPeriodbeginDate.value) {
        return this.parentForm.controls.trainingPeriodendDate.valid && this.parentForm.controls.trainingPeriodbeginDate.valid
      }
    }
    return true;
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
    document.getElementById('o2').style.height = '162px';
  }

  SelectAllPreForm() {
    let code = this.getPrerequis();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenttt').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test111';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('tr11').style.height = '184px';
  }

  SelectAllForm() {
    let code = this.getHtmlCodeForm();
    let codeF;
    var regex = /&lt;/gi;
    codeF = code.replace(regex, "<");
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parent4').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test14';
    (textnode as HTMLTextAreaElement).value = codeF;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o4').style.height = '493px';
  }

  SelectAllTsForm() {
    let code = this.getTsCodeForm();
    let text = "<textarea></textarea>"
    let textnode = this.str2DOMElement(text)
    document.getElementById('parenty5').appendChild(textnode);
    (textnode as HTMLTextAreaElement).id = 'test215';
    (textnode as HTMLTextAreaElement).value = code;
    (textnode as HTMLTextAreaElement).select();
    document.execCommand("copy");
    (textnode as HTMLTextAreaElement).style.visibility = 'hidden';
    document.getElementById('o25').style.height = '624px';
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

  getTsCodeForm() {
    this.highlightService.highlightAll();
    return "\n//form interval properties\n" +
      "parentForm: FormGroup;\n" +
      "validationMsgs: Message[];\n" +
      "intervalData: Interval = new Interval();\n" +

      "\nconstructor(private formBuilder: FormBuilder, private messageService: MessageService) { }\n" +

      "\nngOnInit() {\n" +
      "  this.parentForm = this.formBuilder.group({\n" +
      "    trainingName: ['', Validators.required]\n" +
      "  });\n" +
      "}\n" +

      "\nsubmit() {\n" +
      "}\n" +

      "\ngetIntervalValid() {\n" +
      "  if(this.parentForm.controls.trainingPeriodendDate && this.parentForm.controls.trainingPeriodendDate.value){\n" +
      "    return this.parentForm.controls.trainingPeriodendDate.valid && this.parentForm.controls.trainingPeriodbeginDate.valid;\n" +
      "  }\n" +
      "  return true;\n" +
      "}";
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    import { SofIntervalModule } from 'framework-front-softilys';
    imports : [SofIntervalModule ];`
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return '\n &lt;sof-interval [(intervaleData)]="interval"> &lt;/sof-interval>';
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return '//simple interval properties \n' +
      'interval: Interval = new Interval();'
  }

  getHtmlCodeForm() {
    this.highlightService.highlightAll();
    return `
    &lt;sof-form title="Utilisation dans un formulaire avec validation" [border]="true" [formGroup]="parentForm" class="form-horizontal" >
      &lt;sof-sub-form column="2" [border]="false">'+
      &lt;sof-form-label>Nom de la formation &lt;span style="color: red">*&lt;/span>&lt;/sof-form-label>
      &lt;sof-form-item [valid] ="parentForm?.controls?.trainingName.valid" errorMsg="Formation obligatoire">
         &lt;input type="text" formControlName="trainingName">
       &lt;/sof-form-item >
         &lt;sof-form-label>Durée&lt;/sof-form-label>
       &lt;sof-form-item [valid] ="getIntervalValid()" errorMsg="Durée de formation non valide">
         &lt;sof-interval [(intervaleData)]="interval" [(parentForm)]="parentForm" validationName="trainingPeriod">&lt;/sof-interval>
       &lt;/sof-form-item>
     &lt;/sof-sub-form>
     &lt;sof-form-buttons>
      &lt;sof-button (click)="submit()">Soumettre&lt;/sof-button>
     &lt;/sof-form-buttons>
    &lt;/sof-form>`;
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}
