import { Component, OnInit } from '@angular/core';
import { UserFull} from "../models/model";
import {UseroService} from "../service/usero.service";
import {Router} from "@angular/router";
import {SelectedUserService} from "../service/selected-user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:UserFull|null;
  permissions_string:string[] = ["CAN_READ_USERS","CAN_CREATE_USERS","CAN_UPDATE_USERS","CAN_DELETE_USERS","CAN_SEARCH_MACHINE","CAN_START_MACHINE","CAN_STOP_MACHINE","CAN_RESTART_MACHINE","CAN_CREATE_MACHINE","CAN_DESTROY_MACHINE"]

  permissions_selected:boolean[] = [false,false,false,false,false,false,false,false,false,false]

  editingCurrentUser:boolean = false;

  constructor(private service:UseroService,private selected_service:SelectedUserService,private router:Router,private snackBar: MatSnackBar) {
    this.user = {userId:-1,email:'123',firstname:'sd',lastname:'ssss',password:'pwd',permissions:[{ value: "CAN_READ_USERS" }]}
    //console.log(this.permissions);



  }

  private static getEmailFromJWT(jwt:string|null){
    if(jwt==null)
      return []
    let a = jwt.split('by ')[1];
    a = a.split('.')[1]
    a = atob(a);
    let dict = JSON.parse(a);
    return dict['email']
  }

  ngOnInit(): void {
    this.user = this.selected_service.getUser();
    this.editingCurrentUser = this.user?.email === EditUserComponent.getEmailFromJWT(localStorage.getItem('jwt'))
    console.log(this.user)
    if(this.user==null){
      console.log('ERROR')
    }else{
      this.permissions_selected= [false,false,false,false,false,false,false,false,false,false]

      for(let user_per of this.user.permissions){
        console.log(user_per)
        for(let index=0;index<10;index++) {
          if(this.permissions_string[index] == user_per.value) {
            this.permissions_selected[index] = true;
            break
          }else{
            console.log(index,'|0000|',user_per.value,'|');
          }
        }
      }
      console.log(this.permissions_selected)

    }
  }

  onCheckChange(event: any){
    console.log(event)
    console.log(this.permissions_selected)
  }

  edit_user():void{
    if(this.user==null || this.user?.email.length == 0 || this.user?.firstname.length == 0 || this.user?.lastname.length == 0){
      return
    }
    this.user.permissions = [];
    for(let i=0;i<10;i++){
      if(this.permissions_selected[i]){
        this.user.permissions.push({value:this.permissions_string[i]});
      }
    }

    console.log(this.user)
    this.service.updateUser(this.user)?.subscribe(res => {
          this.user = res;
          if(this.editingCurrentUser)
            this.router.navigate(['/login']).then();
    },() => {
          this.snackBar.open("Couldn't edit user","OK");
    })
  }

  delete_user():void{
    console.log('To delete: '+this.user?.userId);
    if(this.user==null){
      return;
    }

    this.service.deleteUser(this.user)?.subscribe(() => {
      if(this.editingCurrentUser)
        this.router.navigate(['/login']).then();
      else
        this.router.navigate(['/home']).then();
    },
      ()=> {
      this.snackBar.open("Couldn't delete user","OK");
    });

  }

  containsPermission(permission:string):boolean{
    if(localStorage.getItem('jwt') == null)
      return false;
    let permissionList = this.service.permissionsFromJWT(localStorage.getItem('jwt'));
    return permissionList.includes(permission)
  }
}
