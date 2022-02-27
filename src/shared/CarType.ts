export enum CarType {
    Sedan="Sedan",
    Station="Station",
    Van="Van",
}
export const CarType2LabelMapping: Record<CarType, string> = {
    [CarType.Sedan]: "Sedan",
    [CarType.Station]: "Station",
    [CarType.Van]: "Van",
};