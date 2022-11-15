import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit() {
    
    this.foods = this.foodService.getFoods();
  }


  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
  goToEditPage(id: number) {
    console.log(id)
  }
}
