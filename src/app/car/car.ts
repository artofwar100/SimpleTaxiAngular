import { CarType } from "src/shared/CarType";
import { FuelType } from "src/shared/FuelType";

export interface Car {
    id: number,
    plateNumber: string,
    name: string,
    makeYear: string,
    fuelType: FuelType,
    carType: CarType,
}