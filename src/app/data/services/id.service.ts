import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IdService {

  static characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor() { }

  static generateId(length: number = 8): string {
    let id = '';
    const charLength = this.characters.length;
    for ( var i = 0; i < length; i++ ) {
      id += this.characters.charAt(Math.floor(Math.random() * charLength));
    }
    return id;
  }
}
