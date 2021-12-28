import {ActivatedRouteSnapshot, CanActivate,UrlTree, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route.url.join(''))
    let permissions = RoutingGuard.permissionsFromJWT(localStorage.getItem("jwt"))
    let url = route.url.join('')
    if(url.endsWith("edit")){
      for(let per of permissions){
        if(per == "CAN_UPDATE_USERS")
          return true;
      }
      return false;
    }else if(url.endsWith("insert")){
      for(let per of permissions){
        if(per == "CAN_CREATE_USERS")
          return true;
      }
      return false;
    }else if(url.endsWith("show")){
      for(let per of permissions){
        if(per == "CAN_READ_USERS")
          return true;
      }
      return false;
    }
    return true;
  }

  private static permissionsFromJWT(jwt: string | null): string[] {
    if(jwt==null)
      return []
    let a = jwt.split('by ')[1];
    a = a.split('.')[1]
    a = atob(a);
    let dict = JSON.parse(a);
    return dict['permissions']
  }

}
