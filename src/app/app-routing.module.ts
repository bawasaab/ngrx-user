import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { BackendLayoutComponent } from './shared/backend-layout/backend-layout.component';
import { Err404Component } from './shared/err404/err404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
},
{
    path: 'user',
    component: BackendLayoutComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('./user/user.module').then( module => module.UserModule )
        }
    ]
},
{
  path: 'counter',
  component: MyCounterComponent
},
{
    path: '**',
    component: Err404Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
