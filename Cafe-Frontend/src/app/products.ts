import { Cart } from "./cart";
import { Category } from "./category";

export class Products {

    product_id!:number;
    
    productName!:string;

    product_price!:string;

    category!:Category;

    cart!:Cart;
}
