import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photo } from '@capacitor/camera';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: Firestore, private storage: Storage) {}
  getProducts(): Observable<any> {
    const userDocRef = collection(this.firestore, 'products');
    return collectionData(userDocRef, { idField: 'id' });
  }
  getProduct(id: string): Observable<any> {
    const userDocRef = doc(this.firestore, `products/${id}`);
    return docData(userDocRef, { idField: 'id' });
  }

  async setProduct(body) {
    console.log(body);
    try {
      const userDocRef = collection(this.firestore, 'products');
      await addDoc(userDocRef, body);
      return true;
    } catch (e) {
      return null;
    }
  }
  async updateProduct(id: string, body: any) {
    try {
      try {
        const userDocRef = doc(this.firestore, `products/${id}`);
        await updateDoc(userDocRef, body);
        return true;
      } catch (e) {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  async uploadImage(cameraFile: Photo, id: string) {
    const path = `products/${id}/image.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');
      const image = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore, `products/${id}`);
      console.log(userDocRef);
      await updateDoc(userDocRef, { image });
      return true;
    } catch (e) {
      return null;
    }
  }
}
