import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SofTableModule } from 'ng-softilys/table';
import { SofMonoSelectModule } from 'ng-softilys/monoselect';
import { SofButtonModule } from 'ng-softilys/button';
import { SofInputModule } from 'ng-softilys/input';
import { SofFormStructureModule } from 'ng-softilys/form-structure';

import { ServiceModule } from '@showcase/service';
import { SharedModule } from '@showcase/shared';
import { StartedComponent } from './started.component';
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'apps/ng-softilys/src/assets/i18n/');
}

@NgModule({
  imports: [
    SharedModule,
    ServiceModule,
    SofTableModule,
    SofMonoSelectModule,
    SofButtonModule,
    SofInputModule,
    SofFormStructureModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: StartedComponent
      },
    ]),
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
export class StartedModule { }
