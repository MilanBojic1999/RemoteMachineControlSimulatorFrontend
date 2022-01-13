import { Component, OnInit } from '@angular/core';
import { UserFull} from "../models/model";
import {UseroService} from "../service/usero.service";
import {error} from "@angular/compiler/src/util";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:UserFull;

  permissions_string:string[] = ["CAN_READ_USERS"," CAN_CREATE_USERS"," CAN_UPDATE_USERS"," CAN_DELETE_USERS"," CAN_SEARCH_MACHINE"," CAN_START_MACHINE"," CAN_STOP_MACHINE"," CAN_RESTART_MACHINE"," CAN_CREATE_MACHINE"," CAN_DESTROY_MACHINE"]


  permissions_selected:boolean[] = [false,false,false,false,false,false,false,false,false,false]


  constructor(private service:UseroService,private snackBar:MatSnackBar) {
    this.user = {userId:0,email:'',firstname:'',lastname:'',password:'',permissions:[]}
  }

  ngOnInit(): void {
  }

  insert() {
    for(let i=0;i<4;i++){
      if(this.permissions_selected[i]){
        this.user.permissions.push({value:this.permissions_string[i]});
      }
    }
    console.log(this.user);
    this.service.insertUser(this.user)?.subscribe(res => {
      console.log(res);
    },
    error => {
      this.snackBar.open("Couldn't add given user","OK")
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
