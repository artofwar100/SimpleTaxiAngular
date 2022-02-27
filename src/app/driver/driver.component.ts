import { Component, OnInit } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers!: Driver[]

  spiner: boolean = false;

  constructor(
    private driverSRV: DriverService,
  ) { }

  ngOnInit(): void {
    this.getDriver();
  }

  getDriver(): void {
    this.spiner = true;
    this.driverSRV.getDrivers().subscribe(
      res => {
        this.drivers = res
        this.spiner = false ;
      }
    )
  }

  deleteDriver(id :number):void{
    this.driverSRV.deleteDriver(id).subscribe(
      res =>{
        this.getDriver();
      }
    )
  }



}
