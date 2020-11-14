import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, User } from '../service/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  name: string = '';
  password: string = '';
  email: string = '';
  usertype= "customer";
  address:string = '';
  error: boolean = false;

  constructor(protected userService: UserService, protected formBuilder: FormBuilder,private router:Router) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
  }

  // Manage the submit action and create the new product.
  onSubmit() {
    const user = new User(this.userForm.value['name'], this.userForm.value['password'], this.userForm.value['email'],this.usertype,this.userForm.value['address'],null);
    console.log(user)
    this.userService.create(user).subscribe((result: IUser) => {
      if (result === undefined) {
        this.error = true;
        alert('user creation failed')
      } else {
        this.error = false;

        alert('user created successfully, Please Login')
        this.router.navigate(['/homepage',{}])
      }
    });
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

  // Init the creation form.
  private initForm() {
    this.userForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      password: new FormControl(this.password, Validators.required),
      email:new FormControl(this.email, Validators.required),
      address:new FormControl(this.address, Validators.required),
    });
  }

}
