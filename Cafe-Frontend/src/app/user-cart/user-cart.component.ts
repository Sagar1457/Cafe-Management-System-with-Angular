import { Component } from '@angular/core';
import { Cart } from '../cart';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {
  userId:number=0;
  username:string|undefined;
  cart: Cart[]=[];

  constructor(private router:Router,private loginservice:LoginService,private userservice:UserService)
  {  this.username=this.loginservice.getUserLogin()?.fullname}  

  ngOnInit() {
    this.getUserId()
  }

  private getUserId(){
    this.userservice.getCartItems(this.userId=this.loginservice.getUserLogin()?.user_id).subscribe(data => {
      this.cart = data;
    });
  }
}
