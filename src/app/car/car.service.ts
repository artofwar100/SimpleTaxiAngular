import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = "https://localhost:44395/api/Cars"

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url + "/GetCars")
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.url + "/GetCar/" + id)
  }

  editCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.url + "/PutCar/" + car.id, car)
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url + "/PostCar", car)
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.url + "/DeleteCar/" + id)
  }


}
