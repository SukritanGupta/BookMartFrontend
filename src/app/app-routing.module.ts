import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { GetAllComponentComponent } from './get-all-component/get-all-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:CreateComponentComponent},
  {path:"getAllBooks",component:GetAllComponentComponent},
  {path:"updateBookDetails/:id",component:UpdateComponentComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
