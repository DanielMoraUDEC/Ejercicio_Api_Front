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

  commentsList: User[] = []

  constructor(private userService: UserService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.userService.list().subscribe((data: any[]) => {
      data.forEach(element => {
        console.log(element)
      });
      console.log(this.commentsList);
      this.commentsList = [];
    });
}

}
