import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  segmentValue = '1';
  requests: any[] = [];
  donors: any[] = [];

  constructor(public actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.donors = [
      { id: 1, name: 'Noriko Rusk', age: 25, address: 'Seattle, WA', gender: 'Female', blood_group: 'B-', photo: 'assets/images/face.png', distance: 0.5, phone: '9999900000', email: 'abc@xyz.com' },
      { id: 2, name: 'Carl Sweat', age: 22, address: 'Miami, FL', gender: 'Male', blood_group: 'A+', photo: 'assets/images/face.png', distance: 2, phone: '9999900001', email: 'abc1@xyz.com' },
      { id: 3, name: 'Phoebe Jackson', age: 27, address: 'Stationsstraat 185 9472 Iddergem', gender: 'Female', blood_group: 'O-', photo: 'assets/images/face.png', distance: 6, phone: '9999900002', email: 'abc2@xyz.com' },
      { id: 4, name: 'Bajrang Bali', age: 35, address: 'Hauz Khas, Delhi', gender: 'Male', blood_group: 'AB-', photo: 'assets/images/face.png', distance: 10, phone: '9999900003', email: 'abc3@xyz.com' },
      { id: 5, name: 'Lan T\'ang', age: 30, address: 'Wuhan, China', gender: 'Male', blood_group: 'O+', photo: 'assets/images/face.png', distance: 12, phone: '9999900004', email: 'abc4@xyz.com' },
      { id: 6, name: 'S. Dilshan', age: 45, address: 'Kandy, Sri Lanka', gender: 'Male', blood_group: 'O-', photo: 'assets/images/face.png', distance: 14.5, phone: '9999900005', email: 'ab5@xyz.com' },
      { id: 7, name: 'Amy D\'Souza', age: 20, address: 'India', gender: 'Female', blood_group: 'A-', photo: 'assets/images/face.png', distance: 16.7, phone: '9999900006', email: 'abc6@xyz.com' }
    ];

    this.requests = [
      { id: 1, name: 'Jessika Lynch', age: 20, address: 'Wuhan, China', gender: 'Female', blood_group: 'B+', photo: 'assets/images/face.png', distance: 1, phone: '9999900010', email: 'xyz1@xyz.com' },
      { id: 2, name: 'Chris Manhattan', age: 29, address: 'Sydney, Australia', gender: 'Male', blood_group: 'O+', photo: 'assets/images/face.png', distance: 1.5, phone: '9999900020', email: 'xyz2@xyz.com' },
      { id: 3, name: 'Sanya Iyer', age: 45, address: 'Bengaluru', gender: 'Male', blood_group: 'AB+', photo: 'assets/images/face.png', distance: 3, phone: '9999900030', email: 'xyz3@xyz.com' },
      { id: 4, name: 'Jinpin', age: 40, address: 'Wuhan, China', gender: 'Male', blood_group: 'O+', photo: 'assets/images/face.png', distance: 8, phone: '9999900040', email: 'xyz4@xyz.com' },
      { id: 5, name: 'Mahavir Singh', age: 35, address: 'South Extension II, Delhi', gender: 'Male', blood_group: 'O-', photo: 'assets/images/face.png', distance: 15, phone: '9999900050', email: 'xyz5@xyz.com' },
      { id: 6, name: 'Lanee T\'ang', age: 20, address: 'Beijing, China', gender: 'Female', blood_group: 'B-', photo: 'assets/images/face.png', distance: 20, phone: '9999900060', email: 'xyz6@xyz.com' }
    ];
  }

  segmentChanged(event) {
    this.segmentValue = event.detail.value;
  }



  async options(item) {
    console.log(item);
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Orders',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Ashlyanfu',
       
          handler: () => {
            console.log('call clicked');
          }
        }, {
          text: 'Salat',
        
          handler: () => {
            console.log('mail clicked');
          }
        }, {
          text: 'Locate',
          icon: 'locate',
          handler: () => {
            console.log('locate clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
