import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  myProperty;
  getTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
