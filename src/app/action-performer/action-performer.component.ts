import {Component, Inject, OnInit} from '@angular/core';
import {MachinesService} from "../service/machines.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-action-performer',
  templateUrl: './action-performer.component.html',
  styleUrls: ['./action-performer.component.css']
})
export class ActionPerformerComponent implements OnInit {

  firstDialog:boolean;

  constructor(private service:MachinesService,
              public dialogRef:MatDialogRef<ActionPerformerComponent>,
              @Inject(MAT_DIALOG_DATA) public actionName: string) {
    console.log("dialog is Open: " + actionName)
    dialogRef.disableClose = true;
    this.firstDialog = true;
  }

  ngOnInit(): void {
  }

  sendAction(){
    this.dialogRef.close()
  }

  scheduleAction(){
    this.firstDialog = false;
    //this.dialogRef.close()
  }

  close(){
    this.dialogRef.close()
  }


}
