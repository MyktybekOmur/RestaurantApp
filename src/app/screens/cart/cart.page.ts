import { OrdersService } from './../../services/orders/orders.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems$: Observable<CartItem[]>;
  orders:any = [];
  totalAmount$: any;
  today = new Date();
  date = new Date();
  orderDate: string = '';
  form = {
    total_count: 0,
    total_price: 0,
    storeId: null,
    meals: [],
    order_date: null,
    complated: false,
  };
  user: any;

  // add a day

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController,
    private LocalStore: DataService,
    private ordersApi: OrdersService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.today.setDate(this.date.getDate() + 1);
    this.orderDate = this.today.toISOString().split('T')[0];
    this.cartItems$ = this.cartService.getCart();
    this.cartService.getTotalAmount().subscribe((res) => {
      this.totalAmount$ = res;
    });

    this.getUserData().then((result) => {
      this.user = result[0];
      this.getOrders();
    });
  
  }

  getOrders(){
    this.ordersApi.getOrders(`?storeId=${this.user?._id}`).subscribe((res)=>{
      this.orders = res?.data;
    },(err)=>{
      console.log(err)
    })
  }

  onIncrease(item: CartItem) {
    this.cartService.changeQty(1, item.id);
  }

  onDecrease(item: CartItem) {
    if (item.quantity === 1) this.removeFromCart(item);
    else this.cartService.changeQty(-1, item.id);
  }

  submit() {
    let meal = [];
    this.cartItems$.subscribe((res) => {
      res.forEach((item) => {
        meal.push({
          count: Number(item.quantity),
          ordered_meal: item.id,
        });
      });
    });
    this.form.total_count = Number(this.totalAmount$?.total);
    this.form.total_price = Number(this.totalAmount$?.totalPrice);
    this.form.storeId = this.user?._id;
    this.form.meals = meal;
    if (this.form.meals.length > 0 && this.form.order_date !== null) {
      this.ordersApi.addOrder(this.form).subscribe(
        (res) => {
          console.log(res);
          this.presentToast('Success', 'success');
          this.cartService.removeAll();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.presentToast('Error', 'danger');
    }

    //
  }

  async removeFromCart(item: CartItem) {
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.cartService.removeItem(item.id),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }
  async getUserData() {
    return await this.LocalStore.getData();
  }
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      color: color,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
