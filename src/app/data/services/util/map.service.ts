import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  static months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() { }

  static getMonth(month: number, short: boolean = false): string {
    month -= 1;
    /* out of range */
    if (month >= this.months.length || month < 0) {
      throw "Map month is out of range";
    }

    const value = this.months[month];
    if (short) {
      return value.substring(3);
    }

    return value;
  }
}
