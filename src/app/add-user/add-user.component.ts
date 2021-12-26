import { Component, OnInit } from '@angular/core';
import {Permission, UserFull} from "../models/model";

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


  constructor() {
    this.user = {userId:0,email:'',firstname:'',lastname:'',password:'',permissions:[]}
  }

  ngOnInit(): void {
  }

  insert() {

  }

  onCheckChange(event: any){
    console.log(event)
    console.log(this.permissions_selected)
  }
}
