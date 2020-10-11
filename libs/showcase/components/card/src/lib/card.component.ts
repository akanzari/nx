import { Component, OnInit, Inject } from '@angular/core';
import { HighlightService, IconService } from '@showcase/service';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [HighlightService, IconService]
})
export class CardComponent implements OnInit {

  test = "Card title";
  head = false;
  label = false;
  cardLabel = "New";
  lbColor = "primary";
  icone = false;
  Texticon = "add";
  action: number;
  action1 = false;
  action2 = false;
  action3 = false;
  Type1 = "add";
  Type2 = "edit";
  Type3 = "trash";
  alert = false;
  alertColor = "error";
  titreAlerte = "Titre :";
  messageAlert = "message...";
  Load: boolean; // activer Loading Data 
  input: string; // input du recherche
  optionsBuffer = []; // resultat des valeurs à afficher
  bufferSize = 10; // nombre d'éléments à charger
  loading = false; // activer spinner loading
  nbTotal: number; // nombre des éléments trouvé

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService,
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

  changeAction() {
    this.action1 = false;
    this.action2 = false;
    this.action3 = false;
    if (this.action == 1) {
      this.action1 = true;
      this.action2 = false;
      this.action3 = false;
    } if (this.action == 2) {
      this.action2 = true;
      this.action1 = true;
      this.action3 = false;
    } if (this.action == 3) {
      this.action3 = true;
      this.action1 = true;
      this.action2 = true;
    }
  }


  onNotify() {
  }

  onNotify2() {
  }

  onNotify3() {
  }

  initmsg() {
    this.messageAlert = 'message...';
    this.alertColor = 'error';
    this.alert = false;
  }

  getHtmlCode() {
    this.highlightService.highlightAll();
    return '\n &lt;sof-cards ' + (this.test ? 'test=\"' + this.test + '\"' : '') +
      (this.head ? ' [head]=\"' + this.head + '\"' : '') +
      (this.alert ? ' [alert]=\"' + this.alert + '\"' : '') +
      (this.alert ? ' [alertColor]=\"' + this.alertColor + '\"' : '') +
      (this.alert ? ' [messageAlert]=\"' + this.messageAlert + '\"' : '') +
      (this.label ? ' [label]=\"' + this.label + '\"' : '') +
      (this.label ? ' [cardLabel]=\"' + this.cardLabel + '\"' : '') +
      (this.label ? ' [lbColor]=\"' + this.lbColor + '\"' + '\n' : '') +
      (this.icone ? ' [icone]=\"' + this.icone + '\"' : '') +
      (this.icone ? ' [Texticon]=\"' + this.Texticon + '\"' : '') +
      (this.action1 ? ' [action1]=\"' + this.action1 + '\"' + '\n' : '') +
      (this.action1 ? ' [Type1]=\"' + this.Type1 + '\"' : '') +
      (this.action1 ? ' (onClick1)=\"' + 'onNotify()' + '"' : '') +
      (this.action2 ? ' [action2]=\"' + this.action2 + '\"' : '') +
      (this.action2 ? ' [Type2]=\"' + this.Type2 + '\"' : '') +
      (this.action2 ? ' (onClick2)=\"' + 'onNotify2()' + '"' + '\n' : '') +
      (this.action3 ? ' [action3]=\"' + this.action3 + '\"' : '') +
      (this.action3 ? ' [Type3]=\"' + this.Type3 + '\"' : '') +
      (this.action3 ? ' (onClick3)=\"' + 'onNotify3()' + '\"' : '') +
      '> &lt;body ' + '>&lt;/body>' +
      (this.head ? ' &lt;footer ' + '>&lt;/footer>' : '')
      + '&lt;/sof-cards>';
  }

  getPrerequis() {
    return `
    import { SofCardsModule } from 'framework-front-softilys';
    imports : [SofCardsModule ];`
  }

  getTS() {
    return '' + '\n' + (this.action ? 'onNotify()' + ' {\n\t//Code to execute when clicking the first button' + '\n\t\t}\;' + '\n\n' : '') +
      (this.action2 ? 'onNotify2()' + ' {\n\t//Code to execute when clicking the second button' + '\n\t\t}\;' + '\n\n' : '') +
      (this.action3 ? 'onNotify3()' + ' {\n\t//Code to execute when clicking the third button' + '\n\t\t}\;' + '\n\n' : '')
      + '';
  }


}
