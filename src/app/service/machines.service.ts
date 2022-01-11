import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ErrorMsg, Machines} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  private readonly apiUrl = environment.postApi;
  private readonly machAddon = '/machine'

  constructor(private httpClient:HttpClient) {
    console.log("Mechanical Backend line is connecting...")
  }

  private static handleError(error:HttpErrorResponse){
    console.log(error.status)
    return throwError(error.message)
  }

  insert(date:string){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/create';

    let action_info = {id:-1,date:date};
    let body = JSON.stringify(action_info);

    return this.httpClient.post<boolean>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt)
        .set("Content-Type","application/json")
    }).pipe(catchError(MachinesService.handleError));
  }

  delete(id:number,date:string){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/destroy';

    let action_info = {id:id,date:date};
    let body = JSON.stringify(action_info);

    return this.httpClient.post<string>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt).set('id',""+id)
        .set("Content-Type","application/json"),
    }).pipe(catchError(MachinesService.handleError));
  }

  start(id:number,date:string){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/start';

    let action_info = {id:id,date:date};
    let body = JSON.stringify(action_info);

    return this.httpClient.put<string>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt).set('id',""+id)
        .set("Content-Type","application/json")
    }).pipe(catchError(MachinesService.handleError));
  }

  stop(id:number,date:string){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/stop';

    let action_info = {id:id,date:date};
    let body = JSON.stringify(action_info);

    return this.httpClient.put<string>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt).set('id',""+id)
        .set("Content-Type","application/json")
    }).pipe(catchError(MachinesService.handleError));
  }

  restart(id:number,date:string){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/restart';

    let action_info = {id:id,date:date};
    let body = JSON.stringify(action_info);

    return this.httpClient.put<string>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt).set('id',""+id)
        .set("Content-Type","application/json")
    }).pipe(catchError(MachinesService.handleError));
  }

  searchAll(){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/search/all';
    return this.httpClient.get<Machines[]>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(MachinesService.handleError));
  }


  search(){

  }

  errorMassages(){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/errors';

    return this.httpClient.get<ErrorMsg[]>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(MachinesService.handleError));

  }

}
