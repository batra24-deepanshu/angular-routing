import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export interface IDeactivateGuard{
    canExit:()=> boolean| Promise<boolean>|Observable<boolean>;
}
export class DeactivateGuardSerice implements CanDeactivate<IDeactivateGuard>{
    constructor(){}
    canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return component.canExit()
    }
}