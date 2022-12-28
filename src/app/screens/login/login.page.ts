import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

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
    password:'',
  }
  loginForm: any = {
    email:'',
    password:''
  }
  constructor(private navCtrl: NavController,
      private authApi:AuthService,
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
    this.authApi.Login(this.loginForm).subscribe((res)=>{
        this.localData.addData(res.data);
        this.navCtrl.navigateRoot(['home']);
    },(err)=>{
      this.presentToast(err.error.message,'danger')
    })
    loading.dismiss();
    
  }
  async onSubmitReg(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.authApi.Register(this.form).subscribe((res)=>{
        this.localData.addData(res.data);
        this.navCtrl.navigateRoot(['home']);
    },(err)=>{
      this.presentToast(err.error.message,'danger')
    })
    loading.dismiss();
  }
  async presentToast(message:string,color:string) {
    const toast = await this.toastController.create({
      message:message,
      color: color,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
}
