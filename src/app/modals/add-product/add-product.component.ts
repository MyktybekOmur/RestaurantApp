import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalCtrl: ModalController) {}
  ngOnInit(): void {
    console.log(this.type);
    console.log(this.item);
    this.form = {
      title:this.item?.title,
      price:this.item?.price,
      description:this.item?.description,
      image:this.item?.image,
      is_active:this.item?.is_active
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.form, 'confirm');
  }
}
