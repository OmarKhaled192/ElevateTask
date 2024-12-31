import { Rate } from './rate';

export interface Product {
    id: Number;
    title: String;
    price: Number;
    category: String;
    description: String;
    image: String;
    rating: Rate | null;
}
