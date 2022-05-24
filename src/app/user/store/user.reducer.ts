import { createReducer, on } from '@ngrx/store';
import { User } from "../userInterface";
import { addUser } from './user.actions';

let getUsrStr: string = localStorage.getItem('users') || ''
let data: User[] = getUsrStr ? JSON.parse(getUsrStr) : []

export const initialState: User[] = data;

export const userReducer = createReducer(
  initialState,
  on(addUser, (oldState, newState ) => {
    let user = [...oldState, {...newState.user}]
    localStorage.setItem('users', JSON.stringify(user))
    return user
  }),
);
