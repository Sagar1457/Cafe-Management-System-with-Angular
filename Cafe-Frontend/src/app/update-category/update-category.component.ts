import { Component } from '@angular/core';
import { Category } from '../category';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  id!:number;
  category:Category=new Category()

  constructor(private userService : UserService,private router:Router,
    private route:ActivatedRoute)
  {}

  ngOnInit(): void {
      this.category=new Category();
      this.id=this.route.snapshot.params['id'];

      this.userService.getCategoryById(this.id)
      .subscribe(data=>{this.category=data;},error=>console.log(error));
  }

  onSubmit(){
    this.updatecategory();
  }

  updatecategory(){
    this.userService.updatecategory(this.id,this.category)
    .subscribe(data=>{this.gotocategoryList()});
  }

  gotocategoryList(){
    this.router.navigate(['categories']);
  }
}
