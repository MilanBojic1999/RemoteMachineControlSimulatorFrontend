import { Component, OnInit } from '@angular/core';
import {ErrorMsg} from "../models/model";

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  errors:ErrorMsg[];
  displayedColumns:string[] = ['Id','Massage','Data Occurred'];


  constructor() { this.errors = [] }

  ngOnInit(): void {
  }

}
