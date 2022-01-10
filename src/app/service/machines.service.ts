import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

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
    return throwError("somzhing happ")
  }

  insert(){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/create';
    return this.httpClient.post<boolean>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(MachinesService.handleError));
  }

  delete(){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/destroy';
    return this.httpClient.post<boolean>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(MachinesService.handleError));
  }

  start(){
    let jwt = localStorage.getItem("jwt")
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.machAddon + '/start';
    return this.httpClient.post<boolean>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(MachinesService.handleError));
  }
}
