import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders()
  .set('Content-Type', 'multipart/form-data')
  .set('Accept', '*/*');

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private api: ApiService) {}
  getMeals(q: string): Observable<any> {
    return this.api.get(`meals${q}`, {});
  }
  getMeal(id: string): Observable<any> {
    return this.api.get(`meals/${id}`, {});
  }
  addMeal(body: any): Observable<any> {
    return this.api.post(`meals`, body, {});
  }
  updateMeal(id:string,body: any): Observable<any> {
    return this.api.put(`meals/${id}`, body, {});
  }
  updateMealImg(id:string,body: any): Observable<any> {
    return this.api.post(`meals/image/${id}`, body, {});
  }
}
