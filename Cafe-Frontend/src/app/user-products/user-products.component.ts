import { Component } from '@angular/core';
import { Products } from '../products';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent {
  products:Products[]=[];
  id:number|undefined;
  cartid:number|undefined;
  username:string|undefined;
  
  constructor(private userService:UserService,private router:Router,private loginservice:LoginService)
  {
    this.cartid=this.loginservice.getUserLogin().userId;    }
     
  ngOnInit():void
  {
    this.getproducts();
  }


  private getproducts()
  {
    this.userService.getProductsList().subscribe(data=>
      {
        this.products=data;
      });
  }

  updateproduct(id:number)
  {
      this.router.navigate(['update-product',id]);
  }


  deleteproduct(id:number)
  {
     this.userService.deleteproduct(id).subscribe(data=>{console.log(data),
     alert("product removed");
      this.getproducts()});
  }

  addtocart(cartid:number){

  }
}
