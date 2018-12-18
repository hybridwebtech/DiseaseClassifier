import { Injectable } from '@angular/core';
import { kidneyFunctionCalculator } from '../components/classifiers/KidneyDiseaseClassifier';

@Injectable({
  providedIn: 'root'
})
export class KidneydiseaseService {

  kidneyData = [{eGFR: 65, atDate: '2018/10/31'}, {eGFR: 70, atDate: '2018/10/20'}];

  result = '';

  constructor() { }

  add(eGFR, atDate) {
    this.result = '';
    if (eGFR.length > 0 && atDate.length > 0) {

      const testVal = parseFloat(eGFR);

      if ( testVal && testVal > 0 ) {
        this.kidneyData.push({eGFR: eGFR, atDate: atDate});
      } else {
        this.result = 'eGFR must be a number greater than zero';
      }
    } else {
      this.result = 'Missing input';
    }
  }

  get() {
    return this.kidneyData;
  }

  getStatus() {
    return kidneyFunctionCalculator( this.kidneyData );
  }
}
