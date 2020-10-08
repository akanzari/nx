import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'sof-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  @Input() Color;
  @Input() Height;


  displayL: boolean = false;
  displayA: boolean = false;
  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
  }

  public ngOnInit() {


  }

  get navclass() {
    let _class = 'col-lg-12' + (this.Height === "big" ? ' navbarBig' : ' navbarSmall') + (this.Color === "black" ? ' navbarBlack' : ' navbarWhite');
    return _class;
  }

}