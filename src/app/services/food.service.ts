import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Kebap',
        price: 25,
        image: 'assets/images/foods/Kebap.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
      {
        id: 2,
        title: 'Kahvaltı',
        price: 15,
        image: 'assets/images/foods/kahvalti.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        id: 3,
        title: 'Döner',
        price: 10,
        image: 'assets/images/foods/doner.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
      {
        id: 4,
        title: 'Pizza',
        price: 20,
        image: 'assets/images/foods/pizza.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        id: 5,
        title: 'Kahvaltı',
        price: 15,
        image: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        id: 6,
        title: 'Köfte',
        price: 25,
        image: 'assets/images/foods/Kofte.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
