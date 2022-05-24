import { createAction, props } from '@ngrx/store';
import { User } from "../userInterface";

export const addUser = createAction(
  '[User Component] Add',
  props<{user: User}>()
);
