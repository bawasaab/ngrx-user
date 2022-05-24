import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../userInterface";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: User[] = [];
  public users$!: Observable<User[]>;

  // constructor(
  //   public UserService: UserService
  // ) { }

  constructor(private store: Store<{ user: [User] }>) {
    this.users$ = this.store.select('user');
    console.log("store.select('user')", store.select('user'))
  }

  ngOnInit(): void {
    // this.users = this.UserService.getUsers()
  }

}
