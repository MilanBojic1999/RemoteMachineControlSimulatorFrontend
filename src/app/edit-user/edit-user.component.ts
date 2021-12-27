import { Component, OnInit } from '@angular/core';
import {Permission, UserFull} from "../models/model";
import {UseroService} from "../service/usero.service";
import {Router} from "@angular/router";

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

  constructor(private service:UseroService,private router:Router) {
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

  edit_user():void{
    if(this.user==null || this.user?.email.length == 0 || this.user?.firstname.length == 0 || this.user?.lastname.length == 0){
      return
    }
    console.log(this.user)
    this.service.updateUser(this.user)?.subscribe(res => {
      this.user = res;
      window.location.reload();
    })
  }

  delete_user():void{
    console.log('To delete: '+this.user?.userId);
    if(this.user==null){
      return;
    }

    this.service.deleteUser(this.user)?.subscribe(() => {
      this.router.navigate(['/home']).then();
    })

  }
}
