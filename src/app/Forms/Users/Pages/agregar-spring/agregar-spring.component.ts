import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Uusario } from 'src/app/models/usuario';
import { SpringUserService } from 'src/app/services/spring-user.service';

@Component({
  selector: 'app-agregar-spring',
  templateUrl: './agregar-spring.component.html',
  styleUrls: ['./agregar-spring.component.css']
})
export class AgregarSpringComponent implements OnInit {

  @ViewChild('name') name:ElementRef | undefined;
  @ViewChild('comment') comment:ElementRef | undefined;

  constructor(private userService: SpringUserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createUser(): void {
    const nameValue = this.name?.nativeElement.value;
    const commentValue = this.comment?.nativeElement.value;

    const u = new Uusario();

    u.name = nameValue;
    u.comment = commentValue;

    this.userService.save(u).subscribe(success => {
      console.log(success)
      this.router.navigate([''])
    })
  }

}
