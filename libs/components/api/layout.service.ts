import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FullscreenService } from './fullscreen.service';

@Injectable()
export class LayoutService {

  public isSideBarDisplay: boolean = true;
  public isNavBarDisplay: boolean = true;
  public isFullScreen: boolean = false;
  sidebarSubject: BehaviorSubject<boolean>;

  constructor(private fullscreenService: FullscreenService) {
    this.sidebarSubject = new BehaviorSubject<boolean>(true);

  }

  public toggleNavBarMenu(): void {
    this.isNavBarDisplay = !this.isNavBarDisplay;
  }

  public toggleSideBarDisplay(): void {

    this.isSideBarDisplay = !this.isSideBarDisplay;

    var event = new CustomEvent("reduce", { "detail": "reduce sidebar" });
    document.dispatchEvent(event);


  }

  public toggleFullScreen(): void {
    this.fullscreenService.toggle();
  }

  public showSidedar(show: boolean){
    this.sidebarSubject.next(show);
  }

  public getSidebarState(): Observable<boolean> {
    return this.sidebarSubject.asObservable();
  }

}