import {Component, OnInit} from '@angular/core';
import {Machines} from "../models/model";
import {MachinesService} from "../service/machines.service";
import {UseroService} from "../service/usero.service";
import {ActionPerformerComponent} from "../action-performer/action-performer.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-show-mach',
  templateUrl: './show-mach.component.html',
  styleUrls: ['./show-mach.component.css']
})
export class ShowMachComponent implements OnInit {

  machines:Machines[];
  displayedColumns:string[] = ['Id','Status','Data Created'];

  selectedMachine:Machines|null;

  constructor(private service:MachinesService,private usero_service:UseroService,public dialog:MatDialog,private snackBar: MatSnackBar) {
    this.selectedMachine = null;
    this.machines = [];
  }

  containsPermission(permission:string):boolean{
    if(localStorage.getItem('jwt') == null)
      return false;
    let permissionList = this.usero_service.permissionsFromJWT(localStorage.getItem('jwt'));
    return permissionList.includes(permission)
  }


  ngOnInit(): void {
    this.service.searchAll().subscribe(res => {
      this.machines = res
      console.log(this.machines)
    });

  }

  selectMachine(mach:Machines){
    this.selectedMachine = mach;
    console.log(this.selectedMachine);
  }

  makeAction(name:string){
    if(this.selectedMachine == null && name != "create"){
      this.snackBar.open("You haven't selected any machine, to "+name+" it","OK");
      return
    }
    let id = -1;
    if(this.selectedMachine)
      id = this.selectedMachine.id;

    const dialog = this.dialog.open(ActionPerformerComponent,{
      width: '400px',
      data: {actionName:name,machId:id}
    });

    dialog.afterClosed().subscribe(() => {
      console.log("Why")
    })
  }

}
