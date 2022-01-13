import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActionPerformerComponent} from "../action-performer/action-performer.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-insert-mach',
  templateUrl: './insert-mach.component.html',
  styleUrls: ['./insert-mach.component.css']
})
export class InsertMachComponent implements OnInit {

  name:string;

  constructor(public dialog:MatDialog) {
    this.name = '';
  }

  ngOnInit(): void {
    console.log("Whros")


  }

  openDialog(){
    const dialog = this.dialog.open(ActionPerformerComponent,{
        width: '400px',
        data: {actionName:'create',machId:1,machineName:this.name}
    });

    dialog.afterClosed().subscribe(() => {
      console.log("Why")
    })
  }

}
