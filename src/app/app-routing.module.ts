import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDeatilsComponent } from './car/car-deatils/car-deatils.component';
import { CarComponent } from './car/car.component';
import { CreateEditCarComponent } from './car/create-edit-car/create-edit-car.component';
import { CreateEditDriverComponent } from './driver/create-edit-driver/create-edit-driver.component';
import { DriverComponent } from './driver/driver.component';
import { DriverdetailsComponent } from './driver/driverdetails/driverdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'car', component: CarComponent },
  { path: 'car/:id', component: CarDeatilsComponent },
  { path: 'createcar', component: CreateEditCarComponent },
  { path: 'carEdit/:id', component: CreateEditCarComponent },

  { path: 'driver', component: DriverComponent },
  { path: 'driver/:id', component: DriverdetailsComponent },
  { path: 'createDriver', component: CreateEditDriverComponent },
  { path: 'driverEdit/:id', component: CreateEditDriverComponent },


  

  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
