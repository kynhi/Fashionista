import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { IUser, User } from 'src/app/service/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  name: string = '';
  password: string = '';
  email: string = '';
  usertype: string ='';
  address:string = '';
  error: boolean = false;

  @Output() createdUser = new EventEmitter<IUser>();

  constructor(protected userService: UserService, protected formBuilder: FormBuilder) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
  }

  // Manage the submit action and create the new product.
  onSubmit() {
    const user = new User(this.userForm.value['name'], this.userForm.value['password'], this.userForm.value['email'],this.userForm.value['usertype'],this.userForm.value['address'],null);
    this.userService.create(user).subscribe((result: IUser) => {
      if (result === undefined) {
        this.error = true;
      } else {
        this.error = false;
        this.createdUser.emit(result);
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
      usertype:new FormControl(this.usertype, Validators.required),
      address:new FormControl(this.address, Validators.required),
    });
  }

}
