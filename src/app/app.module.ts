import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import {routes} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ParkComponent } from './park/park.component';
import { FinishComponent } from './finish/finish.component';

import { ImgMapComponent } from './ng2-img-map';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleComponent,
    ParkComponent,
    FinishComponent,
    ImgMapComponent
  ],
  imports: [    
    MatDatepickerModule,
    MatNativeDateModule,       
    MatInputModule, 
    BrowserModule,
    FormsModule,    
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'},    
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
