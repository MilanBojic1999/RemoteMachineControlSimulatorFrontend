import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {UserDTO, UserFull} from "../models/model";
import {catchError, map} from "rxjs/operators";
import {of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UseroService {

  private readonly apiUrl = environment.postApi;
  private readonly userAddon = '/user'

  constructor(private httpClient:HttpClient) {
    console.log("Backend line is connecting...")

  }

  private static handleError(error:HttpErrorResponse){
    console.log('wow',error.error)
    return throwError(error.error)
  }

  login(email:string,password:string){
    let body = {'email':email,'password':password};
    let path = this.apiUrl + this.userAddon +'/login';

    return this.httpClient.post<string>(path,JSON.stringify(body),{

      headers: new HttpHeaders().set("Content-Type","application/json")

    }).pipe(catchError(UseroService.handleError));
  }



  getUsers(){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null){
      throw new Error('Empty jwt token')
    }
    let path = this.apiUrl +this.userAddon + '/show/all';
    return this.httpClient.get<UserDTO[]>(path,{
      headers: new HttpHeaders().set('Authorization',jwt)
    }).pipe(catchError(UseroService.handleError));
  }



  deleteUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;
    let id = user.userId;
    let path = this.apiUrl +this.userAddon + '/edit/delete';

    return this.httpClient.post<any>(path,null,{
      headers: new HttpHeaders().set('Authorization',jwt),
      params: new HttpParams().set("id",id)
    }).pipe(catchError(UseroService.handleError));
  }

  updateUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;

    let path = this.apiUrl +this.userAddon + '/edit'

    let user_tmp = {userId:user.userId,firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password,permissions:user.permissions.map<string>(r => {
        if(r==null){
          return '';
        }
        return r.value;
      })}

    let body = JSON.stringify(user_tmp);

    return this.httpClient.post<UserFull>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt)
        .set("Content-Type","application/json")
    }).pipe(catchError(UseroService.handleError));
  }

  insertUser(user:UserFull){
    let jwt =  localStorage.getItem('jwt');
    if(jwt == null)
      return null;

    let path = this.apiUrl +this.userAddon + '/add'

    let user_tmp = {userId:user.userId,firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password,permissions:user.permissions.map<string>(r => {
        return r.value;
      })}
    let body = JSON.stringify(user_tmp);

    return this.httpClient.post<UserFull>(path,body,{
      headers: new HttpHeaders().set('Authorization',jwt)
        .set("Content-Type","application/json")
    }).pipe(map(response => {
      catchError(() => {return of(false)})
      return response != null;
    })).pipe(catchError(UseroService.handleError));
  }


    permissionsFromJWT(jwt: string | null): string[] {
      if(jwt==null)
        return []
      let a = jwt.split('by ')[1];
      a = a.split('.')[1]
      a = atob(a);
      let dict = JSON.parse(a);
      return dict['permissions']
    }

}
