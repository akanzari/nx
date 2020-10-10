import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HighlightService } from './highlight.service';
import { IconService } from './icon.service';
import { OptionsService } from './options.service';

@NgModule({
  providers: [
    DataService,
    HighlightService,
    IconService,
    OptionsService
  ]
})
export class ServiceModule {}
