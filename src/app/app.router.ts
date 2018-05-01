import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';


const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
