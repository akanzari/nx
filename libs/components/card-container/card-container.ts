import { ChangeDetectionStrategy, Component, Input, OnInit, Output, HostListener, EventEmitter, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-card',
  template: `
  <div class="row">
  <div class="col">
    <div class="accordion accordion-bloc border padding-15 border-radius bg-white">
      <div class="card">
        <div class="card-header">
          <h5 class="semibold">
            <a (click)="toggleContent(); false">
              <i
                class="icons {{isContentDisplayed ? 'icon-chevron_up' : 'icon-chevron_down'}} size-16 color-primary"></i>{{title}}
            </a>
          </h5>
        </div>
        <div [@cardContent]="isContentDisplayed ? 'visible' : 'hidden'" style="overflow: hidden">
          <div class="card-block">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
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
export class CardContainerComponent {

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
  declarations: [CardContainerComponent],
  exports: [CardContainerComponent]
})
export class SofCardContainerModule { }