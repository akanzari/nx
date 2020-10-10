import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SofTableModule } from 'ng-softilys/table';
import { SofMonoSelectModule } from 'ng-softilys/monoselect';
import { SofButtonModule } from 'ng-softilys/button';
import { SofInputModule } from 'ng-softilys/input';
import { SofFormStructureModule } from 'ng-softilys/form-structure';

import { ServiceModule } from '@showcase/service';
import { StartedComponent } from './started.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'apps/ng-softilys/src/assets/i18n/');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SofTableModule,
    SofMonoSelectModule,
    SofButtonModule,
    SofInputModule,
    SofFormStructureModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [StartedComponent],
  exports: [StartedComponent]
})
export class StartedModule {}
