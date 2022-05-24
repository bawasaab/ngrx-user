import { createReducer, on } from '@ngrx/store';
import { User } from "../userInterface";
import { addUser } from './user.actions';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,
  on(addUser, (oldState, newState ) => {
    return [...oldState, {...newState.user}]
  }),
);
