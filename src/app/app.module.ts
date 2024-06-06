import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { GetAllComponentComponent } from './get-all-component/get-all-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorsService } from './interceptors.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponentComponent,
    GetAllComponentComponent,
    UpdateComponentComponent,
    NotFoundComponent,
    RegisterComponent,
    LoginComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
