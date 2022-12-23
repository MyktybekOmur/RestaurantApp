import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  declarations: [AppComponent,AddProductComponent],
  entryComponents: [AddProductComponent],
  imports: [BrowserModule,FormsModule,  HttpClientModule,
     IonicModule.forRoot(),IonicStorageModule.forRoot({
    name: 'Localdatabase',
  }),
  AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
