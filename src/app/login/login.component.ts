import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivateRouteServiceService } from '../activate-route-service.service';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string="";
  password:string="";
  login:boolean;
  isPasswordVisible: boolean = false;
  tokenData:{
    userName:string ,
    password:string
  }={
    userName:"",
    password:""
  };
  invalid:boolean=false;
  messageType:string="danger"
  messageOpen:boolean=false;
  message:string="";
  constructor( private userService:UserDetailsService,  private router: Router,private activateService:ActivateRouteServiceService,private http:HttpClient) { }
    onSubmit(){
        console.log(this.username);
        console.log(this.password);
   this.tokenData["userName"]=this.username;
   this.tokenData["password"]=this.password;
      console.log(this.tokenData);
  this.http.post("http://localhost:8081/login",this.tokenData,{responseType: 'json'}).subscribe(response=>{
    this.login=true;
    this.userService.userName.next(this.username);
    this.userService.password.next(this.password);

    this.router.navigate(['/createComponent']);
    this.activateService.isLogin=true;
    sessionStorage.setItem("login",'true');
    },error=>{
      console.log(error.statusText)
      this.login=false;
      this.invalid=true;
      this.messageOpen=true;
      this.message="Sorry this user not exist .Please enter valid userName and password";
      if(error.statusText=="Unknown Error"){
        this.message="Sorry Server not found Please try later";
      }
    })



        // this.login=true;
        // If authenticate then move to createComponent and other component , else you will get error message 
        // of non authenticate . 
        // Prior to authentication , user not able to access any other route.
        // after successful login , login route is deactivated and register route deactivated.
        // this.router.navigate(['/createComponent']);
        // this.activateService.isLogin=true;
        // sessionStorage.setItem("login",'true');
        // If unsuccessfull login then  this.activateService.isLogin=false;
    }
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      const passwordField = document.getElementById('password') as HTMLInputElement;
      if (this.isPasswordVisible) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    }
    registerYourSelf(){
      console.log("register")
      // window.location.href = '/register';
      this.router.navigate(['/register']);
    }
    removeMessage(){
      this.messageOpen=false;
    }
}
