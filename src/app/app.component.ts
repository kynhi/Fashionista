import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fashionista';
  currentUser
  isLogin = false;
  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
    this.loginService.loginUpdate.subscribe((user)=>{
      
      this.isLogin = this.loginService.isLogin
      this.currentUser = this.loginService.currentUser
      
    })

  }
}
