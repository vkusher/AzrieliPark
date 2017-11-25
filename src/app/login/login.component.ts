import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {ActivatedRoute} from '@angular/router';
import {Routes, Router} from '@angular/router';
import {routes} from '../app.component';
import {Parking, MyPark} from '../Parking'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _activaterdRouter: ActivatedRoute, private _router: Router) { 
    MyPark.carlicense = "";
    MyPark.date = null;
    MyPark.drivername = "";
    MyPark.park = null;
    MyPark.phone = "";
    MyPark.time = "";
    MyPark.provider = "";
  }

  ngOnInit() {
  }

  
  selectedSupplier = null;
  password = null;
  isValidLogin = true;

  

  suppliers = [
    { id:1, name: "פוקס"}
  ];

  clicked(event){
    if(this.password != null && this.selectedSupplier != null && this.password == "1"){
        this.isValidLogin = true;
        MyPark.provider =  this.selectedSupplier.name;
        this._router.navigate(['./schedule']);
    }
    else{
        this.isValidLogin = false;
    }
}
}