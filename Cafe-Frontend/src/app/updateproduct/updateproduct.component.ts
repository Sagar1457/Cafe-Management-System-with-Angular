import { Component } from '@angular/core';
import { Products } from '../products';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {
  id!:number;
  product:Products=new Products()

  constructor(private userService : UserService,private router:Router,
    private route:ActivatedRoute)
  {}

  ngOnInit(): void {
      this.product=new Products();
      this.id=this.route.snapshot.params['id'];

      this.userService.getproductById(this.id)
      .subscribe(data=>{this.product=data;},error=>console.log(error));
  }

  onSubmit(){
    this.updateproduct();
  }

  updateproduct(){
    this.userService.updateproduct(this.id,this.product)
    .subscribe(data=>{this.gotoproductsList()});
  }

  gotoproductsList(){
    this.router.navigate(['products']);
  }
}
