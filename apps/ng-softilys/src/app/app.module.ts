
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ArchwizardModule } from 'angular-archwizard';
import { ngfModule } from 'angular-file';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { RoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MessagesModule } from 'primeng/messages';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageModule } from 'primeng/message';
import { ColorPickerModule } from 'primeng/colorpicker';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';

import { SofUploadModule } from 'ng-softilys/upload';
import { SofButtonModule } from 'ng-softilys/button';
import { SofSidebarModule } from 'ng-softilys/sidebar';
import { SofCalendarModule } from 'ng-softilys/calendar';
import { SofInputModule } from 'ng-softilys/input';
import { SofCardContainerModule } from 'ng-softilys/card-container';
import { SofCheckBoxModule } from 'ng-softilys/checkbox';
import { SofTextAreaModule } from 'ng-softilys/textarea';
import { SofIntervalModule } from 'ng-softilys/interval';
import { SofRadioButtonModule } from 'ng-softilys/radio-button';
import { SofTableModule } from 'ng-softilys/table';
import { SofFormStructureModule } from 'ng-softilys/form-structure';
import { SofMonoSelectModule } from 'ng-softilys/monoselect';
import { SofMultiSelectModule } from 'ng-softilys/multiselect';
import { SofDragDropModule } from 'ng-softilys/dragdrop';
import { SofToastModule } from 'ng-softilys/toast';
import { SofModalModule } from 'ng-softilys/modal';
import { SofTreeModule } from 'ng-softilys/tree';
import { SofTooltipModule } from 'ng-softilys/tooltip';
import { SofSpinnerModule } from 'ng-softilys/spinner';
import { SofNavbarModule } from 'ng-softilys/navbar';
import { SofStepperModule } from 'ng-softilys/stepper';
import { SofStatusBarModule } from 'ng-softilys/statusbar';
import { SofCardsModule } from 'ng-softilys/card';
import { SofTabsModule } from 'ng-softilys/tabs';
import { SofDoubleDatePickerModule } from 'ng-softilys/double-date-picker';
import { SofChartModule } from 'ng-softilys/chart';
import { MdlNavbarModule } from 'ng-softilys/mdl-navbar';

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
    MatIconModule,
    MatStepperModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    BrowserModule,
    ngfModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RoutingModule,
    ArchwizardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    // Primeng related modules
    TableModule,
    MessagesModule,
    MessageModule,
    InputMaskModule,
    FieldsetModule,
    ColorPickerModule,
    // framework related modules
    SofUploadModule,
    SofButtonModule,
    SofSidebarModule,
    SofCalendarModule,
    SofInputModule,
    SofCardContainerModule,
    SofCheckBoxModule,
    SofTextAreaModule,
    SofIntervalModule,
    SofRadioButtonModule,
    SofTableModule,
    SofFormStructureModule,
    SofMonoSelectModule,
    SofMultiSelectModule,
    SofDragDropModule,
    SofToastModule,
    SofModalModule,
    SofTreeModule,
    SofTooltipModule,
    SofSpinnerModule,
    SofNavbarModule,
    SofStepperModule,
    SofStatusBarModule,
    SofCardsModule,
    SofTabsModule,
    SofDoubleDatePickerModule,
    SofChartModule,
    MdlNavbarModule,
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
