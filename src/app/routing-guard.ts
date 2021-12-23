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
    return true;
  }

}
