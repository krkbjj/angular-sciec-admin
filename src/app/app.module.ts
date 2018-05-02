import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { routing} from './app.router';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './shared/user/user.component';
import { AdminComponent } from './shared/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
