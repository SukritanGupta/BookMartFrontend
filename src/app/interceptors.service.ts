import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mergeMap, Observable, throwError } from 'rxjs';
import { GetJwtTokenServiceService } from './get-jwt-token-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor{
  tokenData:{
    userName:string ,
    password:string
  }={
    userName:"Amu",
    password:"aman"
  };

  constructor(private getJwtTokenService:GetJwtTokenServiceService){

  }
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting the request ");
    if(req.url=="http://localhost:8081/login" || req.url=="http://localhost:8081/register"){
      console.log("call for interepting the call for login");
      return next.handle(req);
      
    }
    return  this.getJwtTokenService.getToken().pipe(mergeMap((token: string) => {
      // Clone the request and add the token to the Authorization header
    console.log("token is :",token['token']);
      if (token) {
        req = req.clone({
          setHeaders: {
            authorization: `Bearer ${token['token']}`
            ,'Content-Type': 'application/json','Accept': 'application/json'}, responseType: 'json'
          
        });
      }

      // Pass the modified request to the next handler
      return next.handle(req);
})
    
   )}
 
 }

// }
