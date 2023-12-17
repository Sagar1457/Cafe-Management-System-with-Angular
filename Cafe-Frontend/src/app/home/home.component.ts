import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username:string|undefined;

  x:boolean=true;


  constructor(private router:Router,private loginservice:LoginService,private userservice:UserService) {
    this.username=this.loginservice.getUserLogin()?.username;
  }
  Logout(){
    this.loginservice.logout;this.router.navigate(['login'])
    
  }
  getproduct(){
    this.router.navigate(['Home/products']);
  }
  Search(){
    this.userservice.getProductByName;
  }
}
