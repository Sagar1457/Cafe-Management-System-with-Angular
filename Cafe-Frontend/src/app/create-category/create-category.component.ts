import { Component } from '@angular/core';
import { Category } from '../category';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  id!:number;
  category:Category=new Category()

  constructor(private userService : UserService,private router:Router,
    private route:ActivatedRoute)
  {}

  ngOnInit(): void {  }

  saveCategory()
  {
    this.userService.createCategory(this.category).subscribe(data=>{console.log(data); this.goTocategoryList()},error=>console.log(error));
  }


  goTocategoryList()
  {
    this.router.navigate(['categories']);
  }
 
  onSubmit()
  {
    console.log(this.category);
    this.saveCategory();
  }
}
