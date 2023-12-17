import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent {

  categories:Category[]=[];
  
  
  constructor(private userService : UserService,private router:Router)
  {}
     
  ngOnInit():void
  {
    this.getcategories();
  }


  private getcategories()
  {
    this.userService.getCategoriesList().subscribe(data=>
      {
        this.categories=data;
      });
  }
  updatecategory(id:number)
  {
      this.router.navigate(['update-category',id]);
  }


  deletecategory(id:number)
  {
     this.userService.deletecategory(id).subscribe(data=>{console.log(data),alert("category removed")
      ;this.getcategories();});
  }
}
