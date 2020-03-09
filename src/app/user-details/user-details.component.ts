import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { UserDetailsService } from '../user-details-service/user-details.service'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user
  constructor(
    private userDetailsService: UserDetailsService,
    private route: ActivatedRoute
  ) { 
    this.userDetailsService= userDetailsService
    this.route= route;
  }

  ngOnInit(): void {

    this.route.paramMap
    .subscribe(params => {
      const login = params.get('login')
      this.showUser(login)
    })
  }

  showUser(login){
    this.userDetailsService.getUser(login)
    .subscribe((data) => this.user = { ...data })
  }

}
