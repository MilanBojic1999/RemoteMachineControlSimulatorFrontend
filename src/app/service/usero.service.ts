import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserDTO} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class UseroService {

  private readonly apiUrl = environment.postApi;


  constructor(private httpClient:HttpClient) {
    console.log("Dandalion line is connecting...")
  }

  getUsers(){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl + '/show/all'
    return this.httpClient.get<UserDTO>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).subscribe();
  }
}
