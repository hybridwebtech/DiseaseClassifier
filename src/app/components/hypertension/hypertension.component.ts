import { Component, OnInit } from '@angular/core';

import { BloodpressureService } from '../../services/bloodpressure.service';

@Component({
  selector: 'hypertension',
  templateUrl: './hypertension.component.html',
  styleUrls: ['./hypertension.component.css']
})
export class HypertensionComponent implements OnInit {
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
