import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sof-button',
  template: `
  <button type="button" [class]="btnclass" (click)="onClick.emit($event)" (focus)="onFocus.emit($event)"
  (blur)="onBlur.emit($event)" [disabled]="disabled? disabled : false">
  <!--data="(disabled)? 'Disabled' : ''" -->
  <span>
    <ng-content></ng-content>
  </span>
  <div *ngIf="icon && !flat" class="icon">
    <i [class]="icons"></i>
  </div>
</button>
  `,
  styleUrls: ['./button.scss']
})
export class ButtonComponent {

  /* button border should be one of the following values : primary, secondary, error, valid, default, white. */
  @Input() border: string;
  /* button background color should be one of the following values : primary, secondary, error, valid, default, white. */
  @Input() bgColor: string;
  /* to create a FLAT BUTTON you should set this values to true and set color */
  @Input() flat = false;
  /* color should be one of the following values : primary, secondary, error, valid, default, white. */
  @Input() color = '';
  /* if you want to add icon to the button set it in this variable */
  @Input() icon: string = null;
  /* to create a block button set this value to true */
  @Input() block: boolean;
  /* button width should be one of the following values : 50, 100, 150, 200, 250, 300, 350, 400, 450, 500 */
  @Input() width: string;
  /* button size should be one of the following values : small, medium, large */
  @Input() size: string;
  /* to create button radius set this value to true */
  @Input() radius = false;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean = false;
  get btnclass() {
    let _class = 'btn' + (this.flat ? ' btn-link color-' + (this.color ? this.color : 'primary') : (this.icon ? ' btn-icon' : '')
      + (this.bgColor ? ' btn-bg-' + this.bgColor : (this.border ? ' btn-' + this.border : ' btn-primary'))
      + (this.radius ? "btn-radius" : '')) + ' ' + (this.block ? 'btn-block' : (this.width ? (' width-' + this.width) : ''))
      + (this.size ? (' btn-' + this.size) : '') + (this.disabled ? ' disabled' : '');
    return _class;
  }
  get icons() {
    if (this.bgColor != 'white' && this.bgColor != 'default') {
      return 'icons icon-' + this.icon + ' color-' + (this.bgColor ? 'white' : this.border);
    }
    else
      return 'icons icon-' + this.icon + ' color-text';
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class SofButtonModule { }