import { Component } from '@angular/core';
import{Users} from '../users'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user:Users=new Users();
  x:boolean=false;
  constructor(private userService : UserService,private router:Router) {}

  ngOnInit():void {}

  saveUser()
  {
    this.userService.createUsers(this.user).subscribe(data=>{console.log(data); this.goTousersList()},error=>console.log(error));
  }
  
  goTousersList()
  {
    this.router.navigate(['login']);
  }
 
  onSubmit()
  {
    console.log(this.user);
    this.saveUser();
  }

}
