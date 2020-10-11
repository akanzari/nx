import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [HighlightService]
})
export class TabsComponent {

  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  onClick(check) {
    if (check == 1) {
      this.tab = 'tab1';
    } else if (check == 2) {
      this.tab = 'tab2';
    } else {
      this.tab = 'tab3';
    }
  }

  getHtml() {
    this.highlightService.highlightAll();
    return "\n &lt;Sof-tabs>\n" +
      "         &lt;ul class=\"nav nav-tabs\"" + "\>\n" +
      "            &lt;li " + "\>\n" +
      "                   &lt;a (click)=\"onClick(1)\"" + "[ngClass]=\"{'active': tab==='tab1'}\"" + " data-toggle=\"tab\"" + " style=\"color: #2A2C33;\"" + " >home" + " &lt;/a>" + "\n" + "            &lt;/li>" + "\n" +
      "            &lt;li " + "\>\n" +
      "                   &lt;a (click)=\"onClick(2)\"" + "[ngClass]=\"{'active': tab==='tab2'}\"" + " data-toggle=\"tab\"" + ">Menu 1" + " &lt;/a>" + "\n" + "            &lt;/li>" + "\n" +
      "            &lt;li " + "\>\n" +
      "                   &lt;a (click)=\"onClick(3)\"" + "[ngClass]=\"{'active': tab==='tab3'}\"" + " data-toggle=\"tab\"" + ">Menu 2" + " &lt;/a>" + "\n" + "            &lt;/li>" + "\n" +
      "            &lt;li " + "\>\n" +
      "                   &lt;a (click)=\"onClick(4)\"" + "[ngClass]=\"{'active': tab==='tab4'}\"" + " data-toggle=\"tab\" href=\"#\"" + ">Menu 3" + " &lt;/a>" + "\n" + "            &lt;/li>" + "\n" +
      "            &lt;li " + "\>\n" +
      "                   &lt;a " + "[ngClass]=\"{'active': tab==='tab5'}\"" + "class=\"disabled\">Menu 4" + " &lt;/a>" + "\n" + "            &lt;/li>" + "\n" +
      " \n " +
      "         &lt;/ul>" + "\n" +
      "         &lt;div class=\"tab-content\"" + "\>\n" +
      "         &lt;div class=\"tab-pane\" [class.active]=\"tab==='tab1'\" " + ">\n " + "                               Contenu Home" + "\n" +
      "         &lt;/div>" + "\n" +
      "         &lt;div class=\"tab-pane\" [class.active]=\"tab==='tab2'\" " + ">\n " + "                               Contenu 1" + "\n" +
      "         &lt;/div>" + "\n" +
      "         &lt;div class=\"tab-pane\" [class.active]=\"tab==='tab3'\" " + ">\n " + "                               Contenu 2" + "\n" +
      "         &lt;/div>" + "\n" +
      "         &lt;/div>" +
      " \n " +
      "&lt;/Sof-tabs>";

  }

  getTS() {
    return " \n tab : any = 'tab1'" + "\n" +
      " tab1 : any" + "\n" +
      " tab2 : any" + "\n" +
      " tab3 : any" + "\n" +
      "   onClick(check)" + "{" + "\n" +
      "if(check==1)" + "\n" + "{" +
      " this.tab = 'tab1'" + ";" +
      "}" + "\n" + "else if(check==2)" + "\n" + "{" +
      "this.tab = 'tab2'" + ";" +
      " }" + "\n" + "else" + "{" +
      " this.tab = 'tab3'" + ";" +
      "}   " + "\n" +

      "}" + ";";
  }

  getCSS() {
    return "\n li " + "{" + "\n" +

      "margin-right: 0%" + ";" + "\n" +
      "}" + "\n" +

      "li" + " a" + "{" + "\n" +

      "height: 48px" + ";" + "\n" +
      "float: left" + ";" + "\n" +
      "display: block" + ";" + "\n" +
      "color: black" + ";" + "\n" +
      "text-align: center" + ";" + "\n" +
      "padding: 0 24px" + ";" + "\n" +
      "text-decoration: none" + ";" + "\n" +
      "font-size: 17px" + ";" + "\n" +
      "border-bottom: 3px solid transparent" + ";" + "\n" +
      "box-sizing: border-box" + ";" + "\n" +
      "opacity: .6" + ";" + "\n" +
      "min-width: 160px" + ";" + "\n" +
      "justify-content: center" + ";" + "\n" +
      "align-items: center" + ";" + "\n" +
      "white-space: nowrap" + ";" + "\n" +
      "position: relative" + ";" + "\n" +
      "}" + "\n" +
      ".nav.nav-tabs > li.disabled" + "{" + " pointer-events: none; a " + "{" + " color: silver" + ";" + " }" + " }" + "\n" +


      "li a.active " + "{" + "\n" +
      "border-bottom-width: 100%" + ";" + "\n" +
      "border-bottom: 3px solid #ccb581" + ";" + "\n" +
      "opacity: 2.6" + ";" + "\n" +
      "}" + "\n" +
      "ul" + "{" + "\n" +
      "border-bottom-width: 100%" + ";" + "\n" +
      "border-bottom: 1.5px solid #b0b0b04d" + ";" + "\n" +
      "}"
  }

  getPrerequis() {
    return `
      import { SofTabsModule } from 'framework-front-softilys';
      imports : [SofTabsModule ];`
  }
  
}
