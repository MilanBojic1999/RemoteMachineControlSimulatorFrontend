import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {MachinesService} from "../service/machines.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  name:FormControl;
  status:string;
  dateFrom:FormControl;
  dateTo:FormControl;

  constructor(private service:MachinesService,
              public dialogRef:MatDialogRef<SearchComponentComponent>) {
    this.name = new FormControl('');
    this.status = '';
    this.dateFrom = new FormControl();
    this.dateTo = new FormControl();
  }

  ngOnInit(): void {
  }

  setStatus(status:string){
    this.status = status;
  }

}
