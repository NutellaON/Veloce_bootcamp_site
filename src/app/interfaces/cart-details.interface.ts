import { CartItem } from "./cart-item.interface";

export interface CoffeeInCart extends CartItem {
    imgUrl: string;
    name: string;
    price: number;
}