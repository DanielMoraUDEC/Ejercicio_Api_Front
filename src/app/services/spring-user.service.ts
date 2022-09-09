import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user.model';
import { Uusario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SpringUserService {

  url = environment.HOST2

  constructor(private http: HttpClient) { }

  public list (){
    return this.http.get<Uusario[]>(this.url+'all')
  }
  public save (user:Uusario){
    return this.http.post<boolean>(this.url+'add',{
      "name":user.name,
      "comment":user.comment
    });
  }
  public getOne(id:number){
    return this.http.get<Uusario>(this.url+'user/'+id);
  }
  public delete (id:number){
    return this.http.delete<boolean>(this.url+'delete/'+id);
  }
  public edit (user:User){
    return this.http.put<boolean>(this.url+'add/'+user.UserId,{
      "userId":user.UserId,
      "name":user.Name,
      "comment":user.Comment
    });
  }
}
