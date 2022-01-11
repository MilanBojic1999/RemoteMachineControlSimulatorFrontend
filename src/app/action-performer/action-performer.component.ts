import {Component, Inject, OnInit} from '@angular/core';
import {MachinesService} from "../service/machines.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {DialogData} from "../models/model";

@Component({
  selector: 'app-action-performer',
  templateUrl: './action-performer.component.html',
  styleUrls: ['./action-performer.component.css']
})
export class ActionPerformerComponent implements OnInit {

  firstDialog:boolean;
  secondDialog:boolean;
  thirdDialog:boolean;

  date:FormControl;
  time:string;

  constructor(private service:MachinesService,
              public dialogRef:MatDialogRef<ActionPerformerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log("dialog is Open: " + data.machId)
    dialogRef.disableClose = true;
    this.firstDialog = true;
    this.secondDialog = false;
    this.thirdDialog = false;
    this.time = ""
    this.date = new FormControl(new Date());
  }

  ngOnInit(): void {
  }



  sendAction(){
    this.dialogRef.close()
    let date_txt = this.date.value.toLocaleDateString().replace('.','-').replace('.','-')
    let full_time = date_txt.slice(0,-1) + " " + this.time +":00"
    console.log("Date",full_time)

    switch (this.data.actionName) {
      case 'create':{
        break;
      }
      case 'start':{
        break;
      }
      case 'stop':{
        break;
      }
      case 'restart':{
        break;
      }
      case 'delete':{
        break;
      }
      default:{
        console.log("Unknown action: ",this.data.actionName)
      }
    }

  }

  scheduleAction(){
    this.firstDialog = false;
    this.secondDialog = true;

  }

  openThirdDialog(){
    this.secondDialog = false;
    this.thirdDialog = true;
    console.log(this.date.value.time)
  }

  close(){
    this.dialogRef.close()
  }


}
