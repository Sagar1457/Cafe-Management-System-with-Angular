import { Products } from "./products";
import { Users } from "./users";

export class Cart {
    id!:number;

    user!:Users;

    products!:Products;
}
