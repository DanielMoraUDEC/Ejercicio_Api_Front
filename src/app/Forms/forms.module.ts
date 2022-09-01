import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './Users/Pages/admin-user/admin-user.component';
import { CreateUserComponent } from './Users/Pages/create-user/create-user.component';
import { SharedModule } from '../Shared/shared.module';
<<<<<<< HEAD
import { DataTablesModule } from "angular-datatables";
=======
import { ListUserComponent } from './Users/Pages/list-user/list-user.component';
>>>>>>> de02db965ddd9edf71555ff99fbf34ef4754cb66



@NgModule({
  declarations: [
    AdminUserComponent,
    CreateUserComponent,
    ListUserComponent
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
