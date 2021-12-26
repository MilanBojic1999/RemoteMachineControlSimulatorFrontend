import { Component, OnInit } from '@angular/core';
import {Permission, UserFull} from "../models/model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:UserFull|null;
  permissions_string:string[] = ['CAN_READ_USERS','CAN_CREATE_USERS','CAN_UPDATE_USERS','CAN_DELETE_USERS'];
  permissions:Permission[] = [{ value: "CAN_READ_USERS" },{ value: "CAN_CREATE_USERS" }, { value: "CAN_UPDATE_USERS" }, { value: "CAN_DELETE_USERS" }]

  permissions_map:Map<string,number> = new Map<string, number>([['CAN_READ_USERS', 0],['CAN_CREATE_USERS', 1],['CAN_UPDATE_USERS', 2],['CAN_DELETE_USERS', 3 ]])

  permissions_selected:boolean[] = [false,false,false,false]

  constructor() {
    this.user = {userId:-1,email:'123',firstname:'sd',lastname:'ssss',password:'pwd',permissions:[{ value: "CAN_READ_USERS" }]}
    console.log(this.permissions);

    for(let user_per of this.user.permissions){
      let index = this.permissions_map.get(user_per.value);
      if(index == null){
        console.log(user_per);
        break;
      }
      this.permissions_selected[index] = true;
    }

  }

  ngOnInit(): void {
  }

  onCheckChange(event: any){
    console.log(event)
    console.log(this.permissions_selected)
  }
}
