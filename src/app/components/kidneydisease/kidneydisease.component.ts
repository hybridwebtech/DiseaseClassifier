import { Component, OnInit } from '@angular/core';
import { KidneydiseaseService } from '../../services/kidneydisease.service';

@Component({
  selector: 'kidneydisease',
  templateUrl: './kidneydisease.component.html',
  styleUrls: ['./kidneydisease.component.css']
})
export class KidneydiseaseComponent implements OnInit {

  kidneyData = Array<{}>();

  constructor(private service: KidneydiseaseService) { }

  atDate: string;
  eGFR: number;

  ngOnInit() {
    this.kidneyData = this.service.get();
  }

  add() {
    this.service.add( this.eGFR, this.atDate );
  }
}
