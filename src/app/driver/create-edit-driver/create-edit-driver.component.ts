import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender, Gender2LabelMapping } from 'src/shared/Gender';
import { PageMode } from 'src/shared/shared/pageMode';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-create-edit-driver',
  templateUrl: './create-edit-driver.component.html',
  styleUrls: ['./create-edit-driver.component.css']
})
export class CreateEditDriverComponent implements OnInit {

  pageMode: PageMode = PageMode.Create

  pageModeEnum = PageMode;

  driverId: number = 0;

  driver!: Driver;

  public gender2LabelMapping = Gender2LabelMapping;

  public genders = Object.values(Gender);

  driverForm = this.fb.group({
    id: [0],
    name: [''],
    email: [''],
    phoneNumber: [''],
    rating: [''],
    gender: [''],
  })

  constructor(
    private driverSRV: DriverService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.prepeatPageForEdit();
    }
  }

  createEdit(): void {
    if (this.driverForm.valid) {
      if (this.pageMode == PageMode.Create) {
        this.driverSRV.postDriver(this.driverForm.value).subscribe(
          res => {
            this.router.navigate(["/driver"])
          }
        )
      }
      else if (this.pageMode == PageMode.Edit) {
        this.driverSRV.putDriver(this.driverForm.value).subscribe(
          res => {
            this.router.navigate(["/driver"])
          }
        )
      }
    }
  }

  setPageMode(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.driverId = parseInt(this.route.snapshot.paramMap.get('id') as string)
      this.pageMode = PageMode.Edit
    }
  }

  prepeatPageForEdit(): void {
    this.driverSRV.getDriver(this.driverId).subscribe(
      res => {
        this.driverForm.patchValue({
          id: res.id,
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          rating: res.rating,
          gender: res.gender,
        })
        this.driver = res;
      }
    )

  }

}
