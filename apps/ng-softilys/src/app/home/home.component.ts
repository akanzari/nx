import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from 'ng-softilys/api';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user = {
    name: 'Arthur',
    age: 42
  };

  constructor(private router: Router,
    private translate: TranslateService,
    public ls: LayoutService) {
    translate.setDefaultLang('fr');
  }

  persons: any[];
  navigateurs: any;
  columns: any[];
  selectedRows: any[] = [];

  ngOnInit() {

  }

  btnClick() {
    this.router.navigate(['comp/get_started']);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}