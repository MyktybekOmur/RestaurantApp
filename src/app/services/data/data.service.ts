import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
const USER_KEY = '_res_user';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) {
  
    this.init();

  }

  async init() {
    await this.storage.create();
  }
  getData() {
    return this.storage.get(USER_KEY) || [];
  }
  async addData(item) {
    const storedData = await this.storage.get(USER_KEY) || [];
    storedData.push(item);

    return this.storage.set(USER_KEY, storedData);
  }
  async removeData() {

    this.storage.clear();

    /*const storedData = await this.storage.get(USER_KEY) || [];
    storedData.splice(item, 1);
    return this.storage.set(USER_KEY, storedData);*/
  }
}
