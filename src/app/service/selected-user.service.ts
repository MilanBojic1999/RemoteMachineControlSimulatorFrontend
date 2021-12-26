import { Injectable } from '@angular/core';
import {UserFull} from "../models/model";

@Injectable({
  providedIn: 'root'
})
export class SelectedUserService {

  user:UserFull|null;

  constructor() {
    this.user = null;
  }

  public setUser(user:UserFull){
    this.user = user;
  }

  public getUser():UserFull|null{
    return this.user;
  }
}
