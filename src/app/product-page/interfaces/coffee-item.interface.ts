export interface CoffeeItem {
    id: string;
    name: string;
    image: string;
    price: {
        [size: string]: number;
    };
    stamp: boolean;
    details: {
        calories: number;
        totalFat: number;
        cholesterol: number;
        sodium: number;
        totalCarbohydrate: number;
        protein: number;
        vitaminD: number;
        calcium: number;
    };
}