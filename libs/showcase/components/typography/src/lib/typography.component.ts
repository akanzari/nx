import { Component, Inject } from '@angular/core';
import { HighlightService } from '@showcase/service';

@Component({
  templateUrl: './typography.component.html',
  providers: [HighlightService]
})
export class TypographyComponent {

  constructor(@Inject(HighlightService) private readonly highlightService: HighlightService) { }

}
