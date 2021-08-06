import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StorageKey } from '../../types/enums/storage-key.type';

@Injectable({
  providedIn: 'root'
})

export class KeyValueStorageService {

  private _localStorage: Storage = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this._init(storage);
  }

  private async _init(storage: Storage): Promise<any> {
    this._localStorage = await storage.create();
  }

  async set(key: string, value: any): Promise<boolean> {
    const result = await this._localStorage?.set(key, value);
    if (result == null) {
      return false;
    }
    return true;
  }

  async get(key: string): Promise<any> {
    return await this._localStorage?.get(key);
  }

  async setObj(key: string, object: Object): Promise<boolean> {
    const res = await this.set(key, JSON.stringify(object));
    this.presentToast("Object saved");
    return res;
  }

  async getObj(key: string): Promise<any> {
    const result = await this.get(key);
    if (result != null) {
      return JSON.parse(result);
    }
    return result;
  }

  async remove(key: string): Promise<any> {
    return this._localStorage.remove(key);
  }

  isFirstLoad(): boolean {
    const isFirst = this.get(StorageKey.FirstLoad);
    if (isFirst) {
      return true;
    }
    return false;
  }

  setFirstLoad(isFirst: boolean = false): void {
    this.set(StorageKey.FirstLoad, isFirst);
  }

  private async presentToast(text: string): Promise<any> {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
