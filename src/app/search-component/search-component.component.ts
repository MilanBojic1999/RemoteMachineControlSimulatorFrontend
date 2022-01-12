import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MachinesService} from "../service/machines.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Machines, searchCriteria} from "../models/model";
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

  onSearch:EventEmitter<Machines[]>;

  pipe = new DatePipe('en-US');

  constructor(private service:MachinesService,
              public dialogRef:MatDialogRef<SearchComponentComponent>) {
    this.name = new FormControl('');
    this.status = new FormControl('');
    this.dateFrom = new FormControl();
    this.dateTo = new FormControl();
    this.onSearch = new EventEmitter<Machines[]>();
  }



  ngOnInit(): void {
  }

  search(){
    console.log(this.name.value,this.status.value,this.dateFrom.value,this.dateTo.value)
    let critics:searchCriteria[] = []
    if (this.name.value){
      critics.push({key: "name", value: this.name.value})
    }

    if (this.status.value){
      critics.push({key: 'status', value: this.status.value})
    }
    if (this.dateFrom.value){
      let date_txt = this.pipe.transform(this.dateFrom.value,'dd-MM-yyyy')
      critics.push({key: 'dateFrom',value: date_txt})
    }
    if (this.dateTo.value){
      let date_txt = this.pipe.transform(this.dateTo.value,'dd-MM-yyyy')
      critics.push({key:'dateTo', value: date_txt})
    }
    console.log(critics)
    this.service.search(critics).subscribe(res => {
      console.log(res)
      this.onSearch.emit(res);
      this.dialogRef.close();
    })
  }


}
