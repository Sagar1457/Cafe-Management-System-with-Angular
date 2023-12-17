import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  id!:number;
  user:Users=new Users()

  constructor(private userService : UserService,private router:Router,
    private route:ActivatedRoute)
  {}

  ngOnInit(): void {
      this.user=new Users();
      this.id=this.route.snapshot.params['id'];

      this.userService.getUserById(this.id)
      .subscribe(data=>{this.user=data;},error=>console.log(error));
  }

  onSubmit(){
    this.updateuser();
  }

  updateuser(){
    this.userService.updateUsers(this.id,this.user)
    .subscribe(data=>{this.gotoUsersList()});
  }

  gotoUsersList(){
    this.router.navigate(['']);
  }
}
