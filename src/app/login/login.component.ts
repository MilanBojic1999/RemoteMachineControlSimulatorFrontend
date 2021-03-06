import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UseroService} from "../service/usero.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  result:string;

  constructor(private route: ActivatedRoute, private router:Router,private service:UseroService,private snackBar: MatSnackBar) {
    this.email = "root@gmail.com";
    this.password = "root";
    this.result = "";
  }

  ngOnInit(): void {

  }

  login(): void {
    if(this.email.length == 0 || this.password.length == 0)
      return
    this.service.login(this.email,this.password).subscribe(res => {

      console.log("WHat",res)
      res = Object.values(res)[0];
      console.log(res);
      this.result = res

      if(this.result.length == 0) {
        console.log(this.result)
        return
      }
      localStorage.setItem("jwt",this.result);
      this.router.navigate(["/home"]).then()
    },
      error => {
        this.snackBar.open("We couldn't login you","OK");
      })

  }
}
