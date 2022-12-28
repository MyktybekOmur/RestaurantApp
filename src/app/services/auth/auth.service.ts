import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  constructor(private api:ApiService) { }
  Login(body: any): Observable<any> {
    return this.api.post(`login`, body ,{});
  }
  Register(body: any): Observable<any> {
    return this.api.post(`register`, body ,{});
  }
}
