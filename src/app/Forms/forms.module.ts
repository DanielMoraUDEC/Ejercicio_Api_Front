import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './Users/Pages/admin-user/admin-user.component';
import { CreateUserComponent } from './Users/Pages/create-user/create-user.component';
import { SharedModule } from '../Shared/shared.module';
import { DataTablesModule } from "angular-datatables";
import { ListUserComponent } from './Users/Pages/list-user/list-user.component';
import { AgregarSpringComponent } from './Users/Pages/agregar-spring/agregar-spring.component';



@NgModule({
  declarations: [
    AdminUserComponent,
    CreateUserComponent,
    ListUserComponent,
    AgregarSpringComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule
  ], exports : [
    AdminUserComponent,
    CreateUserComponent,
    ListUserComponent
  ]
})
export class FormsModule { }
