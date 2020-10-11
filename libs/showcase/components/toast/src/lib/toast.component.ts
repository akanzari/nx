import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [HighlightService]
})
export class ToastComponent implements OnInit {

  message: string;
  toastColor: string = "alert-primary";/*  any={ label: 'white', value: 'alert-white' };  */
  position: string = "top-right";//(this.toastColor ==='alert-error' || this.toastColor === 'alert-valid')?"top-center": "top-right"; 
  duration: number;
  msgs: string = '';
  form: FormGroup;
  errorMg: string;
  mssge: string;
  bgCol: string = "#ffffff";
  insert: boolean = false;
  displayToast: boolean = false; positionOptions = [{ label: 'En haut à droite', value: 'top-right' }, { label: 'En haut au centre', value: 'top-center' }, { label: 'En haut à gauche', value: 'top-left' }, { label: 'En bas à gauche', value: 'bottom-left' }, { label: 'En bas au centre', value: 'bottom-center' }, { label: 'En bas à droite', value: 'bottom-right' }];
  typeOptions: any[] = [{ label: 'white', value: 'alert-white' }, { label: 'default', value: 'alert-default' }, { label: 'priamry', value: 'alert-primary' }, { label: 'secondary', value: 'alert-secondary' }, { label: 'error', value: 'alert-error' }, { label: 'valid', value: 'alert-valid' }];
  bgColOptions: any[] = [{ label: 'white', value: '#ffffff' }, { label: 'default', value: '#E4EAEC' }, { label: 'priamry', value: '#baa365' }, { label: 'secondary', value: '#363638' }, { label: 'error', value: '#e9595b' }, { label: 'valid', value: '#3aa99e' }];

  constructor(private fb: FormBuilder,
    private router: Router,
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.form = this.fb.group({
      message: new FormControl('', Validators.required),
      positionOptions: new FormControl(),
      typeOptions: new FormControl(),
      bgColOptions: new FormControl(),
      insert: new FormControl(),
      duration: new FormControl('', Validators.required),
    });
  }

  display() {
    if (this.inputRequired()) {
      this.displayToast = true;
      this.msgs = this.message;

    }
  }

  errorMessage() {
    if (!this.inputRequired())
      this.errorMg = "Vous devez saisir le message et la durée";
  }

  inputRequired() {
    return this.exists(this.form.controls.message.value) && this.exists(this.form.controls.duration.value);
  }

  exists(v) {
    if (v !== null && v !== undefined && v !== '') {
      return true;
    } else {
      return false;
    }
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return "\n &lt;sof-toast " + (this.message ? "[(msgs)]=\"msgs\"" : '')
      + (this.position ? " toastPosition=\"" + this.position + "\"" : '') +
      (this.toastColor ? " toastType=\"" + this.toastColor + "\"" : '') +
      (this.insert ? " insert=\"" + this.insert + "\"" : '') +
      (this.insert ? " bgCol=\"" + this.bgCol + "\"" : '') +
      (this.duration ? " toastDuration=\"" + this.duration + "\"" : '') + ">&lt;/sof-toast>";
  }

  getTsCode() {
    this.highlightService.highlightAll();
    return "\n msgs:string; \n " +
      (this.message ? "\n msgs=\"" + this.message + "\";" : '')
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
  import { SofToastModule  } from 'framework-front-softilys';
  imports : [SofToastModule  ];`
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
    document.getElementById('o2').style.height = '206px';
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
