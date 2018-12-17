import { Component, OnInit, Input } from '@angular/core';
import { BloodpressureService } from '../../services/bloodpressure.service';

@Component({
  selector: 'bpsummary',
  templateUrl: './bpsummary.component.html',
  styleUrls: ['./bpsummary.component.css']
})
export class BpsummaryComponent implements OnInit {

  status: string;

  constructor( private service: BloodpressureService ) { }

  ngOnInit() {
    this.status = this.service.getStatus();
  }

}
