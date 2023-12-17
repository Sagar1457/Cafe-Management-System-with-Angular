import { Component } from '@angular/core';
import { Cart } from '../cart';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Products } from '../products';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  number:number=0;
  userId:number | undefined;
  
  product:Products[]=[];
  carts:Cart[]=[];
  

  constructor(private userService : UserService,private router:Router,private loginservice:LoginService) {}  
     //this.userId=this.loginservice.getUserLogin()?.user_id;
  ngOnInit():void
  {
    this.getUsers();
    this.getproducts();
    this.getUserId();
  }

  private getproducts()
    {
      this.userService.getCartList().subscribe(data=>
        {
          this.carts=data;
        });
    }

    private getUserId(){
      this.userService.getCartItems(this.userId).subscribe(data => {
        this.carts = data;
      });
    }

  private getUsers()
  {
    this.userService.getCartList().subscribe(data=>
      {
        this.carts=data;
      });
  }

}
