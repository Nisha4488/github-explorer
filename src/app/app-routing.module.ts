import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { UserDetailsComponent } from './user-details/user-details.component'


const routes: Routes = [
  {path:'', component: UsersComponent, pathMatch: 'full'},
  {path:'users/:login', component: UserDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
