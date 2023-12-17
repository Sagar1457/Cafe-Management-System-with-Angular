import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CartComponent } from './cart/cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateuserComponent,
    UsersListComponent,
    CreateUserComponent,
    LoginComponent,
    ProductslistComponent,
    CategorylistComponent,
    UpdateproductComponent,
    CreateProductComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    UserCartComponent,
    CartComponent,
    UserProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
