import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './Forms/Users/Pages/admin-user/admin-user.component';
import { CreateUserComponent } from './Forms/Users/Pages/create-user/create-user.component';
import { ListUserComponent } from './Forms/Users/Pages/list-user/list-user.component';

const routes: Routes = [
  {
    path:'',
    component: ListUserComponent,
    pathMatch: 'full'
  },
  {
    path:'create',
    component: CreateUserComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component: AdminUserComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
