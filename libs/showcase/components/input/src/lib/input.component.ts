import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HighlightService, IconService } from '@showcase/service';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Component({
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [HighlightService, IconService]
})

export class InputComponent implements OnInit, AfterViewInit {

  icon: string;
  parentForm: FormGroup;
  inputValue;
  testComponentForm1;
  config: any = {};
  functionalOption: String[] = ['NNI', 'RIB'];
  functionalParam: String;
  inputOption: any[] = [{ label: 'text', value: 'text' }, { label: 'number', value: 'number' }, { label: 'email', value: 'email' }, { label: 'password', value: 'password' }];
  inputType: String;
  defaultCountry: string = "tn";
  nbTotal: number
  input: string;
  optionsBuffer = [];
  loading;
  bufferSize;

  constructor(private formBuilder: FormBuilder,
    private IconService: IconService,
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    // retourner nombre Total 
    this.nbTotal = this.IconService.getAllP();
    // retourner les 10 premier elements avec le webservices
    this.optionsBuffer = this.IconService.getDataPerpage(1, 10, null, this.input);
    this.parentForm = this.formBuilder.group({
      nni: new FormControl('', Validators.pattern(/^[0-9]{13}$/)),//('',[Validators.minLength(13),Validators.maxLength(13),Validators.pattern(/^[0-9]$/)]),
      rib: new FormControl('', [Validators.pattern(/^[0-9]{5} [0-9]{5} [A-Za-z0-9 ]{11} [0-9]{2}$/), Validators.minLength(26), Validators.maxLength(26)]),//
      number: new FormControl('', Validators.pattern(/^\-{0,1}[0-9]+\.{0,1}[0-9]*$/)),//Validators.pattern(/^-{0,1}[0-9]+e{0,1}\.{0,1}[0-9]*$/)
      email: new FormControl('', Validators.pattern(/^[a-z A-Z 0-9._%+-]+@[a-z A-Z 0-9.-]+\.[a-z]{2,4}$/)),
      phone: new FormControl('', Validators.pattern(/^[ \+]+\-{0,1}[0-9]+\.{0,1}[0-9]*$/)),//Validators.pattern(/^-{0,1}[0-9]+e{0,1}\.{0,1}[0-9]*$/)
      inputInitial: new FormControl()
    });
  }

  test() {
    try {
      const phoneNumber = PhoneNumberUtil.getInstance().parseAndKeepRawInput(this.inputValue);
      if (!PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)) {
        this.parentForm.controls.phone.setErrors({ phone: "INVALID" });
      } else {
        this.parentForm.controls.phone.setErrors(null);
      }
    } catch (e) {
      this.parentForm.controls.phone.setErrors({ phone: "INVALID" });;
    }
  }

  getTSCode() {
    let tscode = '';
    (this.config.type == 'phone' ? tscode = tscode + 'defaultCountry:string="tn";' : '');
    tscode = tscode + '\nngOnInit(){ \n'
    if (this.config.type == 'number' || this.config.type == 'email' || this.functionalParam == 'NNI' || this.functionalParam == 'RIB') {
      tscode = tscode + 'this.parentForm = this.formBuilder.group({\n'
        + (this.functionalParam == 'NNI' ? "nni : new FormControl('',Validators.pattern(/^[0-9]{13}$/))\n" : '')
        + (this.functionalParam == 'RIB' ? "rib : ('',[/^[0-9]{5} [0-9]{5} [A-Za-z0-9 ]{11} [0-9]{2}$/), Validators.minLength(23), Validators.maxLength(23)])\n" : '')
        + (this.config.type == 'number' ? "number : new FormControl('',Validators.pattern(/^\-{0,1}[0-9]+\.{0,1}[0-9]*$/))\n" : '')
        + (this.config.type == 'email' ? " email : new FormControl('',Validators.pattern(/^[a-z A-Z 0-9._%+-]+@[a-z A-Z 0-9.-]+\.[a-z]{2,4}$/))\n" : '') + '})}'
    } else if (this.config.type == 'phone') {
      tscode = tscode + " 'this.parentForm = this.formBuilder.group({ \nphone : new FormControl('',Validators.pattern(/^[ \+]+\-{0,1}[0-9]+\.{0,1}[0-9]*$/))\n" + '})}\n'
      tscode = tscode + ' test(){\n' +
        ' try{\n' +
        'const phoneNumber = PhoneNumberUtil.getInstance().parseAndKeepRawInput(this.inputValue);\n' +
        'if(!PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)){\n' +
        'this.parentForm.controls.phone.setErrors({phone:"INVALID"});\n' +
        '}else{\n' +
        ' this.parentForm.controls.phone.setErrors(null);\n' +
        '}\n' +


        '}catch(e){\n' +
        'this.parentForm.controls.phone.setErrors({phone:"INVALID"});\n' +
        '}\n' +
        '}\n'
    }
    this.highlightService.highlightAll();
    return tscode;
  }
  exists(v) {
    if (v !== null && v !== undefined && v !== '') {
      return true;
    } else {
      return false;
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
    let code = this.getTSCode();
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

  getHtmlCode() {
    this.highlightService.highlightAll();
    return (this.config.type == 'number' ? "\n&lt;sof-form-item  [valid] =\"parentForm.controls.number.pristine ? true : parentForm.controls.number.valid\" \nerrorMsg=\"Le type number doit contenir au max un tiret(-) au debut , 0 ou 1 point au milieu\" > \n" : '')
      + (this.config.type == 'phone' ? "\n&lt;sof-form-item  [valid] =\"parentForm.controls.phone.pristine ? true : parentForm.controls.phone.valid\" \n errorMsg=\"Veuillez saisir un numero valide \" >  \n" : '')
      + (this.config.type == 'email' ? "\n&lt;sof-form-item  [valid] =\"parentForm.controls.email.pristine ? true : parentForm.controls.email.valid\" \n errorMsg=\"Veuillez saisir un EMAIL valide comme xxx.yyy@zzz.tn\" >  \n" : '')
      + (this.functionalParam == 'NNI' ? "\n&lt;sof-form-item  [valid] =\"parentForm.controls.nni.pristine ? true : parentForm.controls.nni.valid\" \nerrorMsg=\"Veuillez saisir un NNI valide avec exactement 13 chiffres\" >  \n" : '')
      + (this.functionalParam == 'RIB' ? "\n&lt;sof-form-item  [valid] =\"parentForm.controls.rib.pristine ? true : parentForm.controls.rib.valid\" \nerrorMsg=\"Veuillez saisir un RIB valide avec exactement 23 chiffres\" >  \n" : '')
      + '\n&lt;sof-input ([ngModel])=\"name\" id=\"id\"' +
      (this.config.focus ? ' [focus]=\"' + this.config.focus + '\"' : '') +
      (this.config.icon ? ' icon=\"' + this.config.icon + '\"' : '') +
      (this.config.maxlength ? ' maxlength=\"' + this.config.maxlength + '\"' : '') +
      (this.config.type ? ' type=\"' + this.config.type + '\"' : '') +
      (this.config.id ? ' id=\"' + this.config.id + '\"' : '') +
      (this.config.name ? ' name=\"' + this.config.name + '\"' : '') +
      (this.config.placeholder ? ' placeholder=\"' + this.config.placeholder + '\"' : '') +
      (this.config.disabled === 'true' ? ' [disabled]=\"' + this.config.disabled + '\"' : '') +
      (this.config.max ? ' max=\"' + this.config.max + '\"' : '') +
      (this.config.min ? ' min=\"' + this.config.min + '\"' + '\n' : '') +
      (this.config.type == 'number' ? " formControlName=\"number\"" : '')
      + (this.config.type == 'phone' ? " formControlName=\"phone\"" : '')
      + (this.config.type == 'email' ? " formControlName=\"email\"" : '')
      + (this.functionalParam == 'NNI' ? " formControlName=\"nni\"" : '')
      + (this.functionalParam == 'RIB' ? " formControlName=\"rib\"" : '')
      + (this.config.type == 'phone' ? " [defaultCountry]=\"defaultCountry\" (ngModelChange)=\"test()\"" : '')
      + '>&lt;/sof-input>' +
      ((this.config.type == 'number' || this.config.type == 'email' || this.config.type == 'phone' || this.functionalParam == 'NNI' || this.functionalParam == 'RIB') ? '\n&lt;/sof-form-item>' : '');
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return ((this.config.type == 'phone' ? `
   //Run  
    npm install ng-phone-number --save
    npm install google-libphonenumber@3.0.9 --save

    // Import your library
import { InternationalPhoneNumberModule } from 'ng-phone-number';

    `: ``) + `import { SofInputModule } from 'framework-front-softilys';`
      +

      `  
  @NgModule({
    imports: [SofInputModule
      `+ (this.config.type == 'phone' ? `,
      // InternationalPhoneNumberModule module
      InternationalPhoneNumberModule]`: ``)

    )
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  recherche(event): void {}

}
