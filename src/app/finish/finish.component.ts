import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {ActivatedRoute} from '@angular/router';
import {Routes, Router} from '@angular/router';
import {routes} from '../app.component';
import { Route } from '@angular/compiler/src/core';
import {Parking, MyPark} from '../parking'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
 
    constructor(private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }
  
  provider = MyPark.provider;
  carlicense = MyPark.carlicense;
  phone = MyPark.phone;
  park = MyPark.park;
  date = MyPark.date;
  time = MyPark.time;
  drivername = MyPark.drivername;  

}

