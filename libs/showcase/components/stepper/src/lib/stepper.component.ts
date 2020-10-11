import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HighlightService } from '@showcase/service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [HighlightService, {
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class StepperComponent implements OnInit {

  radioButton: string = "Classic Stepper";
  radioButtons: string = "Horizontal/Default";
  navigationOption: string = 'free';
  options: string[] = ['free', 'semi-strict', 'strict'];
  stepsName: string[] = ['Titre 1', 'Titre 2', 'Titre 3'];
  index: number = 0;
  loadIndex: string;
  loadMode: string;
  loadName1: string;
  loadName2: string;
  loadName3: string;
  indexOptions: number[] = [0, 1, 2];
  defaultIndex: number;

  constructor(private router: Router,
    private translate: TranslateService,
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.loadIndex = sessionStorage.getItem("index");
    this.loadMode = sessionStorage.getItem("mode");
    this.loadName1 = sessionStorage.getItem("stepName1");
    this.loadName2 = sessionStorage.getItem("stepName2");
    this.loadName3 = sessionStorage.getItem("stepName3");
    this.index = parseInt(this.loadIndex !== null ? this.loadIndex : '0');
    this.navigationOption = this.loadMode != null && this.loadMode !== 'null' ? this.loadMode : 'free';
    this.stepsName[0] = ((this.loadName1 !== null && this.loadName1 !== '') ? this.loadName1 : 'Titre 1');
    this.stepsName[1] = this.loadName2 !== null ? this.loadName2 : 'Titre 2';
    this.stepsName[2] = this.loadName3 !== null ? this.loadName3 : 'Titre 3';
    setTimeout(() => {
      sessionStorage.removeItem("index");
      sessionStorage.removeItem("mode");
      sessionStorage.removeItem("stepName1");
      sessionStorage.removeItem("stepName2");
      sessionStorage.removeItem("stepName3");
    }, 100);
  }

  changeIndex(event) {
    sessionStorage.setItem("index", this.index.toString());
    sessionStorage.setItem("mode", this.navigationOption);
    sessionStorage.setItem("stepName1", this.stepsName[0]);
    sessionStorage.setItem("stepName2", this.stepsName[1]);
    sessionStorage.setItem("stepName3", this.stepsName[2]);
    window.location.reload();
  }

  enterStep($event) { }

  getHtmlCode() {
    this.highlightService.highlightAll();
    if (this.radioButton === 'Classic Stepper') {
      return "\n &lt;sof-stepper>\n" +
        "         &lt;aw-wizard navBarLayout=\"large-empty-symbols\"" + " navigationMode=\"" + this.navigationOption + "\"" + " defaultStepIndex=\"" + this.index + "\">\n" +
        "            &lt;aw-wizard-step stepTitle=\"" + this.stepsName[0] + "\">\n" +
        "                Contenu de la 1ére étape \n" +
        "                   &lt;div class=\"text-right\">\n" +
        "                      &lt;sof-button  awPreviousStep>Précédent&lt;/sof-button> \n" +
        "                      &lt;sof-button awNextStep >Suivant&lt;/sof-button> \n" +
        "                   &lt;/div> \n" +
        "            &lt;/aw-wizard-step> \n" +
        " \n " +
        "            &lt;aw-wizard-step stepTitle=\"" + this.stepsName[1] + "\">\n" +
        "                Contenu de la 2éme étape \n" +
        "                   &lt;div class=\"text-right\">\n" +
        "                      &lt;sof-button  awPreviousStep>Précédent&lt;/sof-button> \n" +
        "                      &lt;sof-button awNextStep >Suivant&lt;/sof-button> \n" +
        "                   &lt;/div> \n" +
        "            &lt;/aw-wizard-step> \n" +
        " \n " +
        "            &lt;aw-wizard-step stepTitle=\"" + this.stepsName[2] + "\">\n" +
        "                Contenu de la 2éme étape \n" +
        "                   &lt;div class=\"text-right\">\n" +
        "                      &lt;sof-button  awPreviousStep>Précédent&lt;/sof-button> \n" +
        "                      &lt;sof-button>Terminer&lt;/sof-button> \n" +
        "                   &lt;/div> \n" +
        "            &lt;/aw-wizard-step> \n" +
        "         &lt;/aw-wizard> \n" +
        "     &lt;/sof-stepper>"
    }
    if (this.radioButton === 'Software Stepper') {
      if (this.radioButtons === 'Horizontal/Default') {
        return "\n \n" +
          " &lt;sof-stepper>\n" +
          "         &lt;mat-horizontal-stepper>\n" +
          "                Contenu de la 1ére étape \n" +
          "                   &lt;mat-step label=\"Titre 1\" [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +

          "                Contenu de la 2éme étape \n" +
          "                   &lt;mat-step label=\"Titre 2\"  [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +

          "                Contenu de la 3éme étape \n" +
          "                   &lt;mat-step label=\"Titre 3\"  [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +
          "         &lt;/mat-horizontal-stepper> \n" +
          "     &lt;/sof-stepper>"


      }
      if (this.radioButtons === 'Vertical') {

        return "\n \n" +
          " &lt;sof-stepper>\n" +
          "         &lt;mat-Vertical-stepper>\n" +
          "                Contenu de la 1ére étape \n" +
          "                   &lt;mat-step label=\"Titre 1\" [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +

          "                Contenu de la 2éme étape \n" +
          "                   &lt;mat-step label=\"Titre 2\"  [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +

          "                Contenu de la 3éme étape \n" +
          "                   &lt;mat-step label=\"Titre 3\"  [editable]=\"true\">\n" +
          "            &lt;/mat-step> \n" +
          " \n " +
          "         &lt;/mat-vertical-stepper> \n" +
          "     &lt;/sof-stepper>"



      }
    }
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    if (this.radioButton === 'Software Stepper') {

      return "\n ng add @angular/material \n" +

        " import { MatStepperModule } from '@angular/material/stepper';\n" +

        "\n@NgModule ({\n" +
        " imports: [\n" +
        "MatStepperModule,\n" +
        "…]\n" +
        "})"

    } else {
      return `
      npm install --save angular-archwizard


      import { SofStepperModule   } from 'framework-front-softilys';
      imports : [SofStepperModule];`}
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
    document.getElementById('tr1').style.height = '250px';
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
    document.getElementById('o').style.height = '756px';
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
