import { AfterViewInit, Component, Input, OnDestroy, OnInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SideBarMenu } from './model/menu.model';
import { NavigationStart, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from "lodash";
// import { subMenuItems } from './menu-definition';
import { LayoutService } from 'ng-softilys/api';
import { SubMenu } from './model/submodel.model';

@Component({
  selector: 'sof-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('subMenuContent', [
      state('hidden', style({
        height: '0'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', animate('300ms linear'))
    ]),
    trigger('subsubMenuContent', [
      state('hidden', style({
        height: '0'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', animate('300ms linear'))
    ])
  ]
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {

  }
  @Input() position: string;
  @Input() color: string;
  @Input() placeholder: string = '';
  @Input() code: Number;
  @Input() fragment: string;
  @Input() routerLink: string;
  @Input() defaultLabel: string;
  // @Input() show:boolean=false;
  @Input() icon: string;
  @Input() public listsubmenu: SubMenu[] = [];
  @Input() public items: SideBarMenu[] = [];
  @Input() codeS: string;
  @Input() defaultLabelS: string;
  @Input() routerLinkS: string[] = [];
  @Input() iconS: string;
  @Input() fragmentS: string;
  @Input() codeM: string;
  public currentMenu: string = "1";
  public currentSubMenu: string = null;
  reduce = false;
  public template;
  private menuClickAction: boolean = false;
  private routeObservable: Subscription;
  showSubs = false;
  displaySub = true;
  @Input() data: SideBarMenu[];

  @Input() visible: boolean;
  @Input()
  submenushow: boolean = false;
  subitem: SubMenu[] = [];
  sousMenus: SubMenu[] = [];

  constructor(public ls: LayoutService, private router: Router, private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.routeObservable = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        /* this.currentMenu = null;
        this.currentSubMenu = null; */
      }
    });
    this.items = this.data;
    this.subitem = this.listsubmenu;
    this.getsub();

  }

  getsub() {
    for (var i: number = 0; i < this.items.length; i++) {
      this.subitem = this.items[i].listsubmenu;
    }
  }
  getStyle() {
    if (this.color === 'black')
      return "#2a2c33"
    else return " #f2f2F2"
  }
  getposition() {
    if (this.position === "right")
      return "sidebar sidebar-nav sidebar-nav-top sidebar-left sidebar-inverse positionR";
    else return 'sidebar sidebar-nav sidebar-nav-top sidebar-left sidebar-inverse positionL';
  }
  getvisibility() {
    if (this.visible === true)
      return this.visible;
    else return false;
  }
  public selectMenu(menu: string): void {
    this.menuClickAction = true;
    menu !== this.currentMenu ? this.displaySub = true : this.displaySub = !this.displaySub;
    menu !== this.currentMenu ? this.currentMenu = menu : this.currentMenu = this.currentMenu;
    this.currentSubMenu = null;
  }

  public selectSubMenu(menu: string, subMenu: any): void {
    this.menuClickAction = true;

    //menu !== this.currentMenu ? this.currentMenu = menu : this.currentMenu = this.currentMenu;
    if (!this.ls.isSideBarDisplay && !subMenu) {
      this.displaySub = false
    }
    subMenu.code !== this.currentSubMenu ? this.currentSubMenu = subMenu.code : this.currentSubMenu = null;
  }

  public ngOnDestroy(): void {
    if (this.routeObservable) {
      this.routeObservable.unsubscribe();
    }
  }
  visibilityfn() {
    if (this.visible === false)
      return this.visible;
    else return true;
  }
  public ngAfterViewInit(): void {

    this.template = <HTMLElement>document.getElementsByClassName("sidebar")[0];
    this.renderer.listen('body', 'click', () => {

      if (!this.menuClickAction && this.currentMenu && !this.ls.isSideBarDisplay) {
        //this.currentMenu = null;
        this.items = this.data;
      }
      this.menuClickAction = false;
    });

    document.addEventListener("reduce", function () {
    });
  }

  search(searchValue: string) {
    this.items = [];
    var el = _.filter(this.data, function (item) {
      return item.defaultLabel.toUpperCase().includes(searchValue.toUpperCase());
    });
    //this.items = el;
    if (el.length != 0) {
      el.forEach((i) => {
        this.items.push(i);
      });
    }
    var el1 = _.filter(function (item) {
      return item.defaultLabel.toUpperCase().includes(searchValue.toUpperCase());
    });
    if (el1.length != 0) {
      el1.forEach((i) => {
        this.items.push({
          code: i.code,
          defaultLabel: i.defaultLabel,
          listsubmenu: SubMenu[i.routerLink[0]],
          icon: '',
          routerLink: [i.routerLink[0]],
          fragment: '',
          show: i.show
        })
      });
    }

    if (searchValue === '') {
      this.items = this.data;
    }

  }

  public initSearch() {
    if (this.items.length === 0) {
      (<HTMLInputElement>document.getElementById("search")).value = "";
      this.items = this.data;
    }
  }
  showsubmenu(x: SideBarMenu) {
    x.show = !x.show
    for (var i: number = 0; i < this.items.length; i++) {

      if (this.items[i] != x) {

        this.items[i].show = false
      }


    }


  }

}