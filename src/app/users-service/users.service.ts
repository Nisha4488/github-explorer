import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users

  constructor(
    private http: HttpClient
  ) { }

  usersUrl= "https://api.github.com/users"

  getUsers(){
    return this.http.get(this.usersUrl)
  }
}
