import { Component, OnInit, Input, NgModule } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SofFormStructureModule } from 'ng-softilys/form-structure';
import { SofInputModule } from 'ng-softilys/input';
import { SofButtonModule } from 'ng-softilys/button';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';


@Component({
  selector: 'sof-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() Color;
  @Input() Height;
  displayL: boolean = false;
  displayA: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }

  public ngOnInit() { }

  get navclass() {
    let _class = 'col-lg-12' + (this.Height === "big" ? ' navbarBig' : ' navbarSmall') + (this.Color === "black" ? ' navbarBlack' : ' navbarWhite');
    return _class;
  }

}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      SofFormStructureModule,
      SofInputModule,
      SofButtonModule,
      SofCheckBoxModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SofNavbarModule { }