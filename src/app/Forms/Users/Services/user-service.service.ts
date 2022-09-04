import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly url = environment.HOST
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>(`${this.url}/GetUsers`);
  } 
}
