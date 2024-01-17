import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Storage } from '@ionic/storage-angular';
import { StorageKeys } from 'src/app/enums/storage.enum';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private storage: Storage) { }

  async setUserCredentials(credentials: User) {
    if (Capacitor.isNativePlatform()) {
      await this.storage.set(StorageKeys.UserCredentials, JSON.stringify(credentials))
    } else {
      localStorage.setItem(StorageKeys.UserCredentials, JSON.stringify(credentials))
    }
  }

  async getUserCredentials() {
    if (Capacitor.isNativePlatform()) {
      const storedCredentialsString = await this.storage.get(StorageKeys.UserCredentials);
      if (storedCredentialsString) return JSON.parse(storedCredentialsString);
    } else {
      const storedCredentialsString = localStorage?.getItem(StorageKeys.UserCredentials);
      if (storedCredentialsString) return JSON.parse(storedCredentialsString)
    }
  }

}
