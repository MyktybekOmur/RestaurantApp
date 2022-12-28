import { Router } from '@angular/router';
import { DataService } from './../../services/data/data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:any = [];
  constructor(private LocalStore: DataService,private router:Router) { }

  ngOnInit() {

   this.getUserData().then((result)=>{
      this.user = result[0];

    });


  }
  async getUserData(){
    return await this.LocalStore.getData();
  }
  logout(){
    this.LocalStore.removeData();
    this.router.navigate(['/'])
  }

}
