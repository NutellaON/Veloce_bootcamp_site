import { CoffeeDetails } from "./coffee-details.interface";

export interface CoffeeItem {
    id: string;
    name: string;
    image: string;
    price: {
        [size: string]: number;
    };
    stamp: boolean;
    details: CoffeeDetails;
}