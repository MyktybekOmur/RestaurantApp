import { ProductsService } from './../../services/products/products.service';
import { AddProductComponent } from './../../modals/add-product/add-product.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService,
     private router: Router,
     private modalCtrl: ModalController,
     private productApi:ProductsService) { }

  ngOnInit() {
    
   this.getProductsList();
  }
  getProductsList(){
    this.productApi.getProducts().subscribe((res)=>{
      this.foods = res;
    })
  }


  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
 
  async goToEditPage(item: any,type:boolean){
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      swipeToClose: true,
      presentingElement: await this.modalCtrl.getTop(),
      componentProps: {
        'type': type,
        'item':item
      }
   
    });
    modal.present();

    const { data, role} = await modal.onWillDismiss();


  }
}
