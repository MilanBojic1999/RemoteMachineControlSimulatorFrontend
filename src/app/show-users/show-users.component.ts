import { Component, OnInit } from '@angular/core';
import {Permission, UserDTO, UserFull} from "../models/model";
import {UseroService} from "../service/usero.service";
import {SelectedUserService} from "../service/selected-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {


  users: UserDTO[];
  displayedColumns: string[] = ['position','email','firstname','lastname','permissions','edit'];

  constructor(private backend_service:UseroService, private selected_service:SelectedUserService, private router:Router) {
    this.users = []
  }

  ngOnInit(): void {
    this.backend_service.getUsers().subscribe(res =>{
      this.users = res;
    });
  }

  public edit(user:UserDTO){
    console.log(user)
    const full_user: UserFull = {
      userId: user.userId,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      password: "",
      permissions: user.permissions
    }

    this.selected_service.setUser(full_user);

    this.router.navigate(['/edit']).then(r => console.log(r))

  }


}
