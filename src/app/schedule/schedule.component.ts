import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {ActivatedRoute} from '@angular/router';
import {Routes, Router} from '@angular/router';
import {routes} from '../app.component';
import { Route } from '@angular/compiler/src/core';
import {Parking, MyPark} from '../parking';
import { MatDatepickerModule } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
 
    constructor(private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }
  
  isValidData = true;
  date = null;
  time = null;
  selectedTime = null;
  selectedDate = null;

  times = [
    { id:1, name: "08:00-10:00"},
    { id:2, name: "10:00-12:00"},
    { id:3, name: "12:00-14:00"},
    { id:4, name: "14:00-16:00"},
    { id:5, name: "16:00-18:00"},
    { id:6, name: "18:00-20:00"}
  ];

  clicked(event){
    if(this.selectedDate != null && this.selectedTime != null ){
        this.isValidData = true;
        MyPark.date = this.selectedDate;
        MyPark.time = this.selectedTime.name;
        this._router.navigate(['./park']);
    }
    else{
        this.isValidData = false;
    }
}

}

