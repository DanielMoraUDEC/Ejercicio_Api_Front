import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule
  ], 
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
