import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LayoutService {

  public isSideBarDisplay: boolean = true;
  public isNavBarDisplay: boolean = true;
  public isFullScreen: boolean = false;
  sidebarSubject: BehaviorSubject<boolean>;

  constructor() {
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
    const elem: any = document.documentElement;
    const isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document['msFullscreenElement']
    if (!isFullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      }else {
        elem.msRequestFullscreen();
      }
      this.isFullScreen = true;

    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }else{
        document['msExitFullscreen']();
      }
      this.isFullScreen = false;
    }
  }

  public showSidedar(show: boolean){
    this.sidebarSubject.next(show);
  }

  public getSidebarState(): Observable<boolean> {
    return this.sidebarSubject.asObservable();
  }

}
