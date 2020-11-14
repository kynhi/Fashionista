import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route)
      console.log(state)
      if (this.loginService.isLogin){
        if ((state.url =="/manage-users")||(state.url == "/manage-products")){
          if (this.loginService.currentUser.usertype!= 'admin'){
            alert("You need to be Admin to visit this route")
            return false
          } 
        }
        if (state.url == "/cart"){
          if (this.loginService.currentUser.usertype!= 'customer'){
            alert("You need to be Customer to visit cart route")
            return false
          } 
        }
        return true;
      }
      alert("You don't have permission to view this page, please Login first")
      return false;
  }
  
}
