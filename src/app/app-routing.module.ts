import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {path: 'manage-products', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'manage-users', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
