import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, NgModule } from '@angular/core';
import { Interval } from './model/interval';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'sof-interval',
  templateUrl: './interval.html',
  styleUrls: ['./interval.scss']
})
export class IntervalComponent implements OnInit {
  x = 'jj/mm/aaaa';
  public calendar: any;
  public calendar_fr: any;
  public calendar_en: any;
  public browserLanguage: any;
  public en: any;
  interval: Interval = new Interval();
  @Input() id;
  @Input() date_deb;
  @Input() date_fin;
  intervalForm: FormGroup;

  @Input('validationName') componentName: String;

  @Input('disabled') disableinput: boolean
  @Output()
  parentFormChange = new EventEmitter();

  @Output()
  intervaleDataChange = new EventEmitter();

  @Input()
  get parentForm() {
    return this.intervalForm;
  }

  set parentForm(intervalForm) {
    this.intervalForm = intervalForm;
    this.parentFormChange.emit(this.intervalForm);
  }

  @ViewChild('begin') begin: ElementRef;
  @ViewChild('end') end: ElementRef;

  beginControls;
  endControls;

  @Input()
  get intervaleData() {
    return this.interval;
  }

  constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
  }

  ngOnInit() {
    if (!this.parentForm) {
      this.parentForm = this.formBuilder.group({});
    }
    let s = this.componentName + 'beginDate';
    let s1 = this.componentName + 'endDate';
    this.beginControls = this.endControls = s1
    this.parentForm.addControl(s, new FormControl('', [this.validateBeginDate.bind(this), this.validateInterval.bind(this)]));
    this.parentForm.addControl(s1, new FormControl('', [this.validateEndDate.bind(this), this.validateInterval0.bind(this)]));
    this.calendar_en = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'dd/mm/yy'
    };
    this.calendar_fr = {
      firstDayOfWeek: 1,
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Jul', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'dd/mm/yy'

    };
    this.browserLanguage = this.translate.getBrowserLang();
    this.calendar = this.browserLanguage === 'fr' ? this.calendar_fr : this.calendar_en;
    this.translate.onLangChange.subscribe(event => {
      this.calendar = event.lang === 'fr' ? this.calendar_fr : this.calendar_en;
      this.x = event.lang === 'fr' ? 'jj/mm/aaaa' : 'dd/mm/yyyy';
    });

  }

  set intervaleData(interval) {
    this.interval = interval;
    this.intervaleDataChange.emit(this.interval);
  }

  validateBeginDate(formcontrol: FormControl) {
    this.interval.beginDate = new Date(formcontrol.value);
    if (formcontrol.value !== "dd/mm/yy" && formcontrol.value !== "" && formcontrol.value !== null) {
      Object.keys(this.parentForm.controls).forEach(field => {
        const control = this.parentForm.get(field);
        if (control instanceof FormControl) {
          if (control !== formcontrol) {
            if (field.endsWith("endDate") && !control.valid) {
              control.markAsUntouched();
              this.end.nativeElement && this.end.nativeElement.dispatchEvent(new Event('input'));
            }
          }
        }
      });
      return this.validateDate(formcontrol) === null ? null : { isError: false };
    }
  }

  setFocusSubElement(idTagParent, subElementTag) {
    setTimeout(() => {
      if (document.getElementById(idTagParent) && document.getElementById(idTagParent).getElementsByTagName(subElementTag) !== null) {
        let inputField: HTMLElement = <HTMLElement>document.getElementById(idTagParent).getElementsByTagName(subElementTag)[1];
        inputField && inputField.focus();
      }
    }, 100);
  }

  getNext() {
    this.setFocusSubElement(this.id, 'input');
  }

  validateEndDate(formcontrol: FormControl) {
    this.interval.endDate = new Date(formcontrol.value);
    if (formcontrol.value !== "dd/mm/yy" && formcontrol.value !== "" && formcontrol.value !== null) {
      Object.keys(this.parentForm.controls).forEach(field => {
        const control = this.parentForm.get(field);
        if (control instanceof FormControl) {
          if (control !== formcontrol) {
            if (field.endsWith("beginDate") && !control.valid) {
              control.markAsUntouched();
              this.begin.nativeElement && this.begin.nativeElement.dispatchEvent(new Event('input'));
            }
          }
        }
      });
      return this.validateDate(formcontrol) === null ? null : { isError: false };
    }
  }

  validate1() {
    this.parentForm.controls[this.beginControls] && this.parentForm.controls[this.beginControls].updateValueAndValidity()
  }

  validate0() {
    this.parentForm.controls[this.endControls] && this.parentForm.controls[this.endControls].updateValueAndValidity()
  }

  validateDate(formcontrol: FormControl) {
    let date = new Date(formcontrol.value);
    let formcontrolString: String = date.toString();
    return (formcontrolString === 'Invalid Date') ? { isError: false } : null;
  }

  validateInterval() {
    setTimeout(() => {
      let beginDate: Date = new Date(this.interval.beginDate);
      let endDate: Date = new Date(this.interval.endDate);
      if (!this.parentForm.controls[this.endControls] || !this.parentForm.controls[this.endControls].value) { return null }
      return ((beginDate.toString() !== 'Invalid Date') && (endDate.toString() !== 'Invalid Date') && (endDate.getTime() < beginDate.getTime())) ? { isError: false } : null;
    }, 10);
  }

  validateInterval0() {
    let beginDate: Date = new Date(this.interval.beginDate);
    let endDate: Date = new Date(this.interval.endDate);
    if (!this.parentForm.controls[this.beginControls] || !this.parentForm.controls[this.beginControls].value) { return null }
    return ((beginDate.toString() !== 'Invalid Date') && (endDate.toString() !== 'Invalid Date') && (endDate.getTime() < beginDate.getTime())) ? { isError: false } : null;
  }

  stringToDate(date: String) {
    if (date) {
      let datesep = date.split("-");
      return new Date(datesep[2] + "/" + datesep[1] + "/" + datesep[0]);
    }
    return new Date("Invalid Date");
  }

}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  declarations: [IntervalComponent],
  exports: [IntervalComponent]
})
export class SofIntervalModule { }