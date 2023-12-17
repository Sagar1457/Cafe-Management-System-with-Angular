import { Injectable } from '@angular/core';
import { Users } from './users';
import { Cart } from './cart';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private user:Users | null=null;



 private isAuthenticated = false;

 

  logout() {
    this.isAuthenticated = false,this.user=null;;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  setUserLogin(user: Users) {
    this.user = user;
  }

  getUserLogin(): Users | any {
     return this.user;
  }
  
}
