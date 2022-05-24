import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { BackendLayoutComponent } from './shared/backend-layout/backend-layout.component';
import { Err404Component } from './shared/err404/err404.component';

import { counterReducer } from './store/counter/counter.reducer';
import { userReducer } from './user/store/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BackendLayoutComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      user: userReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
