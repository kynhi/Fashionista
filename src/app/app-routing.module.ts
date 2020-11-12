import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {path: 'manage-products', component: ProductComponent},
  {path: 'manage-users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
