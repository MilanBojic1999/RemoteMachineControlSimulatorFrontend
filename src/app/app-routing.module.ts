import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ShowUsersComponent} from "./show-users/show-users.component";
import {RoutingGuard} from "./routing-guard";
import {LoginComponent} from "./login/login.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddUserComponent} from "./add-user/add-user.component";



const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "show",
    component: ShowUsersComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "edit",
    component: EditUserComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "insert",
    component: AddUserComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  }
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
