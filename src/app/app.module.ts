import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared/shared.module';
import { CarDeatilsComponent } from './car/car-deatils/car-deatils.component';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEditCarComponent } from './car/create-edit-car/create-edit-car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverComponent } from './driver/driver.component';
import { DriverdetailsComponent } from './driver/driverdetails/driverdetails.component';
import { CreateEditDriverComponent } from './driver/create-edit-driver/create-edit-driver.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDeatilsComponent,
    HomeComponent,
    CreateEditCarComponent,
    DriverComponent,
    DriverdetailsComponent,
    CreateEditDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
