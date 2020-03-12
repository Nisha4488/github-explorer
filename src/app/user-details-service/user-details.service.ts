import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  userUrl= "https://api.github.com/users/"

  
  getUser(login: string){ //type of params to be defined
  
    return this.http.get(this.userUrl + login)
  }
}
