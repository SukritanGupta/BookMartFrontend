import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username:string="";
  password:string="";
    onSubmit(){
        console.log(this.username);
        console.log(this.password);
    }
}