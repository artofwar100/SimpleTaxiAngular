import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarType, CarType2LabelMapping } from 'src/shared/CarType';
import { FuelType, FuelType2LabelMapping } from 'src/shared/FuelType';
import { PageMode } from 'src/shared/shared/pageMode';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-edit-car',
  templateUrl: './create-edit-car.component.html',
  styleUrls: ['./create-edit-car.component.css']
})
export class CreateEditCarComponent implements OnInit {


  pageMode: PageMode = PageMode.Create

  pageModeEnum = PageMode;


  carId = 0;

  car!: Car;


  public fuelType2LabelMapping = FuelType2LabelMapping;

  public fuletypes = Object.values(FuelType);

  // public fuletypes = Object.values(FuelType).filter(value => typeof value === 'number');


  public carType2LabelMapping = CarType2LabelMapping;

  public cartypes = Object.values(CarType);

  // public cartypes = Object.values(CarType).filter(value => typeof value === 'number');


  carForm = this.fb.group({
    id: [0],
    plateNumber: [''],
    name: [''],
    makeYear: [''],
    fuelType: [''],
    carType: [''],
  })

  constructor(
    private carSRV: CarService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.preparePageForEdit();
    }

  }

  createEdit(): void {
    if (this.carForm.valid) {
      if (this.pageMode == PageMode.Create) {
        this.carSRV.addCar(this.carForm.value).subscribe(
          res => {
            this.router.navigate(["/car"])
          }
        )
      }
      else if (this.pageMode == PageMode.Edit) {
        this.carSRV.editCar(this.carForm.value).subscribe(
          res => {
            this.router.navigate(["/car"])
          }
        )
      }
    }
  }

  setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.carId = parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.pageMode = PageMode.Edit
    }
  }

  preparePageForEdit(): void {
    this.carSRV.getCar(this.carId).subscribe(
      res => {
        this.carForm.patchValue({
          id: res.id,
          plateNumber: res.plateNumber,
          name: res.name,
          makeYear: res.makeYear,
          fuelType: res.fuelType,
          carType: res.carType,
        })
        this.car = res
      }
    )
  }




}
