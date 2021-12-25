import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private route: ActivatedRoute, private router:Router) {
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {

  }

  login(): void {
    if(this.email.length == 0 || this.password.length == 0)
      return
    let result = this.email + "-" +this.password;
    localStorage.setItem("jwt",result);
    this.router.navigate(["/home"]).then()
  }
}
