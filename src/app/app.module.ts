import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  declarations: [AppComponent,AddProductComponent],
  entryComponents: [AddProductComponent],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(),    IonicStorageModule.forRoot({
    name: 'Localdatabase',
  }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
