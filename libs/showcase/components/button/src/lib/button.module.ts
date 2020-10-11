import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ButtonComponent } from './button.component';
import { ServiceModule } from '@showcase/service';
import { SharedModule } from '@showcase/shared';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'apps/ng-softilys/src/assets/i18n/');
}

@NgModule({
  imports: [
    SharedModule,
    ServiceModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ButtonComponent
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
  declarations: [ButtonComponent]
})
export class ButtonModule { }
