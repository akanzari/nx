import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sof-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  _msgs: String[] = [];
  alert: any;
  @Input() bgCol: string;
  @Output() msgsChange = new EventEmitter();
  @Input() toastDuration: number;
  @Input() toastPosition: string;
  @Input() toastType: string;
  @Input() insert: boolean;
  @Input()
  get msgs() {
    return this._msgs[this._msgs.length - 1];
  }

  set msgs(msg) {

    if (msg != undefined) {
      //  if (this._msgs.indexOf(msg) == -1) {//si on ajoute ce bout de code alors le tableau msgs n'acceptera plus un msg déjà entré même si on tape un nvx msg puis on retape le meme msg 
      this._msgs.push(msg);
      //}
      let time = (this._msgs.indexOf(msg) + 1) * this.toastDuration;
      setTimeout(() => {
        this._msgs = this._msgs.filter(ms => ms != msg);
        this.msgsChange.emit(this.msgs);//msg
      }, time);

    }

  }
  getIcon() {
    if (this.toastType === 'alert-valid') {

      return ' icon-shield_ok color-white';
    } else if (this.toastType === 'alert-error') {

      return ' icon-shield_error color-white';
    } else {

      return ' icon-alert';
    }
  }
  constructor() { }

  ngOnInit(): void {
    /*  */
  }

  getVisibility() {
    return this._msgs.length != 0 ? ' opened' : '';
  }
  closeToast() {
    this._msgs = []
    this._msgs = [...this._msgs];
    this.msgsChange.emit(this.msgs);
  }
  getPosition() {
    this.toastPosition = this.toastPosition.trim();
    if (this.toastPosition === 'top-right')
      return 'top-right';
    else if (this.toastPosition === 'top-left')
      return 'top-left';
    else if (this.toastPosition === 'top-center')
      return 'top-center';
    else if (this.toastPosition === 'bottom-left')
      return 'bottom-left'
    else if (this.toastPosition === 'bottom-center')
      return 'bottom-center'
    else if (this.toastPosition === 'bottom-right')
      return 'bottom-right'

  }

  getColor() {
    return 'background-color: #baa365'
  }
  getType() {

    if (this.toastType === 'alert-white')
      return 'alert-white';
    else if (this.toastType === 'alert-default')
      return 'alert-default';
    else if (this.toastType === 'alert-primary')
      return 'alert-primary';
    else if (this.toastType === 'alert-secondary')
      return 'alert-secondary';
    else if (this.toastType === 'alert-error')
      return 'alert-error';
    else if (this.toastType === 'alert-valid')
      return 'alert-valid';
  }
}
