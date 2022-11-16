import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  query,
  setDoc,
  updateDoc,
  where,
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
  providedIn: 'root'
})
export class UsersService {
  constructor(private firestore: Firestore, private storage: Storage) {}
  getUsers(): Observable<any> {
    const userDocRef = collection(this.firestore, 'users');
    return collectionData(userDocRef, { idField: 'id' });
  }
  getUser(id: string): Observable<any> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef, { idField: 'id' });
  }
  login(body:any): Observable<any> {
    const userDocRef = collection(this.firestore, 'users');
    const q =  query(userDocRef, where("number", "==", body.number), where("password", "==", body.password));
    return collectionData(q, { idField: 'id' });
  }

 

  async setUser(body) {
    console.log(body);
    try {
      const userDocRef = collection(this.firestore, 'users');
     
      return await addDoc(userDocRef, body);
    } catch (e) {
      return null;
    }
  }
  async updateUser(id: string, body: any) {
    try {
      try {
        const userDocRef = doc(this.firestore, `users/${id}`);
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
    const path = `users/${id}/profile.png`;
    const storageRef = ref(this.storage, path);
    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');
      const image = await getDownloadURL(storageRef);
      const userDocRef = doc(this.firestore, `users/${id}`);
      console.log(userDocRef);
      await updateDoc(userDocRef, { image });
      return true;
    } catch (e) {
      return null;
    }
  }
}
