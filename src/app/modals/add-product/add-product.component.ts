import { Component, Input, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  isLogin: any;

  name: string;
  @Input() type: boolean;
  @Input() item: any = {
    id: null,
    name: '',
    price: '',
    description: '',
    status: false,
  };
  form: any = {
    name: '',
    price: '',
    description: '',
    image: null,
    status: false,
  };
  result= false;
  img: any;

  constructor(
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private productApi: ProductsService,
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    if (this.type) this.form = this.item;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    if (this.type) {
      const body = {
        title: this.form.name,
        price: Number(this.form.price),
        description: this.form.description,

        status: this.form.status == 1 ? true : false,
      };
      const loading = await this.loadingController.create();
      await loading.present();
      this.productApi.updateMeal(this.item._id, body).subscribe((res) => {
        console.log(res);
        this.result = true;
        this.cancel();
      });

      loading.dismiss();
    } else {
      let formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('price', this.form.price);
      formData.append('description', this.form.description);
      formData.append('status', this.form.status);
      formData.append('cost_price','20')
      formData.append('image',this.img,this.img.name);

      this.productApi.addMeal(formData).subscribe((res) => {
        console.log(res);
        this.result = true;
      });
    }

    // if (!this.result) {
    //   const alert = await this.alertController.create({
    //     header: 'Upload failed',
    //     message: 'There was a problem uploading your avatar.',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();
    // } else {
    //   this.cancel();
    // }
  }
  uploadPhoto(fileChangeEvent) {
    // Get a reference to the file that has just been added to the input
    const photo = fileChangeEvent.target.files[0];
  
    this.img = photo;
    if(this.type){
      let formData = new FormData();
      formData.append('image',this.img,this.img.name);
      this.productApi.updateMealImg(this.item._id,formData).subscribe((res) => {
        console.log(res);
        this.result = true;
      });
    }
    // Create a form data object using the FormData API
    // let formData = new FormData();
    // // Add the file that was just added to the form data
    // formData.append("photo", photo, photo.name);
    // POST formData to server using HttpClient
  }
}
