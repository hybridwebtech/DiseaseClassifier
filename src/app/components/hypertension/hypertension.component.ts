import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {

  displayedColumns = ['atDate', 'systolic', 'diastolic'];
  bpData: [ {SysBP: 120, DiaBP: 90, atDate: '2018/10/31'},{SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}];
  dataSource: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.dataSource = this.bpData;
  }

}
