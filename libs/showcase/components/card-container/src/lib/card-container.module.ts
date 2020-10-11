import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@showcase/shared';
import { CardContainerComponent } from './card-container.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CardContainerComponent
      },
    ])
  ],
  declarations: [CardContainerComponent]
})
export class CardContainerModule {}
