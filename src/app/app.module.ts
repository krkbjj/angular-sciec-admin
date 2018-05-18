import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpModule } from '@angular/http';
import { routing} from './app.router';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './menu/admin/admin.component';
import { UserComponent } from './menu/user/user.component';
import { OrgComponent } from './menu/org/org.component';
import { OrgMeusEventosComponent } from './menu/org/org-meus-eventos/org-meus-eventos.component';
import { OrgControleFrequenciaComponent } from './menu/org/org-controle-frequencia/org-controle-frequencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    OrgComponent,
    OrgMeusEventosComponent,
    OrgControleFrequenciaComponent,
  ],
  imports: [
    FormsModule,
    TextMaskModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
