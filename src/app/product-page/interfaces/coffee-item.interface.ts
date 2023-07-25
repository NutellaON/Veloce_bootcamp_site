export interface CoffeeItem {
    id: string;
    name: string;
    image: string;
    price: {
        [size: string]: number; // Price can be represented as an object with dynamic keys (e.g., "250", "500")
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