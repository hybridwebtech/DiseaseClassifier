import { Component, OnInit } from '@angular/core';

import { BloodpressureService } from '../../services/bloodpressure.service';

@Component({
  selector: 'hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {
  // bpData = [ {SysBP: 120, DiaBP: 90, atDate: '2018/10/31'}, {SysBP: 115, DiaBP: 100, atDate: '2018/10/20'}];
  bpData = Array<{}>();

  constructor(private service: BloodpressureService) {
  }

  atDate: string;
  systolic: number;
  diastolic: number;

  ngOnInit() {
    this.bpData = this.service.get();
  }

  add() {
    this.service.add( this.systolic, this.diastolic, this.atDate );
  }
}
