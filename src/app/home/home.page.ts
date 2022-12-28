import { Component } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any = [];
  constructor(private LocalStore: DataService) { }

  ngOnInit() {

    this.getUserData().then((result)=>{
      this.user = result[0];
      console.log(this.user)
    });
  

  }
  async getUserData(){
    return await this.LocalStore.getData();
  }

}
