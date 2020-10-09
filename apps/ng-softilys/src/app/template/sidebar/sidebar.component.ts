import { AfterViewInit, Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavigationStart, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import * as _ from "lodash";
import { LayoutService } from 'ng-softilys/api';
import { SideBarMenu, subMenuItems } from './menu-definition';

@Component({
  selector: 'be-sidebar',
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
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  public items: SideBarMenu[] = [];
  public currentMenu: String = "1";
  public currentSubMenu: string = null;
  reduce = false;
  public template;
  private menuClickAction: Boolean = false;
  private routeObservable: Subscription;
  showSubs = false;
  displaySub = true;

  constructor(public ls: LayoutService,
    private router: Router,
    private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.routeObservable = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        /* this.currentMenu = null;
        this.currentSubMenu = null; */
      }
    });
    this.items = subMenuItems;
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

  public ngAfterViewInit(): void {
    this.template = <HTMLElement>document.getElementsByClassName("sidebar")[0];
    this.renderer.listen('body', 'click', () => {
      if (!this.menuClickAction && this.currentMenu && !this.ls.isSideBarDisplay) {
        //this.currentMenu = null;
        this.items = subMenuItems;
      }
      this.menuClickAction = false;
    });
    document.addEventListener("reduce", function () {
    });
  }

  search(searchValue: string) {
    this.items = [];
    const el = _.filter(subMenuItems, function (item) {
      return item.defaultLabel.toUpperCase().includes(searchValue.toUpperCase());
    });
    //this.items = el;
    if (el.length !== 0) {
      el.forEach((i) => {
        this.items.push(i);
      });
    }
    const el1 = _.filter(subMenuItems[0].subMenus, function (item) {
      return item.defaultLabel.toUpperCase().includes(searchValue.toUpperCase());
    });
    if (el1.length !== 0) {
      el1.forEach((i) => {
        this.items.push({
          code: i.code,
          defaultLabel: i.defaultLabel,
          icon: '',
          routerLink: [i.routerLink[0]],
          fragment: ''
        })
      });
    }
    if (searchValue === '') {
      this.items = subMenuItems;
    }
  }

  public initSearch() {
    if (this.items.length === 0) {
      (<HTMLInputElement>document.getElementById("search")).value = "";
      this.items = subMenuItems;
    }
  }

}