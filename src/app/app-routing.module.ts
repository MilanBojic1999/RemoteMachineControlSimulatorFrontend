import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ShowUsersComponent} from "./show-users/show-users.component";
import {RoutingGuard} from "./routing-guard";
import {LoginComponent} from "./login/login.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ShowMachComponent} from "./show-mach/show-mach.component";
import {InsertMachComponent} from "./insert-mach/insert-mach.component";
import {ErrorMsgComponent} from "./error-msg/error-msg.component";
import {MachineInfoComponent} from "./machine-info/machine-info.component";



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
    path: "showMachines",
    component: ShowMachComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "insertMachines",
    component: InsertMachComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "errors",
    component: ErrorMsgComponent,
    canActivate: [RoutingGuard]
  },
  {
    path: "infoMachine",
    component: MachineInfoComponent,
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
