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

  permissions_selected:boolean[] = [false,true,false,false]

  constructor() {
    this.user = {userId:-1,email:'123',firstname:'sd',lastname:'ssss',password:'pwd',permissions:[{ value: "CAN_READ_USERS" }]}
    console.log(this.permissions);
  }

  ngOnInit(): void {
  }

  onCheckChange(event: any){
    console.log(event)
    console.log(this.permissions_selected)
  }
}
