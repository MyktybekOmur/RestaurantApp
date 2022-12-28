import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private api: ApiService) {}
  getOrders(q: string): Observable<any> {
    return this.api.get(`orders${q}`, {});
  }
  getOrder(id: string): Observable<any> {
    return this.api.get(`orders/${id}`, {});
  }
  addOrder(body: any): Observable<any> {
    return this.api.post(`orders`, body, {});
  }
}
