import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service/status.service';
import { IUser } from '../service/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'node-express-angular';
  status = 'DOWN';
  createdUser: IUser = null;

  constructor(protected statusService: StatusService) { }

  // Get the server status when starting the view.
  ngOnInit() {
    this.statusService
      .getStatus()
      .subscribe((result: any) => {
        this.status = result.status;
      });
  }

  // Get the new product created.
  onCreatedUser(createdUser: IUser) {
    this.createdUser = createdUser;
  }

}
