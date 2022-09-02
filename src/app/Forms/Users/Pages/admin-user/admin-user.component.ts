import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement!: DataTableDirective;

  users: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers() {
    try {

      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2
      };

      this.userService.getUsers().subscribe((data: any) => {
        this.users = data.result;
        this.dtTrigger.next(0);
      });
    } catch (err) {
      console.log(err)
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next(0);
    });
  }



}
