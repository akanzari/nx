import { Component } from '@angular/core';

@Component({
  selector: 'sof-form-buttons',
  template: `
   <div class="text-right">
     <ng-content></ng-content>
   </div>
  `
})
export class SofFormButtons { }
