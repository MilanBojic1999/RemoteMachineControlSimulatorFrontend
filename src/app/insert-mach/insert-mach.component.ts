import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActionPerformerComponent} from "../action-performer/action-performer.component";

@Component({
  selector: 'app-insert-mach',
  templateUrl: './insert-mach.component.html',
  styleUrls: ['./insert-mach.component.css']
})
export class InsertMachComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    console.log("Whros")


  }

  openDialog(){
    const dialog = this.dialog.open(ActionPerformerComponent,{
        width: '400px',
        data: {actionName:'Start',machId:1}
    });

    dialog.afterClosed().subscribe(() => {
      console.log("Why")
    })
  }

}
