import { Component, ViewChild, OnInit } from '@angular/core';
import { element } from 'protractor';
import {ActivatedRoute} from '@angular/router';
import {Routes, Router} from '@angular/router';
import {routes} from '../app.component';
import {Parking, MyPark} from '../Parking'
import { ImgMapComponent } from '../ng2-img-map';

@Component({
    selector: 'app-park',
    templateUrl: './park.component.html',
    styleUrls: ['./park.component.css']    
  })

  export class ParkComponent implements OnInit {
    
      constructor(private _activaterdRouter: ActivatedRoute, private _router: Router) { 
        
      }
    
      ngOnInit() {
      }

      imgMap: ImgMapComponent;
      markers: number[][] = [[22.3, 49], [22.3, 41], [22.3, 34],
      [39.4, 12.6],[50.8,12.6],[59.5, 12.6],
      [70.1, 12.6],[79.1, 12.6],[70.5, 62.4],
      [79.7,62.4],[79.7,82.8],[70.5,82.8]
    ];

      onMark(marker: number[]) {
        console.log('Markers', this.markers);
      }
      onChange(marker: number[]) {
        console.log('Marker', marker);

        for(var i=0; i < this.markers.length; i++){
            var p = this.markers[i];
            if(p[0] == marker[0] && p[1] == marker[1]){
                this.selectedPark = i +1;
                break;
            }
        }
      }
      
      selectedPark = 1;  
      carlicense = null;
      drivername = null;
      phone = null;    
      isValidData = true;
    
      clicked(event){
          
        if(this.selectedPark != null && this.carlicense != null &&
        this.drivername != null && this.phone != null ){
            this.isValidData = true;
            MyPark.park = this.selectedPark;
            MyPark.carlicense = this.carlicense;
            MyPark.drivername = this.drivername;
            MyPark.phone = this.phone;
            this._router.navigate(['./finish']);
        }
        else{
            this.isValidData = false;
        }
    }
    }