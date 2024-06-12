import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { GetAllComponentComponent } from './get-all-component/get-all-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { ActivateRouteServiceService } from './activate-route-service.service';
import { CanActivateService2Service } from './can-activate-service2.service';
import { CanDeactivateServiceService } from './can-deactivate-service.service';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"main",canActivate: [ActivateRouteServiceService],component:MainComponentComponent},
  {path:"createComponent",canDeactivate:[CanDeactivateServiceService],canActivate: [ActivateRouteServiceService],component:CreateComponentComponent},
  {path:"getAllBooks",canActivate: [ActivateRouteServiceService],component:GetAllComponentComponent},
  {path:"updateBookDetails/:id",canActivate: [ActivateRouteServiceService],component:UpdateComponentComponent},
  {path:"register",canActivate:[CanActivateService2Service], component:RegisterComponent},
  {path:"login",canActivate:[CanActivateService2Service],component:LoginComponent},
  {path:"notFound",component:NotFoundComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
