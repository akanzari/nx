import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '@showcase/service';
import { AlTableConfig } from 'ng-softilys/table';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, of } from "rxjs";

@Component({
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.scss'],
  providers: [DataService]
})
export class StartedComponent implements OnInit {

  selectedRows: any[] = [];
  selectedOption: any = 'be-idys';
  theme: Boolean = true;
  nombreSubListidys = [{ "value": 100, "color": "#bda671" }, { "value": 100, "color": "#ccb581" }, { "value": 100, "color": "#d8c392" }];
  nombreSubList = [{ "value": 100, "color": "#008EAF" }, { "value": 100, "color": "#00A7D8" }, { "value": 100, "color": "#00CDFC" }];

  options: any[] = [
    { name: 'be-software' },
    { name: 'be-idys' },];

  constructor(private formBuilder: FormBuilder,
    private titleService: Title,
    private dataService: DataService,
    private translate: TranslateService) { }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  path: String;
  angularVersion: String

  columns: any[];
  tableConf: AlTableConfig = new AlTableConfig();
  navigateurs: any;
  parentForm: FormGroup

  ngOnInit() {
    this.titleService.setTitle('Acceuil');
    this.parentForm = this.formBuilder.group({
      path: new FormControl('', Validators.pattern(/[^\s]/))
    })

    this.columns = [
      { field: 'Navigateur', header: 'Navigateur' },
      { field: 'Version', header: 'version' },
      { field: 'Compatibilte', header: 'Compatibilte' }
    ];
    this.translate.stream('get_started.navigateur').subscribe(x => this.columns.find(y => y.field === 'Navigateur').header = x);
    this.translate.stream('get_started.version_browser').subscribe(x => this.columns.find(y => y.field === 'Version').header = x);
    this.translate.stream('get_started.compatibility').subscribe(x => this.columns.find(y => y.field === 'Compatibilte').header = x);
    this.tableConf.reorderableColumns = true
    this.tableConf.selectionMode = "single";
    this.tableConf.defaultSortedColumns = name;
    this.getData();
  }
  getData() {
    (this.translate.getBrowserLang() === 'fr') ? this.navigateurs = this.dataService.getNavigateurs() : this.dataService.getNavigateursEN();
    this.translate.onLangChange.subscribe(event => {
      this.navigateurs = event.lang === 'fr' ? this.dataService.getNavigateurs() : this.dataService.getNavigateursEN();
    });
  }

  isActivated() {
    if (!this.angularVersion) {
      return true
    }
    return false
  }
  selecttheme() {
    console.log(this.theme)
    if (this.selectedOption.name === 'be-idys') {
      this.theme = true;
      console.log(this.theme)
    }
    else {
      this.theme = false;
    }
  }

  getfileContent() {

    if (this.angularVersion === "5")
      return of('call cd "' + this.path + '"\ncall npm install primeng@6.1.7 --save\ncall npm install primeicons@1.0.0 --save \ncall npm install @fortawesome/fontawesome-free@5.10.0\ncall npm install bootstrap@latest \ncall npm install ng6-breadcrumbs@1.0.7 \ncall npm install angular-file@1.3.2 \ncall npm install ngx-spinner@7.2.0 \ncall npm i @angular/cdk@7.3.7 \ncall npm i @angular/material@7.3.7 \ncall npm i angular-archwizard@4.0.0 \ncall npm install cpx@1.5.0 \ncall npm i @angular-devkit/build-angular \ncall npm install --save-dev webpack \ncall npm i @ngx-translate/core \ncall npm rebuild \ncall npm install --save @ng-select/ng-select@1.6.1\ncall npm install ngx-daterangepicker-material –save\ncall npm install --save moment ngx-moment\ncall npm install framework-front-softilys\ncall npm install angular2-draggable --save\ncall npm install ng-phone-number --save\ncall npm install google-libphonenumber@3.0.9 --save');
    else
      return of('call cd "' + this.path + '"\ncall npm install primeng@6.1.7 --save\ncall npm install primeicons@1.0.0 --save \ncall npm install @fortawesome/fontawesome-free@5.10.0\ncall npm install bootstrap@latest \ncall npm install ng6-breadcrumbs@1.0.7 \ncall npm install angular-file@1.3.2 \ncall npm install ngx-spinner@7.2.0 \ncall npm i @angular/cdk@7.3.7 \ncall npm i @angular/material@7.3.7 \ncall npm i angular-archwizard@4.0.0 \ncall npm install cpx@1.5.0 \ncall npm i @angular-devkit/build-angular \ncall npm install --save-dev webpack \ncall npm i @ngx-translate/core \ncall npm rebuild \ncall npm install --save @ng-select/ng-select\ncall npm install ngx-daterangepicker-material –save\ncall npm install --save moment ngx-moment\ncall npm install framework-front-softilys\ncall npm install angular2-draggable --save\ncall npm install ng-phone-number --save\ncall npm install google-libphonenumber@3.0.9 --save');

  }

  getInstallFile() {

    this.getfileContent().subscribe((res) => {

      this.dyanmicDownloadByHtmlTag({
        fileName: 'installation_file.bat',
        text: res
      });
    });

  }

  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent("click");
    element.dispatchEvent(event);
  }


}


