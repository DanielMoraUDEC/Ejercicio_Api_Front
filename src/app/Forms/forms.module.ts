import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './Users/Pages/admin-user/admin-user.component';
import { CreateUserComponent } from './Users/Pages/create-user/create-user.component';
import { SharedModule } from '../Shared/shared.module';
import { DataTablesModule } from "angular-datatables";



@NgModule({
  declarations: [
    AdminUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule
  ], exports : [
    AdminUserComponent,
    CreateUserComponent
  ]
})
export class FormsModule { }
