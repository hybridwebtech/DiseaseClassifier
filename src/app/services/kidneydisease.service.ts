import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KidneydiseaseService {

  kidneyData = [{eGFR: 65, atDate: '2018/10/31'}, {eGFR: 70, atDate: '2018/10/20'}];

  constructor() { }

  add(eGFR, atDate) {
    this.kidneyData.push({eGFR: eGFR, atDate: atDate});
  }

  get() {
    return this.kidneyData;
  }
}
