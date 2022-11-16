import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router,private getProductApi:ProductsService) { }

  ngOnInit() {
    this.getProductApi.getProducts().subscribe((res)=>{
      this.foods = res;
    })
  }



  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
