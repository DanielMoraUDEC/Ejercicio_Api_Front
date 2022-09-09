import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { User } from 'src/app/models/user.model';
import { Uusario } from 'src/app/models/usuario';
import { LoaderService } from 'src/app/services/loader.service';
import { SpringUserService } from 'src/app/services/spring-user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  responseResult: Uusario[] = [];
  user!: Uusario;
  commentList: any[] = [];
  name!: string;

  constructor(private userService: SpringUserService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.userService.list().subscribe(data => {
      console.log(data);
      
      this.responseResult=data;
      //console.log(this.responseResult);
      //console.log(this.name);
      /*this.responseResult = data;
      console.log(this.responseResult)
      this.commentList = this.responseResult;
      this.responseResult = [];*/
    });
  }

  public listComments(): void{
    this.userService.list().subscribe((data: any) => {
      //console.log(data);
      
      this.responseResult=data;
      /*
      this.responseResult = data.result;
      console.log(this.responseResult)
      this.commentList = this.responseResult;
      this.responseResult = [];*/
    });
  }

  public eliminar(id:number){
    var resultado = window.confirm('Estas seguro?');
    if(resultado){
      this.userService.delete(id).subscribe(data=>{
        console.log(data);
        window.location.reload();
      });
    }
    
  }

}
