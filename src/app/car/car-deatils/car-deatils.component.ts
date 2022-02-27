import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-deatils',
  templateUrl: './car-deatils.component.html',
  styleUrls: ['./car-deatils.component.css']
})
export class CarDeatilsComponent implements OnInit {

  car!: Car

  constructor(
    private carSRV: CarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.carSRV.getCar(id).subscribe(
      res => {
        this.car = res
      }
    )
  }

}
