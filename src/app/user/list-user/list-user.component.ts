import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { IUser } from 'src/app/service/user.model';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: Array<IUser> = [];
  @Input() usersToDisplay: IUser = null;

  constructor(protected userService: UserService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    if (this.usersToDisplay !== null) {
      this.users.push(this.usersToDisplay);
    }
  }

  // Delete a product. 
  delete(id: string) {
    this.userService.delete(id).subscribe((result: any) => this.loadAll());
  }

  // Load all products.
  private loadAll() {
    this.userService
      .get()
      .subscribe((result: Array<IUser>) => {
        this.users = result;
      });
  }


}
