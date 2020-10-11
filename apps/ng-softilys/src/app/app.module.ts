
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { RoutingModule } from './app-routing.module';

import { SofButtonModule } from 'ng-softilys/button';
import { SofSidebarModule } from 'ng-softilys/sidebar';
import { SofNavbarModule } from 'ng-softilys/navbar';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SofButtonModule,
    SofNavbarModule,
    SofSidebarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
