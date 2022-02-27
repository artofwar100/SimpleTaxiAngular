export enum FuelType {
    Gasoline = "Gasoline",
    Diesel = "Diesel",
    Hybrid = "Hybrid",
    Electric = "Electric",
}

export const FuelType2LabelMapping: Record<FuelType, string> = {
    [FuelType.Gasoline]: "Gasoline",
    [FuelType.Diesel]: "Diesel",
    [FuelType.Hybrid]: "Hybrid",
    [FuelType.Electric]: "Electric",
};
