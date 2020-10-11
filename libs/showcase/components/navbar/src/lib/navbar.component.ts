import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LayoutService } from 'ng-softilys/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [HighlightService]
})
export class NavbarComponent implements OnInit, AfterViewInit {

  testComponentForm1;
  config = {};
  radioButton = 'Classic Navbar'
  color = "white";
  size = "small";
  check: boolean = false;
  checkScreen: boolean = false;
  checkLogout: boolean = false;
  checkAvatar: boolean = false;
  checkLangue: boolean = false;
  state = 'hidden';
  public isSearchSmDisplay: boolean = false;
  public isNavBarSmDisplay: boolean = false;
  public showFr: boolean = true;
  public showEn: boolean = false;
  displayL: boolean = false;
  checkLock;
  checkComments;

  constructor(
    public ls: LayoutService,
    private router: Router,
    private translate: TranslateService,
    private formBuilder: FormBuilder, @Inject(HighlightService) private readonly highlightService: HighlightService) {
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    this.testComponentForm1 = this.formBuilder.group({
      group1: ['', Validators.required]
    });
  }

  getHtmlCode() {
    if (this.radioButton === 'MVN Navbar') {
      return this.getHtmlCode0()
    }
    return "\n &lt;sof-navbar Color=\"" + this.color + "\" Height=\"" + this.size + "\">\n" +
      "     &lt;nav class=\" navbar navbar-expand-lg navbar-top\">\n" +
      "         &lt;button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"toggleNavBarForSmallScreen()\"> \n" +
      "             &lt;i class=\"icons icon-ellipsize\"> &lt;/i>\n " +
      "         &lt;/button>\n " +
      "              &lt;div class=\"logo\">&lt;/div>\n " +
      (this.check || this.checkScreen ?
        "                        &lt;div class=\"navbar-collapse collapse\"[ngClass] = \"{'show': isSearchSmDisplay}\" > \n" +
        "                           &lt;ul class=\"nav navbar-nav\">\n" : "") +
      (this.check ?
        "                              &lt;li class=\"nav-item d-none d-lg-block \">\n" +
        "                                &lt;a class=\"nav-link nav-icon open \" href=\"#\" (click)=\"ls.toggleSideBarDisplay()\" >\n" +
        "                                  &lt;i *ngIf=\"!isSideBarDisplay\" aria-hidden=\"true\" class=\"icons icon-cancel\">&lt;/i>\n" +
        "                                  &lt;i *ngIf=\"isSideBarDisplay\" aria-hidden=\"true\" class=\"icons icon-hamburger\">&lt;/i>\n" +
        "                                &lt;/a>\n" +
        "                              &lt;/li>\n" : "") +
      (this.checkScreen ?
        "                              &lt;li class=\"nav-item d-none d-lg-block\">\n" +
        "                                &lt;button type=\"button\" class=\"nav-link {{isFullScreen ? 'full' : '' }}\" id=\"btn-full\" (click)=\"toggleFullScreen()\" >\n" +
        "                                  &lt;i *ngIf=\"!isFullScreen\" class=\"icons icon-expand \">&lt;/i>\n" +
        "                                  &lt;i *ngIf=\"isFullScreen\" class=\"icons icon-contract \">&lt;/i>\n" +
        "                                &lt;/button>\n" +
        "                              &lt;/li>\n" : "") +
      (this.check || this.checkScreen ?
        "                          &lt;/ul>\n" +
        "                     &lt;/div>\n" : "") +
      (this.checkLangue || this.checkAvatar || this.checkLogout ?
        "                      &lt;div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\" [ngClass]=\"{'show': isNavBarSmDisplay}\">\n" +
        "                        &lt;ul class=\"mr-auto\">&lt;/ul>\n" +
        "                          &lt;ul class=\"nav navbar-nav navbar-right\">\n" : "") +
      (this.checkLangue ?
        "                             &lt;li class=\"nav-item dropdown\" (click)=\"change()\" (click)=\'animateLogo()\'>\n" +
        "                                &lt;a class=\"nav-link dropdown-toggle\" id=\"Language\" data-toggle=\"dropdown\">\n" +
        "                                   &lt;ng-container>\n" +
        "                                     &lt;span class=\"flag flag-fr\">&lt;/span>\n" +
        "                                   &lt;/ng-container>\n" +
        "                                &lt;/a>\n" +
        "                             &lt;/li>\n"
        : "") +
      (this.checkAvatar ?
        "                             &lt;li class=\"nav-item dropdown user\">\n " +
        "                                &lt;a class=\"nav-link dropdown-toggle\" ngbDropdownToggle (click)=\"false\" >\n " +
        "                                  &lt;img src=\"assets/img/user.jpg\" alt=\"avatar\" class=\"rounded-circle\">\n" +
        "                                &lt;/a>\n" +
        "                             &lt;/li>\n"
        : "") +
      (this.checkLogout ?
        "                             &lt;li class=\"nav-item\">\n " +
        "                                &lt;a class=\"nav-link  border-left\"  (onClick)=\"Log()\" > \n" +
        "                                    &lt;i aria-hidden=\"true\" class=\"icons icon-start\">&lt;/i>\n" +
        "                                    &lt;span class=\"d-block d-lg-none libelle-menu\">Deconnexion&lt;/span>\n" +
        "                                &lt;/a>\n" +
        "                         &lt;/li>\n"
        : "") +
      (this.checkLangue || this.checkAvatar || this.checkLogout ?
        "          &lt;/ul>\n" +
        "      &lt;/div>\n" : "") +
      "    &lt;/nav>\n" +
      " &lt;/sof-navbar>\n";
  }

  getTsCode() {
    return ("  // Add this ts code in your \"layoutservice.ts\" \n \n " +
      (this.check ?
        "   public isSideBarDisplay: boolean = true; \n  \n" +
        "      public toggleSideBarDisplay(): void {\n " +
        "       this.isSideBarDisplay = !this.isSideBarDisplay; \n" +
        "           var event = new CustomEvent(\"reduce\", { \"detail\": \"reduce sidebar\" });\n" +
        "              document.dispatchEvent(event);\n" +

        "        } \n \n" : "") +
      (this.checkScreen ?

        "          public isFullScreen: boolean = false;     \n  \n " +

        "            public toggleFullScreen(): void { \n" +

        "                const elem: any = document.documentElement; \n" +

        "                  const isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document['msFullscreenElement'] \n" +
        "                   if (!isFullScreen) { \n" +
        "                    if (elem.requestFullscreen) { \n" +
        "                        elem.requestFullscreen(); \n" +
        "                     } else if (elem.webkitRequestFullScreen) { \n" +
        "                         elem.webkitRequestFullScreen(); \n" +
        "                     } else if (elem.mozRequestFullScreen) { \n" +
        "                         elem.mozRequestFullScreen(); \n" +
        "                     }  else { \n" +
        "                          elem.msRequestFullscreen(); \n" +
        "                     } \n" +
        "                          this.isFullScreen = true; \n" +
        "                              }  \n" +
        "                    else { \n" +
        "                       if (document.exitFullscreen) { \n" +
        "                             document.exitFullscreen(); \n" +
        "                       }  else if (document.webkitExitFullscreen) { \n" +
        "                             document.webkitExitFullscreen(); \n" +
        "                       }  else{ \n" +
        "                           document[\'msExitFullscreen\'](); \n" +
        "                       }       \n" +
        "                        this.isFullScreen = false; \n" +
        "                       }        \n" +
        "                  }    \n" : "")

    );
  }

  getheight() {
    if (this.size === "big")
      return 70;
    else return 50;
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
    document.getElementById('tr1').style.height = '159px';
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
    document.getElementById('o2').style.height = '800px';
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

  change() {
    this.displayL = !this.displayL;
  }

  public toggleSearchModeForSmallScreen(): void {
    this.isSearchSmDisplay = !this.isSearchSmDisplay;
  }

  public toggleNavBarForSmallScreen(): void {
    this.isNavBarSmDisplay = !this.isNavBarSmDisplay;
  }

  getPrerequis() {
    this.highlightService.highlightAll();
    if (this.radioButton === 'Classic Navbar') {
      return `
  import { SofNavbarModule } from 'framework-front-softilys';
  imports : [SofNavbarModule ];`
    }
    else return this.getPrerequis0()
  }

  public ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  getPrerequis0() {
    this.highlightService.highlightAll();
    return `
  import { MdlNavbarModule } from 'framework-front-softilys';
  imports : [MdlNavbarModule ];`
  }

  getHtmlCode0() {
    return ' \n &lt;app-mdl-navbar>&lt;/app-mdl-navbar>'
  }

  Log() {}

  animateLogo() {}
  
}
