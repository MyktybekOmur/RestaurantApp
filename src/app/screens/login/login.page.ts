import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLogin = true;
  form: any = {
    email:'',
    name:'',
    storeName:'',
    storeAdress:'',
    number:'',
    password:'',
    role:null,
    image:''
  }
  loginForm: any = {
    number:'',
    password:''
  }
  constructor(private router:Router,private usersApi:UsersService,
      private localData: DataService,  
      private loadingController: LoadingController,
      private toastController: ToastController) { }

  ngOnInit() {
  }
  login(item:boolean){
    this.isLogin = item;
  }
  async onSubmit(){
    const loading = await this.loadingController.create();
    await loading.present();

    loading.dismiss();
    
  }
  onSubmitReg(){

  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Error!',
      color: 'danger',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
