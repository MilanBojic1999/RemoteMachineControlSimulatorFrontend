import {Component, OnInit} from '@angular/core';
import {Machines} from "../models/model";
import {MachinesService} from "../service/machines.service";
import {UseroService} from "../service/usero.service";
import {ActionPerformerComponent} from "../action-performer/action-performer.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SearchComponentComponent} from "../search-component/search-component.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-mach',
  templateUrl: './show-mach.component.html',
  styleUrls: ['./show-mach.component.css']
})
export class ShowMachComponent implements OnInit {

  machines:Machines[];
  displayedColumns:string[] = ['Id','Name','Status','Data Created'];

  selectedMachine:Machines|null;

  constructor(private service:MachinesService,private usero_service:UseroService,
              public dialog:MatDialog,private snackBar: MatSnackBar,private router:Router) {
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

  setShownMachines(machines:Machines[]){
    if(machines.length == 0){
      this.snackBar.open("There isn't any machine to show","OK");
    }
    this.machines = machines;
  }

  makeAction(name:string){
    if(this.selectedMachine == null && name != "create"){
      this.snackBar.open("You haven't selected any machine, to "+name+" it","OK");
      return
    }
    let id = -1;
    if(this.selectedMachine)
      id = this.selectedMachine.id;

    const dialogg = this.dialog.open(ActionPerformerComponent,{
      width: '400px',
      data: {actionName:name,machId:id,machineName:''}
    });

    dialogg.afterClosed().subscribe((res) => {
      console.log("Why ",res)
      if(res != true)
        this.snackBar.open(res,"OK")
    })
  }

  openSearchDialog(){
    let dia = this.dialog.open(SearchComponentComponent,{
      width: '350px'
    });

    const ccn = dia.componentInstance.onSearch.subscribe(res => {
      this.setShownMachines(res)
      console.log(res);
    })
  }

  goToInsertMach(){
    this.router.navigate(['/insertMachines']).then(r => console.log(r))
  }

}
