import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../users';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Users = new Users();
  private loginSubscription: Subscription | undefined;
  x:boolean=false;
  constructor(
    private userService: UserService,
    private router: Router,
    private loginservice: LoginService
  ) {}

  ngOnInit(): void {}

  Login() {
    this.loginSubscription = this.userService.login(this.user).subscribe({
      next: (data) => {console.log(data);
        this.loginservice.setUserLogin(this.user);
        alert("user access");
        this.goToproductsList();
      },
      error: (error) => alert("error")
    });
  }

  goToproductsList() {
    this.router.navigate(['Home']);
  }

  onSubmit() {
    console.log(this.user);
    this.Login();

  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
