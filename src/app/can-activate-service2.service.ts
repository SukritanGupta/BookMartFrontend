import { Injectable } from '@angular/core';
import { ActivateRouteServiceService } from './activate-route-service.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService2Service  implements CanActivate{

  constructor(private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
       if(sessionStorage.length!=0){
        this.router.navigateByUrl("createComponent");
        return false;
       }
       return true;
    }
}
