import { EventEmitter, Injectable } from '@angular/core';
import { IUser, User } from './user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: User;
  loginUpdate: EventEmitter<User>= new EventEmitter();
  isLogin= false;
  users: Array<User>;
  constructor(private userService: UserService) { 
    this.userService.get().subscribe((users: Array<IUser>) =>{
      this.users = users;
    })
  }

  authenticateLoginCredentials(name:string,password:string){
    this.isLogin = false;
    this.users.forEach( (user:User) =>{
      if ((name == user.name) && (password == user.password)){
        this.currentUser = user;
        this.isLogin = true
        this.loginUpdate.emit(user)
      }
    })
    return this.isLogin
  }

  userAuthenticated(){
    return this.isLogin
  }

}
