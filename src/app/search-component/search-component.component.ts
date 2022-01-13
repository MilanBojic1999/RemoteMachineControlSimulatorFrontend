import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MachinesService} from "../service/machines.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData, Machines, searchCriteria, SearchData} from "../models/model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  name:FormControl;
  status:FormControl;
  dateFrom:FormControl;
  dateTo:FormControl;

  options: string[] = ['STOPPED','RUNNING']

  onSearch:EventEmitter<SearchData>;


  constructor(private service:MachinesService,
              public dialogRef:MatDialogRef<SearchComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SearchData) {
    this.name = new FormControl(data.name);
    this.status = new FormControl(data.status);
    this.dateFrom = new FormControl(data.dateFrom);
    this.dateTo = new FormControl(data.dateTo);
    this.onSearch = new EventEmitter<SearchData>();
  }



  ngOnInit(): void {
  }

  search() {
    this.onSearch.emit({name:this.name.value,status:this.status.value,dateFrom:this.dateFrom.value,dateTo:this.dateTo.value});
    this.dialogRef.close();

  }


}
