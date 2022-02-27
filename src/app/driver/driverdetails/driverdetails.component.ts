import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driverdetails',
  templateUrl: './driverdetails.component.html',
  styleUrls: ['./driverdetails.component.css']
})
export class DriverdetailsComponent implements OnInit {

  driver!: Driver;

  constructor(
    private driverSRV: DriverService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getDriver();
  }

  getDriver(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.driverSRV.getDriver(id).subscribe(
      res => {
        this.driver = res
      }
    )
  }

}
