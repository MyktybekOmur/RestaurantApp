import { Component, Input, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit  {

  name: string;
  @Input() type: boolean;
  @Input() item: any = {
    title:'',
    price:'',
    description:'',
    is_active:false
  };
  form: any = {
    title:'',
    price:'',
    description:'',
    image:'',
    is_active:false
  }
  result: any;

  constructor(private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private productApi:ProductsService,
    private alertController: AlertController,) { }

  ngOnInit(): void {


  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    const body = {
      title:this.form.title,
      price:Number(this.form.price),
      description:this.form.description,
      image:'',
      is_active:this.form.is_active
    }

    const loading = await this.loadingController.create();
    await loading.present();


    loading.dismiss();

    if (!this.result) {
      const alert = await this.alertController.create({
        header: 'Upload failed',
        message: 'There was a problem uploading your avatar.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.cancel();
    }
    
  }


}
