import { ProductsService } from 'src/app/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: string;
  food: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private productApi:ProductsService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.productApi.getMeal(this.id).subscribe((res)=>{
      this.food = res.data;
    })
  }

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.food?._id,
      name: this.food?.name,
      price: this.food?.price,
      image: this.food?.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Yemek sepete eklendi',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}
