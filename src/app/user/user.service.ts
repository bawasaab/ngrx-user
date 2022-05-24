import { Injectable } from '@angular/core';
import { User } from "./userInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [];

  constructor() { }

  addUser(in_data: User) {
    this.users.push(in_data)
    return in_data
  }

  getUsers() {
    return this.users
  }
}
