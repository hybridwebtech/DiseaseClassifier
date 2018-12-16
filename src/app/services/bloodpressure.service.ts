import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodpressureService {

  bpData = [ {SysBP: 120, DiaBP: 90, atDate: '2018/10/31'}, {SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}];

  constructor() { }

  add(systolic, diastolic, atDate) {
    this.bpData.push({SysBP: systolic, DiaBP: diastolic, atDate: atDate});
  }

  get() {
    return this.bpData;
  }
}
