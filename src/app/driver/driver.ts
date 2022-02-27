import { Gender } from "src/shared/Gender";

export interface Driver {
    id: number,
    name: string,
    email: string,
    phoneNumber: number,
    rating: number,
    gender: Gender,
}