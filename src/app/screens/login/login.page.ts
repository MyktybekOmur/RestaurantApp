import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    password:''
  }
  loginForm: any = {
    number:'',
    password:''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(item:boolean){
    this.isLogin = item;
  }
  onSubmit(){
    this.router.navigate(['/'])
  }
  onSubmitReg(){
    console.log(this.form)
  }
}
