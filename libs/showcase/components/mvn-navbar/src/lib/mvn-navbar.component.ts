import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './mvn-navbar.component.html',
  providers: [HighlightService]
})
export class MvnNavbarComponent {

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

  getPrerequis() {
    this.highlightService.highlightAll();
    return `
  import { MdlNavbarModule } from 'framework-front-softilys';
  imports : [MdlNavbarModule ];`
  }

  getHtmlCode() {
    return ' \n &lt;app-mdl-navbar>&lt;/app-mdl-navbar>'
  }

  SelectAllPre() {}

  SelectAll() {}

}
