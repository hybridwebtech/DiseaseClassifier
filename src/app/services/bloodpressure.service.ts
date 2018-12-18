import { Injectable } from '@angular/core';
import { hypertensionCalculator } from '../components/classifiers/BPClassifier';

@Injectable({
  providedIn: 'root'
})
export class BloodpressureService {

  // bpData = [ {SysBP: 120, DiaBP: 90, atDate: '2018/10/31'}, {SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}];
  bpData = [];
  result = '';

  constructor() { }

  add(systolic, diastolic, atDate) {
    this.result = '';
    if (systolic.length === 0 ) {
      this.result = 'missing systolic value';
      return;
    } else if ( diastolic.length === 0 ) {
      this.result = 'missing diastolic value';
      return;
    } else if ( atDate.length === 0) {
      this.result = 'missing date value';
      return;
    }

    const testSystolic = parseInt(systolic);
    if ( !testSystolic || testSystolic < 0 ) {
      this.result = 'Systolic must be greater than zero';
      return;
    }

    const testDiastolic = parseInt(diastolic);
    if ( !testDiastolic || testDiastolic < 0 ) {
      this.result = 'Diastolic must be greater than zero';
      return;
    }

    this.bpData.push({SysBP: testSystolic, DiaBP: testDiastolic, atDate: atDate});
  }

  get() {
    return this.bpData;
  }

  getStatus() {
    return hypertensionCalculator(this.bpData);
  }
}
