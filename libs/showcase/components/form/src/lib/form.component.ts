import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [HighlightService]
})
export class FormComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  option1 = 1;
  option2 = 1;
  option3: any = { name: '1' }
  sbTitle1: string = "Sub Form 1";
  sbTitle2: string = "Sub Form 2";
  sbTitle3: string = "Sub Form 3";
  formTitle: string = "BASIC TEXT FORM";
  errorMsg: string = "La longueur doit être > à 5"
  formborder: boolean = true;
  sbborder1: boolean = false;
  sbborder2: boolean = false;
  sbborder3: boolean = false;
  validation: boolean = false;
  formFlexible: boolean = false;
  sub1Flexible: boolean = false;
  sub2Flexible: boolean = false;
  sub3Flexible: boolean = false;
  loadOption1: number;
  loadOption2: number;
  loadOption3: number;

  options1: any[] = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '6' }];
  options2: any[] = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '6' }];
  options3: any[] = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '6' }];

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      validate: new FormControl('', Validators.minLength(5)),
      validate2: new FormControl('', Validators.minLength(5)),
      validate3: new FormControl('', Validators.minLength(5)),
      validate4: new FormControl('', Validators.minLength(5)),
      validate5: new FormControl('', Validators.minLength(5)),
      validate6: new FormControl('', Validators.minLength(5)),
      validate7: new FormControl('', Validators.minLength(5)),
      validate8: new FormControl('', Validators.minLength(5)),
      validate9: new FormControl('', Validators.minLength(5)),
    });
  }

  onChangeflex1(event) {
    if (event.target.checked) {
      this.loadOption1 = this.option1;
      this.option1 = 0
    } else {
      this.option1 = this.loadOption1;
    }
  }

  onChangeflex2(event) {
    if (event.target.checked) {
      this.loadOption2 = this.option2;
      this.option2 = 0
    } else {
      this.option2 = this.loadOption2;
    }
  }

  onChangeflex3(event) {
    if (event.target.checked) {
      this.loadOption3 = this.option3.name;
      this.option3.name = 0
    } else {
      this.option3.name = this.loadOption3;
    }
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
    document.getElementById('tr1').style.height = '206px';
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
    document.getElementById('o').style.height = '1000px';
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
    document.getElementById('o2').style.height = '184px';
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
    return "\n&lt;sof-form title=\"" + this.formTitle + "\" [border]=\"" + this.formborder + "\"" + (this.validation ? " [formGroup]=\"form\"" : "") + ">\n" +
      "  &lt;sof-sub-form column=\"" + (this.sub1Flexible === true || this.sub2Flexible === true || this.sub3Flexible === true ? '0' : this.option1) + "\" [border]=\"" + this.sbborder1 + "\" " +
      "\[flexible]=\"" + this.sub1Flexible + "\" " + (this.sbTitle1 != "" ? " title=\"" + this.sbTitle1 + "\">\n" : ">\n") +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate2.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate2\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate3.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate3\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate4.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate4\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate5.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate5\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate6.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate6\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "    &lt;sof-form-label>item&lt;/sof-form-label>\n" +
      "    &lt;sof-form-item " + (this.validation ? "[valid] =\"form?.controls?.validate4.valid\" errorMsg=\"errorMsg\"" : "") + ">\n" +
      "      &lt;input type=\"text\" name=\"item\"" + (this.validation ? " formControlName=\"validate4\"" : "") + ">\n" +
      "    &lt;/sof-form-item>\n" +
      "        &lt;sof-form-buttons>\n" +
      "          &lt;sof-button>Button 1&lt;/sof-button>\n" +
      "          &lt;sof-button>Button 2&lt;/sof-button>\n" +
      "        &lt;/sof-form-buttons>\n" +
      "  &lt;/sof-sub-form>\n" +
      "      &lt;sof-form-buttons>\n" +
      "        &lt;sof-button>Button 1&lt;/sof-button>\n" +
      "        &lt;sof-button>Button 2&lt;/sof-button>\n" +
      "      &lt;/sof-form-buttons>\n" +
      " &lt;/sof-form>"
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return "form:FormGroup;\n" +
      "constructor(private formBuilder: FormBuilder) { }\n\n" +

      "ngOnInit() {\n" +
      " this.form = this.formBuilder.group({\n" +
      "    validate:new FormControl('', Validators.minLength(5)),\n" +
      "validate2:new FormControl('', Validators.minLength(5)),\n" +
      "validate3:new FormControl('', Validators.minLength(5)),\n" +
      "validate4:new FormControl('', Validators.minLength(5)),\n" +
      "validate5:new FormControl('', Validators.minLength(5)),\n" +
      "validate6:new FormControl('', Validators.minLength(5)),\n" +
      "validate7:new FormControl('', Validators.minLength(5)),\n" +
      "validate8:new FormControl('', Validators.minLength(5)),\n" +
      "validate9:new FormControl('', Validators.minLength(5)),\n" +

      "  });\n" +
      "}";
  }

  setValidation() {
    if (this.validation) {
      this.form.controls.validate.setValidators(Validators.minLength(6));
      this.form.controls.validate.updateValueAndValidity();
      this.form.controls.validate2.setValidators(Validators.minLength(6));
      this.form.controls.validate2.updateValueAndValidity();
      this.form.controls.validate3.setValidators(Validators.minLength(6));
      this.form.controls.validate3.updateValueAndValidity();
      this.form.controls.validate4.setValidators(Validators.minLength(6));
      this.form.controls.validate4.updateValueAndValidity();
      this.form.controls.validate5.setValidators(Validators.minLength(6));
      this.form.controls.validate5.updateValueAndValidity();
      this.form.controls.validate6.setValidators(Validators.minLength(6));
      this.form.controls.validate6.updateValueAndValidity();
      this.form.controls.validate7.setValidators(Validators.minLength(6));
      this.form.controls.validate7.updateValueAndValidity();
      this.form.controls.validate8.setValidators(Validators.minLength(6));
      this.form.controls.validate8.updateValueAndValidity();
      this.form.controls.validate9.setValidators(Validators.minLength(6));
      this.form.controls.validate9.updateValueAndValidity();
    } else {
      this.form.controls.validate.clearValidators();
      this.form.controls.validate.updateValueAndValidity();
      this.form.controls.validate2.clearValidators();
      this.form.controls.validate2.updateValueAndValidity();
      this.form.controls.validate3.clearValidators();
      this.form.controls.validate3.updateValueAndValidity();
      this.form.controls.validate4.clearValidators();
      this.form.controls.validate4.updateValueAndValidity();
      this.form.controls.validate5.clearValidators();
      this.form.controls.validate5.updateValueAndValidity();
      this.form.controls.validate6.clearValidators();
      this.form.controls.validate6.updateValueAndValidity();
      this.form.controls.validate7.clearValidators();
      this.form.controls.validate7.updateValueAndValidity();
      this.form.controls.validate8.clearValidators();
      this.form.controls.validate8.updateValueAndValidity();
      this.form.controls.validate9.clearValidators();
      this.form.controls.validate9.updateValueAndValidity();
    }
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
  import { SofFormStructureModule } from 'framework-front-softilys'; 
  // Ce composant supporte les ReactiveModule : 
  import { FormsModule, ReactiveFormsModule } from '@angular/forms'; `
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}

