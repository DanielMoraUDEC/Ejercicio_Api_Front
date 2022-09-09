import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('name') name:ElementRef | undefined;
  @ViewChild('comment') comment:ElementRef | undefined;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createUser(): void {
    const nameValue = this.name?.nativeElement.value;
    const commentValue = this.comment?.nativeElement.value;

    const u = new User();

    u.Name = nameValue;
    u.Comment = commentValue;

    this.userService.save(u).subscribe(success => {
      console.log(success)
    })
  }
}
