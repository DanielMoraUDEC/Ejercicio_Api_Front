import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  responseResult: any[] = []
  commentList: any[] = []

  constructor(private userService: UserService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.userService.list().subscribe((data: any) => {
      this.responseResult = data.result;
      console.log(this.responseResult)
      this.commentList = this.responseResult;
      this.responseResult = [];
    });
  }

  public listComments(): void{
    this.userService.list().subscribe((data: any) => {
      this.responseResult = data.result;
      console.log(this.responseResult)
      this.commentList = this.responseResult;
      this.responseResult = [];
    });
  }

}
