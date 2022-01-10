import { Component, OnInit } from '@angular/core';
import {Permission, UserFull} from "../models/model";
import {UseroService} from "../service/usero.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:UserFull;

  permissions_string = ["CAN_READ_USERS","CAN_CREATE_USERS","CAN_UPDATE_USERS","CAN_DELETE_USERS","CAN_SEARCH_MACHINE"," CAN_START_MACHINE","CAN_STOP_MACHINE","CAN_RESTART_MACHINE"," CAN_CREATE_MACHINE","CAN_DESTROY_MACHINE"]


  permissions:Permission[] = [{ value: "CAN_READ_USERS" },{ value: "CAN_CREATE_USERS" }, { value: "CAN_UPDATE_USERS" }, { value: "CAN_DELETE_USERS" }]


  permissions_selected:boolean[] = [false,false,false,false]


  constructor(private service:UseroService) {
    this.user = {userId:0,email:'',firstname:'',lastname:'',password:'',permissions:[]}
  }

  ngOnInit(): void {
  }

  insert() {
    for(let i=0;i<4;i++){
      if(this.permissions_selected[i]){
        this.user.permissions.push(this.permissions[i]);
      }
    }
    console.log(this.user);
    this.service.insertUser(this.user)?.subscribe(res => {
      console.log(res);
    })
  }

  onCheckChange(event: any){
    console.log(event)
    console.log(this.permissions_selected)
  }

  containsPermission(permission:string):boolean{
    if(localStorage.getItem('jwt') == null)
      return false;
    let permissionList = this.service.permissionsFromJWT(localStorage.getItem('jwt'));
    return permissionList.includes(permission)
  }
}
