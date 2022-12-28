import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private URL = 'https://restaurant-rest-api-production.up.railway.app/api/';
  private URL = 'http://localhost:50012/api/';
 
  constructor(private http: HttpClient) {}

  get(endpoint, header): Observable<any> {
    return this.http.get(this.URL + endpoint, header);
  }
  post(endpoint, body, header): Observable<any> {
    return this.http.post(this.URL + endpoint, body, { headers: header });
  }
  put(endpoint, body, header): Observable<any> {
    console.log(this.URL + endpoint);
 
    return this.http.put(this.URL + endpoint, body);
  }
  delete(endpoint): Observable<any> {
    return this.http.get(this.URL + endpoint);
  }
}
