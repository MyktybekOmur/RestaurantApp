import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        _id: 1,
        name: 'Kebap',
        price: 25,
        image: 'assets/images/foods/Kebap.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
      {
        _id: 2,
        name: 'Kahvaltı',
        price: 15,
        image: 'assets/images/foods/kahvalti.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        _id: 3,
        name: 'Döner',
        price: 10,
        image: 'assets/images/foods/doner.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
      {
        _id: 4,
        name: 'Pizza',
        price: 20,
        image: 'assets/images/foods/pizza.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        _id: 5,
        name: 'Kahvaltı',
        price: 15,
        image: 'assets/images/foods/scott-ish-breakfast.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'0'
      },
      {
        _id: 6,
        name: 'Köfte',
        price: 25,
        image: 'assets/images/foods/Kofte.png',
        description:
          'Burda içinde neler olduğu hakkında olacaktır',
          is_active:'1'
      },
    ];
  }

  getFood(_id: number): Food {
    return this.getFoods().find((food) => food._id === _id);
  }
}
