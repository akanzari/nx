import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'sof-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class SofCalendarComponent implements OnInit {
  x = 'jj/mm/aaaa';
  public calendar: any;
  public calendar_fr: any;
  public calendar_en: any;
  public browserLanguage: any;
  public en: any;
  @Input() id;
  @Input() appendTo: string;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
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



}
