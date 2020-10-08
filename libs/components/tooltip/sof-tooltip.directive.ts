import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SofDomHandler } from 'ng-softilys/dom';

@Directive({
  selector: '[softooltip]',
  providers: [SofDomHandler]
})
export class SoftooltipDirective {
  @Input('softooltip') tooltipTitle: string;
  placement = "top";
  mouseover: boolean = false;
  softooltip: HTMLElement;
  test: boolean = false;

  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.softooltip) { if (!this.test) { this.show(); } }
  }
  @HostListener('mouseover') onHover() {
    if (!this.softooltip) { this.show(); }
    this.mouseover = true;

  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.softooltip) { this.hide(); }
  }

  @HostListener('click') onclick() {
    if (this.softooltip) { this.hide(); }
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.mouseover = false;
  }

  show() {
    this.test = true;
    this.create();
    this.setPosition();
    this.renderer.addClass(this.softooltip, 'ng-tooltip-show');
  }

  hide() {
    this.test = false;
    this.softooltip && this.renderer.removeClass(this.softooltip, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.softooltip && this.renderer.removeChild(document.body, this.softooltip);
      this.softooltip = null;
    }, 10);


  }


  create() {
    this.softooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.softooltip,
      this.renderer.createText(this.tooltipTitle) // textNode
    );

    this.renderer.appendChild(document.body, this.softooltip);

    this.renderer.addClass(this.softooltip, 'ng-tooltip');
    this.renderer.addClass(this.softooltip, `ng-tooltip-${this.placement}`);


    this.renderer.setStyle(this.softooltip, '-webkit-transition', `opacity ${50}ms`);
    this.renderer.setStyle(this.softooltip, '-moz-transition', `opacity ${50}ms`);
    this.renderer.setStyle(this.softooltip, '-o-transition', `opacity ${50}ms`);
    this.renderer.setStyle(this.softooltip, 'transition', `opacity ${50}ms`);
  }

  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    const tooltipPos = this.softooltip.getBoundingClientRect();


    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    this.renderer.setStyle(this.softooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.softooltip, 'left', `${left}px`);
  }
}
