import { ChangeDetectionStrategy, Component, Input, OnInit, Output, HostListener, EventEmitter, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-card',
  templateUrl: './card-container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('cardContent', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        overflow: 'visible',
        height: '*'
      })),
      transition('hidden <=> visible', animate('300ms linear'))
    ])
  ]
})
export class SofCardContainer {

  @Input()
  public isContentDisplayed: boolean;

  @Output()
  contentDisplayedChange = new EventEmitter();

  @Input()
  public title: string;

  @Input()
  get contentDisplayed() {
    return this.isContentDisplayed;
  }

  set contentDisplayed(isContentDisplayed) {
    this.isContentDisplayed = isContentDisplayed;
    this.contentDisplayedChange.emit(this.isContentDisplayed);
  }

  public toggleContent() {
    this.contentDisplayed = !this.isContentDisplayed;
  }

  @HostListener('window:keydown.alt.+', ['$event'])
  public show($event) {
    if (!this.isContentDisplayed) {
      this.toggleContent();
    }
  }

  @HostListener('window:keydown.alt.-', ['$event'])
  public hide($event) {
    if (this.isContentDisplayed) {
      this.toggleContent();
    }
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [SofCardContainer],
  exports: [SofCardContainer]
})
export class SofCardContainerModule { }