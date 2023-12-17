import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  id!:number;
  product:Products=new Products()

  constructor(private userService : UserService,private router:Router,
    private route:ActivatedRoute)
  {}

  ngOnInit(): void {  }

  saveProduct()
  {
    this.userService.createProduct(this.product).subscribe(data=>{console.log(data); this.goToProductList()},error=>console.log(error));
  }


  goToProductList()
  {
    this.router.navigate(['products']);
  }
 
  onSubmit()
  {
    console.log(this.product);
    this.saveProduct();
  }
}
