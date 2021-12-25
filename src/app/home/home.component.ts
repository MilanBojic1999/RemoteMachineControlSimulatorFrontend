import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: string;

  constructor(private route: ActivatedRoute,private router:Router) {
    this.token = "";
  }

  ngOnInit(): void {
    if(localStorage.getItem("jwt") == null){
      this.router.navigate(['/login']).then(r => console.log(r))
    }else{
      this.token = <string>localStorage.getItem("jwt")
    }
  }

}
