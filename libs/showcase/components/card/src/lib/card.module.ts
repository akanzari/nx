import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SofCardsModule } from 'ng-softilys/card';

import { SharedModule } from '@showcase/shared';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    SharedModule,
    SofCardsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CardComponent
      },
    ])
  ],
  declarations: [CardComponent]
})
export class CardModule {}
