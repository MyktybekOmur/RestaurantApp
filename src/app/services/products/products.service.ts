import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor( private api: ApiService) {}
  getMeals(): Observable<any>{
     return this.api.get('meals', {});
  }
  getMeal(id:string): Observable<any>{
    return this.api.get(`meals/${id}`, {});
 }
}