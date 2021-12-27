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
  displayedColumns: string[] = ['position','email','firstname','lastname','permissions','edit','delete'];

  constructor(private backend_service:UseroService, private selected_service:SelectedUserService, private router:Router) {
    this.users = []
  }

  ngOnInit(): void {
    this.backend_service.getUsers().subscribe(res =>{
      this.users = res;
    });
  }

  public edit(user:UserDTO){
    console.log('To edit:',user);
    const full_user: UserFull = {
      userId: user.userId,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      password: "",
      permissions: user.permissions.map<Permission>(val => {return {value:val.toString()}})
    }

    this.selected_service.setUser(full_user);

    this.router.navigate(['/edit']).then(r => console.log(r))

  }


  goToInsert() {
    this.router.navigate(['/insert']).then(r => console.log(r))
  }

  delete(userDTO:UserDTO) {
    if(userDTO==null){
      return;
    }
    let user:UserFull = {userId:userDTO.userId,email:'',firstname:'',lastname:'',password:'',permissions:[]}
    console.log(user)
    console.log('To delete: '+user?.userId);


    this.backend_service.deleteUser(user)?.subscribe(() => {
      this.router.navigate(['/home']).then();
    })
  }

  containsPermission(permission:string):boolean{
    if(localStorage.getItem('jwt') == null)
      return false;
    let permissionList = this.backend_service.permissionsFromJWT(localStorage.getItem('jwt'));
    return permissionList.includes(permission)
  }
}
