import { Pipe, PipeTransform } from '@angular/core';
import {Permission} from "../models/model";
import {map} from "rxjs/operators";

@Pipe({
  name: 'permissionsPipe'
})
export class PermissionsPipePipe implements PipeTransform {

  transform(jwt:string): string[] {
    let a = jwt.split('by ')[1];
    a = a.split('.')[1]
    a = atob(a);
    let dict = JSON.parse(a);
    return dict['permissions']
  }

}
