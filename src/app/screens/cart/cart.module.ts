import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemModule } from 'src/app/components/cart-item/cart-item.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CardHistaryItem } from 'src/app/components/card-history-item/card-history-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule,CardHistaryItem,
    ButtonModule,
  ],
  declarations: [CartPage],
})
export class CartPageModule {}
