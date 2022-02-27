import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private url = "https://localhost:44395/api/Drivers"

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.url + '/GetDrivers')
  }

  getDriver(id: number): Observable<Driver> {
    return this.http.get<Driver>(this.url + '/GetDriver/' + id)
  }

  putDriver(driver : Driver): Observable<Driver> {
    return this.http.put<Driver>(this.url + '/PutDriver/' + driver.id , driver)
  }

  postDriver(driver : Driver): Observable<Driver> {
    return this.http.post<Driver>(this.url + '/PostDriver' , driver)
  }

  deleteDriver(id: number): Observable<Driver> {
    return this.http.delete<Driver>(this.url + '/DeleteDriver/' + id)
  }
}
