import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ShowUsersComponent} from "./show-users/show-users.component";
import {RoutingGuard} from "./routing-guard";



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "show",
    component: ShowUsersComponent,
    canActivate: [RoutingGuard]
  }
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
