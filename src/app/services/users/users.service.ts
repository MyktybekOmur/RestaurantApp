import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Photo } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor( private storage: Storage) {}
}