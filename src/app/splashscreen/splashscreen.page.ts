import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {
  res:any = [];
  constructor(private navCtrl:NavController,private data: DataService) { }

  ngOnInit() {
  
    this.getUserData().then(result=>{
      this.res = result;
    });
    console.log(this.res);
    setTimeout(()=>{
      if(this.res)
        this.navCtrl.navigateRoot('home');
      else{
        this.navCtrl.navigateRoot('login');
      }
    },3000)
  }
  async getUserData(){
    return await this.data.getData();
  }

}
