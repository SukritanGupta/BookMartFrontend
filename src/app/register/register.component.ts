import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username:string="";
  password:string="";
  createUserData:{
    username:string,
    password:string,
    role:string
  }={
    username:"",
    password:"",
    role:""
  };
  messageOpen:boolean=false;
  message:string="";
  constructor(private router:Router,private http:HttpClient){

  }
    onSubmit(){
        console.log(this.username);
        console.log(this.password);
        this.createUserData['username']=this.username;
        this.createUserData['password']=this.password;
        this.createUserData['role']="USER";
        // On completion of successful registeration ,user move to login page after 5 sec , prior success message show 
        // else error message show , field is also highlighted 
        this.http.post("http://localhost:8081/register",this.createUserData,{responseType: 'json'}).subscribe(response=>{
          if(response['token']==null){
            this.messageOpen=true;
            this.message="Sorry this user already exist please enter another userName";
          }
          else{
            this.router.navigate(['/']);
          }
          },error=>{
            this.messageOpen=true;
            this.message="Sorry this user already exist please enter another userName";
            if(error.statusText=="Unknown Error"){
              this.message="Sorry Server not found Please try later";
            }
          })
        
    }
    login(){
      this.router.navigate(['/']);
    }
    removeMessage(){
      this.messageOpen=false;
    }
}
