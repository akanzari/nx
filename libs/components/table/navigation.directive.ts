import { HostListener, OnInit, Directive, Input } from '@angular/core';



import { OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { DomHandler } from 'primeng/dom';
import { Table, TableService } from 'primeng/table';



@Directive({
  selector: '[pSelectableRow]',
  providers: [DomHandler],
  host: {
    '[class.ui-selectable-row]': 'isEnabled()',
    '[class.ui-state-highlight]': 'selected',
    '[attr.tabindex]': 'isEnabled() ? 0 : undefined',
  }
})
export class SelectableRow implements OnInit, OnDestroy {

  @Input("pSelectableRow") data: any;

  @Input("pSelectableRowIndex") index: number;

  @Input() pSelectableRowDisabled: boolean;

  selected: boolean;

  subscription: Subscription;

  constructor(public dt: Table, public domHandler: DomHandler, public tableService: TableService) {
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }

  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }



  @HostListener('touchend', ['$event'])
  onTouchEnd(event: Event) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.isEnabled()) {
      const row = <HTMLTableRowElement>event.target;

      switch (event.which) {
        //down arrow
        case 40:
          let nextRow = this.findNextSelectableRow(row);
          if (nextRow) {
            nextRow.focus();
          }

          event.preventDefault();
          break;

        //up arrow
        case 38:
          let prevRow = this.findPrevSelectableRow(row);
          if (prevRow) {
            prevRow.focus();
          }

          event.preventDefault();
          break;

        //enter
        case 13:
          this.dt.handleRowClick({
            originalEvent: event,
            rowData: this.data,
            rowIndex: this.index
          });
          break;


        default:
          //no op
          break;
      }
    }
  }

  findNextSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement {
    /*let nextRow = <HTMLTableRowElement>row.nextElementSibling;
    if (nextRow) {
      if (this.domHandler.hasClass(nextRow, 'ui-selectable-row'))
        return nextRow;
      else
        return this.findNextSelectableRow(nextRow);
    }
    else {
      return null;
    }*/
      return null;
  }

  findPrevSelectableRow(row: HTMLTableRowElement): HTMLTableRowElement {
    /*let prevRow = <HTMLTableRowElement>row.previousElementSibling;
    if (prevRow) {
      if (this.domHandler.hasClass(prevRow, 'ui-selectable-row'))
        return prevRow;
      else
        return this.findPrevSelectableRow(prevRow);
    }
    else {
      return null;
    }*/
      return null;
  }

  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}





