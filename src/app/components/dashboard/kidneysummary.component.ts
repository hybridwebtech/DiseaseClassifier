import { Component, OnInit } from '@angular/core';
import { KidneydiseaseService } from '../../services/kidneydisease.service';

@Component({
  selector: 'kidneysummary',
  templateUrl: './kidneysummary.component.html',
  styleUrls: ['./kidneysummary.component.css']
})
export class KidneysummaryComponent implements OnInit {

  status: string;

  constructor( private service: KidneydiseaseService ) { }

  ngOnInit() {
    const statusArray: Array<string> = this.service.getStatus();
    this.status = statusArray.toString();
  }

}
