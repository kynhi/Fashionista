import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm
  name: string = "";
  password: string = "";
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  onLogin() {
    if (this.loginService.authenticateLoginCredentials(this.loginForm.value['name'], this.loginForm.value['password'])) {
      alert("Logged In")
      this.router.navigate(["/homepage",{}]);
    } else {
      alert("Invalid Credentials PLease try again")
    }


  }

  // Init the creation form.
  private initForm() {
    this.loginForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      password: new FormControl(this.password, Validators.required),
    });
  }
}
