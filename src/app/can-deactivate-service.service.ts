import { Injectable, signal } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

// interface 
export interface CanComponentDeactivate{
  canDeactivate:()=>Observable<boolean> |Promise<boolean> |boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateServiceService implements CanDeactivate<CanComponentDeactivate> {
  // notMove:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
   count=signal(false);
   nextState1=signal("");
  constructor() { }
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
     this.nextState1.update(state=>nextState.url.toString());
     console.log("next state is"+this.nextState1())
    return component.canDeactivate();
  }
}
