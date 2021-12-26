import { Component, OnInit } from '@angular/core';
import {UserDTO} from "../models/model";
import {UseroService} from "../service/usero.service";

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {


  users: UserDTO[];
  displayedColumns: string[] = ['position','email','firstname','lastname','permissions','edit'];

  constructor(private backend_service:UseroService) {
    this.users = []
  }

  ngOnInit(): void {
    this.backend_service.getUsers().subscribe(res =>{
      this.users = res;
    });
  }

  public edit(user:UserDTO){
    console.log(user)
  }

}
