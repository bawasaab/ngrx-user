import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { MasterComponent } from './master/master.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
