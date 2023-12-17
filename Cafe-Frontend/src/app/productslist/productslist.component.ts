import { Component } from '@angular/core';
import { Products } from '../products';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {

    products:Products[]=[];
    cartid:number|undefined;
 
    
    constructor(private userService : UserService,private router:Router,private loginservice:LoginService)
    { this.cartid=this.loginservice.getUserLogin()?.userId}
       
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
       this.userService.deleteproduct(id).subscribe(data=>{alert("product removed");
        this.getproducts()});
    }

    addtocart(cartid:number){
      this.userService.getproductById(cartid);
    }
  }
  

