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

  permissions:Permission[] = [{ value: "CAN_READ_USERS" },{ value: "CAN_CREATE_USERS" }, { value: "CAN_UPDATE_USERS" }, { value: "CAN_DELETE_USERS" }]

  permissions_map:Map<string,number> = new Map<string, number>([['CAN_READ_USERS', 0],['CAN_CREATE_USERS', 1],['CAN_UPDATE_USERS', 2],['CAN_DELETE_USERS', 3 ]])

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
