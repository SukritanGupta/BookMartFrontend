import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  constructor(private http:HttpClient) { }
  getToken() {
    // this.http.post("http://localhost:8081/login",this.tokenData,{responseType: 'json'}).subscribe(response=>{
    //   console.log(response['token']);
    //   this.token=response['token'];
    // },error=>{
    //   console.log("Not able to fetch , it gives error");
    // })
    // return this.token;
    return this.http.post("http://localhost:8081/login",this.tokenData,{responseType: 'json'});
  }
}
