import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service/users.service'
import { User } from '../users-service/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users
  constructor(
    private usersService: UsersService
  ) {
    this.usersService= usersService
   }

  ngOnInit(): void {
    this.showUsers()
  }

  showUsers(){
    this.usersService.getUsers()
    .subscribe((data: User[]) => this.users = data)
    
  }

}
