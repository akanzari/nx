import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightService, IconService } from '@showcase/service';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [HighlightService, IconService]
})
export class ButtonComponent implements OnInit, AfterViewInit {

  size: string;
  border: string;
  flat: string;
  color: string;
  icon: string;
  selectedOption: any;
  width = "100";
  bgColor: string;
  block: string;
  disable: boolean = false;
  Load: boolean; // activer Loading Data 
  input: string; // input du recherche
  optionsBuffer = []; // resultat des valeurs à afficher
  bufferSize = 10; // nombre d'éléments à charger
  loading = false; // activer spinner loading
  nbTotal: number; // nombre des éléments trouvé

  constructor(private router: Router,
    @Inject(HighlightService) private readonly highlightService: HighlightService,
    private IconService: IconService) { }

  ngOnInit() {
    // retourner nombre Total 
    this.nbTotal = this.IconService.getAllP();
    // retourner les 10 premier elements avec le webservices
    this.optionsBuffer = this.IconService.getDataPerpage(1, 10, null, this.input);
  }

  try() {
    if (document.getElementById('inputmono')) {
      document.getElementById('inputmono').setAttribute('placeholder', 'recherche')
      document.getElementById('inputmono').focus()
    }
  }

  // ce methode fait appel à la methode fetch à chaque fin de scroll
  onScrollToEnd() {
    if (this.optionsBuffer.length <= this.nbTotal && this.input == null) {
      this.fetchMore();
    }
    return
  }

  // fait appel au web service et concatine les resultats
  private fetchMore() {
    const len = this.optionsBuffer.length;
    let more = [];
    if (this.input) {
      more = this.IconService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, "name", this.input);// 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // this.input : critere de recherche
    } else {
      more = this.IconService.getDataPerpage((len / this.bufferSize) + 1, this.bufferSize, null, null);
    }
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
      this.loading = false;
      this.optionsBuffer = this.optionsBuffer.concat(more);

    }, 1000)
  }

  // methode de recherche 
  recherche(event) {
    this.optionsBuffer = [];
    this.input = event;
    this.nbTotal = this.IconService.getAllP();
    if (event) {
      this.optionsBuffer = this.IconService.getDataPerpage(1, this.bufferSize, "name", event); // 1 : page de debut , this.bufferSize : taille de page , "name" : bindlabel ,
      // event : critere de recherche 
    } else {
      this.optionsBuffer = this.IconService.getDataPerpage(1, this.bufferSize, null, null);
    }
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return '\n &lt;sof-button ' + (this.border ? 'border=\"' + this.border + '\"' : '') +
      (this.bgColor ? ' bgColor=\"' + this.bgColor + '\"' : '') +
      (this.width ? ' [width]=\"' + this.width + '\"' : '') +
      (this.size ? ' size=\"' + this.size + '\"' : '') +
      (this.icon ? ' icon=\"' + this.icon + '\"' : '') +
      (this.flat ? ' flat=\"' + this.flat + '\"' : '') +
      (this.color ? ' color=\"' + this.color + '\"' : '') +
      (this.disable ? ' [disabled]=\"' + this.disable + '\"' : '') +
      (this.block ? ' block=\"' + this.block + '\"' : '')
      + '>&lt;/sof-button>';
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

  blockfunction() {
    if (this.block) {
      this.width = "";
      return true;
    }
    else return false;
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

  getButton() {
    if (this.width === '50')
      return "OK";
    else return 'button'
  }

  test() {
    // this.router.navigateByUrl('/home/table_demo');
  }

  updateflat(event) {
    (document.getElementById('flatC') as HTMLInputElement).value = "";
    this.color = "";
    this.bgColor = "";
    this.border = "";
  }

  functionB() {
    if (this.flat || this.bgColor) {
      this.border = "";
      return true;
    }
    else {
      return null;
    }
  }

  functionnB() {
    if (this.flat)
      return true;
    else {
      return null;
    }
  }

  getPrerequis() {
    return `
    import { SofButtonModule } from 'framework-front-softilys';
    imports : [SofButtonModule ];`
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

}