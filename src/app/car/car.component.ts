import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuelType } from 'src/shared/FuelType';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];

  spiner : boolean = false;


  constructor(
    private carSRV: CarService,
    private dialog :MatDialog) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.spiner = true;
    this.carSRV.getCars().subscribe(
      res => {
        this.cars = res;
        this.spiner = false;
      }
    )
  }

  deleteCar(id: number): void {
    this.carSRV.deleteCar(id).subscribe(
      res => {
        this.getCars();
      }
    )
  }



}
