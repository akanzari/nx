import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlNavbarComponent } from './mdl-navbar.component';

@NgModule({
  declarations: [MdlNavbarComponent],
  imports: [CommonModule],
  exports:[MdlNavbarComponent]
})
export class MdlNavbarModule { }
