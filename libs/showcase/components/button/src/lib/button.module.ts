import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ArchwizardModule } from 'angular-archwizard';
import { SofCardContainerModule } from 'ng-softilys/card-container';
import { SofButtonModule } from 'ng-softilys/button';
import { SofStepperModule } from 'ng-softilys/stepper';
import { SofMonoSelectModule } from 'ng-softilys/monoselect';

import { ButtonComponent } from './button.component';
import { ServiceModule } from '@showcase/service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'apps/ng-softilys/src/assets/i18n/');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SofCardContainerModule,
    SofMonoSelectModule,
    SofButtonModule,
    SofStepperModule,
    ArchwizardModule,
    ServiceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
