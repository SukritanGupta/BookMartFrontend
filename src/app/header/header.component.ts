import { Component, DoCheck, effect, Injector } from '@angular/core';
import { ActivateRouteServiceService } from '../activate-route-service.service';
import { Router } from '@angular/router';
import { CanDeactivateServiceService } from '../can-deactivate-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {
  ismenuItem:boolean=true;
  iscloseItem:boolean;
  toggleShow:boolean;
  isLoginUser:boolean=false;
  hide:boolean=false;
  isClose:boolean=false;
  islogout:boolean=false;
  constructor(private injector: Injector,private activateService:ActivateRouteServiceService,private router:Router,private can:CanDeactivateServiceService){
    
  }
  
  ngDoCheck(): void {
    if(sessionStorage.length!=0){
      this.isLoginUser =true;
      console.log('the value of activatedService.isLogin is :' +this.activateService.isLogin);
      console.log("the value of isLoginUser is :"+this.isLoginUser);
  //     this.can.notMove.asObservable().subscribe(resp=>{
  //       this.isClose=resp;
  //  })
  // effect(()=>{
  //   if(this.can.count()==false){
  //       this.isClose=true;
  //   }
  //   else{
  //     this.isClose=false;
  //   }
  
  // })
    }
    else{
        this.isLoginUser=false;
    }
 
    // this.hide=false;
    
  }
  openHeader(){
      this.iscloseItem=true;
      this.ismenuItem=false;
      this.toggleShow=true;
  }
  closeHeader(){
      this.iscloseItem=false;
      this.ismenuItem=true;
      this.toggleShow=false;
  }
  login(){
    this.router.navigateByUrl("login");
    this.hide=true;
    this.activateService.isLogin=false;
  }
  logout(){
    // TODO
          // User confirmed the unsaved changes
          this.router.navigateByUrl("login");
          console.log("the value of this.can.count",this.can.count());
      

          // effect(()=>{
          //   if(!this.can.count()){
              this.activateService.isLogin=false;
              this.router.navigate(["/login"]);
              sessionStorage.removeItem('login');
              // if(sessionStorage.length==0){
              //   this.router.navigate(["/login"]);
              // }
          //   }
          // }, {injector: this.injector})
            // if(!this.islogout){
              // this.activateService.isLogin=false;
              // // this.router.navigateByUrl("login");
              // sessionStorage.removeItem('login');
           
              
            // }
         
        
  }
}
