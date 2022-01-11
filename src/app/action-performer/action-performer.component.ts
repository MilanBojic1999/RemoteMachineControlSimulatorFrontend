import {Component, Inject, OnInit} from '@angular/core';
import {MachinesService} from "../service/machines.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {DialogData} from "../models/model";
import {DatePipe} from "@angular/common";

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

  pipe = new DatePipe('en-US')

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

    let full_time = ""

    if(this.time) {
      let date_txt = this.pipe.transform(this.date.value,'dd-MM-yyyy')
      full_time = date_txt + " " + this.time + ":00";
    }

    console.log("Date",full_time)

    switch (this.data.actionName) {
      case 'create':{
        this.service.insert(full_time).subscribe(()=>{
          this.close();
        });
        break;
      }
      case 'start':{
        this.service.start(this.data.machId,full_time).subscribe(()=>{
          this.close();
        });
        break;
      }
      case 'stop':{
        this.service.stop(this.data.machId,full_time).subscribe(()=>{
          this.close();
        });
        break;
      }
      case 'restart':{
        this.service.restart(this.data.machId,full_time).subscribe(()=>{
          this.close();
        });
        break;
      }
      case 'delete':{
        this.service.delete(this.data.machId,full_time).subscribe(()=>{
          this.close();
        });
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
