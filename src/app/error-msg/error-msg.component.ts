import { Component, OnInit } from '@angular/core';
import {ErrorMsg} from "../models/model";
import {MachinesService} from "../service/machines.service";

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  errors:ErrorMsg[];
  displayedColumns:string[] = ['Id','Massage','Machines','Action name','Data Occurred'];


  constructor(private service:MachinesService) { this.errors = [] }

  ngOnInit(): void {
    this.service.errorMassages().subscribe(res => {
      console.log(res)

      this.errors = res;
    });
  }

}
