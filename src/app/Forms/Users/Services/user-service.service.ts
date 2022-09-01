import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly url = "https://localhost:7122/api/User";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>(`${this.url}/GetUsers`);
  } 
}
