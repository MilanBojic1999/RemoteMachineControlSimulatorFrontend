import { Component, OnInit } from '@angular/core';
import {Machines} from "../models/model";

@Component({
  selector: 'app-show-mach',
  templateUrl: './show-mach.component.html',
  styleUrls: ['./show-mach.component.css']
})
export class ShowMachComponent implements OnInit {

  machines:Machines[];
  displayedColumns:string[] = ['Id','Status','Data Created'];

  constructor() {
    this.machines = []
  }

  ngOnInit(): void {
  }

}
