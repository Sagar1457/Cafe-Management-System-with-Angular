import { Component } from '@angular/core';
import { Users } from '../users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  
  number:number=0;
  users:Users[]=[];


  constructor(private userService : UserService,private router:Router)
  {}
     
  ngOnInit():void
  {
    this.getUsers();
  }


  private getUsers()
  {
    this.userService.getUsersList().subscribe(data=>
      {
        this.users=data;
      });
  }
  updateUser(id:number)
  {
      this.router.navigate(['update-user',id]);
  }


  deleteUser(id:number)
  {
     this.userService.deleteuser(id).subscribe(data=>{console.log(data),alert("user removed")
      ;this.getUsers();});
  }
}
