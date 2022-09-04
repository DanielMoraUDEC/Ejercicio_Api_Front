import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.HOST + 'GetUsers/'
  // url = environment.HOST + 'GetUsers'

  constructor(private http: HttpClient) { }

  public list(): any{

    return this.http.get<any>(`${environment.HOST + 'GetUsers'}`);
  }

  public save(u: User): any{
    return this.http.post(`${environment.HOST + 'AddUser'}`, u);
  }
}
