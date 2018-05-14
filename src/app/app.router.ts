import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AdminComponent } from './menu/admin/admin.component';
import { UserComponent } from './menu/user/user.component';


const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent}
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
