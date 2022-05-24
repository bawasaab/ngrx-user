import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from "../user.service";
import { User } from '../userInterface';
import { addUser } from '../store/user.actions';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private store: Store<{ user: User }>) {
  }


  ngOnInit(): void {
  }

  handleSubmit( frmObj: any ) {

    console.log('frmObj', frmObj);

    if( !frmObj.submitted ) {
      console.log('not submitted');
      return;
    }

    if( frmObj.invalid ) {
      console.log('in_data.errors', frmObj.errors);
      return;
    }

    let in_data = frmObj.value;
    in_data.id = Math.random()
    this.store.dispatch(addUser({user: in_data}));
  }

}
