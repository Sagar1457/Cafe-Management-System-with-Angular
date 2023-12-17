import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient} from '@angular/common/http';
import { Products } from './products';
import { Category } from './category';
import { Cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl="http://localhost:8080/admin";
  private baseUrl1="http://localhost:8080/user"
  constructor(private httpClient:HttpClient) { }

  getUsersList():Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.baseUrl}/users`);
  }

  createUsers(user:Users):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/newregistration`,user);
  }

  getUserById(id:number):Observable<Users>{
    return this.httpClient.get<Users>(`${this.baseUrl}/${id}`);
  }

  updateUsers(id:number,user:Users):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/user/update/${id}`,user);
  }

  deleteuser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/user/delete/${id}`);
  }

  login(user:Users):Observable<object>{
    return this.httpClient.post(`${this.baseUrl1}/login`,user);
  }

  createProduct(product:Products):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/product/add`,product);
  }

  getProductsList():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseUrl}/products`);
  }

  getproductById(id:number):Observable<Products>{
    return this.httpClient.get<Products>(`${this.baseUrl}/product/${id}`);
  }

  updateproduct(id:number,product:Products):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/product/update/${id}`,product);
  }

  deleteproduct(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/product/delete/${id}`);
  }

  getCategoriesList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  createCategory(category: Category) {
    return this.httpClient.post(`${this.baseUrl}/category/add`,category);
  }

  updatecategory(id: number, category: Category) {
    return this.httpClient.put(`${this.baseUrl}/category/update/${id}`,category);
  }

  getCategoryById(id: number) {
     return this.httpClient.get<Category>(`${this.baseUrl}/product/${id}`);
  }

  deletecategory(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/category/delete/${id}`);
  }

  getCartList():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseUrl}/carts`);
  }

  getCartItems(userId:number|undefined): Observable<Cart[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/${userId}`);
  }

  getProductByName(product:string):Observable<Products[]>{
    return this.httpClient.get<any[]>(`${this.baseUrl}/products/${product}`)
  }



}
