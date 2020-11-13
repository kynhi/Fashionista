import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IUser, User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = '/api/users';

  constructor(private http: HttpClient) { }

  // Get products
  get() {
      return this.http.get<Array<IUser>>(this.usersUrl)
  }

  // Create product
  create(user: User) {
      return this.http.post<IUser>(this.usersUrl, user)
  }

  // Delete a product
  delete(id: string) {
      return this.http.delete<any>(`${this.usersUrl}/${id}`)
  }

  // Error handling
  private error(error: any) {
      let message = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(message);
  }
}
