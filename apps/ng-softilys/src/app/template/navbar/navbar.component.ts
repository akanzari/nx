import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LayoutService } from 'ng-softilys/api';

@Component({
  selector: 'be-navbar',
  templateUrl: './navbar.component.html',
  animations: [
    trigger('logoState', [
      state('hidden', style({
        opacity: '0',
        height: '0'
        // transform: 'translateY(-100%) translateY(50px)',
      })),
      state('visible', style({
        opacity: '1',
        height: '*'

        // transform: 'translateY(50px) translateY(100px)',
      })),

      transition('visible <=> hidden', animate('500ms linear')),
      // transition('b => a', animate('1000ms')),
    ])]
})
export class NavbarComponent implements OnInit {

  currentAccount: any;
  state = 'hidden';
  public isSearchSmDisplay: Boolean = false;
  public isNavBarSmDisplay: Boolean = false;
  public showFr: Boolean = true;
  public showEn: Boolean = false;
  displayL: Boolean = false;

  constructor(public ls: LayoutService,
    private router: Router,
    private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  public ngOnInit() { }

  change() {
    this.displayL = !this.displayL;
  }

  public toggleSearchModeForSmallScreen(): void {
    this.isSearchSmDisplay = !this.isSearchSmDisplay;
  }

  public toggleNavBarForSmallScreen(): void {
    this.isNavBarSmDisplay = !this.isNavBarSmDisplay;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language === 'fr') {
      this.showFr = true;
      this.showEn = false;
    }
    if (language === 'en') {
      this.showEn = true;
      this.showFr = false;
    }
  }

  animateLogo() {
    this.state = (this.state === 'visible' ? 'hidden' : 'visible');
  }

}