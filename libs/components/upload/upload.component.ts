import { Component, OnInit, NgModule, Input } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, HttpEvent
} from "@angular/common/http";
import { Subscription } from 'rxjs';

@Component({
  selector: 'sof-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Input() maxSize: string;
  @Input() visibility: boolean;
  @Input() placeholder: string;
  @Input() manualUpload: Boolean;
  @Input() error: string;
  accept = '*'
  files: File[] = [];
  baseDropValid;
  dragFiles;
  lastInvalids;
  progress: number
  url = 'https://evening-anchorage-3159.herokuapp.com/api/'
  hasBaseDropZoneOver: boolean = false
  httpEmitter: Subscription
  httpEvent: HttpEvent<{}>
  lastFileAt: Date

  sendableFormData: FormData//populated via ngfFormData directive
  constructor(public HttpClient: HttpClient) { }

  cancel() {
    this.progress = 0
    if (this.httpEmitter) {

      this.httpEmitter.unsubscribe()
    }
  }
  autoUpload() {
    if (this.manualUpload === true)
      return this.manualUpload;
    else return false;
  }
  send(evnt) { }
  uploadFiles(files: File[]): Subscription {
    const req = new HttpRequest<FormData>('POST', this.url, this.sendableFormData, {
      reportProgress: true//, responseType: 'text'
    })

    return this.httpEmitter = this.HttpClient.request(req)
      .subscribe(
        event => {
          this.httpEvent = event

          if (event instanceof HttpResponse) {
            delete this.httpEmitter
          }
        },
      )
  }

  getDate() {
    return new Date()
  }
  ngOnInit() {

  }
  getvisibility() {
    if (this.visibility === true)
      return this.visibility;
    else return false;
  }
  getplaceholder() {
    return this.placeholder;
  }

  geterorText() { return this.error; }
  getmax() {
    return this.maxSize;
  }

  deleteFile(i) {

    this.files.splice(i, 1);
    if (this.files.length === 0) {
      this.progress = 0;
    }
  }

  remove() {
    this.progress = 0;
    this.files.length = 0;
    this.httpEmitter.unsubscribe();
  }
}

