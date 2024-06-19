import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailsService } from './user-details.service';

@Injectable({
  providedIn: 'root'
})
export class GetJwtTokenServiceService {
  // token:string;
  tokenData:{
    userName:string ,
    password:string
  }={
    userName:"Amu",
    password:"aman"
  };
  constructor(private http:HttpClient,private userService:UserDetailsService) { }
  getToken() {
    // this.http.post("http://localhost:8081/login",this.tokenData,{responseType: 'json'}).subscribe(response=>{
    //   console.log(response['token']);
    //   this.token=response['token'];
    // },error=>{
    //   console.log("Not able to fetch , it gives error");
    // })
    // return this.token;
    this.tokenData['userName']=this.userService.userName.getValue();
    this.tokenData['password']=this.userService.password.getValue();
    console.log("Token data is :"+this.tokenData['userName'])
    return this.http.post("http://localhost:8081/login",this.tokenData,{responseType: 'json'});
  }
}
