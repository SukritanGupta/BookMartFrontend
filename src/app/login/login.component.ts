import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string="";
  password:string="";
    onSubmit(){
        console.log(this.username);
        console.log(this.password);
    }
}
