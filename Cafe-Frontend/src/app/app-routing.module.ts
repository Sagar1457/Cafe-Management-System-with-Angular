import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CartComponent } from './cart/cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'Home/users',component:UsersListComponent},
  {path:'login/create-user',component:CreateUserComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home/update-user/:id',component:UpdateuserComponent},
  {path:'login',component:LoginComponent},
  {path:'Home/products',component:ProductslistComponent},
  {path:'Home/categories',component:CategorylistComponent},
  {path:'Home/update-product/:id',component:UpdateproductComponent},
  {path:'Home/create-product',component:CreateProductComponent},
  {path:'Home/update-category/:id',component:UpdateCategoryComponent},
  {path:'Home/create-category',component:CreateCategoryComponent},
  {path:'Home/cart-list',component:CartComponent},
  {path:'Home/user-cart',component:UserCartComponent},
  {path:'Home/user-products',component:UserProductsComponent},
  {path:'Home',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
