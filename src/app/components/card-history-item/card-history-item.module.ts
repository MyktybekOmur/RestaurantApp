import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { CardHistoryItemComponent } from './card-history-item.component';

@NgModule({
  declarations: [CardHistoryItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CardHistoryItemComponent],
})
export class CardHistaryItem {}