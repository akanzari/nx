import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild, NgModule } from '@angular/core';
import { Moment } from 'moment/moment';
import * as moment from 'moment/moment';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

moment.locale('fr')

@Component({
  selector: 'sof-double-date-picker',
  templateUrl: './double-date-picker.html',
  styleUrls: ['./double-date-picker.scss']
})
export class SofDoubleDatePicker implements OnInit, OnChanges {

  alwaysShowCalendars: boolean;
  @Input() disable: boolean = false;
  @Output() getInterval = new EventEmitter();
  @Input() label: string
  @Input() x: any;
  @Input() position: string;

  up2: string = "center";
  options;

  selected: { startDate: Moment, endDate: Moment };

  interval = { startDate: Date, endDate: Date }

  constructor() {
    this.alwaysShowCalendars = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.options = {
        separator: ' ' + this.label + ' ', // default is ' - '
        cancelLabel: 'Cancel', // detault is 'Cancel'
        applyLabel: 'Confirmer',
        firstDay: 1,
        drops: this.position,
        weekLabel: 'W'
      }
    }, 50);
  }

  ngOnInit() {
    this.options = {
      separator: this.label, // default is ' - '
      cancelLabel: 'Cancel', // detault is 'Cancel'
      applyLabel: 'Confirmer',
      firstDay: 1,
      weekLabel: 'W'
    }
  }

  try() {
    setTimeout(() => {
      if (this.selected.startDate && this.selected.endDate) {
        this.interval.startDate = this.selected.startDate['_d'];
        this.interval.endDate = this.selected.endDate['_d'];
        this.getInterval.emit(this.interval);
        this.options.separator = this.label;
      }
    }, 50);
  }

  reset() {
    this.interval.endDate = null;
    this.interval.startDate = null
  }

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd
  ],
  declarations: [SofDoubleDatePicker],
  exports: [SofDoubleDatePicker]
})
export class SofDoubleDatePickerModule { }