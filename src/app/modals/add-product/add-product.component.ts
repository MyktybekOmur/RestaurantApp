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
    if(this.type){
      this.productApi.getProduct(this.item.id).subscribe((res)=>{
        this.form = res;
      })
    
    }

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
    if (this.type) {
      this.result = await this.productApi.updateProduct(this.item.id, this.form);
    } else {
     
      this.result = await this.productApi.setProduct(body);
      console.log(this.result)
    }

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
  async changeImage() {
  
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos, // Camera, Photos or Prompt!
    });
 
    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();
 
      const result = await this.productApi.uploadImage(image,this.item.id);
      loading.dismiss();
 
      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

}
