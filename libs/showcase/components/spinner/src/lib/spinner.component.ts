import { Component, OnInit, Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SofSpinner } from 'ng-softilys/spinner';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  providers: [HighlightService]
})
export class SpinnerComponent implements OnInit {

  @ViewChild(SofSpinner) spinnerChild: SofSpinner;

  spinnerType: string;/*  any={ label: 'ball scale pulse', value: 'ball-scale-pulse' }; */
  spinnerSize: string;
  spinnerColor: string;
  spinnertime: number;
  form: FormGroup;
  error: string;

  typeOptions: any[] = [{ label: 'ball scale pulse', value: 'ball-scale-pulse' }, { label: 'ball clip rotate', value: 'ball-clip-rotate' }];
  sizeOptions: any[] = [{ label: 'small', value: 'small' }, { label: 'medium', value: 'medium' }, { label: 'large', value: 'large' }];
  colorOptions: any[] = [{ label: 'primary', value: 'primary' }, { label: 'secondary', value: 'secondary' }, { label: 'default', value: 'default' }, { label: 'white', value: 'white' }];

  constructor(private router: Router,
    private fb: FormBuilder,
    @Inject(HighlightService) private readonly highlightService: HighlightService) { }

  ngOnInit() {
    this.form = this.fb.group({
      typeOptions: new FormControl('', Validators.required),
      sizeOptions: new FormControl(),
      colorOptions: new FormControl(),
    });
  }
  /* 
 
   errorToast() {
    
     this.error="Vous devez selectionner un type !"  ;
     
   } */
  onClear() {
    this.spinnerChild.hideSpinner();
  }

  typeValid() {
    return this.exists(this.form.controls.typeOptions.value);
  }

  exists(v) {
    if (v !== null && v !== undefined && v !== '') {
      return true;
    } else {
      return false;
    }
  }

  showSpin() {
    if (this.spinnerChild) {
      if (this.spinnerType) {
        this.spinnerChild.showSpinner()
      } else {
        this.spinnerChild.hideSpinner()
      }
    }
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
    npm install ngx-spinner --save
    import { SofSpinnerModule } from 'framework-front-softilys'; 
    import { SofSpinnerModule} from '@angular/forms'; `
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
    return "\n&lt;sof-spinner " + (this.spinnerType ? " [spinnerType]=\"" + this.spinnerType + "\"" : '') +
      (this.spinnerSize ? " [spinnerSize]=\"" + this.spinnerSize + "\"" : '') +
      (this.spinnerColor ? " [spinnerColor]=\"" + this.spinnerColor + "\"" : '') + ">&lt;/sof-spinner>";
  }

}
