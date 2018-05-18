import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import { AdminComponent } from './menu/admin/admin.component';
import { UserComponent } from './menu/user/user.component';
import {OrgMeusEventosComponent} from './menu/org/org-meus-eventos/org-meus-eventos.component';
import {OrgControleFrequenciaComponent} from './menu/org/org-controle-frequencia/org-controle-frequencia.component';
import {OrgComponent} from './menu/org/org.component';
import {ProfileComponent} from './menu/user/profile/profile.component';
import {SubscriptionComponent} from './menu/user/subscription/subscription.component';


const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'user-profile', component: ProfileComponent},
  {path: 'user-subscription', component: SubscriptionComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'org-meus-eventos', component: OrgMeusEventosComponent},
  {path: 'org-controle-frequencia', component: OrgControleFrequenciaComponent},
  {path: 'org', component: OrgComponent},
  {path: '', component: HomeComponent}
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
