import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;

  constructor(private router:Router,private snackBar:MatSnackBar) {
    this.token = "";
  }

  ngOnInit(): void {
    if(localStorage.getItem("jwt") == null){
      this.router.navigate(['/login']).then(r => console.log(r))
    }else{
      this.token = <string>localStorage.getItem("jwt")
      let a = this.token.split('by ')[1];
      a = a.split('.')[1]
      this.token = atob(a);
      let dict = JSON.parse(this.token);
      let pparr = <String[]> dict['permissions']
      if(pparr.length==0){
        this.snackBar.open("You don't have any permissions","Understood");
      }
    }
  }

  logout() {
    localStorage.removeItem("jwt")
    this.router.navigate(['/login']).then(r => console.log(r))

  }
}
