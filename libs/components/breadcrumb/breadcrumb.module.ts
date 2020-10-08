import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BreadcrumbsModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class SofBreadcrumbModule { }
