import { Component, OnInit } from '@angular/core';

import { BloodpressureService } from '../../services/bloodpressure.service';

@Component({
  selector: 'hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {
  bpData = Array<{}>();
  atDate: string;
  systolic: number;
  diastolic: number;
  result: string;

  constructor(private service: BloodpressureService) {
  }

  ngOnInit() {
    this.bpData = this.service.get();
  }

  add() {
    this.service.add( this.systolic, this.diastolic, this.atDate );
    this.result = this.service.result;
  }
}
