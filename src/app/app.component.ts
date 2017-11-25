import { Component } from '@angular/core';
import {Routes, Router} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ParkComponent } from './park/park.component';
import { FinishComponent } from './finish/finish.component';

export const routes: Routes = [
  {path: 'login', 
    component: LoginComponent},
    {path: 'schedule', 
    component: ScheduleComponent}, 
    {path: 'park', 
    component: ParkComponent}, 
    {path: 'finish', 
    component: FinishComponent}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _router: Router){
    
  }

  ngOnInit() {
    this._router.navigate(["/login"]);
  }

}
