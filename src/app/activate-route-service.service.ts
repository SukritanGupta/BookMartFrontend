import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivateRouteServiceService implements CanActivate{
  isLogin:boolean=false;
  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.isLogin==false && sessionStorage.length==0){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
