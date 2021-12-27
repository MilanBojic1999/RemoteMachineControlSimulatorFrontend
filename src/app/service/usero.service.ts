import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UserDTO, UserFull} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class UseroService {

  private readonly apiUrl = environment.postApi;


  constructor(private httpClient:HttpClient) {
    console.log("Backend line is connecting...")
  }

  login(email:string,password:string){
    let body = {'email':email,'password':password};
    let path = this.apiUrl + '/login';

    return this.httpClient.post<string>(path,JSON.stringify(body),{

      headers: new HttpHeaders().set("Content-Type","application/json")

    });
  }

  getUsers(){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl + '/show/all';
    return this.httpClient.get<UserDTO[]>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    })
  }



  deleteUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;
    let id = user.userId;
    let path = this.apiUrl + '/edit/delete';

    return this.httpClient.post<any>(path,null,{
      headers: new HttpHeaders().set('Authorization',jwt),
      params: new HttpParams().set("id",id)
    });
  }

  updateUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;

    let path = this.apiUrl + '/edit'

    let body = JSON.stringify(user);

    return this.httpClient.post<UserFull>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt)
    });
  }

  insertUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;

    let path = this.apiUrl + '/add'

    let body = JSON.stringify(user);

    return this.httpClient.post<UserFull>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt)
    });
  }

}
