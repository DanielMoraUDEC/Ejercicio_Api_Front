import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './Forms/Users/Pages/admin-user/admin-user.component';
import { AgregarSpringComponent } from './Forms/Users/Pages/agregar-spring/agregar-spring.component';
import { CreateUserComponent } from './Forms/Users/Pages/create-user/create-user.component';
import { ListUserComponent } from './Forms/Users/Pages/list-user/list-user.component';
import { ListaComponent } from './Forms/Users/Pages/listaSpring/lista.component';

const routes: Routes = [
  {
    path:'',
    component: ListUserComponent,
    pathMatch: 'full'
  },
  {
    path:'users',
    component: AdminUserComponent,
  },{
    path:'create',
    component: CreateUserComponent,
  },
  {
    path:'springList',
    component: ListaComponent,
  },
  {
    path:'springAgregar',
    component: AgregarSpringComponent,
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
